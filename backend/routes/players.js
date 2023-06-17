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

// 新增球員
router.post('/', (req, res) => {
  const { player_name, team, pitcher_or_batter } = req.body;
  const query = 'INSERT INTO players (player_name, team, pitcher_or_batter) VALUES (?, ?, ?)';
  connection.query(query, [player_name, team, pitcher_or_batter], (error, result) => {
    if (error) {
      console.error('Error adding player:', error);
      res.status(500).json({ error: 'Failed to add player' });
    } else {
      res.json({ message: 'Player added successfully', player_id: result.insertId });
    }
  });
});

// 更新球員資料
router.put('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const { player_name, team, pitcher_or_batter } = req.body;
  const query = 'UPDATE players SET player_name = ?, team = ?, pitcher_or_batter = ? WHERE player_id = ?';
  connection.query(query, [player_name, team, pitcher_or_batter, player_id], (error, result) => {
    if (error) {
      console.error('Error updating player:', error);
      res.status(500).json({ error: 'Failed to update player' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Player not found' });
      } else {
        res.json({ message: 'Player updated successfully' });
      }
    }
  });
});

// 刪除球員
router.delete('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const query = 'DELETE FROM players WHERE player_id = ?';
  connection.query(query, [player_id], (error, result) => {
    if (error) {
      console.error('Error deleting player:', error);
      res.status(500).json({ error: 'Failed to delete player' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Player not found' });
      } else {
        res.json({ message: 'Player deleted successfully' });
      }
    }
  });
});

module.exports = router;
