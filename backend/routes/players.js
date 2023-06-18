const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有球員資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM players';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving players:', error);
      res.status(500).json({ error: 'Failed to retrieve players' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
