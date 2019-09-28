import React from 'react';
import styled from 'styled-components';


const StyledActivityCard = styled.div `
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

	h1 {
		font-size: 3rem;
		margin: 20px;
	}

	div {
		margin: 5px;
	}

	button {
		font-size: 1.4rem;
		color: white;
		border-radius: 10px;
		border: none;
		width: 70px;
		height: 25px;

		&:hover {
			cursor: pointer;
		}
	}

	button.edit {
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
		padding: 5px;
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
		font-size 1.6rem;
	}

	.notes {
		font-size: 1.6rem;
	}
	
	.timestamps {
		font-size: 1.0rem;
		font-style: italic;
	}

`;


export default function ActivityCard(props) {

	const deleteActivity = (id) => {
		props.history.push(`/deleteactivity/${id}`);
	};

	const editActivity = (id) => {
		props.history.push(`/editactivity/${id}`);
	};

	return (
    	<StyledActivityCard>
	    	<div className='name'>{props.activity.name}</div>
    		<div className='category'>Category: {props.activity.category}</div>
    		<div className='rating'>Rating: {props.activity.rating}</div>
    		<div className='time'>Duration: {props.activity.time} minutes</div>
    		<div className='notes'>{props.activity.notes}</div>
    		<div className='timestamps'>Created: {props.activity.created.substring(0, 16)}
    			{props.activity.updated && `Updated: ${props.activity.updated.substring(0, 16)}`}</div>
    		<div className='footer'>
    			<button onClick={() => editActivity(props.activity.id)}
    			 className='edit'>Edit</button>
	    		<button onClick={() => deleteActivity(props.activity.id)}
	    		 className='delete'>Delete</button>
    		</div>
		</StyledActivityCard>
	);
}
