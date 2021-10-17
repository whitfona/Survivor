import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Leaderboard() {

  // Get all players
  const [ players, setPlayers ] = useState([]);
  const [ highestScore, setHighestScore ] = useState(0);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/players')
      .then((data) => {
        setPlayers(data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const totalScore = (player) => {
    return player.TribeTotals + player.WeeklysTotals + player.Bonus + player.Pay_Bonus + player.AdvantageTotals;
  }

  players.forEach(player => {
    if (totalScore(player) > highestScore) {
      setHighestScore(totalScore(player))
    }
  })

  const bubbleSort = (array) =>{
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (totalScore(array[i]) < totalScore(array[i + 1])) {
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
  }

  bubbleSort(players);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Tribe</th>
            <th>Weeklys</th>
            <th>Bonus</th>
            <th>Pay Bonus</th>
            <th>Advantage</th>
            <th>Total Score</th>
            <th>Points Behind</th>
          </tr>
        </thead>
        {players.map((player) => (
        <tbody key={player.Player_ID}>
            <tr>
              <td>{player.Player_Name}</td>
              <td>{player.TribeTotals}</td>
              <td>{player.WeeklysTotals}</td>
              <td>{player.Bonus}</td>
              <td>{player.Pay_Bonus}</td>
              <td>{player.AdvantageTotals}</td>
              <td>{totalScore(player)}</td>
              <td>{highestScore - totalScore(player)}</td>
            </tr>
        </tbody>
        ))}
      </table>
    </div>
  )
}