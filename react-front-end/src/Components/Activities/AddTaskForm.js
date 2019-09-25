import React, { useState } from 'react';
import axios from 'axios'; 

const AddTaskForm = props => {
   
  
  const initialFormState = {
      "userId": undefined, 
      "activityName":'', 
      "category":'', 
      "duration":'', 
      "description":'', 
      "createdDate":'', 
      "energyLevel":'', 
      "enjoymentLevel":''
    }

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
          if (!task.userId || !task.activity) return
  
          props.addTask(task);
          JSON.stringify(task);
          axios.post('https://design-your-life-backend.herokuapp.com/api/activity',task,{ headers: { Authorization:localStorage.getItem('jwtToken') } }) 
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
          setTask(initialFormState);
          console.log(task); 
        }
      }
      >
        <label>Activities</label>
        <br />

        <br />
        <label>User Id: </label>
        <input type="text" name="userId" placeholder="user" value={task.userId} onChange={handleInputChange} />
        <br />
        <label>Activity</label>
        <input type="text" name="activity" placeholder="activity" value={task.ActivityName} onChange={handleInputChange} />
        <br />
        <label>Category </label>
        <input type="text" name="category" placeholder="Category" value={task.category} onChange={handleInputChange} />
        <br />
        <label>Duration </label>
        <input type="number" name="duration" placeholder="time (minutes)" value={task.duration} onChange={handleInputChange} />
        <br />
        <label>Description</label>
        <input type="text" name="description" className="textarea" placeholder="Add Description..." value={task.description} onChange={handleInputChange} /> 
        <br />
        <label>Created </label>
        <input type="datetime-local" name="createdDate" placeholder="createdDate" value={task.createdDate} onChange={handleInputChange} />
        <br />
        <label>Energy </label>
        <input type="range" name="energyLevel" placeholder="energy-level" value={task.energyLevel} onChange={handleInputChange} />
        <br />
        <label>Enjoyment</label>
        <input type="range" name="enjoymentLevel" placeholder="rating" value={task.enjoymentLevel} onChange={handleInputChange} />
        <br />
        <button>Add Task</button>
        </form>
        </div>
    )
  }
  
  export default AddTaskForm;