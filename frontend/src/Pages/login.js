import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../Components/UserContext';

export default function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);

  const { setCurrentPlayer, setAuthenticated } = useContext(UserContext);

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

    axios.post('https://survivor-node-js.herokuapp.com/login-user', user)
      .then((res) => {
        setCurrentPlayer(res.data)
        setEmail('')
        setPassword('')
        setAuthenticated(true);
        props.history.push('/leaderboard');
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