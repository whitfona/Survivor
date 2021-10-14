import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passphrase, setPassphrase] = useState('');
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const showMsg = () => {
    setTimeout(() => {
      setShowErrorMsg(false)
    }, 6000);
  }

  const createUser = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      passphrase
    }

    if (passphrase !== process.env.REACT_APP_PASSPHRASE) {
      setErrorMsg('Wrong passphrase.');
      setShowErrorMsg(true);
      showMsg();
    } else {
      axios.post('https://survivor-node-js.herokuapp.com/create-user', user)
        .then((res) => {
          console.log(res);
          props.history.push('/login');
        })
        .catch((err) => {
          setErrorMsg(err.response.data)
          setShowErrorMsg(true);
          showMsg();
        })
  
        setName('');
        setEmail('');
        setPassword('');
        setPassphrase('');
      }
    }

  return (
    <div className="signup">
      <h1>You, In the Back Left, Whats Your Name?</h1>
      <form onSubmit={createUser} method="post">
        <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" name="passphrase" id="passphrase" placeholder="Secret Word" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} />
        <input type="submit" value="Sign Up!" />
      </form>

      <div className="error-msg">{showErrorMsg && <p>{errorMsg}</p>}</div>

      <Link className="btn-secondary" to='/login'>Log In!</Link>
    </div>
  )
}