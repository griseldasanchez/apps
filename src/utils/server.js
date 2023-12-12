require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const { db } = require('./db'); // Import the database module

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    success: 'Connected to the correct AWS RDS instance.',
    dbEndpoint: process.env.DB_HOST,
  });
});

// Simple route that logs a message on the server side and sends it to the client
app.get('/log', (req, res) => {
  const message = 'Hello from the server!';
  // Send the message to the client
  res.send(message);
});

app.get('/about', (req, res) => {
  db.execute('SELECT * FROM recipes')
    .then(([rows]) => {
      res.json(rows);
      // console.log('/about', rows);
    })
    .catch((err) => {
      console.error('Error fetching recipes:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.get('/allRecipes', (req, res) => {
  db.execute('SELECT * FROM recipes')
    .then(([rows]) => {
      res.json(rows);
    })
    .catch((err) => {
      console.error('Error fetching recipes:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});