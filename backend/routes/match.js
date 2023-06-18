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
  const query = 'SELECT `time`, team_home, team_home_winchance, team_home_odds, team_away, team_away_winchance, team_away_odds FROM rating, `match` WHERE DATE(`time`) = CURDATE() AND rating.match_id = `match`.match_id';
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


