import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AdvantageAdminPanel({ week }) {

  const [ advantagedPlayer, setAdvantagedPlayer ] = useState('');
  const [ disadvantagedPlayer, setDisadvantagedPlayer ] = useState(1);
  const [ players, setPlayers ] = useState([]);
  const [ weekSubmitted, setWeekSubmitted ] = useState(false);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/players')
      .then((data) => {
        setPlayers(data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const getRandomPlayer = (e) => {
    e.preventDefault();

    setAdvantagedPlayer(players[(Math.floor(Math.random() * players.length))]);
  }

  const submitAdvantageScores = (e) => {
    e.preventDefault();

    const advantageScores = {
      Week: week,
      Advantaged_Player: advantagedPlayer.Player_ID,
      Disadvantaged_Player: disadvantagedPlayer
    }

    axios.post('https://survivor-node-js.herokuapp.com/set-advantage', advantageScores)
      .then((res) => {
        setWeekSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="my-3">
      <h2 className="my-2">Advantage</h2>
      <button className="btn-primary" onClick={(e) => getRandomPlayer(e)} type="submit">Click to Get Random Player</button>

      <form className="advantage-form" onSubmit={(e) => submitAdvantageScores(e)}>
        <p>Player to get 5 points: <span>{advantagedPlayer.Player_Name}</span></p >
        <label htmlFor="disadvantagedPlayer">Player to lose 5 points: </label>
        <select name="disadvantagedPlayer" onChange={(e) => setDisadvantagedPlayer(e.target.value)}>
          {players.map(player => {
            return <option value={player.Player_ID} key={player.Player_ID}>{player.Player_Name}</option>
          })}
        </select>
        <button className="btn-primary" type="submit">Lock in Advantage Scores</button>
      </form>

      {weekSubmitted && <h3>The scores for week {week} have been updated!</h3>}
    </div>
  )
}
