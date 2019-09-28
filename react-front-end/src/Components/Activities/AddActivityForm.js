import React, { useState, useEffect, Fragment } from 'react';
import AddTaskForm from './AddTaskForm.js';
import AddActivity from './AddActivity.js';
import EditTaskForm from './EditTaskForm.js';
import styled from 'styled-components';
//import './Activity.css';
import TimeLine from './TimeLine.js';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

const StyledAddActivityForm = styled.div`
background: white;
.container {
  text-align: center;
  justify-content: center;
  background: none;
  font-family: 'proxima-nova', sans-serif;
  font-size: 1.6rem;
  height: 100%;
  background: white;
  border-radius: 4px;
}
.subHead h2{
	font-family: 'proxima-nova', sans-serif;
	font-size: 3.5rem;
}
.title {
	font-family: 'Neucha', cursive;
	font-size: 1.7rem;
}
.dropdown {
	margin-top: 55px;
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
  opacity: 0.9;
  height: 50px;
  width: 100%;
}
.flex-large {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-flow: row-reverse;
  background: whitesmoke;
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
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  margin: 5px;
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
  background-color: whitesmoke;
  color: white;
  padding: 16px;
  font-size: 16px;
  height: 85px;
  text-align: center;
  border: none;
  width: 80px;
  align-content: center;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: ;
  position: absolute;
  background-color: whitesmoke;
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
  color: #00bc98;
}
/* Change color of dropdown links on hover */
.dropdown-content:hover {background-color: #ddd;}
/* Show the dropdown menu on hover */
.button:hover .dropdown-content {display: block;}
/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: aquamarine}
`;

/* add function to form */
const AddActivityForm = () => {

	 
		// Initial Data
		const taskData = [{
			userId: 0, 
				  activityName:'', 
				  category:'', 
				  duration:'', 
				  description:'', 
				  createdDate:'', 
				  energyLevel: 0, 
				  engagementLevel: 0,
				  enjoymentLevel: 0
				}]
	
		
		const initialFormState = 
		{
		userId: 0,
		activityName:'', 
		category:'', 
		duration:'', 
		description:'', 
		createdDate:'', 
		energyLevel: 0, 
		engagementLevel: 0,
		enjoymentLevel: 0
		}
	  
	
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
	
		const updateTask = (id, updatedTask) => {
			setEditing(false)
	
			setTask(tasks.map(task => (task.id === id ? updatedTask : task)))
		}
	
		const editTask = task => {
			setEditing(true)
			
			setCurrentTask({ "userId": task.userId, 
				"activityName": task.activityName, 
				"category": task.category, 
				"duration": task.duration, 
				"description": task.description, 
				"created": task.createdDate, 
				"energyLevel": task.energyLevel, 
				"engagementLevel": task.engagementLevel,
				"rating": task.enjoymentLevel 
			}
		)
		}
	
		return (
			<StyledAddActivityForm>
			
			<div className="container">
			<div className="flex-row">
			<div className="dropdown">
			
			
			<div className="dropdown-content">
			{/*<button className="dropbtn">Categories</button>*/}
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
			<TimeLine />
			</div>
		
			<div className="flex-large">
				{editing ? (
						<Fragment>
							<h2>Edit Task</h2>
							<EditTaskForm
								editing={editing}
								setEditing={setEditing}
								currentTask={currentTask}
								updateTask={updateTask}
							/>
						</Fragment>
					) : (
			<Fragment>

			<div className="title">
			<div className="subHead">
			<h2>Add Activity</h2>
			</div>	
			<br />	 
				<AddTaskForm addTask={addTask} />
			</div>
			</Fragment>
				)}
			</div>
			

			<div className="flex-large">
		
			<AddActivity tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
		</div>
		</div>
		</div>

		</StyledAddActivityForm>
		)
	}
	
	export default AddActivityForm;