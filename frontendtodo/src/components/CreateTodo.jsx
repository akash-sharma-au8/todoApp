import React from 'react'

const CreateTodo = ({handleFormSubmit, setTodoTitle, setTodoDesc, todoTitle, todoDesc}) => {

    const handleTitleInput = (e) => {
        setTodoTitle(e.target.value)
    }

    const handleDescInput = (e) => {
        setTodoDesc(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type = 'text' value = {todoTitle} onChange={(e) => handleTitleInput(e)} />
            <input type = 'text' value = {todoDesc} onChange={(e) => handleDescInput(e)} />
            <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default CreateTodo