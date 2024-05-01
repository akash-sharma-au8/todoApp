import React, { useState, useEffect } from 'react'


const TodoList = ({ todos }) => {
  return (
    <div>
      {todos?.length > 0 && todos.map((todo) => {
        return (
          <>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button type='submit'>{`Marks as ${todo.isCompleted ? "Complete": "Incomplete"}`}</button>
          </>
        )
      })
      }
    </div>
  )
}

export default TodoList;