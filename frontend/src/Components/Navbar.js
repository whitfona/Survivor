import React from 'react'
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div>
        <NavLink activeClassName="link-active" exact to='/'>Home</NavLink>
        <NavLink activeClassName="link-active" to='/mc-results'>Tribe Score</NavLink>
        <NavLink activeClassName="link-active" to='/advantage-results'>Advantage</NavLink>
        <NavLink activeClassName="link-active" to='/weeklys-results'>Weeklys</NavLink>
        <NavLink activeClassName="link-active" exact to='/'>Survivors</NavLink>
      </div>
      <div>
        <Link className="btn-primary mx-0" to='/signup'>Sign Up!</Link>
      </div>
    </nav>
  )
}