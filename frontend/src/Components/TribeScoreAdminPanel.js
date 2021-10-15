import React, { useState, useEffect } from 'react'
import TribeScoreAdminContestantsTable from './TribeScoreAdminContestantsTable';
import axios from 'axios'

export default function AdvantageAdminPanel() {

  const [ week, setWeek ] = useState();
  const [ scores, setScores ] = useState({ week });
  const [ contestants, setContestants ] = useState({});
  const [ questions, setQuestions ] = useState({});
  const [ contestantsLoaded, setContestantsLoaded ] = useState(false);
  const [ questionsLoaded, setQuestionsLoaded ] = useState(false);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/survivors')
      .then((data) => {
        setContestants(data.data)
        setContestantsLoaded(true)
      })
      .catch((err) => console.log(err));
    axios.get('https://survivor-node-js.herokuapp.com/mc-questions')
      .then((data) => {
        setQuestions(data.data)
        setQuestionsLoaded(true);
      })
      .catch((err) => console.log(err));
    axios.get('https://survivor-node-js.herokuapp.com/week')
      .then((data) => {
        setWeek(data.data[0].week)
      })
      .catch((err) => console.log(err));
  }, [])

  const sendScores = (e) => {
    e.preventDefault();

    axios.post('https://survivor-node-js.herokuapp.com/update-main-challenge-questions', scores)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setScores({ week });
  }

  return (
    <>
    {(contestantsLoaded && questionsLoaded) && <div className="my-3">
      <h2 className="my-1">Tribe Score Section</h2>


      {questions.map((question, index) => {
        return (
        <div className="my-2" key={index}>
          <p>{question.MC_Questions}</p>
          <TribeScoreAdminContestantsTable contestants={contestants} index={index} score={scores} setScores={setScores} sendScores={sendScores} />
        </div>
        )
      })}

    </div>}
    </>
  )
}
