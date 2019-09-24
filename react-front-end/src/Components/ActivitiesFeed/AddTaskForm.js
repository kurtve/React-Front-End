import React, { useState } from 'react';


const AddTaskForm = props => {
    const initialFormState = { id: null, name:'', category: '', rating: '', time: '', notes: '' }
    const [ task, setTask ] = useState(initialFormState)
  
    const handleInputChange = event => {
      const { name, value } = event.target
  
      setTask({ ...task, [name]: value })
    }
  
    return (
      <div className="AddTaskForm">
      <form
        onSubmit={event => {
          event.preventDefault()
          if (!task.category || !task.name) return
  
          props.addTask(task)
          setTask(initialFormState)
        }}
        >
        <label>Activities</label>
        <br />
        <label>Name & Category </label>
        <br />
        <input type="textarea" name="name" placeholder="name" value={task.name} onChange={handleInputChange} />
        <br />
        <input type="textarea" name="category" placeholder="category" value={task.category} onChange={handleInputChange} />
        <br />
        <input type="textarea" name="time" placeholder="time (minutes)" value={task.time} onChange={handleInputChange} />
        <br />
        <input type="text" name="notes" className="textarea" value={task.notes} placeholder="Add Comments to Activity..." /> 
        <br />
        <label>Rating: </label>
        <br />
        <input type="number" placeholder="1" name="rating" value={task.rating} onChange={handleInputChange} />
        <br />
        <br />
        <button>Add Task</button>
        </form>
        </div>
    )
  }
  
  export default AddTaskForm;