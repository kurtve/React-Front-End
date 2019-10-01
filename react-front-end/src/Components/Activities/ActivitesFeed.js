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
		color: white;
	}
`;


export default function ActivitesFeed(props) {

	const match = (search, item) => {
		const lc_search = search.toLowerCase();
		const name = item.name.toLowerCase();
		const notes = item.notes.toLowerCase();
		const result = name.includes(lc_search) || notes.includes(lc_search);
		return result;
	}

	if (!props.status.loggedIn) {
		props.history.push('/');
	}

	return (
		<StyledActivitiesFeed>
			<h1>Activities</h1>

    		{props.activities.filter(item => match(props.search, item)).map(act => {
    			return (
    				<ActivityCard key={act.id} activity={act} {...props} />
    			);
    		})}

		</StyledActivitiesFeed>
	);
}
