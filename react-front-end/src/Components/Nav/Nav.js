import React from 'react'
import { NavLink } from 'react-router-dom'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

export default function Nav({logo}) {
  return (
    <div>
      <TopNav logo={logo} />
      <BottomNav />
      
      <NavLink to="/Insights">Insights</NavLink>
      <NavLink to="/">Feed</NavLink>
      <NavLink to="/AddActivityForm">Add Activity</NavLink>
    </div>
  )
}
