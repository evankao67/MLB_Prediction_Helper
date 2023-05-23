CREATE DATABASE `MLB`;
USE `MLB`;
DROP DATABASE `MLB`;

CREATE TABLE `players`(
	`player_id` INT PRIMARY KEY,
    `player_name` VARCHAR(20),
    `team` VARCHAR(20),
    `pitcher_or_batter` VARCHAR(2)
);

INSERT INTO `players` VALUES(1,'Max Scherzer','Mets','P');
INSERT INTO `players` VALUES(2,'Gerrit Cole','Yankees','P');

CREATE TABLE `teams`(
	`team_id` INT PRIMARY KEY,
    `team_name` VARCHAR(20),
    `location` VARCHAR(20)
);
INSERT INTO `teams` VALUES(1,'Mets','New York');
INSERT INTO `teams` VALUES(2,'Yankees','New York');

CREATE TABLE `match`(
	`match_id` INT PRIMARY KEY,
    `time` TIMESTAMP,
    `team_home` VARCHAR(20),
    `team_away` VARCHAR(20),
    `sp_team_home` VARCHAR(20),
    `sp_team_away` VARCHAR(20),
    `team_home_odds` DECIMAL(3,2),
    `team_away_odds` DECIMAL(3,2)    
);
INSERT INTO `match` VALUES(1,'2023-03-23 10:30:00','Yankees','Mets','Gerrit Cole','Max Scherzer',1.85,1.65);

CREATE TABLE `pitchers`(
	`player_id` INT PRIMARY KEY,
    `position` VARCHAR(20),
    `Win` INT,
    `Lose` INT,
    `ERA` DECIMAL(3,2),
    `WHIP` DECIMAL(3,2)    
);

INSERT INTO `pitchers` VALUES(1,'P',4,2,2.93,0.98);
INSERT INTO `pitchers` VALUES(2,'P',3,3,3.02,1.01);

CREATE TABLE `batters`(
	`player_id` INT PRIMARY KEY,
    `position` VARCHAR(20),
    `HR` INT,
    `AVG` VARCHAR(5),
    `OPS` VARCHAR(5)    
);

INSERT INTO `batters` VALUES(3,'SS',4,'.293','1.041');

CREATE TABLE `rating`(
	`match_id` INT PRIMARY KEY,
    `sp_team_home_rating` INT,
    `sp_team_away_rating` INT,
    `team_home_rating` INT,
    `team_away_rating` INT,
    `team_home_homefield` INT,
    `team_away_homefield` INT,
    `team_home_winchance` VARCHAR(5),
    `team_away_winchance` VARCHAR(5)
);

INSERT INTO `rating` VALUES
(1,31,49,1532,1562,22,-24,'53%','47%');


