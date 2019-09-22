import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Nav({logo}) {

  const StyledTopNav = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    background: #00a0ba;
    
    .logo {
      height: 50px;
      width: auto;
      fill: #00a0ba;
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
