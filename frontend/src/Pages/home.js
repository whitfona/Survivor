import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Components/UserContext';
import WeeklysSubmissionForm from '../Components/WeeklysSubmissionForm'

export default function Home() {

  const [ players, setPlayers ] = useState([]);
  const [ contestantTotals, setContestantTotals ] = useState([]);

  const { currentPlayer } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:5000/players',)
      .then((data) => {
        setPlayers(data.data)
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/survivor-totals',)
      .then((data) => {
        setContestantTotals(data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const totalScore = (player) => {
    return player.TribeTotals + player.WeeklysTotals + player.Bonus + player.Pay_Bonus + player.TribeTotals;
  }

  return (
    <div className="home">
      <h1>Your Profile</h1>

      <div className="my-2">
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
            </tr>
          </thead>
          {players.map(player => {
            if (player.Player_Name === currentPlayer.Player_Name) {
              return (
                <tbody key={player.Player_ID}>
                  <tr>
                    <td>{player.Player_Name}</td>
                    <td>{player.TribeTotals}</td>
                    <td>{player.WeeklysTotals}</td>
                    <td>{player.Bonus}</td>
                    <td>{player.Pay_Bonus}</td>
                    <td>{player.AdvantageTotals}</td>
                    <td>{totalScore(player)}</td>
                  </tr>
                </tbody>
              )
            }
          })}

        </table>
      </div>

      <div className="cols-2">
        <div>
          <h2 className="my-2">Your Tribe</h2>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Points</th>
              </tr>
            </thead>
            {contestantTotals.map((survivor, index) => {
              if(currentPlayer.Player_Tribe.replace(/ /g,"_").includes(survivor.contestantName)) {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{survivor.contestantName.replace(/_/g," ")}</td>
                      <td>{survivor.total}</td>
                    </tr>
                  </tbody>
                )
              }
            })}
          </table>
        </div>
        <div>
          <WeeklysSubmissionForm />
        </div>
      </div>
    </div>
  )
}