import React from 'react'
import logo from '../../Assets/logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Search from './Search'
import LogoutButton from './LogoutButton'

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
    background: linear-gradient(to right, #00bc98ee, #98f7e5ee);

    & .nav-inner {
      width: 450px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & i.fa-user-check {
        color: white;
        border: 1px solid white;
        border-radius: 50%;
        padding: 7%;
        transform: translate(-90%, 90%);
      }

      & .username {
        color: white;
        font-size: 16px;
        font-style: italic;
        text-align: center;
      }

      & .logout {
        font-size: 1.4rem;
        text-decoration: none;
        margin-top: 5px;
        height: 30px;
        background-color: transparent;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid transparent;
        transition: all .4s ease;
        &:hover {
          cursor: pointer;
          border-bottom: 1px solid white;
        }
      }

      & .logo {
        height: 50px;
        width: auto;
        transform: translateX(-16px);
      }

      & form {
        display: flex;
        flex-direction: column;
        width: 25%;

        & input {
          border: 1px solid white;
          width: 100%;
          background: transparent;
          color: white;
          font-size: 1.2rem;
          border-radius: 10px;
          padding: 1% 3%;
          margin-bottom: 10px;
          transition: all .2s ease-in-out;
          &:hover, &:active, &:focus {
            width: 140%;
            background: white;
            color: black;
          }
        }
        & button {
          border-radius: 10px;
          border: 1px solid transparent;
          font-family: inherit;
          transition: all .2s ease;
          &:hover {
            background: #fb8570;
            border: 1px solid #fb8570;
            color: white;
            cursor: pointer;
            letter-spacing: .2rem;
            text-transform: uppercase;
          }
        }
      }
    }
  `

  return (
    <StyledTopNav>

      <div className="nav-inner">
        <Search {...props} status={props.status} setStatus={props.setStatus} search={props.search} setSearch={props.setSearch} />

        <Link to="/">
        {
          props.status.loggedIn === true ? <img className='logo' src={logo} alt="Design Your Life" /> : <img className='logo' style={{transform: 'translateX(5px)'}} src={logo} alt="Design Your Life" />
        }
          
        </Link>

        <LogoutButton {...props} status={props.status} setStatus={props.setStatus}/>
      </div>

    </StyledTopNav>
  )
}