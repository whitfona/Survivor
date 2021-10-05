import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AdvantageResults() {


  const [ advantageResults, setAdvantageResults ] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/advantage-all-weeks')
    .then((data) => setAdvantageResults(data.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Advantage Scores</h1>
      <div className="table-container">
        <table>
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Total</th>
                <th>Week 1</th>
                <th>Week 2</th>
                <th>Week 3</th>
                <th>Week 4</th>
                <th>Week 5</th>
                <th>Week 6</th>
                <th>Week 7</th>
                <th>Week 8</th>
                <th>Week 9</th>
                <th>Week 10</th>
                <th>Week 11</th>
                <th>Week 12</th>
                <th>Week 13</th>
                <th>Week 14</th>
              </tr>
            </thead>
          {advantageResults.map((result, index) => (
            <tbody key={index}>
              <tr>
                <td>{result.Player_Name}</td>
                <td className="font-900">{result.Total}</td>
                <td>{result.Week_1}</td>
                <td>{result.Week_2}</td>
                <td>{result.Week_3}</td>
                <td>{result.Week_4}</td>
                <td>{result.Week_5}</td>
                <td>{result.Week_6}</td>
                <td>{result.Week_7}</td>
                <td>{result.Week_8}</td>
                <td>{result.Week_9}</td>
                <td>{result.Week_10}</td>
                <td>{result.Week_11}</td>
                <td>{result.Week_12}</td>
                <td>{result.Week_13}</td>
                <td>{result.Week_14}</td>
              </tr>
            </tbody>
          ))}
          </table>
      </div>
    </div>
  )
}