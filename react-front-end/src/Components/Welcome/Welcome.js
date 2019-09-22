import React from 'react'
import styled from 'styled-components';


const StyledWelcome = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin-top: 100px;

	h1 {
		font-size: 6rem;
		margin: 20px;
	}

	h3 {
		font-size: 3rem;
		margin: 20px;
	}

`;


export default function Welcome() {
  return (
    <StyledWelcome>
      <h1>Design Your Life</h1>
      <h3>The App to help you find your best future</h3>
    </StyledWelcome>
  )
}
