CREATE TABLE mlb_elo (
    date VARCHAR(255),
    season VARCHAR(255),
    neutral VARCHAR(255),
    playoff VARCHAR(255),
    team1 VARCHAR(255),
    team2 VARCHAR(255),
    elo1_pre FLOAT,
    elo2_pre FLOAT,
    elo_prob1 FLOAT,
    elo_prob2 FLOAT,
    elo1_post FLOAT,
    elo2_post FLOAT,
    rating1_pre FLOAT,
    rating2_pre FLOAT,
    pitcher1 VARCHAR(255),
    pitcher2 VARCHAR(255),
    pitcher1_rgs FLOAT,
    pitcher2_rgs FLOAT,
    pitcher1_adj FLOAT,
    pitcher2_adj FLOAT,
    rating_prob1 FLOAT,
    rating_prob2 FLOAT,
    rating1_post FLOAT,
    rating2_post FLOAT,
    score1 FLOAT,
    score2 FLOAT
);

SHOW VARIABLES LIKE "secure_file_priv";
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA LOCAL INFILE '/Users/kenny/Desktop/api/mlb_elo.csv'
INTO TABLE mlb_elo
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

INSERT INTO rating(match_id, sp_team_home_rating, sp_team_away_rating, team_home_rating, team_away_rating, team_home_homefield, team_away_homefield, team_home_winchance, team_away_winchance)
SELECT CONCAT(`date`, team1, team2), pitcher1_adj, pitcher2_adj, elo1_pre, elo2_pre, 24, 0, rating_prob1, rating_prob2
FROM mlb_elo;
