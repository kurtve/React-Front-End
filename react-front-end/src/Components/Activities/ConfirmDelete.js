import React from 'react';
import styled from 'styled-components';


const StyledConfirmDelete = styled.div `
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
	background: #eeeeeedd;

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


export default function ConfirmDelete(props) {

	// get the id value from the path
	const id = Number.parseInt(props.match.params.id);

	// find the activity in the activities array
	const index = props.activities.findIndex(item => item.id === id);
	if (index < 0) {
		// something went wrong. return to activities feed.
		props.history.push('/activities');
	}

	// get the activity
	const activity = props.activities[index];

	// confirmed! delete the activity and return to activities feed
	const deleteActivity = (id) => {
		props.deleteActivity(id);
		props.history.push('/activities');
	};

	// user changed their mind. return to activities feed
	const cancel = () => {
		props.history.push('/activities');
	};

	return (
    	<StyledConfirmDelete>
    		<h1>Delete this activity?</h1>

	    	<div className='name'>{activity.name}</div>
    		<div className='category'>Category: {activity.category}</div>
    		<div className='rating'>Rating: {activity.rating}</div>
    		<div className='time'>Duration: {activity.time} minutes</div>
    		<div className='notes'>{activity.notes}</div>
    		<div className='timestamps'>Created: {activity.created.substring(0, 16)}
    			{activity.updated && `Updated: ${activity.updated.substring(0, 16)}`}</div>

    		<div className='footer'>
    			<button onClick={cancel}
    			 className='cancel'>Cancel</button>
	    		<button onClick={() => deleteActivity(activity.id)}
	    		 className='delete'>Delete</button>
    		</div>
		</StyledConfirmDelete>
	);

}
