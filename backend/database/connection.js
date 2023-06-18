const mysql = require('mysql2');
require('dotenv').config(); // 載入 dotenv 套件

const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: 'mlb',
});

connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to database:', error);
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;
