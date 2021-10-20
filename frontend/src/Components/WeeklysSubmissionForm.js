import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../Components/UserContext';

export default function WeeklysSubmissionForm() {

  const [ answersSubmitted, setAnswersSubmitted ] = useState(false);
  const [ week, setWeek ] = useState();
  const [ questions, setQuestions ] = useState([]);
  const [ contestants, setContestants ] = useState([]);

  const { currentPlayer } = useContext(UserContext);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/survivors')
      .then((data) => {
        setContestants(data.data)
      })
      .catch((err) => console.log(err));
    axios.get('https://survivor-node-js.herokuapp.com/week')
      .then((data) => {
        setWeek(data.data[0].week)
      })
      .catch((err) => {
        console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/weeklys-players-answers')
      .then((data) => (data.data).map((result) => {
        if (result.Player_ID === currentPlayer.Player_ID && result.Week === week) {
          setAnswersSubmitted(true);
        }
        return null
      }))
      .catch((err) => console.log(err));
    axios.get('https://survivor-node-js.herokuapp.com/weeklys-questions-and-answers')
      .then((data) => {
        (data.data).map((questions) => {
          if (questions.Week === week) {
            setQuestions(questions)
          }
          return null
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },[week, currentPlayer.Player_ID])

  // const [q1a, setq1a] = useState('Eric E');
  // const [q1b, setq1b] = useState('Eric E');
  // const [q2a, setq2a] = useState('Eric E');
  // const [q2b, setq2b] = useState('Eric E');
  const [q1, setq1] = useState(0);
  const [q2, setq2] = useState(0);
  const [q3, setq3] = useState(0);
  const [q4, setq4] = useState(0);
  const [q5a, setq5a] = useState('Eric E');
  const [q5b, setq5b] = useState('Eric E');
  const q5 = `${q5a}, ${q5b}`;
  // const q2 = `${q2a}, ${q2b}`;
  const userID = currentPlayer.Player_ID

  const sendWeeklys = (e) => {
    e.preventDefault();
    const answers = {
      userID, 
      week,
      q1,
      q2,
      q3,
      q4,
      q5
    }
    axios.post('https://survivor-node-js.herokuapp.com/weekly-submissions', answers)
      .then((res) => {
        setAnswersSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
    {answersSubmitted 
    ? 
    <div className="weeklysFormComplete">
      <h2>All Done</h2>
      <p>Thanks for filling out this weeks questions!</p>
    </div>
    : <div className="weeklysForm">
      <h3 className="my-2">Week {week} Questions</h3>
      <form onSubmit={sendWeeklys} method="post">
        {/* <div className="flex">
        <label htmlFor="q1">{questions.Weeklys_Q1}
          <div>
            <select name="q1a" value={q1a} onChange={(e) => setq1a(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
            <select name="q1b" value={q1b} onChange={(e) => setq1b(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
          </div>
        </label>

        <label htmlFor="q2a">{questions.Weeklys_Q2}
          <div>
            <select name="q2a" value={q2a} onChange={(e) => setq2a(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
            <select name="q2b" value={q2b} onChange={(e) => setq2b(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
          </div>
        </label>
        </div> */}
        <div className="flex">
        <label htmlFor="q1">{questions.Weeklys_Q1}
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q1" id="q1" checked={q1} onChange={() => !q1 ? setq1(1) : setq1(0)} /><span>Yes</span></div>
        </label>

        <label htmlFor="q2">{questions.Weeklys_Q2}
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q2" id="q2" checked={q2} onChange={() => !q2 ? setq2(1) : setq2(0)} /><span>Yes</span></div>
        </label>
        </div>
        <div className="flex">
        <label htmlFor="q3">{questions.Weeklys_Q3}
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q3" id="q3" checked={q3} onChange={() => !q3 ? setq3(1) : setq3(0)} /><span>Yes</span></div>
        </label>

        <label htmlFor="q4">{questions.Weeklys_Q4}
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q4" id="q4" checked={q4} onChange={() => !q4 ? setq4(1) : setq4(0)} /><span>Yes</span></div>
        </label>
        </div>
        <div className="flex-2">
        {/* <label htmlFor="q5">{questions.Weeklys_Q5}
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q5" id="q5" checked={q5} onChange={() => !q5 ? setq5(1) : setq5(0)} /><span>Yes</span></div>
        </label> */}
        <label htmlFor="q5">{questions.Weeklys_Q5}
          <div>
            <select name="q5a" value={q5a} onChange={(e) => setq5a(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
            <select name="q5b" value={q5b} onChange={(e) => setq5b(e.target.value)}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
          </div>
        </label>

        <input className="btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>}
  </div>
  )
}
