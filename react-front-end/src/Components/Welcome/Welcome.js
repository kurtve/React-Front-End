import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledWelcome = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin-top: 150px;
	h1 {
		font-size: 4rem;
		margin: 20px;
		color: white;
		text-align: center;
	}
	h3 {
		font-size: 2rem;
		margin: 10px;
		color: white;
		text-align: center;
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
		background: linear-gradient(to right, #00bc98bb, #98f7e5bb);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		transition: all .2s ease;
		&:hover {
			transform: scale(1.05);
			background: linear-gradient(to right, #00bc98, #98f7e5);
		}
		i {
			font-size: 1.6rem;
			margin-right: 20px;
		}
	}
`;


export default function Welcome(props) {

  return (
    <StyledWelcome>
      
			<h3>What are you doing? <br />Click <i className="fas fa-plus"></i> New Activity to document it.</h3>

      <div className='navlinks'>
      	<Link to='/'><i className="fas fa-home"></i>Home</Link>
      	<Link to='/activities'><i className="fas fa-walking"></i>Activities</Link>
      	<Link to='/addactivity'><i className="fas fa-plus"></i>New Activity</Link>
      	<Link to='/insights'><i className="fas fa-lightbulb"></i>Insights</Link>
      </div>
    </StyledWelcome>
  )
}