const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有球隊資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM teams';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving teams:', error);
      res.status(500).json({ error: 'Failed to retrieve teams' });
    } else {
      res.json(results);
    }
  });
});

router.get('/by_winrate', (req, res) => {
  const query = 'SELECT * FROM teams ORDER BY win DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving teams:', error);
      res.status(500).json({ error: 'Failed to retrieve teams' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
