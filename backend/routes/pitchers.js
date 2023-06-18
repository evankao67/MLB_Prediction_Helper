const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

router.get('/byera', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY era ASC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

router.get('/bywin', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY win DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

router.get('/bylose', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY lose DESC LIMIT 10';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

router.get('/bywhip', (req, res) => {
  const query = 'SELECT * FROM pitchers ORDER BY whip ASC LIMIT 10';
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
