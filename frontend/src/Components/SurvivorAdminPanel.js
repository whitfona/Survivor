import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SurvivorAdminPanel() {

  const [ contestants, setContestants ] = useState([]);
  const [ tribeTwoContestant, setTribeTwoContestant ] = useState('Eric E');
  const [ tribeTwoValue, setTribeTwoValue ] = useState('');
  const [ finishContestant, setFinishContestant ] = useState('Eric E');
  const [ finishValue, setFinishValue ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ showTribeTwoMessage, setShowTribeTwoMessage ] = useState(false);
  const [ showFinishMessage, setShowFinishMessage ] = useState(false);

  useEffect(() => {
  axios.get('https://survivor-node-js.herokuapp.com/survivors')
    .then((data) => {
      setContestants(data.data)
    })
    .catch((err) => console.log(err));
  }, []);
  
  const setTribeTwo = (e) => {
    e.preventDefault()

    axios.post('https://survivor-node-js.herokuapp.com/set-tribe-two', { contestant: tribeTwoContestant, value: tribeTwoValue})
      .then((res) => {
        setMessage(`Tribe two updated for: ${tribeTwoContestant}`);
        setShowTribeTwoMessage(true);
        showMsg();
        setTribeTwoContestant('Eric E');
        setTribeTwoValue('')
      })
      .catch((err) => {
        setMessage(`Error updating tribe two for: ${tribeTwoContestant}`);
        setShowTribeTwoMessage(true);
        showMsg();
      })
  }
  
  const setFinish = (e) => {
    e.preventDefault()

    axios.post('https://survivor-node-js.herokuapp.com/set-contestant-finish', { contestant: finishContestant, value: finishValue})
      .then((res) => {
        setMessage(`Finish position updated for: ${finishContestant}`);
        setShowFinishMessage(true);
        showMsg();
        setFinishContestant('Eric E');
        setFinishValue('');
      })
      .catch((err) => {
        setMessage(`Error updating finish position for: ${finishContestant}`);
        setShowFinishMessage(true);
        showMsg();
      })
  }

  const showMsg = () => {
    setTimeout(() => {
      setShowTribeTwoMessage(false);
      setShowFinishMessage(false)
    }, 3000);
  }

  return (
    <div className="survivors-admin bonus-flex my-3">
      <div>
        <h2 className="my-1">Set Tribe Two</h2>
        <form onSubmit={setTribeTwo}>
          <label htmlFor="tribeTwo">Update Tribe 2 For: </label>
          <select name="tribeTwo" value={tribeTwoContestant} onChange={(e) => setTribeTwoContestant(e.target.value)}>
            {contestants.map(contestant => {
              return <option value={contestant.Contestant_Name} key={contestant.Contestant_ID}>{contestant.Contestant_Name}</option>
            })}
          </select>
          <input type="text" name="tribeTwoText" value={tribeTwoValue} onChange={(e) => setTribeTwoValue(e.target.value)} placeholder="Enter tribe two name" />
          {showTribeTwoMessage && <h3 className="my-1">{message}</h3>}
          <button className='btn-primary' type="submit">Update Player's Tribe Two</button>
        </form>
      </div>
    
      <div>
        <h2 className="my-1">Set Player Finish</h2>
        <form onSubmit={setFinish}>
          <label htmlFor="tribeTwo">Update Finish For : </label>
          <select name="tribeTwo" value={finishContestant} onChange={(e) => setFinishContestant(e.target.value)}>
            {contestants?.map((contestant, index) => {
              return <option value={contestant.Contestant_Name} key={contestant.Contestant_ID}>{contestant.Contestant_Name}</option>
            })}
          </select>
          <input type="text" name="tribeTwoText" value={finishValue} onChange={(e) => setFinishValue(e.target.value)} placeholder="Enter finish position" />
          {showFinishMessage && <h3 className="my-1">{message}</h3>}
          <button className='btn-primary' type="submit">Update Player's Finish Position</button>
        </form>
      </div>  
    </div>
  )
}