use sql_tutorial;
drop table mlb;
CREATE TABLE MLB (
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

LOAD DATA LOCAL INFILE '/Users/evan/Downloads/mlb_elo.csv'
INTO TABLE MLB
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


select concat(date,team1,team2), elo_prob1, elo_prob2, score1, score2,
(count(case when elo_prob1 > elo_prob2 and score1 > score2 then 1 else 0 end) +
count(case when elo_prob1 < elo_prob2 and score1 < score2 then 1 else 0 end))
as result from MLB 
where !(score1 = 0 and score2 = 0) 
order by date;

alter table MLB add column result varchar(255);
alter table MLB add column `15%` varchar(255);
update mlb set rating_prob1 = round(rating_prob1, 2);
update mlb set rating_prob2 = round(rating_prob2, 2);
update MLB set result = (rating_prob1 > rating_prob2 and score1 > score2) or (rating_prob1 < rating_prob2 and score1 < score2);
update MLB set `15%` = round(rating_prob1 - rating_prob2, 2) = 0.4 or round(rating_prob2 - rating_prob1, 2)= 0.4;

select * from mlb 
where season = 2022
order by date ;

select count(*) as all_game, sum(`result`) as correct_game , sum(`result`)/count(*) as correct_rate from MLb 
where !(score1 = 0 and score2 = 0) and season = 2022
order by date;


select count(*) as all_game,count(*)-sum(`result`) as wrong_game ,((count(*)-sum(`result`))/ sum(`result`)) as win_odd,sum(`result`)/((count(*)-sum(`result`)))as lose_odd,sum(`result`) as correct_game , sum(`result`)/count(*) as correct_rate from MLb 
where !(score1 = 0 and score2 = 0)  and `15%` = 1 and season in (2022,2021,2020,2019,2018,2017,2016,2015,2014,2013) 
order by date;