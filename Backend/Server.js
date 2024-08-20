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
    'SELECT userid, passwor FROM logindata WHERE userid = ? AND passwor = ? ',
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
    'SELECT * FROM logindata WHERE userid = ?',
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



 

app.post('/program', (req, res) => {
  const { program } = req.body;

  // Fetch both code and code1 in one query
  db.query(
    `SELECT code, code1, code2 FROM programs WHERE name = ?`,
    [program],
    (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        res.status(500).send({ message: 'Database query error' });
        return;
      }

      if (result.length > 0) {
        res.send({ code: result[0].code, code1: result[0].code1, code2: result[0].code2, });
      } else {
        res.send({ message: 'No code or exercise found for the given program.' });
      }
    }
  );
});




app.get('/question/:questionId/:contentId', (req, res) => {
  const { questionId, contentId } = req.params;
  db.query(
    'SELECT question FROM c_program_questions WHERE question_id = ? AND menu_content_id = ?', 
    [questionId, contentId], 
    (err, result) => {
      if (err) {
        console.error('Database query error:', err);
        return res.status(500).json({ message: 'Database query error' });
      }
      
      if (result.length > 0) {
        res.json(result[0]); 
      } else {
        res.status(404).json({ message: 'Question not found' });
      }
    }
  );
});


app.post('/compile', (req, res) => {
  const { code } = req.body;

  const filePath = path.join(__dirname, 'temp', 'program.c');
  fs.writeFileSync(filePath, code);

  const outputFilePath = path.join(__dirname, 'temp', 'program.out');
  const compileCommand = `gcc ${filePath} -o ${outputFilePath}`;

  exec(compileCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Compilation error: ${stderr}`);
      return res.json({ output: `Compilation error: ${stderr}` });
    }

    exec(outputFilePath, (runError, runStdout, runStderr) => {
      if (runError) {
        console.error(`Runtime error: ${runStderr}`);
        return res.json({ output: `Runtime error: ${runStderr}` });
      }

      res.json({ output: runStdout });
    });
  });
});




app.post('/updatelevel', (req, res) => {
  const { level, userId } = req.body;

  db.query('UPDATE logindata SET level = ? WHERE userid = ?', [level, userId], (err, updateResults) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to update level.' });
    }
    else{
    res.json({ message: 'Level updated successfully!' });
    }
  });
});






app.get('/exercisemenu', (req, res) => {
  db.query('SELECT menu_content_name FROM menu_contents', (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Database query error' });
      return;
    }
    res.json(results);
  });
});





app.get('/exercises/:contentId', (req, res) => {
  const contentId = req.params.contentId;
  db.query('SELECT * FROM Exercises WHERE menu_content_id = ?', [contentId], (err, results) => {
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





app.get('/questions/:content_id', (req, res) => {
  const content_id = req.params.content_id;

  db.query('SELECT * FROM c_program_questions WHERE menu_content_id = ?', [content_id], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).send({ message: 'Database query error' });
      return;
    }

    res.json(results);
  });
});







app.get('/menu', (req, res) => {
  const query = `
    SELECT mc.menu_content_id, mc.menu_content_name, mc.menu_content_path, mo.option_name, mo.option_path
    FROM menu_contents mc
    LEFT JOIN menu_options mo ON mc.menu_content_id = mo.menu_content_id
    ORDER BY mc.menu_content_id, mo.option_id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching menu:', err);
      res.status(500).send({ message: 'Database query error' });
    } else {
      const menuItems = [];

      results.forEach(row => {
        let menuItem = menuItems.find(item => item.menu_content_id === row.menu_content_id);
        if (!menuItem) {
          menuItem = {
            menu_content_id: row.menu_content_id,
            menu_content_name: row.menu_content_name,
            menu_content_path: row.menu_content_path,
            options: []
          };
          menuItems.push(menuItem);
        }

        if (row.option_name) {
          menuItem.options.push({
            name: row.option_name,
            path: row.option_path
          });
        }
      });

      res.json(menuItems);
    }
  });
});





app.get('/exercises/:contentId/:program', (req, res) => {
  const program = req.params.program;
  const content_id = req.params.contentId;

  const query = 'SELECT question_text FROM Exercises WHERE menu_content_id = ? AND exercise_id = ?';

  db.query(query, [content_id, program], (err, results) => {
    if (err) {
      console.error('Error fetching exercises:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);
  });
});




app.get('/new-content/:newcontentId', (req, res) => {
  const contentId = req.params.newcontentId;
  db.query(
    'SELECT * FROM menu_contents WHERE menu_content_id = ?', [contentId], 
    (err, result) => {
      if (err) {
        res.status(500).send('Error fetching content');
      } else {
        console.log(result)
        const nextContent = {id: result[0].menu_content_id,path: result[0].menu_content_path };
        res.send(nextContent);
      }
    }
  );
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

