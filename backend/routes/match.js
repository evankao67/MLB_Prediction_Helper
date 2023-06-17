const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有比賽資料
router.get('/', (req, res) => {
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

// 新增比賽
router.post('/', (req, res) => {
  const { time, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds } = req.body;
  const query = 'INSERT INTO `match` (time, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [time, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds], (error, result) => {
    if (error) {
      console.error('Error adding match:', error);
      res.status(500).json({ error: 'Failed to add match' });
    } else {
      res.json({ message: 'Match added successfully', match_id: result.insertId });
    }
  });
});

// 更新比賽資料
router.put('/:match_id', (req, res) => {
  const { match_id } = req.params;
  const { time, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds } = req.body;
  const query = 'UPDATE `match` SET time = ?, team_home = ?, team_away = ?, sp_team_home = ?, sp_team_away = ?, team_home_odds = ?, team_away_odds = ? WHERE match_id = ?';
  connection.query(query, [time, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds, match_id], (error, result) => {
    if (error) {
      console.error('Error updating match:', error);
      res.status(500).json({ error: 'Failed to update match' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Match not found' });
      } else {
        res.json({ message: 'Match updated successfully' });
      }
    }
  });
});

// 刪除比賽
router.delete('/:match_id', (req, res) => {
  const { match_id } = req.params;
  const query = 'DELETE FROM `match` WHERE match_id = ?';
  connection.query(query, [match_id], (error, result) => {
    if (error) {
      console.error('Error deleting match:', error);
      res.status(500).json({ error: 'Failed to delete match' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Match not found' });
      } else {
        res.json({ message: 'Match deleted successfully' });
      }
    }
  });
});

module.exports = router;
