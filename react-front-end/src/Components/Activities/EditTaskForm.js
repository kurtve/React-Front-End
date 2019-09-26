import React, { useState, useEffect } from 'react'

const EditTaskForm = props => {
  const [ task, setTask ] = useState(props.currentTask)

  useEffect(
    () => {
      setTask(props.currentTask)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setTask({ ...task, [name]: value })
  }

  return (
    <div className="EditTaskForm">
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTask(task.id, task)
      }}
    >

      <label>Activity: </label>
      <input type="text" name="userId" placeholder="user" value={task.userId} onChange={handleInputChange} />
      <br />
      <input type="text" name="activity" placeholder="activity" value={task.ActivityName} onChange={handleInputChange} />
      <br />
      <input type="text" name="category" placeholder="Category" value={task.category} onChange={handleInputChange} />
      <br />
      <input type="number" name="duration" placeholder="time (minutes)" value={task.duration} onChange={handleInputChange} />
      <br />
      <input type="text" name="description" value={task.description} placeholder="Add Description..." onChange={handleInputChange} /> 
      <br />
      <input type="text" name="createdDate" placeholder="createdDate" value={task.createdDate} onChange={handleInputChange} />
      <br />
      <input type="text" name="energyLevel" placeholder="energy-level" value={task.energyLevel} onChange={handleInputChange} />
      <br />
      <input type="text" name="enjoymentLevel" placeholder="rating" value={task.enjoymentLevel} onChange={handleInputChange} />
      <br />
      <button>Add Task</button>
      <button>Update</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
    </div>
  )
}

export default EditTaskForm;