import React, { useState } from 'react'

export default function ReflectionForm(props) {
  
  const initialValue = [{
    reflection: '',
    weekOf: ''
  }]

  const [ reflection, setReflection ] = useState(initialValue)

  const handleChange = e => {
    setReflection({
      ...reflection,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addInsight(reflection)
    setReflection(initialValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="reflection"
          placeholder="Reflect on your week."
          onChange={handleChange}
        />
        <input
          type="date"
          name="weekOf"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
