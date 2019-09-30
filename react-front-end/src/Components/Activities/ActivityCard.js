import React from 'react';
import styled from 'styled-components';
// import { useSpring, animated } from 'react-spring'

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
	background: #eeeeeedd;
	transition: all .3s ease;
	&:hover {
		transform: scale(1.05);
	}

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

	.date {
		font-size 1.6rem;
	}

	.notes {
		font-size: 1.6rem;
	}

`;


export default function ActivityCard({activity}) {

	const deleteActivity = (id) => {
		props.history.push(`/deleteactivity/${id}`);
	};

	const editActivity = (id) => {
		props.history.push(`/editactivity/${id}`);
	};

	// const props = useSpring({
	// 	to: {
	// 		opacity: 1,
	// 		transform: 'translateY(0)'
	// 	},
	// 	from: {
	// 		opacity: 0,
	// 		transform: 'translateY(50px)'
	// 	}
	// })


	const timeInHours = Math.round(activity.time / 6) / 10;

	return (
		// <animated.div style={props}>
    	<StyledActivityCard>
	    	<div className='name'>{activity.name}</div>
    		<div className='category'>Category: {activity.category}</div>
    		<div className='rating'>Rating: {activity.rating} stars</div>
    		<div className='time'>Duration: {timeInHours} hours</div>
      		<div className='notes'>{activity.notes}</div>
	  		<div className='date'>Date: {activity.date}</div>
 
    		<div className='footer'>
    			<button onClick={() => editActivity(activity.id)}
    			 className='edit'>Edit</button>
	    		<button onClick={() => deleteActivity(activity.id)}
	    		 className='delete'>Delete</button>
    		</div>
			</StyledActivityCard>
		// </animated.div>
	);
}
