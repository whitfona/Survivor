import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { UserContext } from "../Components/UserContext";

export default function Survivors() {
  
  const [ survivorsFromDB, setSurvivorsFromDB ] = useState([{}]);
  const { survivorTotals } = useContext(UserContext);
  
  useEffect(() => {
    axios.get('http://localhost:5000/survivors',)
    .then((data) => setSurvivorsFromDB(data.data))
    .catch((err) => console.log(err));
  }, []);

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
         </tr>
       </thead>
       {survivorsFromDB.map((survivor) => (
         <tbody key={survivor.Contestant_ID}>
           <tr>
             <td>{survivor.Contestant_Name}</td>
             <td style={{ backgroundColor: bgColor(survivor.Contestant_Tribe_One) }}>{survivor.Contestant_Tribe_One}</td>
              {survivorTotals.map((survivorTotal, index) => {
               if(survivorTotal.name === survivor.Contestant_Name) {
                 return <td>{survivorTotal.total}</td>
               }
             })}
           </tr>
         </tbody>
       ))}
     </table>
    </div>
  )
}