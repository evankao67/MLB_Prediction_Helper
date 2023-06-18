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

doc_json = get_info('https://bdfed.stitch.mlbinfra.com/bdfed/stats/player?stitch_env=prod&season=2023&sportId=1&stats=season&group=hitting&gameType=R&limit=10000&offset=0&sortStat=onBasePlusSlugging&order=desc&playerPool=ALL')
#print(type(doc_json))
#print(json.dumps(doc_json["stats"]))

#print(doc_json["stats"][1].keys())
csv_file_path = '/Users/kenny/Desktop/api/batters.csv'
fieldnames = ['playerId', 'Name', 'HR', 'AVG', 'OPS']

id_v = ''
name_v = ''
hr_v = ''
avg_v = ''
ops_v = ''

with open(csv_file_path, mode = "w", newline="") as file:
  writer = csv.DictWriter(file, fieldnames=fieldnames)
  writer.writeheader()
  for player in doc_json["stats"]:
    for key, value in player.items():
        if key == 'playerId':
            id_v = value
        if key == 'playerFullName':
            name_v = value
        if key == 'homeRuns':
            hr_v = value
        if key == 'avg':
            avg_v = value
        if key == 'ops':
            ops_v = value
    writer.writerow({
        'playerId' : id_v,
        'Name' : name_v,
        'HR' : hr_v,
        'AVG' : avg_v,
        'OPS' : ops_v
    })
    #print(player.keys(), player.values())
