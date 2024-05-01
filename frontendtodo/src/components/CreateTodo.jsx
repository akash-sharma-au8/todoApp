import React from 'react'

const CreateTodo = (props) => {

    const {handleFormSubmit, setTodoTitle, setTodoDesc, todoTitle, todoDesc} = props

    const handleTitleInput = (e) => {
        setTodoTitle(e.target.value)
    }

    const handleDescInput = (e) => {
        setTodoDesc(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type = 'text' value = {todoTitle} placeholder='Title' onChange={(e) => handleTitleInput(e)} />
            <input type = 'text' value = {todoDesc} placeholder='Description' onChange={(e) => handleDescInput(e)} />
            <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default CreateTodo