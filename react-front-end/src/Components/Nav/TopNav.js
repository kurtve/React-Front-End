import React from 'react'
import logo from '../../Assets/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'

export default function Nav(props) {

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

    & form {
      position: absolute;
      top: 50%;
      left: 55%;
      transform: translateY(-50%);
    }
  `

  return (
    <StyledTopNav>
      <Link to="/">
        <img className='logo' src={logo} alt="Design Your Life" />
      </Link>
        <Search 
          activities={props.activities} 
          insights={props.insights} 
          searchFilter={props.searchFilter}
          filtered={props.filtered}
        />
    </StyledTopNav>
  )
}
