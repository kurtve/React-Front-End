import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideNav() {
  return (
    <div>
      <NavLink to="/Insights">Insights</NavLink>
      <NavLink to="/">Feed</NavLink>
      <NavLink to="/AddActivityForm">Add Activity</NavLink>
    </div>
  )
}
