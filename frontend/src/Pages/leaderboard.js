import React, { useContext } from 'react'
import { UserContext } from '../Components/UserContext';
// import axios from 'axios';

export default function Leaderboard() {

  const { players } = useContext(UserContext);

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
            <tr key={player.Player_ID}>
              <td>{player.Player_Name}</td>
              <td>{player.Tribe_Total}</td>
              <td>{player.Weeklys_Total}</td>
              <td>{player.Bonus}</td>
              <td>{player.Pay_Bonus}</td>
              <td>{player.Advantage_Total}</td>
              <td>{player.Total_Score}</td>
              <td>TBD</td>
            </tr>
        </tbody>
        ))}
      </table>
    </div>
  )
}