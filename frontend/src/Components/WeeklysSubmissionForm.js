import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../Components/UserContext';

export default function WeeklysSubmissionForm() {

  const [ answersSubmitted, setAnswersSubmitted] = useState(false);

  const { week, user } = useContext(UserContext);

  useEffect(() => {
    axios.get('http://localhost:5000/weeklys-answers',)
      // .then((data) => console.log(data.data))
      .then((data) => (data.data).map((result) => {
        if (result.Player_ID === user && result.Week === week) {
          setAnswersSubmitted(true);
        }
      }))
      .catch((err) => console.log(err));
  }, [user, week])

  const [q1a, setq1a] = useState('Eric E');
  const [q1b, setq1b] = useState('Eric E');
  const [q2a, setq2a] = useState('Eric E');
  const [q2b, setq2b] = useState('Eric E');
  const [q3, setq3] = useState(0);
  const [q4, setq4] = useState(0);
  const [q5, setq5] = useState(0);
  const q1 = `${q1a}, ${q1b}`;
  const q2 = `${q2a}, ${q2b}`;
  const userID = user.Player_ID;

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
    axios.post('http://localhost:5000/weekly-submissions', answers)
      .then((res) => {
        console.log(res);
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
        <div className="flex">
        <label htmlFor="q1">Who will be sent to Edge of Extinction? (Choose 2)
          <div>
            <select name="q1a" value={q1a} onChange={(e) => setq1a(e.target.value)}>
              <option value="Eric E"> Eric E</option>
              <option value="Heather A">Heather A</option>
              <option value="Erika C">Erika C</option>
              <option value="Genie C">Genie C</option>
              <option value="Ricard F">Ricard F</option>
              <option value="Xander H">Xander H</option>
              <option value="Evvie J">Evvie J</option>
              <option value="Danny M">Danny M</option>
              <option value="Nasser M">Nasser M</option>
              <option value="Deshawn R">Deshawn R</option>
              <option value="Brad R">Brad R</option>
              <option value="Jairus R">Jairus R</option>
              <option value="Tiffany S">Tiffany S</option>
              <option value="Sydney S">Sydney S</option>
              <option value="Shantel S">Shantel S</option>
              <option value="David V">David V</option>
              <option value="Liana W">Liana W</option>
              <option value="Sara W">Sara W</option>
            </select>
            <select name="q1b" value={q1b} onChange={(e) => setq1b(e.target.value)}>
              <option value="Eric E"> Eric E</option>
              <option value="Heather A">Heather A</option>
              <option value="Erika C">Erika C</option>
              <option value="Genie C">Genie C</option>
              <option value="Ricard F">Ricard F</option>
              <option value="Xander H">Xander H</option>
              <option value="Evvie J">Evvie J</option>
              <option value="Danny M">Danny M</option>
              <option value="Nasser M">Nasser M</option>
              <option value="Deshawn R">Deshawn R</option>
              <option value="Brad R">Brad R</option>
              <option value="Jairus R">Jairus R</option>
              <option value="Tiffany S">Tiffany S</option>
              <option value="Sydney S">Sydney S</option>
              <option value="Shantel S">Shantel S</option>
              <option value="David V">David V</option>
              <option value="Liana W">Liana W</option>
              <option value="Sara W">Sara W</option>
            </select>
          </div>
        </label>

        <label htmlFor="q2">Who will win the immunity challenge? (Pick 2)
          <div>
            <select name="q2a" value={q2a} onChange={(e) => setq2a(e.target.value)}>
              <option value="Eric E"> Eric E</option>
              <option value="Heather A">Heather A</option>
              <option value="Erika C">Erika C</option>
              <option value="Genie C">Genie C</option>
              <option value="Ricard F">Ricard F</option>
              <option value="Xander H">Xander H</option>
              <option value="Evvie J">Evvie J</option>
              <option value="Danny M">Danny M</option>
              <option value="Nasser M">Nasser M</option>
              <option value="Deshawn R">Deshawn R</option>
              <option value="Brad R">Brad R</option>
              <option value="Jairus R">Jairus R</option>
              <option value="Tiffany S">Tiffany S</option>
              <option value="Sydney S">Sydney S</option>
              <option value="Shantel S">Shantel S</option>
              <option value="David V">David V</option>
              <option value="Liana W">Liana W</option>
              <option value="Sara W">Sara W</option>
            </select>
            <select name="q2b" value={q2b} onChange={(e) => setq2b(e.target.value)}>
              <option value="Eric E"> Eric E</option>
              <option value="Heather A">Heather A</option>
              <option value="Erika C">Erika C</option>
              <option value="Genie C">Genie C</option>
              <option value="Ricard F">Ricard F</option>
              <option value="Xander H">Xander H</option>
              <option value="Evvie J">Evvie J</option>
              <option value="Danny M">Danny M</option>
              <option value="Nasser M">Nasser M</option>
              <option value="Deshawn R">Deshawn R</option>
              <option value="Brad R">Brad R</option>
              <option value="Jairus R">Jairus R</option>
              <option value="Tiffany S">Tiffany S</option>
              <option value="Sydney S">Sydney S</option>
              <option value="Shantel S">Shantel S</option>
              <option value="David V">David V</option>
              <option value="Liana W">Liana W</option>
              <option value="Sara W">Sara W</option>
            </select>
          </div>
        </label>
        </div>
        <div className="flex">
        <label htmlFor="q3">Tony will play his Idol this episode?
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q3" id="q3" checked={q3} onChange={() => !q3 ? setq3(1) : setq3(0)} /><span>Yes</span></div>
        </label>

        <label htmlFor="q4">There will be an advantage found in the main game this episode. (Not on EoE)
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q4" id="q4" checked={q4} onChange={() => !q4 ? setq4(1) : setq4(0)} /><span>Yes</span></div>
        </label>
        </div>
        <div className="flex-2">
        <label htmlFor="q5">A challenge at any point in the episode (on EoE or Regular Game) will involve digging?
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="q5" id="q5" checked={q5} onChange={() => !q5 ? setq5(1) : setq5(0)} /><span>Yes</span></div>
        </label>

        <input className="btn-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>}
  </div>
  )
}
