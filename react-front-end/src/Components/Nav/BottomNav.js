import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function BottomNav() {

  const StyledBottomNav = styled.div `
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 480px;
    height: 60px;
    display: flex;
    padding: 0 5%;
    justify-content: space-between;
    align-items: center;
    background: #00a0ba;
  `

  return (
    <StyledBottomNav>
      <Link to="/"><i class="fas fa-stream"></i></Link>
      <Link to="/AddActivityForm"><i class="fas fa-plus"></i></Link>
      <Link to="/Insights"><i class="fas fa-chart-bar"></i></Link>
    </StyledBottomNav>
  )
}
