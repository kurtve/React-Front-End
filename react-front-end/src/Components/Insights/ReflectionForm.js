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
    console.log(reflection)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addInsight(reflection)
    console.log(props.insights)
    setReflection(initialValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
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
