CREATE TABLE pitchers_tmp (
    playerId VARCHAR(255),
    `Name` VARCHAR(255),
    win VARCHAR(255),
    lose VARCHAR(255),
    era VARCHAR(255),
    whip VARCHAR(255)
);

SHOW VARIABLES LIKE "secure_file_priv";
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA LOCAL INFILE '/Users/kenny/Desktop/api/pitchers.csv'
INTO TABLE pitchers_tmp
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

INSERT INTO pitchers(player_id, `Name`, Win, Lose, ERA, WHIP)
SELECT playerId, `Name`, win, lose, era, whip
FROM pitchers_tmp;

DROP TABLE pitchers_tmp;
