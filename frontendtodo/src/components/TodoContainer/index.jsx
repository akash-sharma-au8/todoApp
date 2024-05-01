import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList';
import CreateTodo from '../CreateTodo';

const TodoContainer = () => {

  const [todoTitle, setTodoTitle] = useState('')
  const [todoDesc, setTodoDesc] = useState('');
  const [todos, setTodos] = useState([])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo();
  }

  const addTodo = async () => {
    try {
      const response = await fetch("https:localhost:3000/todo", {
        method: 'POST',
        body: JSON.stringify({
          "title": todoTitle,
          "description": todoDesc
        })
      })

      const data = response.json()
      console.log(data)
      getTodo()
    }
    catch (e) {
      console.log("Getting error")
    }
  }

 
  const getTodo = async () => {
    try {
      const response = await fetch("https:localhost:3000/todos", {
        method: 'GET'
      })

      const data = response.json()
      console.log(data)
    }

    catch (e) {

    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      <CreateTodo setTodoTitle={setTodoTitle}  todoTitle = {todoTitle} todoDesc={todoDesc} setTodoDesc={setTodoDesc} handleFormSubmit={handleFormSubmit} />
      {
        todoDesc.length > 0 && (
          <TodoList todos={todos} />
        )
      }
      <TodoList />
    </div>
  )
}

export default TodoContainer;