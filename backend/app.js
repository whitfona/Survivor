require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
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

// Get Main Challenge questions from MainChallengeAdmin table
app.get('/mc-questions', (req, res) => {
    connection.query('SELECT * FROM MainChallengeAdmin;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
  })
})

// Get Main Challenge players answers from MainChallengeResults table
app.get('/mc-answers', (req, res) => {
    connection.query('SELECT Contestants.Contestant_Name, MainChallengeResults.* FROM Contestants JOIN MainChallengeResults ON Contestants.Contestant_ID = MainChallengeResults.Contestant_ID;', (err, result) => {
      if(err) {
        console.log(err);
      } else {
        res.send(result);
      }
  })
})

app.listen(PORT, hostname, () =>
  console.log(`Server running on http://${hostname}:${PORT}`)
);