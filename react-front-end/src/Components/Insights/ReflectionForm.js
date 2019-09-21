import React, { useState } from 'react'

export default function ReflectionForm(props) {
  
  const initialValue = [{
    reflection: '',
    date: ''
  }]

  const [ reflections, setReflections ] = useState(initialValue )

  const handleChange = e => {
    setReflections({
      ...reflections,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.setReflectionsList([
      ...props.reflectionsList,
      reflections
    ])
    console.log(reflections)
    resetForm(e)
  }

  const resetForm = e => {
    e.preventDefault()
    setReflections(initialValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          name="reflection"
          placeholder="Reflect on your week."
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}