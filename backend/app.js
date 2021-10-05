require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
// const bcrypt = require('bcrypt');

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















// SELECT MainChallengeAdmin_V2.MC_Questions, MainChallengeAdmin_V2.MC_Point_Value, MainChallengeResults_V2.* FROM MainChallengeAdmin_V2 JOIN MainChallengeResults_V2 WHERE MainChallengeAdmin_V2.Question_Number = MainChallengeResults_V2.Question_Number;

// Get Main Challenge questions and results from MainChallengeAdmin_V2 and MainChallengeResults_V2 table
app.get('/mc-questions-and-results', (req, res) => {
    connection.query('SELECT MainChallengeAdmin_V2.MC_Questions, MainChallengeAdmin_V2.MC_Point_Value, MainChallengeResults_V2.* FROM MainChallengeAdmin_V2 JOIN MainChallengeResults_V2 WHERE MainChallengeAdmin_V2.Question_Number = MainChallengeResults_V2.Question_Number;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
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

  if (passphrase != process.env.PASSPHRASE) {
    console.log('Incorrect Passphrase!');
  } else {
    connection.query('INSERT INTO `Players` (`Player_ID`, `Admin`, `Player_Name`, `Player_Password`, `Player_Email`, `Player_Tribe`) VALUES (NULL, 0, ?, ?, ?, null);', [name, password, email], (err, result) => {
      if(err) {
        res.status(400).send('Player not added.')
      } else {
        res.send('Player Added!');
      }
    })
  }
})

// Login User
app.post('/login-user', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM `Players` WHERE Player_Email = ?', [email], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      if ((result.length > 0) && (result[0].Player_Password === password)) {
        user = {
            Player_ID: result[0].Player_ID,
            Player_Name: result[0].Player_Name,
            Player_Tribe: result[0].Player_Tribe,
            Player_Email: result[0].Player_Email,
            Admin: result[0].Admin
          }
          res.status(200).send(user);
      } else {
        res.status(404).send('Username or Password is incorrect.')
      }
    }
  })
})
// app.post('/login-user', (req, res) => {
//   const { email, password } = req.body;

//   connection.query('SELECT * FROM `Players` WHERE Player_Email = ?', [email], (err, result) => {
//     if(err) {
//       console.log(err);
//     } else {
//       if (result.length > 0) {
//         if (result[0].Player_Password === password) {
//           user = {
//             Player_ID: result[0].Player_ID,
//             Player_Name: result[0].Player_Name,
//             Player_Tribe: result[0].Player_Tribe,
//             Player_Email: result[0].Player_Email,
//             Admin: result[0].Admin
//           }
//           res.send(user);
//         }
//         else {
//           res.status(404).send('Username or Password is incorrect.')
//         }
//       } else {
//         res.status(404).send('Username or Password is incorrect.')
//       }
//     }
//   })
// })

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