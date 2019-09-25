import React from 'react';
import styled from 'styled-components';

import ActivityCard from './ActivityCard';


const StyledActivitiesFeed = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin: 100px 0;
	width: 90%;
	h1 {
		font-size: 3rem;
		margin: 20px;
	}
`;


export default function ActivitesFeed(props) {

	return (
    	<StyledActivitiesFeed>
    		<h1>Activities</h1>

    		{props.activites.map(act => {
    			return (
    				<ActivityCard key={act.id} activity={act} {...props} />
    			);
    		})}

		</StyledActivitiesFeed>
	);
}