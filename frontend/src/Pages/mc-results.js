import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import MainChallengeTable from "../Components/MainChallengeTable";
import { UserContext } from "../Components/UserContext";

export default function MCResults() {
  
  const [mcQuestionsAndResults, setMCQuestionsAndResults] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mc-questions-and-results',)
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


// let countEric = 0, countHeather = 0, countErika = 0, countGenie = 0, countRicard = 0, countXander = 0, countEvvie = 0, countDanny = 0, countNasser = 0, countDeshawn = 0, countBrad = 0, countJairus = 0, countTiffany = 0, countSydney = 0, countShantel = 0, countDavid = 0, countLiana = 0, countSara = 0;

// this gets the total score for each survivor
// mcQuestionsAndResults.map((result) => (
//   // eslint-disable-next-line no-sequences
//   countEric += (result.Eric_E * result.MC_Point_Value),
//   countHeather += (result.Heather_A * result.MC_Point_Value),
//   countErika += (result.Erika_C * result.MC_Point_Value),
//   countGenie += (result.Genie_C * result.MC_Point_Value),
//   countRicard += (result.Ricard_F * result.MC_Point_Value),
//   countXander += (result.Xander_H * result.MC_Point_Value),
//   countEvvie += (result.Evvie_J * result.MC_Point_Value),
//   countDanny += (result.Danny_M * result.MC_Point_Value),
//   countNasser += (result.Nasser_M * result.MC_Point_Value),
//   countDeshawn += (result.Deshawn_R * result.MC_Point_Value),
//   countBrad += (result.Brad_R * result.MC_Point_Value),
//   countJairus += (result.Jairus_R * result.MC_Point_Value),
//   countTiffany += (result.Tiffany_S * result.MC_Point_Value),
//   countSydney += (result.Sydney_S * result.MC_Point_Value),
//   countShantel += (result.Shantel_S * result.MC_Point_Value),
//   countDavid += (result.David_V * result.MC_Point_Value),
//   countLiana += (result.Liana_W * result.MC_Point_Value),
//   countSara += (result.Sara_W * result.MC_Point_Value)
// ))

// const { setSurvivorScores } = useContext(UserContext);

// useEffect(() => {
//   setSurvivorScores([
//     { name: "Eric E", count: countEric},
//     { name: "Heather A", count: countHeather},
//     { name: "Erika C", count: countErika },
//     { name: "Genie C", count: countGenie },
//     { name: "Ricard F", count: countRicard },
//     { name: "Xander H", count: countXander },
//     { name: "Evvie J", count: countEvvie },
//     { name: "Danny M", count: countDanny },
//     { name: "Nasser M", count: countNasser },
//     { name: "Deshawn R", count: countDeshawn },
//     { name: "Brad R", count: countBrad },
//     { name: "Jairus R", count: countJairus },
//     { name: "Tiffany S", count: countTiffany },
//     { name: "Sydney S", count: countSydney },
//     { name: "Shantel S", count: countShantel },
//     { name: "David V", count: countDavid },
//     { name: "Liana W", count: countLiana },
//     { name: "Sara W", count: countSara }
//   ])
// }, [countEric, countHeather, countErika, countGenie, countRicard, countXander, countEvvie, countDanny, countNasser, countDeshawn, countBrad, countJairus, countTiffany, countSydney, countShantel, countDavid, countLiana, countSara, setSurvivorScores])

  return (
    <div>
      {(week1.length > 0) && 
        <div className="my-2">
          <h1>Week 1</h1>
          <MainChallengeTable questionAndResults={week1} />
        </div>
      }
      {(week2.length > 0) && 
        <div className="my-2">
          <h1>Week 2</h1>
          <MainChallengeTable questionAndResults={week2} />
        </div>
      }
      {(week3.length > 0) && 
        <div className="my-2">
          <h1>Week 3</h1>
          <MainChallengeTable questionAndResults={week3} />
        </div>
      }
      {(week4.length > 0) && 
        <div className="my-2">
          <h1>Week 4</h1>
          <MainChallengeTable questionAndResults={week4} />
        </div>
      }
      {(week5.length > 0) && 
        <div className="my-2">
          <h1>Week 5</h1>
          <MainChallengeTable questionAndResults={week5} />
        </div>
      }
      {(week6.length > 0) && 
        <div className="my-2">
          <h1>Week 6</h1>
          <MainChallengeTable questionAndResults={week6} />
        </div>
      }
      {(week7.length > 0) && 
        <div className="my-2">
          <h1>Week 7</h1>
          <MainChallengeTable questionAndResults={week7} />
        </div>
      }
      {(week8.length > 0) && 
        <div className="my-2">
          <h1>Week 8</h1>
          <MainChallengeTable questionAndResults={week8} />
        </div>
      }
      {(week9.length > 0) && 
        <div className="my-2">
          <h1>Week 9</h1>
          <MainChallengeTable questionAndResults={week9} />
        </div>
      }
      {(week10.length > 0) && 
        <div className="my-2">
          <h1>Week 10</h1>
          <MainChallengeTable questionAndResults={week10} />
        </div>
      }
      {(week11.length > 0) && 
        <div className="my-2">
          <h1>Week 11</h1>
          <MainChallengeTable questionAndResults={week11} />
        </div>
      }
      {(week12.length > 0) && 
        <div className="my-2">
          <h1>Week 12</h1>
          <MainChallengeTable questionAndResults={week12} />
        </div>
      }
      {(week13.length > 0) && 
        <div className="my-2">
          <h1>Week 13</h1>
          <MainChallengeTable questionAndResults={week13} />
        </div>
      }
      {(week14.length > 0) && 
        <div className="my-2">
          <h1>Week 14</h1>
          <MainChallengeTable questionAndResults={week14} />
        </div>
      }
    </div>
  )
}