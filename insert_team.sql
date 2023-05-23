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
LOAD DATA local INFILE '/Users/evan/Downloads/mlb_teams.csv' INTO TABLE baseball_stats
  FIELDS TERMINATED BY ',' 
  ENCLOSED BY '"'
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  ;

select * from baseball_stats where year = 2020;
