import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const StyledAddEditForm = styled.div`
.container {
  text-align: center;
  justify-content: center;
  padding: 25px;
  background: none;
  font-family: 'proxima-nova', sans-serif;
  font-size: 1.6rem;
  margin-top: 25px;
  height: 100%;
}
.subHead h2{
	font-family: 'proxima-nova', sans-serif;
	font-size: 3.5rem;
}
form {
	font-family: 'Neucha', cursive;
	font-size: 2.1rem;
}
.dropdown {
	margin-top: 35px;
	align-content: center;
}
.dropdown-content {
	align-content: center;
	border-radius: 4px;
	font-family: 'Neucha', cursive;
}
h1 {
  font-weight: 800;
  font-size: 2.8rem;
  text-shadow: 1px 1px #aaa;
}
h2  {
font-weight: 700;
font-size: 2.4rem;
}
p {
  font-weight: 700;
  font-size: 1.5rem;
  padding: 16px;
}
.flex-row {
  text-align: center;
  justify-content: center;
  padding: 25px;
  background: #00bc98;
  border-radius: 8px;
}
.flex-large {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-flow: column-reverse;
  background: antiquewhite;
  border-radius: 8px;
  margin: 25px;
  padding: 25px;
}
button {
  width: 95px;
  height: 85px;
  border-radius: 8px;
  padding: 25px;
  text-align: center;
  font-size: 1.6rem;
  background: black;
  color: aqua;
  font-weight: 700;
}
input {
  border-radius: 4px; 
  padding: 10px;
  margin: 15px;
  font-size: 1rem;
}
.textarea {
  border-radius: 8px;
  width: 120px;
  height: 80px;
  border: 1px solid lightgrey;
  margin: 8px;
}
.AddTask {
	text-align: center;
	justify-content: center;
}
.dropbtn {
  background-color: black;
  color: white;
  padding: 16px;
  font-size: 16px;
  height: 85px;
  text-align: center;
  border: none;
  width: 110px;
  text-align: center;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color:  #fb8570;;
}
/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: aquamarine}
`;

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
    <StyledAddEditForm>
    <div className="EditTaskForm">
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateTask(task.id, task)
      }}
    >

    <h1>Design Your Life </h1>
    <br />
    <label>Update: </label>
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
      <button>Update</button>
      <button onClick={() => props.setEditing(false)} className="button">
        Cancel
      </button>
    </form>
    </div>
    </StyledAddEditForm>
  )
}

export default EditTaskForm;