const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有打者資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY NAME';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

// 取得防禦率排行榜
router.get('/era', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY ERA ASC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

// 取得勝投排行榜
router.get('/win', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY Win DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

// 取得敗投排行榜
router.get('/lose', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY Lose DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

// 取得 WHIP 排行榜
router.get('/whip', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY WHIP ASC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
