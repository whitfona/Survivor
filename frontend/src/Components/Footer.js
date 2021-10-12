import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      Whitford Design - &copy; 2021 | <Link to={{ pathname: 'https://en.wikipedia.org/wiki/Survivor_41' }}target="_blank">Wiki Page</Link> | <Link to={{ pathname: '/admin-dashboard' }}>Admin Dashboard</Link>
    </footer>
  )
}