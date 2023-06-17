const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有投手資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM pitchers';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving pitchers:', error);
      res.status(500).json({ error: 'Failed to retrieve pitchers' });
    } else {
      res.json(results);
    }
  });
});

// 新增投手
router.post('/', (req, res) => {
  const { player_id, position, Win, Lose, ERA, WHIP } = req.body;
  const query = 'INSERT INTO pitchers (player_id, position, Win, Lose, ERA, WHIP) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [player_id, position, Win, Lose, ERA, WHIP], (error, result) => {
    if (error) {
      console.error('Error adding pitcher:', error);
      res.status(500).json({ error: 'Failed to add pitcher' });
    } else {
      res.json({ message: 'Pitcher added successfully', player_id: result.insertId });
    }
  });
});

// 更新投手資料
router.put('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const { position, Win, Lose, ERA, WHIP } = req.body;
  const query = 'UPDATE pitchers SET position = ?, Win = ?, Lose = ?, ERA = ?, WHIP = ? WHERE player_id = ?';
  connection.query(query, [position, Win, Lose, ERA, WHIP, player_id], (error, result) => {
    if (error) {
      console.error('Error updating pitcher:', error);
      res.status(500).json({ error: 'Failed to update pitcher' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Pitcher not found' });
      } else {
        res.json({ message: 'Pitcher updated successfully' });
      }
    }
  });
});

// 刪除投手
router.delete('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const query = 'DELETE FROM pitchers WHERE player_id = ?';
  connection.query(query, [player_id], (error, result) => {
    if (error) {
      console.error('Error deleting pitcher:', error);
      res.status(500).json({ error: 'Failed to delete pitcher' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Pitcher not found' });
      } else {
        res.json({ message: 'Pitcher deleted successfully' });
      }
    }
  });
});

module.exports = router;
