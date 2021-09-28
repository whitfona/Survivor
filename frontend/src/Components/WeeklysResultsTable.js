import React from 'react'

export default function WeeklysResultsTable({ questionAndAnswers, playerResults }) { 

  const calcWeeklyScore = ( playerAnswers ) => {
    let score = 0;
    
    const q1Answer = questionAndAnswers[0].Weeklys_Q1_Answer;
    const q2Answer = questionAndAnswers[0].Weeklys_Q2_Answer;
    const q3Answer = questionAndAnswers[0].Weeklys_Q3_Answer;
    const q4Answer = questionAndAnswers[0].Weeklys_Q4_Answer;
    const q5Answer = questionAndAnswers[0].Weeklys_Q5_Answer;

    let playerQ1Array = playerAnswers.WC_Q1_Answer.split(', ');
    let playerQ2Array = playerAnswers.WC_Q2_Answer.split(', ');

    if (q1Answer.includes(playerQ1Array[0]) || q1Answer.includes(playerQ1Array[1])) { score += 2; }
    if (q2Answer.includes(playerQ2Array[0]) || q1Answer.includes(playerQ2Array[1])) { score += 2; }
    if (playerAnswers.WC_Q3_Answer === q3Answer) { score += 2;}
    if (playerAnswers.WC_Q4_Answer === q4Answer) { score += 2; }
    if (playerAnswers.WC_Q5_Answer === q5Answer) { score += 2; }

    return score;
  }

  let total = [];
  for (let i = 0; i < playerResults.length; i++) {
    total[i] = { name: playerResults[i].Player_Name, score: calcWeeklyScore(playerResults[i])}
  }

  return (
    <>
      <table>
          <thead>
            {questionAndAnswers.map((result, index) => (
              <tr key={index}>
                <th>Player</th>
                <th>Total</th>
                <th>{result.Weeklys_Q1}</th>
                <th>{result.Weeklys_Q2}</th>
                <th>{result.Weeklys_Q3}</th>
                <th>{result.Weeklys_Q4}</th>
                <th>{result.Weeklys_Q5}</th>
              </tr>
            ))}
          </thead>
        {playerResults.map((result, index) => (
          <tbody key={index}>
            <tr>
              <td>{result.Player_Name}</td>
              <td>{calcWeeklyScore(result)}</td>
              <td>{result.WC_Q1_Answer}</td>
              <td>{result.WC_Q2_Answer}</td>
              <td>{result.WC_Q3_Answer}</td>
              <td>{result.WC_Q4_Answer}</td>
              <td>{result.WC_Q5_Answer}</td>
            </tr>
          </tbody>
        ))}
        </table>
    </>
  )
}
