import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function BonusAdminPanel() {

  const [ players, setPlayers ] = useState([]);
  const [ bonusAmount, setBonusAmount ] = useState(0);
  const [ bonusPlayer, setBonusPlayer ] = useState(1);
  const [ bonusSubmitted, setBonusSubmitted ] = useState(false);
  const [ payBonusAmount, setPayBonusAmount ] = useState(0);
  const [ payBonusPlayer, setPayBonusPlayer ] = useState(1);
  const [ payBonusSubmitted, setPayBonusSubmitted ] = useState(false);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/players')
      .then((data) => {
        setPlayers(data.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const showMsg = () => {
    setTimeout(() => {
      setBonusSubmitted(false);
      setPayBonusSubmitted(false)
    }, 3000);
  }

  const sendBonus = (e) => {
    e.preventDefault();

    const bonus = {
      playerID: bonusPlayer,
      amount: bonusAmount
    }

    axios.post('http://localhost:5000/set-bonus', bonus)
      .then((res) => {
        setBonusSubmitted(true);
        showMsg();
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  const sendPayBonus = (e) => {
    e.preventDefault();

    const payBonus = {
      playerID: payBonusPlayer,
      amount: payBonusAmount
    }

    axios.post('http://localhost:5000/set-pay-bonus', payBonus)
      .then((res) => {
        setPayBonusSubmitted(true);
        showMsg();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="bonus-flex my-3">
      <div>
        <h2 className="my-1">Bonus Section</h2>

        <form className="advantage-form" onSubmit={(e) => sendBonus(e)}>
          <label htmlFor="disadvantagedPlayer">Set bonus for player: </label>
          <select name="bonusPlayer" onChange={(e) => setBonusPlayer(e.target.value)}>
            {players.map(player => {
              return <option value={player.Player_ID} key={player.Player_ID}>{player.Player_Name}</option>
            })}
          </select>
          <input type="number" name="amount" onChange={(e) => setBonusAmount(e.target.value)} />
          {bonusSubmitted && <h3 className="my-1">The bonus score has been updated!</h3>}
          <button className="btn-primary" type="submit">Update Bonus Score</button>
        </form>

      </div>
    
      <div>
        <h2 className="my-1">Bonus Pay Section</h2>

        <form className="advantage-form" onSubmit={(e) => sendPayBonus(e)}>
          <label htmlFor="payBonusPlayer">Set pay bonus for player: </label>
          <select name="payBonusPlayer" onChange={(e) => setPayBonusPlayer(e.target.value)}>
            {players.map(player => {
              return <option value={player.Player_ID} key={player.Player_ID}>{player.Player_Name}</option>
            })}
          </select>
          <input type="number" name="payAmount" onChange={(e) => setPayBonusAmount(e.target.value)} />
          {payBonusSubmitted && <h3>The pay bonus score has been updated!</h3>}
          <button className="btn-primary" type="submit">Update Pay Bonus Score</button>
        </form>

      </div>
    </div>
  )
}
