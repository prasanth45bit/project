const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

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
  console.log('Connected to the database    ');
});

app.listen(8081, () => {
  console.log('vandhutanda port number 8081 la');
});

app.post('/login', (req, res) => {
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

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: 'Wrong email/password combination!' });
      }
    }
  );
});
