CREATE TABLE batters_tmp (
    playerId VARCHAR(255),
    `Name` VARCHAR(255),
    HR VARCHAR(255),
    `AVG` VARCHAR(255),
    `OPS` VARCHAR(255)
);

SHOW VARIABLES LIKE "secure_file_priv";
SET GLOBAL local_infile = on;
SHOW VARIABLES LIKE 'local_infile';
LOAD DATA LOCAL INFILE '/Users/kenny/Desktop/api/batters.csv'
INTO TABLE batters_tmp
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

INSERT INTO batters(player_id,`Name` , HR, `AVG`, OPS)
SELECT playerId, `Name`, HR, `AVG`, `OPS`
FROM batters_tmp;

DROP TABLE batters_tmp;
