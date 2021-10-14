import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function WeeklysAdminPanel() {

  const [ contestants, setContestants ] = useState([]);
  const [ week, setWeek ] = useState();
  const [ questions, setQuestions] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: ""
  })
  const [ answerOne, setAnswerOne] = useState({
    a: "Eric E",
    b: "Eric E",
  })
  const [ answerTwo, setAnswerTwo] = useState({
    a: "Eric E",
    b: "Eric E",
  })
  const [ answerThree, setAnswerThree ] = useState(0);
  const [ answerFour, setAnswerFour ] = useState(0);
  const [ answerFive, setAnswerFive ] = useState(0);
  const [ questionsSubmitted, setQuestionsSubmitted ] = useState(false);

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
      .catch((err) => console.log(err));
  }, []);


  const handleQuestionChange = e => {
    const {name, value } = e.target;
    setQuestions(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleAnswerOneChange = e => {
    const {name, value } = e.target;
    setAnswerOne(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
 
  const handleAnswerTwoChange = e => {
    const {name, value } = e.target;
    setAnswerTwo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const submitWeeklyQuestions = (e) => {
    e.preventDefault();

    const questionsToSubmit = {
      Week: week,
      Q1: questions.q1,
      Q2: questions.q2,
      Q3: questions.q3,
      Q4: questions.q4,
      Q5: questions.q5,
    }

    axios.post('https://survivor-node-js.herokuapp.com/set-weeklys-questions', questionsToSubmit)
      .then((res) => {
        setQuestionsSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitWeeklyAnswers = (e) => {
    e.preventDefault();

    const answersToSubmit = {
      Week: week,
      Q1: `${answerOne.a}, ${answerOne.b}`,
      Q2: `${answerTwo.a}, ${answerTwo.b}`,
      Q3: answerThree,
      Q4: answerFour,
      Q5: answerFive,
    }

    axios.post('https://survivor-node-js.herokuapp.com/set-weeklys-answers', answersToSubmit)
      .then((res) => {
        setQuestionsSubmitted(true);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div id="weeklys-admin" className="my-2">
      <h2 className="my-1">Weeklys Section</h2>
      <div className="weekly-admin-grid">
        <form onSubmit={submitWeeklyQuestions}>
          <input type="text" value={questions.q1} name="q1" id="q1" placeholder="Question 1..." onChange={handleQuestionChange} />
          <input type="text" value={questions.q2} name="q2" id="q2" placeholder="Question 2..." onChange={handleQuestionChange} />
          <input type="text" value={questions.q3} name="q3" id="q3" placeholder="Question 3..." onChange={handleQuestionChange} />
          <input type="text" value={questions.q4} name="q4" id="q4" placeholder="Question 4..." onChange={handleQuestionChange} />
          <input type="text" value={questions.q5} name="q5" id="q5" placeholder="Question 5..." onChange={handleQuestionChange} />
          <button type="submit" className="btn-primary">Lock in Weekly Questions</button>
        </form>
        <form onSubmit={submitWeeklyAnswers}>
          <div className="flex-2-cols">
            <select name="a" value={answerOne.a} onChange={handleAnswerOneChange}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
            <select name="b" value={answerOne.b} onChange={handleAnswerOneChange}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
          </div>

          <div className="flex-2-cols">
            <select name="a" value={answerTwo.a} onChange={handleAnswerTwoChange}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
            <select name="b" value={answerTwo.b} onChange={handleAnswerTwoChange}>
              {contestants.map(player => {
                return <option value={player.Contestant_Name} key={player.Contestant_ID}>{player.Contestant_Name}</option>
              })}
            </select>
          </div>
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="a3" checked={answerThree} onChange={() => !answerThree ? setAnswerThree(1) : setAnswerThree(0)} /><span>Yes</span></div>
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="a4" checked={answerFour} onChange={() => !answerFour ? setAnswerFour(1) : setAnswerFour(0)} /><span>Yes</span></div>
          <div className="checkbox-container"><span>No</span><input type="checkbox" name="a5" checked={answerFive} onChange={() => !answerFive ? setAnswerFive(1) : setAnswerFive(0)} /><span>Yes</span></div>
          <button type="submit" className="btn-primary">Lock in Weekly Answers</button>
        </form>
      </div>

      {questionsSubmitted && <h3>The Questions for week {week} have been set!</h3>}
    </div>
  )
}
