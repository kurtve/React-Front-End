import React from 'react'
import logo from '../../Assets/logo.svg';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Nav() {

  const StyledTopNav = styled.div `
    position: relative;
    top: 0;
    left: 0;
<<<<<<< HEAD
    width: 100vw;
=======
    width: 100%;
>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
<<<<<<< HEAD
    background: #00a0ba;
=======
    background: #00bc98;
>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
    
    .logo {
      height: 50px;
      width: auto;
<<<<<<< HEAD
    }
=======
      fill: #00a0ba;
    }

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
  `

  return (
    <StyledTopNav>
      <Link to="/">
        <img className='logo' src={logo} alt="Design Your Life" />
      </Link>
    </StyledTopNav>
  )
}
