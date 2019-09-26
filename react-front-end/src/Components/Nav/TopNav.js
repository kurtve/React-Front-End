import React from 'react'
import logo from '../../Assets/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Search from './Search'

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
      left: 53%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & input {
        border: 1px solid white;
        width: 40%;
        background: transparent;
        color: white;
        font-size: 1.2rem;
        border-radius: 10px;
        padding: 1% 3%;
        margin-bottom: 10px;
        transition: all .2s ease-in-out;
        &:hover, &:active, &:focus {
          width: 100%;
          background: white;
          color: black;
        }
      }

      & button {
        width: 40%;
        border: 1px solid white;
        background: transparent;
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;
        border-radius: 10px;
        transition: all .2s ease-in-out;
        &:hover {
          box-shadow: .25rem .25rem .5rem rgba(0,0,0,.6);
          background: white;
          color: black;
          cursor: pointer;
        }
      }
    }
  `

  return (
    <StyledTopNav>

      <Link to="/">
        <img className='logo' src={logo} alt="Design Your Life" />
      </Link>

      <Search search={props.search} setSearch={props.setSearch} />

    </StyledTopNav>
  )
}