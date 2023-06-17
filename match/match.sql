CREATE TABLE match_odds (
    Date VARCHAR(255),
    Home VARCHAR(255),
    Away VARCHAR(255),
    Home_Odds VARCHAR(255),
    Away_Odds VARCHAR(255)
);

SHOW VARIABLES LIKE "secure_file_priv";
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA LOCAL INFILE '/Users/evan/python3/match.csv'
INTO TABLE match_odds
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


select * from match_odds;

INSERT INTO `match`(match_id, `time`, team_home, team_away, sp_team_home, sp_team_away, team_home_odds, team_away_odds)
SELECT CONCAT(`date`, team1, team2), `date`, team1, team2, pitcher1, pitcher2, NULL, NULL
FROM mlb_elo;

select * from `match`;



UPDATE `match`
INNER JOIN match_odds ON `match`.match_id = match_odds.Date
SET `match`.team_home_odds = match_odds.Home_Odds,
    `match`.team_away_odds = match_odds.Away_Odds
where `match`.match_id = match_odds.Date;




select * from `match` where time = '2023-06-18';

drop table match_odds;
drop table mlb_elo;
