import React, { useState } from 'react'

export default function Search(props) {

  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.setSearch(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="search"
        placeholder="Search..."
        value={inputValue}
        key={props.search}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}