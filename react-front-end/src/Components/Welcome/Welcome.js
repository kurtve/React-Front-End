import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as helpers from '../../Functions/helperFunctions';


const StyledWelcome = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin-top: 100px;
	h1 {
		font-size: 4rem;
		margin: 20px;
	}
	h3 {
		font-size: 2.4rem;
		margin: 10px;
	}
	.navlinks {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px;
	}
	.navlinks a {
		font-size: 2.2rem;
		text-decoration: none;
		margin: 10px;
		height: 35px;
		width: 220px;
		background-color: #00bc98;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		i {
			font-size: 1.6rem;
			margin-right: 20px;
		}
	}
`;


export default function Welcome(props) {

  return (
    <StyledWelcome>
      <h1>Design Your Life</h1>

      <div className='navlinks'>
      	<Link to='/'><i className="fas fa-home"></i>Home</Link>
      	<Link to='/activities'><i className="fas fa-walking"></i>Activities</Link>
      	<Link to='/addactivity'><i className="fas fa-plus"></i>New Activity</Link>
      	<Link to='/insights'><i className="fas fa-lightbulb"></i>Insights</Link>
      </div>
    </StyledWelcome>
  )
}