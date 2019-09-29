import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function BottomNav() {

  const StyledBottomNav = styled.div `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right, #00bc98ee, #98f7e5ee);

    & div {
      width: 400px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }

    i {
      font-size: 1.8rem;
      color: white;
    }
  `

  return (
    <StyledBottomNav>
      <div>
        <Link to="/"><i className="fas fa-home"></i></Link>
        <Link to='/activities'><i className="fas fa-walking"></i></Link>
        <Link to="/addactivity"><i className="fas fa-plus"></i></Link>
        <Link to="/insights"><i className="fas fa-lightbulb"></i></Link>
      </div>
    </StyledBottomNav>
  )
}