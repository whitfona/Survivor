require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const e = require('express');
// const bcrypt = require('bcrypt');

const app = express();

const PORT = process.env.PORT || 5000;
const hostname = '127.0.0.1';

app.use(cors({ origin: 'http://localhost:3000'}));
app.set('view-engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
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

// Get all data showing the advantage scores from Advantage table
app.get('/advantage', (req, res) => {
    connection.query('SELECT Players.Player_Name, Advantage.* FROM Players RIGHT JOIN Advantage ON Players.Player_ID = Advantage.Player_ID;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        // res.send(result);
        res.json(result);
      }
  })
})

// Get Weeklys questions from WeeklysAdmin table
app.get('/weeklys-questions', (req, res) => {
    connection.query('SELECT * FROM WeeklysAdmin;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
  })
})

// Get Weeklys players answers from WeeklysPlayerAnswers table
app.get('/weeklys-answers', (req, res) => {
    connection.query('SELECT Players.Player_Name, WeeklysPlayerAnswers.* FROM Players JOIN WeeklysPlayerAnswers ON Players.Player_ID = WeeklysPlayerAnswers.Player_ID;', (err, result) => {
      if(err) {
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
  const { user, week, q1, q2, q3, q4, q5 } = req.body;

  connection.query("INSERT INTO `WeeklysPlayerAnswers` (`Weeklys_Player_Results_ID`, `Player_ID`, `Week`, `WC_Q1_Answer`, `WC_Q2_Answer`, `WC_Q3_Answer`, `WC_Q4_Answer`, `WC_Q5_Answer`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?)", [user, week, q1, q2, q3, q4, q5], (err, result) => {
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
      if (result.length > 0) {
        if (result[0].Player_Password === password) {
          user = {
            Player_ID: result[0].Player_ID,
            Player_Name: result[0].Player_Name,
            Player_Tribe: result[0].Player_Tribe,
            Player_Email: result[0].Player_Email,
            Admin: result[0].Admin
          }
          res.send(user);
        }
        else {
          res.status(404).send('Username or Password is incorrect.')
        }
      } else {
        res.status(404).send('Username or Password is incorrect.')
      }
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


// Get Advantage from Advantage_V2
app.get('/advantage-v2', (req, res) => {
  connection.query('SELECT Players.Player_Name, Advantage_V2.* FROM Players JOIN Advantage_V2 WHERE Players.Player_ID = Advantage_V2.Player_ID;', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

// // Get Main Challenge questions from MainChallengeAdmin table
// app.get('/mc-questions', (req, res) => {
//     connection.query('SELECT * FROM MainChallengeAdmin;', (err, result) => {
//       if(err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//   })
// })

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