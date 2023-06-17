const express = require('express');
const router = express.Router();
const connection = require('../database/connection');

// 取得所有評分資料
router.get('/', (req, res) => {
    const query = 'SELECT * FROM rating';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error retrieving ratings:', error);
            res.status(500).json({ error: 'Failed to retrieve ratings' });
        } else {
            res.json(results);
        }
    });
});

// 新增評分資料
router.post('/', (req, res) => {
    const { match_id, sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance } = req.body;
    const query = 'INSERT INTO rating (match_id, sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [match_id, sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance], (error, result) => {
        if (error) {
            console.error('Error adding rating:', error);
            res.status(500).json({ error: 'Failed to add rating' });
        } else {
            res.json({ message: 'Rating added successfully', match_id: result.insertId });
        }
    });
});

// 更新評分資料
router.put('/:match_id', (req, res) => {
    const { match_id } = req.params;
    const { sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance } = req.body;
    const query = 'UPDATE rating SET sp_team_home_rating = ?, sp_team_away_rating = ?, team_home_rating = ?, team_away_rating = ?, team_home_homefield = ?, team_away_homefield = ?, team_home_winchance = ?, team_away_winchance = ? WHERE match_id = ?';
    connection.query(query, [sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance, match_id], (error, result) => {
        if (error) {
            console.error('Error updating rating:', error);
            res.status(500).json({ error: 'Failed to update rating' });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Rating not found' });
            } else {
                res.json({ message: 'Rating updated successfully' });
            }
        }
    });
});

// 刪除評分資料
router.delete('/:match_id', (req, res) => {
    const { match_id } = req.params;
    const query = 'DELETE FROM rating WHERE match_id = ?';
    connection.query(query, [match_id], (error, result) => {
        if (error) {
            console.error('Error deleting rating:', error);
            res.status(500).json({ error: 'Failed to delete rating' });
        } else {
            if (result.affectedRows === 0) {
                res.status(404).json({ error: 'Rating not found' });
            } else {
                res.json({ message: 'Rating deleted successfully' });
            }
        }
    });
});

module.exports = router;
