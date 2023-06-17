CREATE TABLE player_import (
    id VARCHAR(255),
    fullName VARCHAR(255),
    currentTeam VARCHAR(255),
    primaryPosition VARCHAR(255)
);

SHOW VARIABLES LIKE "secure_file_priv";
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA LOCAL INFILE '/Users/evan/python3/players.csv'
INTO TABLE player_import
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from player_import;

INSERT INTO `players`(player_id, player_name, team, pitcher_or_batter)
(SELECT id, fullName, currentTeam, primaryPosition
FROM player_import where id not in (select player_id from`players`));

select * from players;
drop table player_import;

