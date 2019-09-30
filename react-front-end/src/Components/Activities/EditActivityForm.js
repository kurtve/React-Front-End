import React, { useState } from 'react'

export default function EditActivityForm(props) {

  // get the id value from the path
  const id = Number.parseInt(props.match.params.id);

  // find the activity in the activities array
  const index = props.activities.findIndex(item => item.id === id);
  if (index < 0) {
    // something went wrong. return to activities feed.
    props.history.push('/activities');
  }

  // get the activity
  const activity = props.activities[index];

  // confirmed! edit the activity and return to activities feed
  const editActivity = (id) => {
    props.editActivity(id);
    props.history.push('/activities');
  };

  // user changed their mind. return to activities feed
  const cancel = () => {
    props.history.push('/activities');
  };

  // state to hold input value, initial value is the activity
  const [input, setInput] = useState(activity)

  // store input value to state
  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  

  const handleSubmit = e => {
    e.preventDefault()
    editActivity(input)
  }

  return (
    <div className="formContainer editForm">

      <h1>Edit activity</h1>
      
      <form onSubmit={handleSubmit} style={{marginTop: '100px'}}>

        <input 
          type="text" 
          name="name"
          placeholder="Activity"
          defaultValue={activity.name}
          onChange={handleChange}
        />

        <select 
          name="category"
          onChange={handleChange}
          defaultValue={activity.category}
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
          defaultValue={activity.rating}
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
          defaultValue={activity.time}
          onChange={handleChange}
        />

        <textarea 
          type="text"
          name="notes"
          placeholder="Notes"
          defaultValue={activity.notes}
          onChange={handleChange}
        />

        <input 
          type="date" 
          name="date"
          defaultValue={activity.date}
          onChange={handleChange}
        />

        <div className="footer">
          <button onClick={cancel} className="delete">Cancel</button>
          <button type="submit" className="edit confirmButton">Edit</button>
        </div>

      </form>
    </div>
  )
}