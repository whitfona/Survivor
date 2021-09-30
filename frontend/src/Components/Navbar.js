import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function Navbar() {

  const { authenticated, setAuthenticated, currentPlayer } = useContext(UserContext)

  return (
    <nav>
      <div>
        <NavLink activeClassName="link-active" exact to='/leaderboard'>Home</NavLink>
        <NavLink activeClassName="link-active" to='/tribe-scores'>Tribe Score</NavLink>
        <NavLink activeClassName="link-active" to='/weeklys'>Weeklys</NavLink>
        <NavLink activeClassName="link-active" to='/advantage'>Advantage</NavLink>
        <NavLink activeClassName="link-active" to='/profile'>Profile</NavLink>
        <NavLink activeClassName="link-active" exact to='/survivors'>Survivors</NavLink>
      </div>
      <div>
        { authenticated ?
        <div>
          <p className="player-name font-900">{currentPlayer.Player_Name}</p>
          <button className="logout-btn" onClick={() => setAuthenticated(false)} type="submit">Log out?</button> 
        </div>
        :
        <Link className="btn-primary mx-0" to='/login'>Log In!</Link>
        }
      </div>
    </nav>
  )
}