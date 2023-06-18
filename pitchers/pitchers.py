import requests
import json
import pandas as pd
import csv

session = requests.session()
# 設定請求訊息
session.header = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36'}

# 透過輸入的網址送出請求，並取得內容
def get_info(url):
    # 回傳的一般都是JSON格（字典）
    html = session.get(url)
    # 直接取出JSON格式
    return html.json()

doc_json = get_info('https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2023&sportId=1&stats=season&group=pitching&gameType=R&limit=10000&offset=0&sortStat=earnedRunAverage&order=asc&playerPool=ALL')

#remember to change the path
csv_file_path = '/Users/kenny/Desktop/api/pitchers.csv'
fieldnames = ['playerId', 'Name', 'win', 'lose', 'era', 'whip']

id_v = ''
name_v = ''
wins_v = ''
losses_v = ''
era_v = ''
whip_v = value

with open(csv_file_path, mode = "w", newline="") as file:
  writer = csv.DictWriter(file, fieldnames=fieldnames)
  writer.writeheader()
  for player in doc_json["stats"]:
    for key, value in player.items():
        if key == 'playerId':
            id_v = value
        if key == 'playerFullName':
            name_v = value
        if key == 'wins':
            wins_v = value
        if key == 'losses':
            losses_v = value
        if key == 'era':
            era_v = value
        if key == 'whip':
            whip_v = value
    writer.writerow({
        'playerId' : id_v,
        'Name' : name_v,
        'win' : wins_v,
        'lose' : losses_v,
        'era' : era_v,
        'whip' : whip_v
    })
