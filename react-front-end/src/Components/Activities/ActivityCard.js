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

	.notes {
		font-size: 1.6rem;
	}
	
	.timestamps {
		font-size: 1.0rem;
		font-style: italic;
	}

`;


export default function ActivityCard(props) {
	return (
    	<StyledActivityCard>
    		<div className='name'>{props.activity.name}</div>
    		<div className='category'>Category: {props.activity.category}</div>
    		<div className='rating'>Rating: {props.activity.rating}</div>
    		<div className='notes'>{props.activity.notes}</div>
    		<div className='timestamps'>Created: {props.activity.created.substring(0, 16)}
    			{props.activity.updated && `Updated: ${props.activity.updated.substring(0, 16)}`}</div>
		</StyledActivityCard>
	);
}
