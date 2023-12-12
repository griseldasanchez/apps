const mysql = require('mysql2');

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT, // MySQL default port
};

const pool = mysql.createPool(dbConfig);
const connection = mysql.createConnection(dbConfig);

module.exports = {
  connection: connection,
  db: pool.promise(), // Use promises for MySQL2 queries
};