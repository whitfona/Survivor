import React, { useState, useEffect } from "react";
import axios from 'axios'
import MainChallengeTable from "../Components/MainChallengeTable";

export default function MCResults() {
  
  const [mcQuestionsAndResults, setMCQuestionsAndResults] = useState([]);
  const [mcTotals, setMCTotals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mc-questions-and-totals',)
      .then((data) => {
        setMCQuestionsAndResults(data.data.questions)
        setMCTotals(data.data.totals)
      })
      .catch((err) => console.log(err));
  }, []);

  const week1Results = mcQuestionsAndResults.filter(week => week.Week === 1);
  const week2Results = mcQuestionsAndResults.filter(week => week.Week === 2);
  const week3Results = mcQuestionsAndResults.filter(week => week.Week === 3);
  const week4Results = mcQuestionsAndResults.filter(week => week.Week === 4);
  const week5Results = mcQuestionsAndResults.filter(week => week.Week === 5);
  const week6Results = mcQuestionsAndResults.filter(week => week.Week === 6);
  const week7Results = mcQuestionsAndResults.filter(week => week.Week === 7);
  const week8Results = mcQuestionsAndResults.filter(week => week.Week === 8);
  const week9Results = mcQuestionsAndResults.filter(week => week.Week === 9);
  const week10Results = mcQuestionsAndResults.filter(week => week.Week === 10);
  const week11Results = mcQuestionsAndResults.filter(week => week.Week === 11);
  const week12Results = mcQuestionsAndResults.filter(week => week.Week === 12);
  const week13Results = mcQuestionsAndResults.filter(week => week.Week === 13);
  const week14Results = mcQuestionsAndResults.filter(week => week.Week === 14);

  const week1Totals = mcTotals.filter(week => week.Week === 1);
  const week2Totals = mcTotals.filter(week => week.Week === 2);
  const week3Totals = mcTotals.filter(week => week.Week === 3);
  const week4Totals = mcTotals.filter(week => week.Week === 4);
  const week5Totals = mcTotals.filter(week => week.Week === 5);
  const week6Totals = mcTotals.filter(week => week.Week === 6);
  const week7Totals = mcTotals.filter(week => week.Week === 7);
  const week8Totals = mcTotals.filter(week => week.Week === 8);
  const week9Totals = mcTotals.filter(week => week.Week === 9);
  const week10Totals = mcTotals.filter(week => week.Week === 10);
  const week11Totals = mcTotals.filter(week => week.Week === 11);
  const week12Totals = mcTotals.filter(week => week.Week === 12);
  const week13Totals = mcTotals.filter(week => week.Week === 13);
  const week14Totals = mcTotals.filter(week => week.Week === 14);

  return (
    <div>
      <h1>Tribe Scores</h1>

      {week1Results.length > 0 && <div className="my-2">
        <h2>Week 1</h2>
        <MainChallengeTable questionAndResults={week1Results} totals={week1Totals} />
      </div>}

      {week2Results.length > 0 && <div className="my-2">
        <h2>Week 2</h2>
        <MainChallengeTable questionAndResults={week2Results} totals={week2Totals} />
      </div>}

      {week3Results.length > 0 && <div className="my-2">
        <h2>Week 3</h2>
        <MainChallengeTable questionAndResults={week3Results} totals={week3Totals} />
      </div>}

      {week4Results.length > 0 && <div className="my-2">
        <h2>Week 4</h2>
        <MainChallengeTable questionAndResults={week4Results} totals={week4Totals} />
      </div>}

      {week5Results.length > 0 && <div className="my-2">
        <h2>Week 5</h2>
        <MainChallengeTable questionAndResults={week5Results} totals={week5Totals} />
      </div>}

      {week6Results.length > 0 && <div className="my-2">
        <h2>Week 6</h2>
        <MainChallengeTable questionAndResults={week6Results} totals={week6Totals} />
      </div>}

      {week7Results.length > 0 && <div className="my-2">
        <h2>Week 7</h2>
        <MainChallengeTable questionAndResults={week7Results} totals={week7Totals} />
      </div>}

      {week8Results.length > 0 && <div className="my-2">
        <h2>Week 8</h2>
        <MainChallengeTable questionAndResults={week8Results} totals={week8Totals} />
      </div>}

      {week9Results.length > 0 && <div className="my-2">
        <h2>Week 9</h2>
        <MainChallengeTable questionAndResults={week9Results} totals={week9Totals} />
      </div>}

      {week10Results.length > 0 && <div className="my-2">
        <h2>Week 10</h2>
        <MainChallengeTable questionAndResults={week10Results} totals={week10Totals} />
      </div>}

      {week11Results.length > 0 && <div className="my-2">
        <h2>Week 11</h2>
        <MainChallengeTable questionAndResults={week11Results} totals={week11Totals} />
      </div>}

      {week12Results.length > 0 && <div className="my-2">
        <h2>Week 12</h2>
        <MainChallengeTable questionAndResults={week12Results} totals={week12Totals} />
      </div>}

      {week13Results.length > 0 && <div className="my-2">
        <h2>Week 13</h2>
        <MainChallengeTable questionAndResults={week13Results} totals={week13Totals} />
      </div>}

      {week14Results.length > 0 && <div className="my-2">
        <h2>Week 14</h2>
        <MainChallengeTable questionAndResults={week14Results} totals={week14Totals} />
      </div>}

    </div>
  )
}