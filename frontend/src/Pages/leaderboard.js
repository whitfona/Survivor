import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Components/UserContext';
import axios from 'axios';

export default function Leaderboard() {
  
  const [ players, setPlayers ] = useState('');
  const { playerAdvantageScores, playerWeeklysScores, survivorScores } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:5000/all-players')
    .then((data) => setPlayers(data.data))
    .catch((err) => console.log(err));
  }, []);

  // get tribe score for each player
  let playerTribeScores = [];
  for (let i = 0; i < players.length; i++) {
    let score = 0;
    for (let j = 0; j < survivorScores.length; j++) {
      if((players[i].Player_Tribe).includes(survivorScores[j].name)) {
        score += parseInt(survivorScores[j].count);
      }
    }
    playerTribeScores[i] = { name: players[i].Player_Name, tribeScore: score };
  }


  console.log(playerWeeklysScores)

  let standings = [];
  for (let i = 0; i < players.length; i++) {
    let tribe;
    let weeklys;
    let advantage;
    
    for (let j = 0; j < playerTribeScores.length; j++) {
      if (players[i].Player_Name === playerTribeScores[j].name) {
        tribe = playerTribeScores[j].tribeScore;
      }
    }

    for (let j = 0; j < playerWeeklysScores.length; j++) {
      if (players[i].Player_Name === playerWeeklysScores[j]) {
        weeklys = playerWeeklysScores[j].total;
      }
    }

    for (let j = 0; j < playerAdvantageScores.length; j++) {
      if (players[i].Player_Name === playerAdvantageScores[j].player) {
        advantage = playerAdvantageScores[j].total;
      }
    }

    standings[i] = { name: players[i].Player_Name, tribeScore: tribe, weeklysScore: weeklys, advantageScore: advantage }
  }

  console.log(standings);
  return (
    <div>
      <h1>Standings</h1>
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
      </table>
    </div>
  )
}