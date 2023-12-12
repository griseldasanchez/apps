require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const { connection, db } = require('./db'); // Import the database module
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// app.get('/', (req, res) => {
//   db.execute('SELECT 1')
//     .then(() => {
//       res.json({ success: 'Database connection successful!' });
//     })
//     .catch((err) => {
//       console.error('Error connecting to the database:', err);
//       res.status(500).json({ error: 'Database connection failed!' });
//     });
// });

app.get('/', (req, res) => {
  res.json({
    success: 'Connected to the correct AWS RDS instance.',
    dbEndpoint: connection.config.host,
  });
});

// Simple route that logs a message on the server side and sends it to the client
app.get('/log', (req, res) => {
  const message = 'Hello from the server!';
console.log(`process.env ---> + ${process.env}`);
console.log(`baseURL ---> + ${process.env.BASE_URL}`);

  // Send the message to the client
  res.send(message);
});

app.get('/about', (req, res) => {
  db.execute('SELECT * FROM recipes')
    .then(([rows]) => {
      res.json(rows);
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
  console.log(`Server is running on ${BASE_URL}`);
});
