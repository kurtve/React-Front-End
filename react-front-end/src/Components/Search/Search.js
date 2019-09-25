import React, { useState } from 'react'

export default function Search(props) {
  // console.log('Search component', props)

  // this will connect to our data at the top and therefore change the shown data based on the search input. Since the data is stored at the top, it will change the display on every page, no matter where the search is done.

  // Set local state to hold user input
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value)
    console.log('// e.target.value ==>', e.target.value)
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
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
