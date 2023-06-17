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

// 新增球隊
router.post('/', (req, res) => {
  const { team_name, location } = req.body;
  const query = 'INSERT INTO teams (team_name, location) VALUES (?, ?)';
  connection.query(query, [team_name, location], (error, result) => {
    if (error) {
      console.error('Error adding team:', error);
      res.status(500).json({ error: 'Failed to add team' });
    } else {
      res.json({ message: 'Team added successfully', team_id: result.insertId });
    }
  });
});

// 更新球隊資料
router.put('/:team_id', (req, res) => {
  const { team_id } = req.params;
  const { team_name, location } = req.body;
  const query = 'UPDATE teams SET team_name = ?, location = ? WHERE team_id = ?';
  connection.query(query, [team_name, location, team_id], (error, result) => {
    if (error) {
      console.error('Error updating team:', error);
      res.status(500).json({ error: 'Failed to update team' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Team not found' });
      } else {
        res.json({ message: 'Team updated successfully' });
      }
    }
  });
});

// 刪除球隊
router.delete('/:team_id', (req, res) => {
  const { team_id } = req.params;
  const query = 'DELETE FROM teams WHERE team_id = ?';
  connection.query(query, [team_id], (error, result) => {
    if (error) {
      console.error('Error deleting team:', error);
      res.status(500).json({ error: 'Failed to delete team' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Team not found' });
      } else {
        res.json({ message: 'Team deleted successfully' });
      }
    }
  });
});

module.exports = router;
