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
    background: #00bc98;

    i {
      font-size: 1.8rem;
      color: white;

    }
  `

  return (
    <StyledBottomNav>
      <Link to="/activities"><i className="fas fa-stream"></i></Link>
      <Link to="/AddActivityForm"><i className="fas fa-plus"></i></Link>
      <Link to="/Insights"><i className="fas fa-chart-bar"></i></Link>
    </StyledBottomNav>
  )
}
