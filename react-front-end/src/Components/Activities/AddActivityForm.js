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
    props.history.push('/activities');
  }


  // if user is not logged in, return to top
  if (!props.status.loggedIn) {
    props.history.push('/');
  }

  return (
    <div className="formContainer">
      <h1>Add an activity</h1>
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

    </div>
  )
}