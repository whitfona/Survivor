import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext';

export default function AdvantageAdminPanel() {

  const [ contestants, setContestants ] = useState([]);
  const [ questions, setQuestions ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/survivors')
      .then((data) => {
        setContestants(data.data)
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/mc-questions')
      .then((data) => {
        setQuestions(data.data)
      })
      .catch((err) => console.log(err));
  }, [])

  console.log(questions)
  // const submitAdvantageScores = (e) => {
  //   e.preventDefault();

  //   const advantageScores = {
  //     Week: week,
  //     Advantaged_Player: advantagedPlayer.Player_ID,
  //     Disadvantaged_Player: disadvantagedPlayer
  //   }

  //   axios.post('http://localhost:5000/set-advantage', advantageScores)
  //     .then((res) => {
  //       setWeekSubmitted(true);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  return (
    <div>
      <h2 className="my-1">Tribe Score Section</h2>
      
    </div>
  )
}
