const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有打者資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM batters ORDER BY NAME';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving batters:', error);
      res.status(500).json({ error: 'Failed to retrieve batters' });
    } else {
      res.json(results);
    }
  });
});

// 取得打擊率排行榜
router.get('/avg', (req, res) => {
  const query = 'SELECT * FROM batters ORDER BY AVG DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving batters:', error);
      res.status(500).json({ error: 'Failed to retrieve batters' });
    } else {
      res.json(results);
    }
  });
});


// 取得全壘打排行榜
router.get('/hr', (req, res) => {
  const query = 'SELECT * FROM batters ORDER BY HR DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving batters:', error);
      res.status(500).json({ error: 'Failed to retrieve batters' });
    } else {
      res.json(results);
    }
  });
});

// 取得攻擊指數排行榜
router.get('/ops', (req, res) => {
  const query = 'SELECT * FROM batters ORDER BY OPS DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving batters:', error);
      res.status(500).json({ error: 'Failed to retrieve batters' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
