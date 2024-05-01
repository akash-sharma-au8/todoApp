import React, { useState, useEffect } from 'react'


const TodoList = ({ todos, updateTodo, deleteTodo}) => {
  return (
    <div>
      {todos?.length > 0 && todos.map((todo) => {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button type='submit' onClick={() => updateTodo(todo._id)}>{`Marks as ${todo.isCompleted ? "InComplete": "Complete"}`}</button>
            <button type='submit' onClick={() => deleteTodo(todo._id)}>Delete</button>
          </div>
        )
      })
      }
    </div>
  )
}

export default TodoList;