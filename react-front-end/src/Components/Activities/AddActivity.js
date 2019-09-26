import React from 'react';
import styled from 'styled-components';

const StyledAddActivity = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	width: 80%;
	max-width: 400px;
	margin: 10px;
	border: 3px solid #00bc98;
	border-radius: 20px;
	padding: 10px;
	margin-top: 40px;
	.AddCard {
		text-align: center;
		justify-content: center;
	}
	h1 {
		font-size: 3rem;
		margin: 20px;
	}
	h4 {
		font-size: 1.6rem;
		margin: 16px; 
	}
	div {
		margin: 5px;
	}
	button {
		font-size: 1.8rem;
		color: white;
		border-radius: 10px;
		border: none;
		width: 90px;
		height: 35px;
		&:hover {
			cursor: pointer;
		}
	}
	button.cancel {
		background-color: #00bc98;
	}
	button.delete {
		background-color: #fb8570;
	}
	.footer {
		display: flex;
		flex-direction: row;
		justify-content:  space-between;
		align-items: center;
		padding: 30px 10px 10px;
		width: 90%;
	}
	.name {
		font-size: 2rem;
		font-weight: bold;
	}
	.category {
		font-size 1.8rem;
	}
	.rating {
		font-size 1.6rem;
	}
	.time {
		font-size: 1.6rem;
	}
	
	.notes {
		font-size: 1.6rem;
	}
	
	.timestamps {
		font-size: 1.0rem;
		font-style: italic;
	}
`;



const AddActivity = props => (

    <StyledAddActivity>
    {props.tasks.length > 0 ? (
        props.tasks.map(task => (
        <div className="AddCard" key={task.userId}>
        <h1>Activity:</h1>
		<div className='AddActivities'>
		<p>User: {task.userId} </p> 
		<h2>Activity: {task.activityName} </h2>
		<h4>Category: {task.category} </h4>
		<h4>Duration: {task.duration} </h4>
		<p>Description: {task.description} </p>
		<p>Created: {task.createdDate} </p>
		<p>Energy Level: {task.energyLevel} </p>
		<p>Rating: {task.enjoymentLevel} </p>
		</div>
		<div className='footer'>
		<button
		onClick={() => {
		  props.editTask(task)
		}}
		className="button"
	  	>
		Update
		</button>
        <button
        onClick={() => props.deleteTask(task.id)}
        className="button"
        >
        Delete
	  </button>
	  </div>
        </div>
        ))
        ) : (
          <div>
            <div><p>No Data</p></div>
          </div>
        )}
    </StyledAddActivity>
);

export default AddActivity;