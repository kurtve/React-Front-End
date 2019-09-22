import React from 'react';
import styled from 'styled-components';


const StyledActivitiesFeed = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin-top: 60px;
`;




export default function ActivitesFeed(props) {
  return (
    <StyledActivitiesFeed>
      <h1>ActivitiesFeed</h1>
    </StyledActivitiesFeed>
  )
}
