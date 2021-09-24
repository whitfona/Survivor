import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WeeklysResultsTable from '../Components/WeeklysResultsTable';

export default function WeeklysResults() {
  // Questions from Josh and proper answer to questions
  const [weeklyQuestionsAndAnswers, setWeeklyQuestionsAndAnswers] = useState([]);
  // Answers from players
  const [weeklyResults, setWeeklyResults] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/weeklys-questions',)
      // .then((data) => console.log(data.data))
      .then((data) => {
        setWeeklyQuestionsAndAnswers(data.data)
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/weeklys-answers',)
      // .then((data) => console.log(data.data))
      .then((data) => setWeeklyResults(data.data))
      .catch((err) => console.log(err));
  }, []);

  // Filter each one week for Questions and Answers
  const week1QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 1);
  const week2QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 2);
  const week3QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 3);
  const week4QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 4);
  const week5QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 5);
  const week6QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 6);
  const week7QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 7);
  const week8QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 8);
  const week9QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 9);
  const week10QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 10);
  const week11QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 11);
  const week12QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 12);
  const week13QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 13);
  const week14QA = weeklyQuestionsAndAnswers.filter(week => week.Week_ID === 13);
  
  // Filter each one week for player results
  const week1R = weeklyResults.filter(week => week.Week === 1);
  const week2R = weeklyResults.filter(week => week.Week === 2);
  const week3R = weeklyResults.filter(week => week.Week === 3);
  const week4R = weeklyResults.filter(week => week.Week === 4);
  const week5R = weeklyResults.filter(week => week.Week === 5);
  const week6R = weeklyResults.filter(week => week.Week === 6);
  const week7R = weeklyResults.filter(week => week.Week === 7);
  const week8R = weeklyResults.filter(week => week.Week === 8);
  const week9R = weeklyResults.filter(week => week.Week === 9);
  const week10R = weeklyResults.filter(week => week.Week === 10);
  const week11R = weeklyResults.filter(week => week.Week === 11);
  const week12R = weeklyResults.filter(week => week.Week === 12);
  const week13R = weeklyResults.filter(week => week.Week === 13);
  const week14R = weeklyResults.filter(week => week.Week === 14);

  return (
    <div>
      {isLoaded ?
        <>
        {(week1R.length > 0) &&
          <>
            <h1>Week 1</h1>

            <p>Question 1: {week1QA[0].Weeklys_Q1}, Answer: {week1QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week1QA[0].Weeklys_Q2}, Answer: {week1QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week1QA[0].Weeklys_Q3}, Answer: {week1QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week1QA[0].Weeklys_Q4}, Answer: {week1QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week1QA[0].Weeklys_Q5}, Answer: {week1QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week1QA} playerResults={week1R} />
          </>
        }

        {(week2R.length > 0) &&
          <>
            <h1>Week 2</h1>

            <p>Question 1: {week2QA[0].Weeklys_Q1}, Answer: {week2QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week2QA[0].Weeklys_Q2}, Answer: {week2QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week2QA[0].Weeklys_Q3}, Answer: {week2QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week2QA[0].Weeklys_Q4}, Answer: {week2QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week2QA[0].Weeklys_Q5}, Answer: {week2QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week2QA} playerResults={week2R} />
          </>
        }

        {(week3R.length > 0) && 
          <>
            <h1>Week 3</h1>

            <p>Question 1: {week3QA[0].Weeklys_Q1}, Answer: {week3QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week3QA[0].Weeklys_Q2}, Answer: {week3QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week3QA[0].Weeklys_Q3}, Answer: {week3QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week3QA[0].Weeklys_Q4}, Answer: {week3QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week3QA[0].Weeklys_Q5}, Answer: {week3QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week3QA} playerResults={week3R} />
          </>
        }

        {(week4R.length > 0) && 
          <>
            <h1>Week 4</h1>

            <p>Question 1: {week4QA[0].Weeklys_Q1}, Answer: {week4QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week4QA[0].Weeklys_Q2}, Answer: {week4QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week4QA[0].Weeklys_Q3}, Answer: {week4QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week4QA[0].Weeklys_Q4}, Answer: {week4QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week4QA[0].Weeklys_Q5}, Answer: {week4QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week4QA} playerResults={week4R} />
          </>
        }

        {(week5R.length > 0) && 
          <>
            <h1>Week 5</h1>

            <p>Question 1: {week5QA[0].Weeklys_Q1}, Answer: {week5QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week5QA[0].Weeklys_Q2}, Answer: {week5QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week5QA[0].Weeklys_Q3}, Answer: {week5QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week5QA[0].Weeklys_Q4}, Answer: {week5QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week5QA[0].Weeklys_Q5}, Answer: {week5QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week5QA} playerResults={week5R} />
          </>
        }

        {(week6R.length > 0) && 
          <>
            <h1>Week 6</h1>

            <p>Question 1: {week6QA[0].Weeklys_Q1}, Answer: {week6QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week6QA[0].Weeklys_Q2}, Answer: {week6QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week6QA[0].Weeklys_Q3}, Answer: {week6QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week6QA[0].Weeklys_Q4}, Answer: {week6QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week6QA[0].Weeklys_Q5}, Answer: {week6QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week6QA} playerResults={week6R} />
          </>
        }

        {(week7R.length > 0) && 
          <>
            <h1>Week 7</h1>

            <p>Question 1: {week7QA[0].Weeklys_Q1}, Answer: {week7QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week7QA[0].Weeklys_Q2}, Answer: {week7QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week7QA[0].Weeklys_Q3}, Answer: {week7QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week7QA[0].Weeklys_Q4}, Answer: {week7QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week7QA[0].Weeklys_Q5}, Answer: {week7QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week7QA} playerResults={week7R} />
          </>
        }

        {(week8R.length > 0) && 
          <>
            <h1>Week 8</h1>

            <p>Question 1: {week8QA[0].Weeklys_Q1}, Answer: {week8QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week8QA[0].Weeklys_Q2}, Answer: {week8QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week8QA[0].Weeklys_Q3}, Answer: {week8QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week8QA[0].Weeklys_Q4}, Answer: {week8QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week8QA[0].Weeklys_Q5}, Answer: {week8QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week8QA} playerResults={week8R} />
          </>
        }

        {(week9R.length > 0) && 
          <>
            <h1>Week 9</h1>

            <p>Question 1: {week9QA[0].Weeklys_Q1}, Answer: {week9QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week9QA[0].Weeklys_Q2}, Answer: {week9QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week9QA[0].Weeklys_Q3}, Answer: {week9QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week9QA[0].Weeklys_Q4}, Answer: {week9QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week9QA[0].Weeklys_Q5}, Answer: {week9QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week9QA} playerResults={week9R} />
          </>
        }

        {(week10R.length > 0) && 
          <>
            <h1>Week 10</h1>

            <p>Question 1: {week10QA[0].Weeklys_Q1}, Answer: {week10QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week10QA[0].Weeklys_Q2}, Answer: {week10QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week10QA[0].Weeklys_Q3}, Answer: {week10QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week10QA[0].Weeklys_Q4}, Answer: {week10QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week10QA[0].Weeklys_Q5}, Answer: {week10QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week10QA} playerResults={week10R} />
          </>
        }

        {(week11R.length > 0) && 
          <>
            <h1>Week 11</h1>

            <p>Question 1: {week11QA[0].Weeklys_Q1}, Answer: {week11QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week11QA[0].Weeklys_Q2}, Answer: {week11QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week11QA[0].Weeklys_Q3}, Answer: {week11QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week11QA[0].Weeklys_Q4}, Answer: {week11QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week11QA[0].Weeklys_Q5}, Answer: {week11QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week11QA} playerResults={week11R} />
          </>
        }

        {(week12R.length > 0) && 
          <>
            <h1>Week 12</h1>

            <p>Question 1: {week12QA[0].Weeklys_Q1}, Answer: {week12QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week12QA[0].Weeklys_Q2}, Answer: {week12QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week12QA[0].Weeklys_Q3}, Answer: {week12QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week12QA[0].Weeklys_Q4}, Answer: {week12QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week12QA[0].Weeklys_Q5}, Answer: {week12QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week12QA} playerResults={week12R} />
          </>
        }

        {(week13R.length > 0) && 
          <>
            <h1>Week 13</h1>

            <p>Question 1: {week13QA[0].Weeklys_Q1}, Answer: {week13QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week13QA[0].Weeklys_Q2}, Answer: {week13QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week13QA[0].Weeklys_Q3}, Answer: {week13QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week13QA[0].Weeklys_Q4}, Answer: {week13QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week13QA[0].Weeklys_Q5}, Answer: {week13QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week13QA} playerResults={week13R} />
          </>
        }

        {(week14R.length > 0) && 
          <>
            <h1>Week 14</h1>

            <p>Question 1: {week14QA[0].Weeklys_Q1}, Answer: {week14QA[0].Weeklys_Q1_Answer}</p>
            <p>Question 2: {week14QA[0].Weeklys_Q2}, Answer: {week14QA[0].Weeklys_Q2_Answer}</p>
            <p>Question 3: {week14QA[0].Weeklys_Q3}, Answer: {week14QA[0].Weeklys_Q3_Answer}</p>
            <p>Question 4: {week14QA[0].Weeklys_Q4}, Answer: {week14QA[0].Weeklys_Q4_Answer}</p>
            <p>Question 5: {week14QA[0].Weeklys_Q5}, Answer: {week14QA[0].Weeklys_Q5_Answer}</p> 

            <WeeklysResultsTable questionAndAnswers={week14QA} playerResults={week14R} />
          </>
        }
      </>
      : null
      }


      {/* <WeeklysTable questions={week1QA} /> */}
      {/* <MainChallengeTable questionAndResults={week1} />
      <br />
      <h1>Week 2</h1>
      <MainChallengeTable questionAndResults={week2} /> */}
    </div>
  )
}