import React, { useState } from 'react'
import styled from 'styled-components'

export default function ReflectionForm(props) {

  const StyledForm = styled.form `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    & input, & textarea {
      margin-bottom: 6%;
      font-family: inherit;
      border: none;
      border-bottom: 1px solid #00a0ba;
      color: black;
      background: white;
    }
    & button {
      background: #ec8b76;
      font-family: inherit;
      font-size: 2rem;
      font-weight: 500;
      letter-spacing: .15rem;
      width: 50%;
      margin: auto;
      border-radius: 10px;
      padding: 2% 4%;
      color: white;
      text-transform: uppercase;
    }
  `
  
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
      <StyledForm onSubmit={handleSubmit}>
        <textarea
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
      </StyledForm>
    </>
  )
}
