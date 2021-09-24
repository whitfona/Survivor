import React, { useState, useEffect } from "react";
import axios from 'axios'
import MainChallengeTable from "../Components/MainChallengeTable";

export default function MCResults() {
  
  const [mcQuestionsAndResults, setMCQuestionsAndResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mc-questions-and-results',)
      // .then((data) => console.log(data.data))
      // .then((data) => setAdvantageResults(data.data))
      .then((data) => setMCQuestionsAndResults(data.data))
      .catch((err) => console.log(err));
  }, []);

  const week1 = mcQuestionsAndResults.filter(week => week.Week === 1);
  const week2 = mcQuestionsAndResults.filter(week => week.Week === 2);
  const week3 = mcQuestionsAndResults.filter(week => week.Week === 3);
  const week4 = mcQuestionsAndResults.filter(week => week.Week === 4);
  const week5 = mcQuestionsAndResults.filter(week => week.Week === 5);
  const week6 = mcQuestionsAndResults.filter(week => week.Week === 6);
  const week7 = mcQuestionsAndResults.filter(week => week.Week === 7);
  const week8 = mcQuestionsAndResults.filter(week => week.Week === 8);
  const week9 = mcQuestionsAndResults.filter(week => week.Week === 9);
  const week10 = mcQuestionsAndResults.filter(week => week.Week === 10);
  const week11 = mcQuestionsAndResults.filter(week => week.Week === 11);
  const week12 = mcQuestionsAndResults.filter(week => week.Week === 12);
  const week13 = mcQuestionsAndResults.filter(week => week.Week === 13);
  const week14 = mcQuestionsAndResults.filter(week => week.Week === 14);

  return (
    <div>
      {(week1.length > 0) && 
        <>
          <h1>Week 1</h1>
          <MainChallengeTable questionAndResults={week1} />
        </>
      }
      {(week2.length > 0) && 
        <>
          <h1>Week 2</h1>
          <MainChallengeTable questionAndResults={week2} />
        </>
      }
      {(week3.length > 0) && 
        <>
          <h1>Week 3</h1>
          <MainChallengeTable questionAndResults={week3} />
        </>
      }
      {(week4.length > 0) && 
        <>
          <h1>Week 4</h1>
          <MainChallengeTable questionAndResults={week4} />
        </>
      }
      {(week5.length > 0) && 
        <>
          <h1>Week 5</h1>
          <MainChallengeTable questionAndResults={week5} />
        </>
      }
      {(week6.length > 0) && 
        <>
          <h1>Week 6</h1>
          <MainChallengeTable questionAndResults={week6} />
        </>
      }
      {(week7.length > 0) && 
        <>
          <h1>Week 7</h1>
          <MainChallengeTable questionAndResults={week7} />
        </>
      }
      {(week8.length > 0) && 
        <>
          <h1>Week 8</h1>
          <MainChallengeTable questionAndResults={week8} />
        </>
      }
      {(week9.length > 0) && 
        <>
          <h1>Week 9</h1>
          <MainChallengeTable questionAndResults={week9} />
        </>
      }
      {(week10.length > 0) && 
        <>
          <h1>Week 10</h1>
          <MainChallengeTable questionAndResults={week10} />
        </>
      }
      {(week11.length > 0) && 
        <>
          <h1>Week 11</h1>
          <MainChallengeTable questionAndResults={week11} />
        </>
      }
      {(week12.length > 0) && 
        <>
          <h1>Week 12</h1>
          <MainChallengeTable questionAndResults={week12} />
        </>
      }
      {(week13.length > 0) && 
        <>
          <h1>Week 13</h1>
          <MainChallengeTable questionAndResults={week13} />
        </>
      }
      {(week14.length > 0) && 
        <>
          <h1>Week 14</h1>
          <MainChallengeTable questionAndResults={week14} />
        </>
      }
    </div>
  )
}