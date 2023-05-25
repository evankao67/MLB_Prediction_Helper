import json
import requests
import datetime
import mysql.connector

abbreviations = {
    '多倫多藍鳥': 'TOR',
    '坦帕灣光芒': 'TBD',
    '紐約洋基':'NYY',
    '巴爾地摩金鶯':'BAL',
    '波士頓紅襪': 'BOS',
    '奧克蘭運動家': 'OAK',
    '西雅圖水手': 'SEA',
    '德州遊騎兵': 'TEX',
    '洛杉磯天使': 'ANA',
    '洛杉磯道奇': 'LAD',
    '亞特蘭大勇士': 'ATL',
    '紐約大都會': 'NYM',
    '芝加哥小熊': 'CHC',
    '聖地牙哥教士': 'SDP',
    '華盛頓國民': 'WSN',
    '芝加哥白襪': 'CHW',
    '克里夫蘭守護者': 'CLE',
    '邁阿密馬林魚': 'FLA',
    '科羅拉多落磯山': 'COL',
    '休士頓太空人':'HOU',
    '底特律老虎':'DET',
    '辛辛那堤紅人':'CIN',
    '匹茲堡海盜': 'PIT',
    '亞歷桑那響尾蛇':'ARI',
    '密爾瓦基釀酒人':'MIL',
    '費城費城人':'PHI',
    '明尼蘇達雙城':'MIN',
    '聖路易紅雀':'STL',
    '舊金山巨人':'SFG',
    '堪薩斯皇家':'KCR'
}

currentDateAndTime = str(datetime.datetime.now())
today = datetime.date.today()
tomorrow = today + datetime.timedelta(days=1)

if(currentDateAndTime[11] == '1' and currentDateAndTime[12] != '0'):
    game_date = str(tomorrow)
elif(currentDateAndTime[11] == '2'):
    game_date = str(tomorrow)
else:
    game_date = str(today) 

sport = 'MLB'
access_token = 'FREE_20_TIMES_PRE_DAY_FOR_TEST_ONLY'
endpoint = 'https://api.sportsbot.tech/odds_movements'

url = endpoint + '/' + sport + '/' + game_date
params = {'access_token': access_token}
response = requests.get(url, params=params)
result = json.loads(response.text)
result = response.json()

# 只要時間主客隊賠率

match = {}
index = 0

for key, value in result['data'].items():
    index += 1
    match_id = value['info']['lottery_id']
    away = value['info']['away']
    home = value['info']['home']
    time = value['info']['time']
    away_normal = value['odds'][-1]['away_normal']
    home_normal = value['odds'][-1]['home_normal']
    match[str(time)+str(index)] = {'away': away, 'home': home, 'away_odds': away_normal, 'home_odds': home_normal}

# 主客隊中文變英文縮寫

updated_match = {}
for date, info in match.items():
    updated_info = {}
    for key, value in info.items():
        if key in ['home', 'away']:
            team = abbreviations.get(value, value)
            updated_info[key] = team
        else:
            updated_info[key] = value
    updated_match[date] = updated_info

match = updated_match

# 改key

new_match = {}

for key, value in match.items():
    date = key[:10]
    away = value['away'].replace(' ', '')
    home = value['home'].replace(' ', '')
    new_key = f"{date}{home}{away}"
    new_match[new_key] = value

match = new_match

# 建立與MySQL資料庫的連接
cnx = mysql.connector.connect(
    host='localhost',
    user='root',
    password='kelly311',
    database='MLB'
)

# 獲取游標
cursor = cnx.cursor()

# 刪除舊數據
table_name = "lottery"
truncate_query = f"TRUNCATE TABLE {table_name}"
cursor.execute(truncate_query)

# 插入數據
insert_query = "INSERT INTO `lottery` (match_id, team_home_odds, team_away_odds) VALUES (%s, %s, %s)"
matches = [(str(match_id), str(match['home_odds']), str(match['away_odds'])) for match_id, match in match.items()]
cursor.executemany(insert_query, matches)

# 提交指令並關閉連接
cnx.commit()
cursor.close()
cnx.close()
