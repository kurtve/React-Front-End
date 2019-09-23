import React, { useState } from 'react'

export default function ReflectionForm(props) {
  
  const initialValue = [{
    id: null,
    text: '',
    date: ''
  }]

  const [ reflection, setReflection ] = useState(initialValue)

  const handleChange = e => {
    setReflection({
      ...reflection,
      [e.target.name]: e.target.value
    })
    // console.log(reflection)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addInsight([
      ...props.insights,
      reflection
    ])
    console.log(reflection)
    setReflection(initialValue)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
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
