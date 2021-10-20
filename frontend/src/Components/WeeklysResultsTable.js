import React from 'react'

export default function WeeklysResultsTable({ questions, answers }) { 
  
  return (
    <>
      <table>
        {questions.map((result, index) => (
          <thead key={index}>
              <tr>
                <th>Player</th>
                <th>Total</th>
                <th>{result.Weeklys_Q1}</th>
                <th>{result.Weeklys_Q2}</th>
                <th>{result.Weeklys_Q3}</th>
                <th>{result.Weeklys_Q4}</th>
                <th>{result.Weeklys_Q5}</th>
              </tr>
          </thead>
        ))}
        {answers.map((result, index) => (
          <tbody key={index}>
            <tr>
              <td>{result.Player_Name}</td>
              <td className="font-900"> {result.Week_Total}</td>
              <td>{result.Q1_Answer}</td>
              {/* <td>{result.Q2_Answer}</td> */}
              <td>{(result.Q2_Answer === 1) ? "True" : "False"}</td>
              <td>{(result.Q3_Answer === 1) ? "True" : "False"}</td>
              <td>{(result.Q4_Answer === 1) ? "True" : "False"}</td>
              <td>{(result.Q5_Answer === 1) ? "True" : "False"}</td>
            </tr>
          </tbody>
        ))}
        </table>
    </>
  )
}
