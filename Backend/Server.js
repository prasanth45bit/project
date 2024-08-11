const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const port = 8081;
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PMTP@4273',
  database: 'project',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});





app.post('/login', (req, res) => {
  console.log(req.body);
  const { userid, passwor } = req.body;

  db.query(
    'SELECT * FROM login WHERE userid = ? AND passwor = ?',
    [userid, passwor],
    (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).send({ message: 'Database query error' });
        return;
      }

      console.log('Query result:', result);

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Wrong email/password combination!' });
      }
    }
  );
});


app.post('/googlelogin', (req, res) => {
  const { userid } = req.body;

  db.query(
    'SELECT * FROM login WHERE userid = ?',
    [userid],
    (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).send({ message: 'Database query error' });
        return;
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        console.error('Database insert error:', insertErr);
      }
    }
  );
});





app.post('/getUserLevel', (req, res) => {
  const { userid } = req.body;
  console.log('Received userid:', userid); // Add this line

  db.query(
    'SELECT level FROM login WHERE userid = ?',
    [userid],
    (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).send({ message: 'Database query error' });
        return;
      }

      if (result.length > 0) {
        console.log('User Level:', result[0].level); // Add this line
        res.send({ level: result[0].level });
      } else {
        res.status(404).send({ message: 'User not found' });
      }
    }
  );
});






app.post('/program', (req, res) => {
  const { program } = req.body;

  db.query('SELECT code FROM programs WHERE name = ?', [program], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send({ message: 'Database query error' });
      return;
    }

    if (result.length > 0) {
      res.send({ code: result[0].code });
    } else {
      res.status(404).send({ message: 'Example not found' });
    }
  });
});





app.get('/contents', (req, res) => {
  db.query('SELECT * FROM Contents', (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Database query error' });
      return;
    }
    res.json(results);
  });
});





app.get('/exercises/:contentId', (req, res) => {
  const contentId = req.params.contentId;
  db.query('SELECT * FROM Exercises WHERE content_id = ?', [contentId], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Database query error' });
      return;
    }
    res.json(results);
  });
});





app.post('/checkAnswer', (req, res) => {
  const { exerciseId, answers } = req.body;
 
  db.query('SELECT missing_part FROM exercises WHERE exercise_id = ?', [exerciseId], (err, result) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send({ message: 'Database query error' });
      return;
    }

    if (result.length > 0) {
      const correctAnswer = result[0].missing_part;
      const isCorrect = correctAnswer === answers['0']; 
      
      res.send({ isCorrect });
    } else {
      res.status(404).send({ message: 'Exercise not found' });
    }
  });
});





app.post('/compile', (req, res) => {
  const { code } = req.body;
  const filePath = path.join(__dirname, 'temp.c');
  const outputPath = path.join(__dirname, 'temp');

  fs.writeFileSync(filePath, code);

  exec(`gcc ${filePath} -o ${outputPath}`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr });
      return;
    }

    exec(`${outputPath}`, (execError, execStdout, execStderr) => {
      if (execError) {
        res.json({ output: execStderr });
        return;
      }

      res.json({ output: execStdout });
    });
  });
});




app.get('/menu', (req, res) => {
  db.query('SELECT * FROM menu_contents', (err, results) => {
    if (err) {
      console.error('Error fetching menu:', err);
      res.status(500).send({ message: 'Database query error' });
    } else {
      res.json(results);
    }
  });
});




app.get('/exercises/:program', (req, res) => {
  const program = req.params.program;
  const query = 'SELECT * FROM Exercises, Content_name WHERE content_id = ?';

  db.query(query, [program], (err, results) => {
    if (err) {
      console.error('Error fetching exercises:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
