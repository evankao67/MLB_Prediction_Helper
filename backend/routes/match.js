const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有比賽資料
router.get('/all', (req, res) => {
  const query = 'SELECT * FROM `match`';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    } else {
      res.json(results);
    }
  });
});

// 取得當日比賽資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM `match` WHERE DATE(`time`) = CURDATE()';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    } else {
      res.json(results);
    }
  });
});



module.exports = router;
