import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WeeklysResultsTable from '../Components/WeeklysResultsTable';

export default function Weeklys() {
  // Questions from Josh and proper answer to questions
  const [weeklyQuestionsAndAnswers, setWeeklyQuestionsAndAnswers] = useState([]);
  // Answers from players
  const [weeklyPlayerResults, setWeeklyPlayerResults] = useState([]);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/weeklys-questions-and-answers',)
      .then((data) => {
        setWeeklyQuestionsAndAnswers(data.data)
      })
      .catch((err) => console.log(err));
    axios.get('https://survivor-node-js.herokuapp.com/weeklys-players-answers',)
      .then((data) => setWeeklyPlayerResults(data.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter each one week for Questions and Answers
  const week1Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 1);
  const week2Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 2);
  const week3Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 3);
  const week4Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 4);
  const week5Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 5);
  const week6Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 6);
  const week7Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 7);
  const week8Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 8);
  const week9Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 9);
  const week10Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 10);
  const week11Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 11);
  const week12Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 12);
  const week13Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 13);
  const week14Questions = weeklyQuestionsAndAnswers.filter(week => week.Week === 14);
  
  // Filter each one week for player results
  const week1Answers = weeklyPlayerResults.filter(week => week.Week === 1);
  const week2Answers = weeklyPlayerResults.filter(week => week.Week === 2);
  const week3Answers = weeklyPlayerResults.filter(week => week.Week === 3);
  const week4Answers = weeklyPlayerResults.filter(week => week.Week === 4);
  const week5Answers = weeklyPlayerResults.filter(week => week.Week === 5);
  const week6Answers = weeklyPlayerResults.filter(week => week.Week === 6);
  const week7Answers = weeklyPlayerResults.filter(week => week.Week === 7);
  const week8Answers = weeklyPlayerResults.filter(week => week.Week === 8);
  const week9Answers = weeklyPlayerResults.filter(week => week.Week === 9);
  const week10Answers = weeklyPlayerResults.filter(week => week.Week === 10);
  const week11Answers = weeklyPlayerResults.filter(week => week.Week === 11);
  const week12Answers = weeklyPlayerResults.filter(week => week.Week === 12);
  const week13Answers = weeklyPlayerResults.filter(week => week.Week === 13);
  const week14Answers = weeklyPlayerResults.filter(week => week.Week === 14);

  const formatQuestionsAndAnswers = (week) => {
    return (
      <>
      {week.map(item => (
        <div className="my-1">
          <p>{item.Weeklys_Q1}: <span className="font-900">{item.Weeklys_Q1_Answer}</span></p>
          <p>{item.Weeklys_Q2}: <span className="font-900">{item.Weeklys_Q2_Answer}</span></p>
          <p>{item.Weeklys_Q3} <span className="font-900">{(item.Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
          <p>{item.Weeklys_Q4} <span className="font-900">{(item.Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
          <p>{item.Weeklys_Q5} <span className="font-900">{(item.Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
        </div>
      ))}
    </>
    )
  }

  return (
    <div>
      <h1>Weeklys Scores</h1>

      <div className="my-2">
        <h2>Week 1</h2>
          {formatQuestionsAndAnswers(week1Questions)}
          <WeeklysResultsTable questions={week1Questions} answers={week1Answers} />
      </div>
  
      <div className="my-2">
        <h2>Week 2</h2>
          {formatQuestionsAndAnswers(week2Questions)}
          <WeeklysResultsTable questions={week2Questions} answers={week2Answers} />
      </div>
   
      {week3Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 3</h2>
            {formatQuestionsAndAnswers(week3Questions)}
            <WeeklysResultsTable questions={week3Questions} answers={week3Answers} />
        </div>
      }

      {week4Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 4</h2>
            {formatQuestionsAndAnswers(week4Questions)}
            <WeeklysResultsTable questions={week4Questions} answers={week4Answers} />
        </div>
      }

      {week5Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 5</h2>
            {formatQuestionsAndAnswers(week5Questions)}
            <WeeklysResultsTable questions={week5Questions} answers={week5Answers} />
        </div>
      }

      {week6Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 6</h2>
            {formatQuestionsAndAnswers(week6Questions)}
            <WeeklysResultsTable questions={week6Questions} answers={week6Answers} />
        </div>
      }

      {week7Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 7</h2>
            {formatQuestionsAndAnswers(week7Questions)}
            <WeeklysResultsTable questions={week7Questions} answers={week7Answers} />
        </div>
      }

      {week8Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 8</h2>
            {formatQuestionsAndAnswers(week8Questions)}
            <WeeklysResultsTable questions={week8Questions} answers={week8Answers} />
        </div>
      }

      {week9Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 9</h2>
            {formatQuestionsAndAnswers(week9Questions)}
            <WeeklysResultsTable questions={week9Questions} answers={week9Answers} />
        </div>
      }

      {week10Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 10</h2>
            {formatQuestionsAndAnswers(week10Questions)}
            <WeeklysResultsTable questions={week10Questions} answers={week10Answers} />
        </div>
      }

      {week11Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 11</h2>
            {formatQuestionsAndAnswers(week11Questions)}
            <WeeklysResultsTable questions={week11Questions} answers={week11Answers} />
        </div>
      }

      {week12Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 12</h2>
            {formatQuestionsAndAnswers(week12Questions)}
            <WeeklysResultsTable questions={week12Questions} answers={week12Answers} />
        </div>
      }

      {week13Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 13</h2>
            {formatQuestionsAndAnswers(week13Questions)}
            <WeeklysResultsTable questions={week13Questions} answers={week13Answers} />
        </div>
      }

      {week14Questions.length > 0 && 
        <div className="my-2">
          <h2>Week 14</h2>
            {formatQuestionsAndAnswers(week14Questions)}
            <WeeklysResultsTable questions={week14Questions} answers={week14Answers} />
        </div>
      }

    </div>
  )
}