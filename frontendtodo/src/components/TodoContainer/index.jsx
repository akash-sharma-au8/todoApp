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
    setTodoTitle("")
    setTodoDesc("")
  }

  const addTodo = async () => {
    try {
      const response = await fetch("http://localhost:3001/todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "title": todoTitle,
          "description": todoDesc
        })
      })
      const data = await response.json() 
      if(response.status === 200){
        alert(data.msg)
      }else{
        alert(data.error)
      }
      getTodo()
    }
    catch (e) {
      console.log("Getting error")
    }
  }


  const getTodo = async () => {
    try {
      const response = await fetch("http://localhost:3001/todos", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json();
      setTodos(data.ToDos)
    }

    catch (e) {
      console.log("Error fetching todos")
    }
  }

  const updateTodo =  async (id) => {
    const todo = todos.find((todo) => todo._id === id)
    try {
      const response = await fetch(`http://localhost:3001/completed/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "isCompleted": todo.isCompleted ? false : true,
        })
      })

      const data = await response.json()
      getTodo()
    }
    catch (e) {
      console.log(e.error)
    }
  }
  const deleteTodo =  async (id) => {
    const newTodos = todos.filter((todo) => todo._id != id)
    setTodos(newTodos)
    
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      <CreateTodo setTodoTitle={setTodoTitle} todoTitle={todoTitle} todoDesc={todoDesc} setTodoDesc={setTodoDesc} handleFormSubmit={handleFormSubmit} updateTodo={updateTodo} />
      {
        todos.length > 0 && (
          <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
        )
      }
    </div>
  )
}

export default TodoContainer;