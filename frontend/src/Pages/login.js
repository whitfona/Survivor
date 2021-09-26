import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../Components/UserContext';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const { setUser } = useContext(UserContext);

  const showMsg = () => {
    setTimeout(() => {
      setShowErrorMsg(false)
    }, 3000);
  }
  
  const loginUser = (e) => {
    e.preventDefault();
    
    const user = {
      email,
      password
    }

    axios.post('http://localhost:5000/login-user', user)
      .then((res) => {
        setUser(res.data)
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        setShowErrorMsg(true);
        showMsg();
      })
  }

  return (
    <div className="login">
      <h1>Come On In, Guys!</h1>
      <form onSubmit={loginUser} method="post">
        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>

      <div className="error-msg">{showErrorMsg && <p>Username or Password is incorrect.</p>}</div>

      <Link className="btn-secondary" to='/signup'>Sign Up!</Link>
    </div>
  )
}