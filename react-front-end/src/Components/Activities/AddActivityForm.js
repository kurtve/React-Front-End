import React, { useState } from 'react'

export default function AddActivityForm(props) {

  const initialState = [{
    name: '',
    category: '',
    rating: '',
    time: '',
    notes: '',
    date: ''
  }]

  const [input, setInput] = useState(initialState)
  
  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    props.addActivity(input)
    setInput(initialState)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          name="name"
          placeholder="Activity"
          onChange={handleChange}
        />

        <select 
          name="category"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>Choose a category</option>
          <option value="exercise">Exercise</option>
          <option value="introspection">Introspection</option>
          <option value="creative">Creative</option>
          <option value="chores">Chores</option>
          <option value="professional">Professional Development</option>
          <option value="diet">Diet</option>
          <option value="education">Education</option>
          <option value="dirty">Dirty Work</option>
        </select>

        <select 
          name="rating"
          onChange={handleChange}
          defaultValue=""
        >
          <option value="" disabled>Rate your experience</option>
          <option value="1">&#11088;</option>
          <option value="2">&#11088;&#11088;</option>
          <option value="3">&#11088;&#11088;&#11088;</option>
          <option value="4">&#11088;&#11088;&#11088;&#11088;</option>
          <option value="5">&#11088;&#11088;&#11088;&#11088;&#11088;</option>
        </select>

        <input 
          type="number"
          name="time"
          placeholder="Duration (in minutes)"
          onChange={handleChange}
        />

        <textarea 
          type="text"
          name="notes"
          placeholder="Notes"
          onChange={handleChange}
        />

        <input 
          type="date" 
          name="date"
          onChange={handleChange}
        />

        <button type="submit">Add Activity</button>

      </form>

      {props.activities.map((entry, index) => {
        return(
          <div key={index} style={{border: '1px solid green', margin: '20px'}}>
            <p>{entry.name}</p>
            <p>{entry.category}</p>
            <p>Rating: {entry.rating}</p>
            <p>Duration: {(entry.time / 60).toFixed(2)} hrs</p>
            <p>Notes: {entry.notes}</p>
            <p>Entry date: {entry.date}</p>
          </div>
        )
      })}
    </>
  )
}
