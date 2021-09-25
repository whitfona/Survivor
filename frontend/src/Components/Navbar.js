import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink activeClassName="link-active" exact to='/'>Home</NavLink>
      <NavLink activeClassName="link-active" to='/mc-results'>Tribe Score</NavLink>
      <NavLink activeClassName="link-active" to='/advantage-results'>Advantage</NavLink>
      <NavLink activeClassName="link-active" to='/weeklys-results'>Weeklys</NavLink>
      <NavLink activeClassName="link-active" exact to='/'>Survivors</NavLink>
    </nav>
  )
}