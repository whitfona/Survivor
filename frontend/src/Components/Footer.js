import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      John & Nick - &copy; 2021 | <Link to={{ pathname: 'https://en.wikipedia.org/wiki/Survivor_41' }}target="_blank">Wiki Page</Link>
    </footer>
  )
}