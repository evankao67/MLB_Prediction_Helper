const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config(); // 載入 dotenv 套件

const app = express();
const port = process.env.PORT;

const connection = require('./database/connection');

const playersRouter = require('./routes/players');
const matchRouter = require('./routes/match');
const teamsRouter = require('./routes/teams');
const pitchersRouter = require('./routes/pitchers');
const battersRouter = require('./routes/batters');
const ratingRouter = require('./routes/rating');

app.use(cors());
app.use('/api/players', playersRouter);
app.use('/api/match', matchRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/pitchers', pitchersRouter);
app.use('/api/batters', battersRouter);
app.use('/api/rating', ratingRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
