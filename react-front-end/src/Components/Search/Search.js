import React, { useState } from 'react'

export default function Search(props) {

  // Set local state to hold user input
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.searchFilter(input)
    setInput(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="search"
          placeholder="Search..."
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
