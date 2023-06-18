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

module.exports = router;
