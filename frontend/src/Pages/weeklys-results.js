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
      .then((data) => {
        setWeeklyQuestionsAndAnswers(data.data)
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/weeklys-answers',)
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
          <div className="my-2">
            <h1>Week 1</h1>

            <div className="my-1">
              <p>{week1QA[0].Weeklys_Q1}: <span className="font-900">{week1QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week1QA[0].Weeklys_Q2}: <span className="font-900">{week1QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week1QA[0].Weeklys_Q3} <span className="font-900">{(week1QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week1QA[0].Weeklys_Q4} <span className="font-900">{(week1QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week1QA[0].Weeklys_Q5} <span className="font-900">{(week1QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>
            <WeeklysResultsTable questionAndAnswers={week1QA} playerResults={week1R} />
          </div>
        }

        {(week2R.length > 0) &&
          <div className="my-2">
            <h1>Week 2</h1>

            <div className="my-1">
              <p>{week2QA[0].Weeklys_Q1}: <span className="font-900">{week2QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week2QA[0].Weeklys_Q2}: <span className="font-900">{week2QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week2QA[0].Weeklys_Q3} <span className="font-900">{(week2QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week2QA[0].Weeklys_Q4} <span className="font-900">{(week2QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week2QA[0].Weeklys_Q5} <span className="font-900">{(week2QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week2QA} playerResults={week2R} />
          </div>
        }

        {(week3R.length > 0) && 
          <div className="my-2">
            <h1>Week 3</h1>

            <div className="my-1">
              <p>{week3QA[0].Weeklys_Q1}: <span className="font-900">{week3QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week3QA[0].Weeklys_Q2}: <span className="font-900">{week3QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week3QA[0].Weeklys_Q3} <span className="font-900">{(week3QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week3QA[0].Weeklys_Q4} <span className="font-900">{(week3QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week3QA[0].Weeklys_Q5} <span className="font-900">{(week3QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week3QA} playerResults={week3R} />
          </div>
        }

        {(week4R.length > 0) && 
          <div className="my-2">
            <h1>Week 4</h1>

            <div className="my-1">
              <p>{week4QA[0].Weeklys_Q1}: <span className="font-900">{week4QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week4QA[0].Weeklys_Q2}: <span className="font-900">{week4QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week4QA[0].Weeklys_Q3} <span className="font-900">{(week4QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week4QA[0].Weeklys_Q4} <span className="font-900">{(week4QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week4QA[0].Weeklys_Q5} <span className="font-900">{(week4QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>
            <WeeklysResultsTable questionAndAnswers={week4QA} playerResults={week4R} />
          </div>
        }

        {(week5R.length > 0) && 
          <div className="my-2">
            <h1>Week 5</h1>

            <div className="my-1">
              <p>{week5QA[0].Weeklys_Q1}: <span className="font-900">{week5QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week5QA[0].Weeklys_Q2}: <span className="font-900">{week5QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week5QA[0].Weeklys_Q3} <span className="font-900">{(week5QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week5QA[0].Weeklys_Q4} <span className="font-900">{(week5QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week5QA[0].Weeklys_Q5} <span className="font-900">{(week5QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week5QA} playerResults={week5R} />
          </div>
        }

        {(week6R.length > 0) && 
          <div className="my-2">
            <h1>Week 6</h1>

            <div className="my-1">
              <p>{week6QA[0].Weeklys_Q1}: <span className="font-900">{week6QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week6QA[0].Weeklys_Q2}: <span className="font-900">{week6QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week6QA[0].Weeklys_Q3} <span className="font-900">{(week6QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week6QA[0].Weeklys_Q4} <span className="font-900">{(week6QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week6QA[0].Weeklys_Q5} <span className="font-900">{(week6QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week6QA} playerResults={week6R} />
          </div>
        }

        {(week7R.length > 0) && 
          <div className="my-2">
            <h1>Week 7</h1>

            <div className="my-1">
              <p>{week7QA[0].Weeklys_Q1}: <span className="font-900">{week7QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week7QA[0].Weeklys_Q2}: <span className="font-900">{week7QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week7QA[0].Weeklys_Q3} <span className="font-900">{(week7QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week7QA[0].Weeklys_Q4} <span className="font-900">{(week7QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week7QA[0].Weeklys_Q5} <span className="font-900">{(week7QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week7QA} playerResults={week7R} />
          </div>
        }

        {(week8R.length > 0) && 
          <div className="my-2">
            <h1>Week 8</h1>

            <div className="my-1">
              <p>{week8QA[0].Weeklys_Q1}: <span className="font-900">{week8QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week8QA[0].Weeklys_Q2}: <span className="font-900">{week8QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week8QA[0].Weeklys_Q3} <span className="font-900">{(week8QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week8QA[0].Weeklys_Q4} <span className="font-900">{(week8QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week8QA[0].Weeklys_Q5} <span className="font-900">{(week8QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week8QA} playerResults={week8R} />
          </div>
        }

        {(week9R.length > 0) && 
          <div className="my-2">
            <h1>Week 9</h1>

            <div className="my-1">
              <p>{week9QA[0].Weeklys_Q1}: <span className="font-900">{week9QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week9QA[0].Weeklys_Q9}: <span className="font-900">{week9QA[0].Weeklys_Q9_Answer}</span></p>
              <p>{week9QA[0].Weeklys_Q3} <span className="font-900">{(week9QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week9QA[0].Weeklys_Q4} <span className="font-900">{(week9QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week9QA[0].Weeklys_Q5} <span className="font-900">{(week9QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week9QA} playerResults={week9R} />
          </div>
        }

        {(week10R.length > 0) && 
          <div className="my-2">
            <h1>Week 10</h1>

            <div className="my-1">
              <p>{week10QA[0].Weeklys_Q1}: <span className="font-900">{week10QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week10QA[0].Weeklys_Q2}: <span className="font-900">{week10QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week10QA[0].Weeklys_Q3} <span className="font-900">{(week10QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week10QA[0].Weeklys_Q4} <span className="font-900">{(week10QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week10QA[0].Weeklys_Q5} <span className="font-900">{(week10QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p>  
            </div>

            <WeeklysResultsTable questionAndAnswers={week10QA} playerResults={week10R} />
          </div>
        }

        {(week11R.length > 0) && 
          <div className="my-2">
            <h1>Week 11</h1>

            <div className="my-1">
              <p>{week11QA[0].Weeklys_Q1}: <span className="font-900">{week11QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week11QA[0].Weeklys_Q2}: <span className="font-900">{week11QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week11QA[0].Weeklys_Q3} <span className="font-900">{(week11QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week11QA[0].Weeklys_Q4} <span className="font-900">{(week11QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week11QA[0].Weeklys_Q5} <span className="font-900">{(week11QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week11QA} playerResults={week11R} />
          </div>
        }

        {(week12R.length > 0) && 
          <div className="my-2">
            <h1>Week 12</h1>

            <div className="my-1">
              <p>{week12QA[0].Weeklys_Q1}: <span className="font-900">{week12QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week12QA[0].Weeklys_Q2}: <span className="font-900">{week12QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week12QA[0].Weeklys_Q3} <span className="font-900">{(week12QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week12QA[0].Weeklys_Q4} <span className="font-900">{(week12QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week12QA[0].Weeklys_Q5} <span className="font-900">{(week12QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week12QA} playerResults={week12R} />
          </div>
        }

        {(week13R.length > 0) && 
          <div className="my-2">
            <h1>Week 13</h1>

            <div className="my-1">
              <p>{week13QA[0].Weeklys_Q1}: <span className="font-900">{week13QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week13QA[0].Weeklys_Q2}: <span className="font-900">{week13QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week13QA[0].Weeklys_Q3} <span className="font-900">{(week13QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week13QA[0].Weeklys_Q4} <span className="font-900">{(week13QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week13QA[0].Weeklys_Q5} <span className="font-900">{(week13QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week13QA} playerResults={week13R} />
          </div>
        }

        {(week14R.length > 0) && 
          <div className="my-2">
            <h1>Week 14</h1>

            <div className="my-1">
              <p>{week14QA[0].Weeklys_Q1}: <span className="font-900">{week14QA[0].Weeklys_Q1_Answer}</span></p>
              <p>{week14QA[0].Weeklys_Q2}: <span className="font-900">{week14QA[0].Weeklys_Q2_Answer}</span></p>
              <p>{week14QA[0].Weeklys_Q3} <span className="font-900">{(week14QA[0].Weeklys_Q3_Answer) ? "True" : "False"}</span></p>
              <p>{week14QA[0].Weeklys_Q4} <span className="font-900">{(week14QA[0].Weeklys_Q4_Answer) ? "True" : "False"}</span></p>
              <p>{week14QA[0].Weeklys_Q5} <span className="font-900">{(week14QA[0].Weeklys_Q5_Answer) ? "True" : "False"}</span></p> 
            </div>

            <WeeklysResultsTable questionAndAnswers={week14QA} playerResults={week14R} />
          </div>
        }
      </>
      : null
      }
    </div>
  )
}