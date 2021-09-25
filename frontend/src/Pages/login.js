import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <h1>Come On In, Guys!</h1>
      <form action="#" method="post">
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>

      <Link className="btn-secondary" to='/signup'>Sign Up!</Link>
    </div>
  )
}