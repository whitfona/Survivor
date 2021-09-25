import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="signup">
      <h1>You, In the Back Left, Whats Your Name?</h1>
      <form action="#" method="post">
        <input type="text" name="name" id="name" placeholder="Full Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <input type="text" name="passphrase" id="passphrase" placeholder="Secret Word" />
        <input type="submit" value="Sign Up!" />
      </form>

      <Link className="btn-secondary" to='/login'>Log In!</Link>
    </div>
  )
}