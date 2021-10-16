import React, { useState, useEffect } from 'react'
import TribeScoreAdminContestantsTable from './TribeScoreAdminContestantsTable';
import axios from 'axios'

export default function AdvantageAdminPanel({ week }) {

  const [ scores, setScores ] = useState({});
  const [ contestants, setContestants ] = useState({});
  const [ questions, setQuestions ] = useState({});
  const [ contestantsLoaded, setContestantsLoaded ] = useState(false);
  const [ questionsLoaded, setQuestionsLoaded ] = useState(false);
  const [ message, setMessage ] = useState('');
  const [ showMessage, setShowMessage ] = useState(false);
  const [ showQuestionMessage, setQuestionShowMessage ] = useState(false);

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
  }, [])

  const sendScores = (e) => {
    e.preventDefault();

    axios.post('https://survivor-node-js.herokuapp.com/update-main-challenge-questions', {week, scores})
      .then((res) => {
        if (res.status === 200) {
          setMessage('Scores Updated!');
          setQuestionShowMessage(true);
          showMsg();
        } else {
          setMessage('Field does not exist to update');
          setQuestionShowMessage(true);
          showMsg()
        }
      })
      .catch((err) => {
        setMessage('Error updating scores');
        setQuestionShowMessage(true);
        showMsg();
      })

    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setScores({});
  }

  const createWeek = (e) => {
    e.preventDefault();

    axios.post('https://survivor-node-js.herokuapp.com/insert-mc-week', { week: week })
      .then((res) => {
        setMessage(res.data);
        setShowMessage(true);
        showMsg();
      })
      .catch((err) => {
        setMessage('Error, week already exisits.');
        setShowMessage(true);
        showMsg();
      })
  }

  const showMsg = () => {
    setTimeout(() => {
      setShowMessage(false);
      setQuestionShowMessage(false);
    }, 3000);
  }

  return (
    <>
    {(contestantsLoaded && questionsLoaded) && <div className="my-3">
      <h2 className="my-1">Tribe Score Section</h2>

      <button onClick={createWeek} className="btn-primary">Click to Create Week {week}</button>
      {showMessage && <h3 className="my-1">{message}</h3>}

      {questions.map((question, index) => {
        return (
        <div className="my-2" key={index}>
          <p>{question.MC_Questions}</p>
          <TribeScoreAdminContestantsTable contestants={contestants} index={index} score={scores} setScores={setScores} sendScores={sendScores} />
          {showQuestionMessage && <h3 className="my-1 text-right">{message}</h3>}
        </div>
        )
      })}

    </div>}
    </>
  )
}
