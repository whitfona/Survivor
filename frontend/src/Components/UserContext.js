import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";


export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

  const [ players, setPlayers ] = useState([{}]);
  const [ advantageTotals, setAdvantageTotals ] = useState([{}]);
  const [ survivorTotals, setSurvivorTotals ] = useState([{}]);
  const [ week, setWeek ] = useState(5);
  const [ currentPlayer, setCurrentPlayer ] = useState({});

  const value = useMemo(() => ({ players, advantageTotals, survivorTotals, week, setWeek, currentPlayer, setCurrentPlayer }), [ players, advantageTotals, survivorTotals, week, setWeek, currentPlayer, setCurrentPlayer ]);


  // PLAYERS START
  const [playersRaw, setPlayersRaw] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/all-players')
      .then((data) => setPlayersRaw(data.data))
      .catch((err) => console.log(err))
  }, [])

  // PLAYERS END

  // TRIBE SCORES START
  
  const [ tribeQandA, setTribeQandA ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/mc-questions-and-results')
      .then((data) => setTribeQandA(data.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let tribeTotalEric = 0, tribeTotalHeather = 0, tribeTotalErika = 0, tribeTotalGenie = 0, tribeTotalRicard = 0, tribeTotalXander = 0, tribeTotalEvvie = 0, tribeTotalDanny = 0, tribeTotalNasser = 0, tribeTotalDeshawn = 0, tribeTotalBrad = 0, tribeTotalJairus = 0, tribeTotalTiffany = 0, tribeTotalSydney = 0, tribeTotalShantel = 0, tribeTotalDavid = 0, tribeTotalLiana = 0, tribeTotalSara = 0;
    
    tribeQandA.forEach((question) => {
      if (question.Eric_E) { tribeTotalEric += question.Eric_E * question.MC_Point_Value }
      if (question.Heather_A) { tribeTotalHeather += question.Heather_A * question.MC_Point_Value }
      if (question.Erika_C) { tribeTotalErika += question.Erika_C * question.MC_Point_Value }
      if (question.Genie_C) { tribeTotalGenie += question.Genie_C * question.MC_Point_Value }
      if (question.Ricard_F) { tribeTotalRicard += question.Ricard_F * question.MC_Point_Value }
      if (question.Xander_H) { tribeTotalXander += question.Xander_H * question.MC_Point_Value }
      if (question.Evvie_J) { tribeTotalEvvie += question.Evvie_J * question.MC_Point_Value }
      if (question.Danny_M) { tribeTotalDanny += question.Danny_M * question.MC_Point_Value }
      if (question.Nasser_M) { tribeTotalNasser += question.Nasser_M * question.MC_Point_Value }
      if (question.Deshawn_R) { tribeTotalDeshawn += question.Deshawn_R * question.MC_Point_Value }
      if (question.Brad_R) { tribeTotalBrad += question.Brad_R * question.MC_Point_Value }
      if (question.Jairus_R) { tribeTotalJairus += question.Jairus_R * question.MC_Point_Value }
      if (question.Tiffany_S) { tribeTotalTiffany += question.Tiffany_S * question.MC_Point_Value }
      if (question.Sydney_S) { tribeTotalSydney += question.Sydney_S * question.MC_Point_Value }
      if (question.Shantel_S) { tribeTotalShantel += question.Shantel_S* question.MC_Point_Value }
      if (question.David_V) { tribeTotalDavid += question.David_V * question.MC_Point_Value }
      if (question.Liana_W) { tribeTotalLiana += question.Liana_W * question.MC_Point_Value }
      if (question.Sara_W) { tribeTotalSara += question.Sara_W* question.MC_Point_Value }
    })
  
    setSurvivorTotals([
      { name: "Eric E", total: tribeTotalEric },
      { name: "Heather A", total: tribeTotalHeather }, 
      { name: "Erika C", total: tribeTotalErika }, 
      { name: "Genie C", total: tribeTotalGenie }, 
      { name: "Ricard F", total: tribeTotalRicard }, 
      { name: "Xander H", total: tribeTotalXander }, 
      { name: "Evvie J", total: tribeTotalEvvie }, 
      { name: "Danny M", total: tribeTotalDanny }, 
      { name: "Nasser M", total: tribeTotalNasser }, 
      { name: "Deshawn R", total: tribeTotalDeshawn }, 
      { name: "Brad R", total: tribeTotalBrad }, 
      { name: "Jairus R", total: tribeTotalJairus }, 
      { name: "Tiffany S", total: tribeTotalTiffany }, 
      { name: "Sydney S", total: tribeTotalSydney }, 
      { name: "Shantel S", total: tribeTotalShantel }, 
      { name: "David V", total: tribeTotalDavid }, 
      { name: "Liana W", total: tribeTotalLiana }, 
      { name: "Sara W", total: tribeTotalSara }
    ])
  }, [tribeQandA])

  // TRIBE SCORES END

  // ADVANTAGE SCORES START
  const [ advantageData, setAdvantageData ] = useState([]);

   useEffect(() => {
    axios.get('http://localhost:5000/advantage-v2',)
      .then((data) => setAdvantageData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const addAdvantageScores = (player) => {
    let score = 0;
    if (player.Plus_5 === 1) {
          score += 5
        }
        if (player.Minus_5 === 1) {
          score -= 5
        }
    return score;
  }

  useEffect(() => {
    let advantageTotalNick = 0, advantageTotalJill = 0, advantageTotalAnna = 0;
  
    advantageData.forEach(item => {
      if (item.Player_Name === "Nick") {
        advantageTotalNick += addAdvantageScores(item);
      }
      if (item.Player_Name === "Jill") {
        advantageTotalJill += addAdvantageScores(item);
      }
      if (item.Player_Name === "Anna") {
        advantageTotalAnna += addAdvantageScores(item);
      }
    })
  
    setAdvantageTotals([
      { Player_ID: 1, Player_Name: "Nick", Advantage_Total: advantageTotalNick },
      { Player_ID: 2, Player_Name: "Anna", Advantage_Total: advantageTotalAnna },
      { Player_ID: 3, Player_Name: "Jill", Advantage_Total: advantageTotalJill }
    ])

  }, [advantageData])
  
  // ADVANTAGE SCORES END

  // WEEKLYS SCORES START
  const [ weeklysQnA, setWeeklysQnA ] = useState([]);
  const [ weeklysPlayerAnswers, setWeeklysPlayerAnswers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/weeklys-questions',)
      .then((data) => {
        setWeeklysQnA(data.data)
      })
      .catch((err) => console.log(err));
    axios.get('http://localhost:5000/weeklys-answers',)
      .then((data) => setWeeklysPlayerAnswers(data.data))
      .catch((err) => console.log(err));
  }, []);

 let weeklysAnswerKey = [{}];

 for (let i = 0; i< weeklysQnA.length; i++) {
   weeklysAnswerKey[i] = {
     week: weeklysQnA[i].Week_ID,
     q1: weeklysQnA[i].Weeklys_Q1_Answer,
     q2: weeklysQnA[i].Weeklys_Q2_Answer,
     q3: weeklysQnA[i].Weeklys_Q3_Answer,
     q4: weeklysQnA[i].Weeklys_Q4_Answer,
     q5: weeklysQnA[i].Weeklys_Q5_Answer,
   }
 }

  const checkScores = (playerAnswers, answerKey) => {
    let score = 0;
    let q1Array = playerAnswers.WC_Q1_Answer.split(', ');
    let q2Array = playerAnswers.WC_Q2_Answer.split(', ');
    
    if((answerKey.q1.includes(q1Array[0])) || (answerKey.q1.includes(q1Array[1]))) { score += 2}
    if((answerKey.q2.includes(q2Array[0])) || (answerKey.q2.includes(q2Array[1]))) { score += 2}
    if(answerKey.q3 === playerAnswers.WC_Q3_Answer) { score += 2 }
    if(answerKey.q4 === playerAnswers.WC_Q4_Answer) { score += 2 }
    if(answerKey.q5 === playerAnswers.WC_Q5_Answer) { score += 2 }

    return score;
  }

  let weeklysTotalNick = 0, weeklysTotalJill = 0, weeklysTotalAnna = 0;

  weeklysPlayerAnswers.map(playerAnswer => {

    for (let i = 0; i < weeklysAnswerKey.length; i++) {
      if (playerAnswer.Week === weeklysAnswerKey[i].week) {
        // Nick
        
      if (playerAnswer.Player_Name === "Nick") {
        weeklysTotalNick += checkScores(playerAnswer, weeklysAnswerKey[i]);
      }
      //  Jill
      if (playerAnswer.Player_Name === "Jill") {
        weeklysTotalJill += checkScores(playerAnswer, weeklysAnswerKey[i]);
      }
      // Anna
      if (playerAnswer.Player_Name === "Anna") {
        weeklysTotalAnna += checkScores(playerAnswer, weeklysAnswerKey[i]);
      }
      }
    }
  })

  const weeklysTotal = [
    { Player_ID: 1, Player_Name: "Nick", Weeklys_Total: weeklysTotalNick },
    { Player_ID: 2, Player_Name: "Anna", Weeklys_Total: weeklysTotalAnna },
    { Player_ID: 3, Player_Name: "Jill", Weeklys_Total: weeklysTotalJill }
  ]

  // WEEKLYS SCORES END

  let playersOrdered = [{}];

  useEffect(() => {

    for (let i = 0; i < playersRaw.length; i++) {
    let tribe = 0;
    let weeklys = 0;
    let advantage = 0;

    for (let j = 0; j < advantageTotals.length; j++) {
      if (playersRaw[i].Player_ID === advantageTotals[j].Player_ID) {
        advantage += advantageTotals[j].Advantage_Total
      }
    }

    for (let j = 0; j < weeklysTotal.length; j++) {
      if (playersRaw[i].Player_ID === weeklysTotal[j].Player_ID) {
        weeklys += weeklysTotal[j].Weeklys_Total
      }
    }

    for(let j = 0; j < survivorTotals.length; j++) {
      if (playersRaw[i].Player_Tribe.includes(survivorTotals[j].name)) {
        tribe += survivorTotals[j].total
      }
    }

    playersOrdered[i] = { 
      Player_ID: playersRaw[i].Player_ID, 
      Player_Name: playersRaw[i].Player_Name, 
      Tribe_Total: tribe,
      Weeklys_Total: weeklys,
      Bonus: 0,
      Pay_Bonus: 0,
      Advantage_Total: advantage,
      Total_Score: (tribe + weeklys + 0 + 0 + advantage)
    }
  }

    setPlayers(playersOrdered)
  }, [advantageTotals, playersRaw, survivorTotals])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}










// import { createContext, useMemo, useState } from "react";


// export const UserContext = createContext(null);

// export const UserProvider = ({children}) => {

//   const [user, setUser] = useState(null);
//   const [week, setWeek] = useState(null);
//   const [playerAdvantageScores, setPlayerAdvantageScores] = useState([]);
//   const [playerWeeklysScores, setPlayersWeeklyScores] = useState([]);
//   const [survivorScores, setSurvivorScores] = useState([]);

//   const value = useMemo(() => ({user, setUser, week, setWeek, playerAdvantageScores, setPlayerAdvantageScores, playerWeeklysScores, setPlayersWeeklyScores, survivorScores, setSurvivorScores}), [user, setUser, week, setWeek, playerAdvantageScores, setPlayerAdvantageScores, playerWeeklysScores, setPlayersWeeklyScores, survivorScores, setSurvivorScores])

//   return (
//     <UserContext.Provider value={value}>
//       {children}
//     </UserContext.Provider>
//   )
// }