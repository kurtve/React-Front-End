import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import styled from 'styled-components'

export default function Nav(props) {

  const StyledNav = styled.div `
    position: relative;
    z-index: 1000;
  `

  return (
    <StyledNav>

      <TopNav 
        {...props}
        activities={props.activities} 
        insights={props.insights} 
        search={props.search}
        setSearch={props.setSearch}
        status={props.status} 
        setStatus={props.setStatus}
      />

      <BottomNav />
    </StyledNav>
  )
}
