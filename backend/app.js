require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
const bcrypt = require('bcrypt');

const app = express();

const PORT = process.env.PORT || 5000;
const hostname = '127.0.0.1';

app.use(cors({ origin: 'http://localhost:3000' }));
app.set('view-engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  multipleStatements: true
});

connection.connect();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Survivor</h1>');

});

// Get all survivors and their tribes from Contestants table
app.get('/survivors', (req, res) => {
    connection.query('SELECT * FROM `Contestants`;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
  })
})

// Get Weeklys questions and answers from WeeklysAdmin table
app.get('/weeklys-questions-and-answers', (req, res) => {
    connection.query('SELECT * FROM WeeklysAdmin;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
  })
})

// Get Player_ID, Player_Name, Week, Week_Total_Points, Q1, Q2, Q3, Q4,  players answers from WeeklysPlayerAnswers table
app.get('/weeklys-players-answers', (req, res) => {
    connection.query('SELECT Week, Weeklys_Q1_Answer, Weeklys_Q2_Answer, Weeklys_Q3_Answer, Weeklys_Q4_Answer, Weeklys_Q5_Answer FROM WeeklysAdmin; SELECT WeeklysPlayerAnswers.Week, Players.Player_Name, WeeklysPlayerAnswers.Player_ID, WC_Q1_Answer, WC_Q2_Answer, WC_Q3_Answer, WC_Q4_Answer, WC_Q5_Answer FROM WeeklysPlayerAnswers JOIN Players ON Players.Player_ID = WeeklysPlayerAnswers.Player_ID;', (err, result, fields) => {
      if(err) {
        console.log(err);
      } else {

        let data = [{}];
        for (let i = 0; i < result[1].length; i++) {

          const calcWeeklyScore = ( ) => {
            let score = 0;
            for (let j = 0; j < result[0].length; j++) {
              if (result[1][i].Week === result[0][j].Week) {

                const q1Answer = result[0][j].Weeklys_Q1_Answer;
                const q2Answer = result[0][j].Weeklys_Q2_Answer;
                const q3Answer = result[0][j].Weeklys_Q3_Answer;
                const q4Answer = result[0][j].Weeklys_Q4_Answer;
                const q5Answer = result[0][j].Weeklys_Q5_Answer;
    
                let playerQ1Array = result[1][i].WC_Q1_Answer.split(', ');
                let playerQ2Array = result[1][i].WC_Q2_Answer.split(', ');
    
                if (q1Answer.includes(playerQ1Array[0]) || q1Answer.includes(playerQ1Array[1])) { score += 2; }
                if (q2Answer.includes(playerQ2Array[0]) || q1Answer.includes(playerQ2Array[1])) { score += 2; }
                if (result[1][i].WC_Q3_Answer === q3Answer) { score += 2;}
                if (result[1][i].WC_Q4_Answer === q4Answer) { score += 2; }
                if (result[1][i].WC_Q5_Answer === q5Answer) { score += 2; }
                }
              }
            return score;
          }

          data.push({
            Player_ID: result[1][i].Player_ID,
            Player_Name: result[1][i].Player_Name,
            Week: result[1][i].Week,
            Week_Total: calcWeeklyScore(),
            Q1_Answer: result[1][i].WC_Q1_Answer,
            Q2_Answer: result[1][i].WC_Q2_Answer,
            Q3_Answer: result[1][i].WC_Q3_Answer,
            Q4_Answer: result[1][i].WC_Q4_Answer,
            Q5_Answer: result[1][i].WC_Q5_Answer
          })
        }        
        res.send(data);
    }
  })
})

// Get Player, Player_ID, Sum of each week and every weekly score from Advantage
app.get('/advantage-all-weeks', (req, res) => {
  connection.query('SELECT Players.Player_Name, (Week_1 + Week_2 + Week_3 + Week_4 + Week_5 + Week_6 + Week_7 + Week_8 + Week_9 + Week_10 + Week_11 + Week_12 + Week_13 + Week_14) AS "Total", Advantage.* FROM Advantage JOIN Players ON Players.Player_ID = Advantage.Player_ID GROUP BY Player_ID;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

// Get Player_ID, Player_Name and total from Advantage table
app.get('/advantage-totals', (req, res) => {
  connection.query('SELECT Advantage.Player_ID, Players.Player_Name, (Week_1 + Week_2 + Week_3 + Week_4 + Week_5 + Week_6 + Week_7 + Week_8 + Week_9 + Week_10 + Week_11 + Week_12 + Week_13 + Week_14) AS "Total" FROM Advantage JOIN Players ON Players.Player_ID = Advantage.Player_ID GROUP BY Player_ID;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

// Get Main Challenge questions and results & weekly player totals from MainChallengeAdmin_V2 and MainChallengeResults_V2 table
app.get('/mc-questions-and-totals', (req, res) => {
    connection.query('SELECT MainChallengeAdmin_V2.MC_Questions, MainChallengeAdmin_V2.MC_Point_Value, MainChallengeResults_V2.* FROM MainChallengeAdmin_V2 JOIN MainChallengeResults_V2 WHERE MainChallengeAdmin_V2.Question_Number = MainChallengeResults_V2.Question_Number;', (err, result) => {
      if(err) {
        console.log(err);
      } else {

        let data = [];
        let totals = [];

        for (let i = 0; i < result.length; i++) {
          data.push({
            Question_Number: result[i].Question_Number,
            Question: result[i].MC_Questions,
            Point_Value: result[i].MC_Point_Value,
            Week: result[i].Week,
            Eric_E: result[i].Eric_E * result[i].MC_Point_Value,
            Heather_A: result[i].Heather_A * result[i].MC_Point_Value,
            Erika_C: result[i].Erika_C * result[i].MC_Point_Value,
            Genie_C: result[i].Genie_C * result[i].MC_Point_Value,
            Ricard_F: result[i].Ricard_F * result[i].MC_Point_Value,
            Xander_H: result[i].Xander_H * result[i].MC_Point_Value,
            Evvie_J: result[i].Evvie_J * result[i].MC_Point_Value,
            Danny_M: result[i].Danny_M * result[i].MC_Point_Value,
            Nasser_M: result[i].Nasser_M * result[i].MC_Point_Value,
            Deshawn_R: result[i].Deshawn_R * result[i].MC_Point_Value,
            Brad_R: result[i].Brad_R * result[i].MC_Point_Value,
            Jairus_R: result[i].Jairus_R * result[i].MC_Point_Value,
            Tiffany_S: result[i].Tiffany_S * result[i].MC_Point_Value,
            Sydney_S: result[i].Sydney_S * result[i].MC_Point_Value,
            Shantel_S: result[i].Shantel_S * result[i].MC_Point_Value,
            David_V: result[i].David_V * result[i].MC_Point_Value,
            Liana_W: result[i].Liana_W * result[i].MC_Point_Value,
            Sara_W: result[i].Sara_W * result[i].MC_Point_Value
          })
        }
        
        const weeks = [
          data.filter(week => week.Week === 1),
          data.filter(week => week.Week === 2),
          data.filter(week => week.Week === 3),
          data.filter(week => week.Week === 4),
          data.filter(week => week.Week === 5),
          data.filter(week => week.Week === 6),
          data.filter(week => week.Week === 7),
          data.filter(week => week.Week === 8),
          data.filter(week => week.Week === 9),
          data.filter(week => week.Week === 10),
          data.filter(week => week.Week === 11),
          data.filter(week => week.Week === 12),
          data.filter(week => week.Week === 13),
          data.filter(week => week.Week === 14),
        ]

        for(let i = 0; i < weeks.length; i++) {
          let countEric = 0, countHeather = 0, countErika = 0, countGenie = 0, countRicard = 0, countXander = 0, countEvvie = 0, countDanny = 0, countNasser = 0, countDeshawn = 0, countBrad = 0, countJairus = 0, countTiffany = 0, countSydney = 0, countShantel = 0, countDavid = 0, countLiana = 0, countSara = 0;

          if (weeks[i].length === 0) {
            break;
          } else {
            weeks[i].map((result) => (
              countEric += result.Eric_E,
              countHeather += result.Heather_A,
              countErika += result.Erika_C,
              countGenie += result.Genie_C,
              countRicard += result.Ricard_F,
              countXander += result.Xander_H,
              countEvvie += result.Evvie_J,
              countDanny += result.Danny_M,
              countNasser += result.Nasser_M,
              countDeshawn += result.Deshawn_R,
              countBrad += result.Brad_R,
              countJairus += result.Jairus_R,
              countTiffany += result.Tiffany_S,
              countSydney += result.Sydney_S,
              countShantel += result.Shantel_S,
              countDavid += result.David_V,
              countLiana += result.Liana_W,
              countSara += result.Sara_W
            ))
  
            totals.push({
              Week: i+1,
              Eric_E: countEric,
              Heather_A: countHeather,
              Erika_C: countErika,
              Genie_C: countGenie,
              Ricard_F: countRicard,
              Xander_H: countXander,
              Evvie_J: countEvvie,
              Danny_M: countDanny,
              Nasser_M: countNasser,
              Deshawn_R: countDeshawn,
              Brad_R: countBrad,
              Jairus_R: countJairus,
              Tiffany_S: countTiffany,
              Sydney_S: countSydney,
              Shantel_S: countShantel,
              David_V: countDavid,
              Liana_W: countLiana,
              Sara_W: countSara
            })
          }
        }

        res.send({questions: data, totals: totals});
      }
  })
})

// Get All Player Information, Player_ID, Player_Name, Tribe_Total, Weeklys_Total, Bonus, Pay_Bonus, Advantage_Total
app.get('/players', (req, res) => {
  connection.query('SELECT Player_ID, Player_Name, Player_Tribe, Admin FROM Players;SELECT Advantage.Player_ID, Players.Player_Name, (Week_1 + Week_2 + Week_3 + Week_4 + Week_5 + Week_6 + Week_7 + Week_8 + Week_9 + Week_10 + Week_11 + Week_12 + Week_13 + Week_14) AS "Total" FROM Advantage JOIN Players ON Players.Player_ID = Advantage.Player_ID GROUP BY Player_ID;SELECT MainChallengeAdmin_V2.MC_Questions, MainChallengeAdmin_V2.MC_Point_Value, MainChallengeResults_V2.* FROM MainChallengeAdmin_V2 JOIN MainChallengeResults_V2 WHERE MainChallengeAdmin_V2.Question_Number = MainChallengeResults_V2.Question_Number;SELECT Week, Weeklys_Q1_Answer, Weeklys_Q2_Answer, Weeklys_Q3_Answer, Weeklys_Q4_Answer, Weeklys_Q5_Answer FROM WeeklysAdmin; SELECT WeeklysPlayerAnswers.Week, Players.Player_Name, WeeklysPlayerAnswers.Player_ID, WC_Q1_Answer, WC_Q2_Answer, WC_Q3_Answer, WC_Q4_Answer, WC_Q5_Answer FROM WeeklysPlayerAnswers JOIN Players ON Players.Player_ID = WeeklysPlayerAnswers.Player_ID;SELECT Contestant_ID, Contestant_Name FROM `Contestants`;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // result[0] = Players info, Player_ID, Player_Name, Admin, Player_Tribe
      // result[1] = Advantage Scores Total for each Player, Player_ID, Player_Name, Advantage_Total
      // result[2] = Tribe Scores Total for each Contestant, Contestant_Name, Contestant_Total
      // result[3] = Weeklys Admin answers each week
      // result[4] = Weeklys Player responses each week
      // result[5] = Get all Contestants
      
      // PLAYER START
      let players = [];

      for (let i = 0; i < result[0].length; i++) {
        players[i] = {
          Player_ID: result[0][i].Player_ID,
          Player_Name: result[0][i].Player_Name,
          TribeTotals: 0,
          WeeklysTotals: 0,
          AdvantageTotals: 0,
          Bonus: 0,
          Pay_Bonus: 0,
          Player_Tribe: result[0][i].Player_Tribe,
          Admin: result[0][i].Admin,
        }
      }

      // ADVANTAGE SCORES TOTAL START

      for (i = 0; i < result[1].length; i++) {
        for (a = 0; a < players.length; a++) {
          if (result[4][i].Player_Name === players[a].Player_Name) {
            players[a].AdvantageTotals = result[1][i].Total;
          }
        }
      }  
      
      // TRIBE SCORES TOTAL START
      let tribeTotals= [];

      for (let i = 0; i < result[5].length; i++) {
        tribeTotals[i] = { contestantName: result[5][i].Contestant_Name.replace(/ /g,"_"), total: 0 }
      }

      result[2].forEach((item) => {  
        for (let i = 0; i < tribeTotals.length; i++) {
          for(key in item) {
            if(key.includes(tribeTotals[i].contestantName) ) {
              tribeTotals[i].total += item[key] * item.MC_Point_Value;
            }
          }
        }
      })

      for (let i = 0; i < players.length; i++) {
        tribeTotals.map(contestant => {
          if (players[i].Player_Tribe.replace(/ /g,"_").includes(contestant.contestantName)) {
            players[i].TribeTotals += contestant.total
          }
        })
      }

      // WEEKLYS SCORES TOTAL START
      const checkWeeklysAnswers = (adminAnswers, playerAnswers) => {
        let score = 0;
        const q1Answer = adminAnswers.Weeklys_Q1_Answer;
        const q2Answer = adminAnswers.Weeklys_Q2_Answer;
        const q3Answer = adminAnswers.Weeklys_Q3_Answer;
        const q4Answer = adminAnswers.Weeklys_Q4_Answer;
        const q5Answer = adminAnswers.Weeklys_Q5_Answer;

        let playerQ1Array = playerAnswers.WC_Q1_Answer.split(', ');
        let playerQ2Array = playerAnswers.WC_Q2_Answer.split(', ');

        if (q1Answer.includes(playerQ1Array[0]) || q1Answer.includes(playerQ1Array[1])) { score += 2; }
        if (q2Answer.includes(playerQ2Array[0]) || q1Answer.includes(playerQ2Array[1])) { score += 2; }
        if (playerAnswers.WC_Q3_Answer === q3Answer) { score += 2;}
        if (playerAnswers.WC_Q4_Answer === q4Answer) { score += 2; }
        if (playerAnswers.WC_Q5_Answer === q5Answer) { score += 2; }

        return score;
      }

      for (i = 0; i < result[4].length; i++) {
        for (j = 0; j < result[3].length; j++) {
          for (a = 0; a < players.length; a++) {
            if (result[4][i].Player_Name === players[a].Player_Name) {
              if (result[4][i].Week === result[3][j].Week) {
                players[a].WeeklysTotals += checkWeeklysAnswers(result[3][j], result[4][i])
              }
            }
          }
        }
      }        
      // WEEKLYS SCORES TOTAL END
      
      res.send(players);
    }
  })
})

// Get Contestant and this total score
app.get('/survivor-totals', (req, res) => {
  connection.query('SELECT Player_ID, Player_Name, Player_Tribe, Admin FROM Players;SELECT MainChallengeAdmin_V2.MC_Questions, MainChallengeAdmin_V2.MC_Point_Value, MainChallengeResults_V2.* FROM MainChallengeAdmin_V2 JOIN MainChallengeResults_V2 WHERE MainChallengeAdmin_V2.Question_Number = MainChallengeResults_V2.Question_Number;SELECT Contestant_ID, Contestant_Name, Contestant_Tribe_One FROM `Contestants`;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // result[0] = Players info, Player_ID, Player_Name, Admin, Player_Tribe
      // result[1] = Tribe Scores Total for each Contestant, Contestant_Name, Contestant_Total
      // result[2] = Get all Contestants
      
      // TRIBE SCORES TOTAL START
      let tribeTotals= [];

      for (let i = 0; i < result[2].length; i++) {
        tribeTotals[i] = { contestantName: result[2][i].Contestant_Name.replace(/ /g,"_"), total: 0, tribeOne: result[2][i].Contestant_Tribe_One }
      }

      result[1].forEach((item) => {  
        for (let i = 0; i < tribeTotals.length; i++) {
          for(key in item) {
            if(key.includes(tribeTotals[i].contestantName) ) {
              tribeTotals[i].total += item[key] * item.MC_Point_Value;
            }
          }
        }
      })

      for (let i = 0; i < result[0].length; i++) {
        tribeTotals.map(contestant => {
          if (result[0][i].Player_Tribe.replace(/ /g,"_").includes(contestant.contestantName)) {
            result[0][i].TribeTotals += contestant.total
          }
        })
      }

      res.send(tribeTotals);
    }
  })
})

// Add Player answer for Weekly Questions
app.post('/weekly-submissions', (req, res) => {
  const { userID, week, q1, q2, q3, q4, q5 } = req.body;

  connection.query("INSERT INTO `WeeklysPlayerAnswers` (`Weeklys_Player_Results_ID`, `Player_ID`, `Week`, `WC_Q1_Answer`, `WC_Q2_Answer`, `WC_Q3_Answer`, `WC_Q4_Answer`, `WC_Q5_Answer`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)", [userID, week, q1, q2, q3, q4, q5], (err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.send('Answers Received!')
    }
  })
})

// Create new user
app.post('/create-user', (req, res) => {
  const { name, email, password, passphrase } = req.body;

  connection.query('SELECT Player_Email FROM Players WHERE Player_Email = ?;', email, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      if (result.length > 0) {
        res.status(409).send('Player email already exisits');
      } 
      else if (passphrase != process.env.PASSPHRASE) {
        res.status(406).send('Incorrect passphrase');
      } 
      else {
        bcrypt.hash(password, 10, (err, hash) => {
          if (err) {
            console.log(err)
          } else {
            connection.query('INSERT INTO `Players` (`Player_ID`, `Admin`, `Player_Name`, `Player_Password`, `Player_Email`, `Player_Tribe`) VALUES (NULL, 0, ?, ?, ?, null);', [name, hash, email], (err, result) => {
              if(err) {
                console.log(err)
                res.status(400).send('Error setting up player, please call Josh.')
              } else {
                res.send('Player Added!');
              }
            })
          }
        });
      }
    }
  })
})

// Login User
app.post('/login-user', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM `Players` WHERE Player_Email = ?', [email], (err, result) => {
    if(err) {
      res.send(err);
    } else {
      bcrypt.compare(password, result[0].Player_Password, (err) => {
        if (err) {
          res.status(404).send('Username or Password is incorrect.')
        } else {
          user = {
            Player_ID: result[0].Player_ID,
            Player_Name: result[0].Player_Name,
            Player_Tribe: result[0].Player_Tribe,
            Player_Email: result[0].Player_Email,
            Admin: result[0].Admin
          }
          res.status(200).send(user);
        }
      })
    }
  })
})













// Get all players id, name and player tribe
// SELECT Player_ID, Player_Name, Player_Tribe FROM `Players`
app.get('/all-players', (req, res) => {
  connection.query('SELECT Player_ID, Player_Name, Player_Tribe FROM `Players`', (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})



// Insert into Advantage Table
app.post('/set-advantage', (req, res) => {
  console.log(req.body, req.body.winnerPlayerID);
  const { week, winner, loser } = req.body;
  console.log(winner)
})


// // Get Main Challenge players answers from MainChallengeResults table
// app.get('/mc-answers', (req, res) => {
//     connection.query('SELECT Contestants.Contestant_Name, MainChallengeResults.* FROM Contestants JOIN MainChallengeResults ON Contestants.Contestant_ID = MainChallengeResults.Contestant_ID;', (err, result) => {
//       if(err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//   })
// })

app.listen(PORT, hostname, () =>
  console.log(`Server running on http://${hostname}:${PORT}`)
);