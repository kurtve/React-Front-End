import React, { useState, useEffect, Fragment } from 'react';
import AddTaskForm from './AddTaskForm.js';
import AddActivity from './AddActivity.js';
import styled from 'styled-components';
import ActivityCard from './ActivityCard';


const StyledAddActivityForm = styled.div`
.container {
  text-align: center;
  justify-content: center;
  padding: 25px;
  background: none;
  font-family: 'proxima-nova', sans-serif;
  font-size: 1.6rem;
}

.dropdown {
	margin-top: 35px;
	align-content: center;
}


.dropdown-content {
	align-content: center;
	border-radius: 4px;
}

h1 {
  font-weight: 400;
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


.img-main {
  width: 450px;
  height: 400px;
  border-radius: 4px;
  box-shadow: 2px 2px #aaa;
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

/* add function to form */
const AddActivityForm = () => {

	 
		// Initial Data
		const taskData = [{
				"userId": undefined, 
				"activityName":'', 
				"category":'', 
				"duration":'', 
				"description":'', 
				"createdDate":'', 
				"energyLevel":'', 
				"enjoymentLevel":''
			}]
		
	
		
		const initialFormState = 
		{"userId": undefined, 
		"activityName":'', 
		"category":'', 
		"duration":'', 
		"description":'', 
		"createdDate":'', 
		"energyLevel":'', 
		"enjoymentLevel":''}
	
		// Setting State
		const [ tasks, setTask ] = useState(taskData)
		const [ currentTask, setCurrentTask ] = useState(initialFormState)
		const [ editing, setEditing ] = useState(false)
	
		// CRUD ops
		const addTask = task => {
			task.id = tasks.length + 1
			setTask([ ...tasks, task ])
		}
	
		const deleteTask = id => {
			setEditing(false)
			setTask(tasks.filter(task => task.id !== id))
		}
/* ops not neccesary right now	
		const updateTask = (id, updatedTask) => {
			setEditing(false)
	
			setTask(tasks.map(task => (task.id === id ? updatedTask : task)))
		}
	
		const editTask = task => {
			setEditing(true)
		}
*/
		return (
			<StyledAddActivityForm>
				<div className="flex-row">
				<div className="container">
				<div className="dropdown">
				<button className="dropbtn">Category Suggest</button>
				<div className="dropdown-content">
					<a href="#">Creative</a>
					<i className='fas fa-grin-hearts'></i>
					<a href="#">Meditation</a>
					<i class="fas fa-couch"></i>
					<a href="#">Fitness</a>
					<i class="fas fa-running"></i>
					<a href="#">Professional</a>
					<i class="fas fa-user-tie"></i>
					<a href="#">Development</a>
					<i class="fas fa-dumbbell"></i>
					<a href="#">Diet</a>
					<i class="fas fa-pepper-hot"></i>
					<a href="#">Dirty Work</a>
					<i class="fas fa-meh-rolling-eyes"></i>
					<a href="#">Career Nav</a>
					<i class="fas fa-dollar-sign"></i>
				</div>
				</div>
					<div className="flex-large">
				<Fragment>
				<div className="title">
					<h2>Add Activity</h2>
				  <AddTaskForm addTask={addTask} />
				</div>
				</Fragment>
			</div>
			<br />
			<div><p>See Logged Tasks Below:</p></div>
				<div className="flex-large">
					<AddActivity tasks={tasks} deleteTask={deleteTask} />
				</div>
			</div> 
			</div>
		</StyledAddActivityForm>
		)
	}
	
	export default AddActivityForm;