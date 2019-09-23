<<<<<<< HEAD
import React from 'react'
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
import styled from 'styled-components';


const StyledWelcome = styled.div `
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-direction: flex-start;
	margin-top: 100px;
<<<<<<< HEAD
=======

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
	h1 {
		font-size: 6rem;
		margin: 20px;
	}
<<<<<<< HEAD
=======

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
	h3 {
		font-size: 3rem;
		margin: 20px;
	}
<<<<<<< HEAD
=======

	.navlinks {
		display: flex;
		flex-direction: column;
		margin: 20px;
	}

	.navlinks a {
		font-size: 2.4rem;
		text-decoration: none;
		margin: 10px;
		height: 40px;
		width: 240px;
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

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
`;


export default function Welcome() {
  return (
    <StyledWelcome>
      <h1>Design Your Life</h1>
      <h3>The App to help you find your best future</h3>
<<<<<<< HEAD
    </StyledWelcome>
  )
}
=======

      <div className='navlinks'>
      	<Link to='/'><i className="fas fa-home"></i>Home</Link>
      	<Link to='/activities'><i className="fas fa-walking"></i>Activities</Link>
      	<Link to='/addactivity'><i className="fas fa-plus"></i>New Activity</Link>
      	<Link to='/insights'><i className="fas fa-lightbulb"></i>Insights</Link>
      </div>
    </StyledWelcome>
  )
}

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
