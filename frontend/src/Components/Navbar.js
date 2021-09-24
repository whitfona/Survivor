import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/advantage-results'>Advantage Results</Link>
      <Link to='/mc-results'>Advantage Results</Link>
      <Link to='/weeklys-results'>Weekly Results</Link>
    </nav>
  )
}