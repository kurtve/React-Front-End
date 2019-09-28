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
    background: #00bc98;

    & .nav-inner {
      width: 450px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & .username {
        color: white;
        font-size: 16px;
        font-style: italic;
      }

      & .logout {
        font-size: 1.6rem;
        text-decoration: none;
        ${'' /* margin-top: 30px; */}
        height: 30px;
        width: 120px;
        background-color: #fb8570;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: none;
        &:hover {
          cursor: pointer;
        }
      }

      & .logo {
        height: 50px;
        width: auto;
      }

      & form {
        display: flex;
        flex-direction: column;
        ${'' /* margin-right: 0;
        padding-right: 0; */}
        width: 20%;

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
            width: 150%;
            background: white;
            color: black;
          }
        }

        & button {
          width: 100%;
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
    }
  `

  return (
    <StyledTopNav>

      <div className="nav-inner">
        <LogoutButton {...props} status={props.status} setStatus={props.setStatus}/>

        <Link to="/">
          <img className='logo' src={logo} alt="Design Your Life" />
        </Link>

        <Search search={props.search} setSearch={props.setSearch} />
      </div>

    </StyledTopNav>
  )
}