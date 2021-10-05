import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../Components/UserContext';

export default function WeeklysAdminPanel() {

  const [ randomPlayer, setRandomPlayer ] = useState('');
  const [ advantageLoser, setAdvantageLoser ] = useState(1);
  const [ isWeekSubmitted, setIsWeekSubmitted ] = useState(false);

  const { players, week } = useContext(UserContext);

  const getRandomPlayer = (e) => {
    e.preventDefault();

    setRandomPlayer(players[(Math.floor(Math.random() * players.length))]);
  }

 const submitAdvantageScores = (e) => {
    e.preventDefault();

    const winner = randomPlayer.Player_ID;
    const loser = parseInt(advantageLoser);

    const advantagePlayers = {
      week,
      winner,
      loser
    }
    
    axios.post('http://localhost:5000/set-advantage', advantagePlayers)
      .then((res) => {
        console.log(res);
        setIsWeekSubmitted(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
    { isWeekSubmitted ?
    <p>You already submitted this week</p>
    :
    <div>
      <p>Advantaged Player: {randomPlayer.Player_Name} </p>
      <button className="btn-secondary" onClick={(e) => getRandomPlayer(e)} type="submit">Generate Random Player</button>
      <p>Player to get 5 points: {randomPlayer.Player_Name}</p >

      <label htmlFor="">Player to lose 5 points:</label>
      <form onSubmit={(e) => submitAdvantageScores(e)}>
        <select name="minus_five" onChange={(e) => setAdvantageLoser(e.target.value)}>
          {players.map((player, index) => (
            <option value={player.Player_ID} key={index}>{player.Player_Name}</option>
          ))}
        </select>
        <button className="btn-primary" type="submit">Lock in Advantage Scores</button>
      </form>
    </div>
    }
    </div>
  )
}
