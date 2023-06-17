CREATE DATABASE `MLB`;
USE `MLB`;

CREATE TABLE `players`(
 player_id VARCHAR(256),
    player_name VARCHAR(256),
    team VARCHAR(256),
    pitcher_or_batter VARCHAR(256)
);

CREATE TABLE `teams`(
 team_id VARCHAR(256),
    team_name VARCHAR(256),
    location VARCHAR(256),
    win VARCHAR(256),
    lose VARCHAR(256),
    win_rate VARCHAR(256)
);



CREATE TABLE `match`(
 match_id VARCHAR(256),
    time VARCHAR(256),
    team_home VARCHAR(256),
    team_away VARCHAR(256),
    sp_team_home VARCHAR(256),
    sp_team_away VARCHAR(256),
    team_home_odds VARCHAR(256),
    team_away_odds VARCHAR(256)    
);

CREATE TABLE `pitchers`(
 player_id VARCHAR(256),
    `Name` VARCHAR(256),
    position VARCHAR(256),
    Win VARCHAR(256),
    Lose VARCHAR(256),
    ERA VARCHAR(256),
    WHIP VARCHAR(256)    
);

CREATE TABLE `batters`(
    player_id VARCHAR(256),
    `Name` VARCHAR(256),
    `position` VARCHAR(256),
    HR VARCHAR(256),
    AVG VARCHAR(256),
    OPS VARCHAR(256)   
);


CREATE TABLE `rating`(
 match_id VARCHAR(256),
    sp_team_home_rating VARCHAR(256),
    sp_team_away_rating VARCHAR(256),
    team_home_rating VARCHAR(256),
    team_away_rating VARCHAR(256),
    team_home_homefield VARCHAR(256),
    team_away_homefield VARCHAR(256),
    team_home_winchance VARCHAR(256),
    team_away_winchance VARCHAR(256)
);
