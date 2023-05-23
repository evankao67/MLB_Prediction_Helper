CREATE TABLE baseball_stats (
  year VARCHAR(100),
  league_id VARCHAR(100),
  division_id VARCHAR(100),
  `rank` VARCHAR(100),
  games_played VARCHAR(100),
  home_games VARCHAR(100),
  wins VARCHAR(100),
  losses VARCHAR(100),
  division_winner VARCHAR(100),
  wild_card_winner VARCHAR(100),
  league_winner VARCHAR(100),
  world_series_winner VARCHAR(100),
  runs_scored VARCHAR(100),
  at_bats VARCHAR(100),
  hits VARCHAR(100),
  doubles VARCHAR(100),
  triples VARCHAR(100),
  homeruns VARCHAR(100),
  walks VARCHAR(100),
  strikeouts_by_batters VARCHAR(100),
  stolen_bases VARCHAR(100),
  caught_stealing VARCHAR(100),
  batters_hit_by_pitch VARCHAR(100),
  sacrifice_flies VARCHAR(100),
  opponents_runs_scored VARCHAR(100),
  earned_runs_allowed VARCHAR(100),
  earned_run_average VARCHAR(100),
  complete_games VARCHAR(100),
  shutouts VARCHAR(100),
  saves VARCHAR(100),
  outs_pitches VARCHAR(100),
  hits_allowed VARCHAR(100),
  homeruns_allowed VARCHAR(100),
  walks_allowed VARCHAR(100),
  strikeouts_by_pitchers VARCHAR(100),
  `errors` VARCHAR(100),
  double_plays VARCHAR(100),
  fielding_percentage VARCHAR(100),
  team_name VARCHAR(100),
  ball_park VARCHAR(100),
  home_attendance VARCHAR(100)
);

SHOW VARIABLES LIKE "secure_file_priv";
SHOW VARIABLES LIKE 'local_infile';
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA local INFILE '/Users/kenny/Desktop/api/mlb_teams.csv' INTO TABLE baseball_stats
  FIELDS TERMINATED BY ',' 
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  ;
  
INSERT INTO teams(team_name, location)
SELECT team_name, ball_park FROM baseball_stats WHERE year = 2020;

SET SQL_SAFE_UPDATES = 0;

UPDATE teams
SET team_id = 
    CASE
        WHEN team_name = 'Arizona Diamondbacks' THEN 'ARI'
        WHEN team_name = 'Atlanta Braves' THEN 'ATL'
        WHEN team_name = 'Baltimore Orioles' THEN 'BAL'
        WHEN team_name = 'Boston Red Sox' THEN 'BOS'
        WHEN team_name = 'Chicago Cubs' THEN 'CHC'
        WHEN team_name = 'Chicago White Sox' THEN 'CHW'
        WHEN team_name = 'Cincinnati Reds' THEN 'CIN'
        WHEN team_name = 'Cleveland Indians' THEN 'CLE'
        WHEN team_name = 'Colorado Rockies' THEN 'COL'
        WHEN team_name = 'Detroit Tigers' THEN 'DET'
        WHEN team_name = 'Miami Marlins' THEN 'FLA'
        WHEN team_name = 'Houston Astros' THEN 'HOU'
        WHEN team_name = 'Kansas City Royals' THEN 'KAN'
        WHEN team_name = 'Los Angeles Angels of Anaheim' THEN 'LAA'
        WHEN team_name = 'Los Angeles Dodgers' THEN 'LAD'
        WHEN team_name = 'Milwaukee Brewers' THEN 'MIL'
        WHEN team_name = 'Minnesota Twins' THEN 'MIN'
        WHEN team_name = 'New York Mets' THEN 'NYM'
        WHEN team_name = 'New York Yankees' THEN 'NYY'
        WHEN team_name = 'Oakland Athletics' THEN 'OAK'
        WHEN team_name = 'Philadelphia Phillies' THEN 'PHI'
        WHEN team_name = 'Pittsburgh Pirates' THEN 'PIT'
        WHEN team_name = 'San Diego Padres' THEN 'SD'
        WHEN team_name = 'San Francisco Giants' THEN 'SF'
        WHEN team_name = 'Seattle Mariners' THEN 'SEA'
        WHEN team_name = 'St. Louis Cardinals' THEN 'STL'
        WHEN team_name = 'Tampa Bay Rays' THEN 'TB'
        WHEN team_name = 'Texas Rangers' THEN 'TEX'
        WHEN team_name = 'Toronto Blue Jays' THEN 'TOR'
        WHEN team_name = 'Washington Nationals' THEN 'WSN'
        ELSE 'Unknown'
    END;
