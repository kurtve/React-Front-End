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
	margin-top: 140px;
	h1 {
		font-size: 3rem;
		margin: 20px;
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
		font-size 2rem;
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
        <div class="AddCard" key={task.id}>
        <h1>Activity:</h1>

        <div className='name'>{task.name}</div>
        <div className='category'>Category: {task.category}</div>
        <div className='rating'>Rating: {task.rating}</div>
        <div className='time'>Duration: {task.time} minutes</div>
        <div className='notes'>Notes: {task.notes}</div>
        <div className='footer'></div>
        <button
        onClick={() => props.deleteTask(task.id)}
        className="button muted-button"
        >
        Delete
      </button>
        </div>
        ))
        ) : (
          <tr>
            <td colSpan={4}>No Data</td>
          </tr>
        )}
    </StyledAddActivity>
);

export default AddActivity;