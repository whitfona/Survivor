import React, { useContext } from 'react'
import { UserContext } from '../Components/UserContext';
import WeeklysSubmissionForm from '../Components/WeeklysSubmissionForm'

export default function Home() {

  const { currentPlayer, players, survivorTotals } = useContext(UserContext);

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
              <th>Points Behind</th>
            </tr>
          </thead>
          {players.map((player) => {
            if (player.Player_ID === currentPlayer.Player_ID) {
              return (
                <tbody key={player.Player_ID}>
                  <tr>
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
            {survivorTotals.map((survivor, index) => {
              if(currentPlayer.Player_Tribe.includes(survivor.name)) {
                return (
                  <tbody key={index}>
                    <tr>
                      <td>{survivor.name}</td>
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