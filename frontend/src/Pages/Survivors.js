import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Survivors() {
  
  const [ contestantTotals, setContestantTotals ] = useState([]);

  useEffect(() => {
    axios.get('https://survivor-node-js.herokuapp.com/survivor-totals')
      .then((data) => {
        setContestantTotals(data.data)
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(contestantTotals)

  const bgColor = (tribe) => {
    if (tribe === undefined) return;
    if (tribe.includes("Luvu")) return "#66D0EE";
    if (tribe.includes("Ua")) return "#A2DC70";
    if (tribe.includes("Yase")) return "#FEE978";
  }
  
  return (
    <div className="survivors">
     <h1 className="py-2">Survivors</h1>
     <table>
       <thead>
         <tr>
           <th>Survivor</th>
           <th>Tribe</th>
           <th>Total Points</th>
           <th>Finish</th>
         </tr>
       </thead>
       {contestantTotals.map((contestant, index) => (
         <tbody key={index}>
           <tr>
             <td>{contestant.contestantName.replace(/_/g," ")}</td>
             <td style={{ backgroundColor: bgColor(contestant.tribeOne) }}>{contestant.tribeOne}</td>
             <td>{contestant.total}</td>
             <td>{contestant.finishPosition}</td>
           </tr>
         </tbody>
       ))}
     </table>
    </div>
  )
}