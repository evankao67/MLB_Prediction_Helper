const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有打者資料
router.get('/', (req, res) => {
  const query = 'SELECT * FROM batters';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving batters:', error);
      res.status(500).json({ error: 'Failed to retrieve batters' });
    } else {
      res.json(results);
    }
  });
});

// 新增打者
router.post('/', (req, res) => {
  const { player_id, position, HR, AVG, OPS } = req.body;
  const query = 'INSERT INTO batters (player_id, position, HR, AVG, OPS) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [player_id, position, HR, AVG, OPS], (error, result) => {
    if (error) {
      console.error('Error adding batter:', error);
      res.status(500).json({ error: 'Failed to add batter' });
    } else {
      res.json({ message: 'Batter added successfully', player_id: result.insertId });
    }
  });
});

// 更新打者資料
router.put('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const { position, HR, AVG, OPS } = req.body;
  const query = 'UPDATE batters SET position = ?, HR = ?, AVG = ?, OPS = ? WHERE player_id = ?';
  connection.query(query, [position, HR, AVG, OPS, player_id], (error, result) => {
    if (error) {
      console.error('Error updating batter:', error);
      res.status(500).json({ error: 'Failed to update batter' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Batter not found' });
      } else {
        res.json({ message: 'Batter updated successfully' });
      }
    }
  });
});

// 刪除打者
router.delete('/:player_id', (req, res) => {
  const { player_id } = req.params;
  const query = 'DELETE FROM batters WHERE player_id = ?';
  connection.query(query, [player_id], (error, result) => {
    if (error) {
      console.error('Error deleting batter:', error);
      res.status(500).json({ error: 'Failed to delete batter' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Batter not found' });
      } else {
        res.json({ message: 'Batter deleted successfully' });
      }
    }
  });
});

module.exports = router;
