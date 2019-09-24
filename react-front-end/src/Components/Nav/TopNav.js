import React from 'react'
import logo from '../../Assets/logo.svg';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Nav() {

  const StyledTopNav = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background: #00bc98;
    
    .logo {
      height: 50px;
      width: auto;
    }
  `

  return (
    <StyledTopNav>
      <Link to="/">
        <img className='logo' src={logo} alt="Design Your Life" />
      </Link>
    </StyledTopNav>
  )
}