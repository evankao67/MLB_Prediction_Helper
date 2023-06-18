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

// 取得某日比賽資料
// 例如 http://localhost:3000/api/match/getByDate?date=2023-06-23
router.get('/getByDate', (req, res) => {
  const { date } = req.query;
  if (!date) {
    res.status(400).json({ error: 'Missing date parameter' });
    return;
  }
  const query = `SELECT \`time\`, team_home, team_home_winchance, team_home_odds, team_away, team_away_winchance, team_away_odds
                 FROM rating, \`match\`
                 WHERE DATE(\`time\`) = ? AND rating.match_id = \`match\`.match_id`;
  connection.query(query, [date], (error, results) => {
    if (error) {
      console.error('Error retrieving matches:', error);
      res.status(500).json({ error: 'Failed to retrieve matches' });
    } else {
      res.json(results);
    }
  });
});





module.exports = router;


