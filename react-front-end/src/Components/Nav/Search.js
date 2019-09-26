import React, { useState } from 'react'

export default function Search(props) {
  console.log(props)

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

// form is unfocusing after one character input. this means that react is updating the component after every character.
// need to figure out why that is. i think once that is handled, the rest should be pretty straightforward

// the solution is to hold the input value in local state and only send it to the parent function onSubmit

