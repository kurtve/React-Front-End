import React, { useState, useEffect, Fragment } from 'react';
import AddTaskForm from './AddTaskForm.js';
import AddActivity from './AddActivity.js';
import Image from './UI-DesignLife.png';
import styled from 'styled-components';
import './AddTask.css';

const AddActivityForm = () => {

	
		// Initial Data
		const taskData = [
			{ id: 1, category: 'Fitness', name: 'Example Activity', rating:'4', time:'', notes:'Cut Carbs'  }
		]
	
		const initialFormState = { id: null, category: '', name: '', rating:'', time:'', notes:'' }
	
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
	
			setCurrentTask({ id: task.id, category: task.category, name: task.name, time: task.time, rating: task.rating, notes: task.notes })
		}
	
		return (
			<div className="container">
	
				<div className="flex-row">
					<div className="flex-large">
				<Fragment>
				<div className="title">
					<h2>Add Activity</h2>
				  <AddTaskForm addTask={addTask} />
				</div>
				</Fragment>
			</div>
			<div class="dropdown">
			<button class="dropbtn">Category</button>
			<div class="dropdown-content">
				<a href="#">Creative</a>
				<i class='fas fa-grin-hearts'></i>
				<a href="#">Meditation</a>
				<a href="#">Fitness</a>
				<a href="#">Professional</a>
				<a href="#">Development</a>
				<a href="#">Diet</a>
				<a href="#">Dirty Work</a>
				<a href="#">Career Nav</a>
			</div>
			</div>
				<div className="flex-large">
					<AddActivity tasks={tasks} deleteTask={deleteTask} />
				</div>
				</div>
			</div>
		)
	}
	
	export default AddActivityForm;