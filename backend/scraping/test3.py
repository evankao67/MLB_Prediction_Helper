import pprint

abbreviations = {
    '多倫多藍鳥': 'TOR',
    '坦帕灣光芒': 'TBD',
    '奧克蘭運動家': 'OAK',
    '西雅圖水手': 'SEA',
    '德州遊騎兵': 'TEX',
    '匹茲堡海盜': 'PIT',
    '波士頓紅襪': 'BOS',
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
    '紐約洋基':'NYY',
    '巴爾地摩金鶯':'BAL',
    '底特律老虎':'DET',
    '辛辛那堤紅人':'CIN',
    '德州遊騎兵':'TEX',
    '密爾瓦基釀酒人':'MIL',
    '費城費城人':'PHI',
    '明尼蘇達雙城':'MIN',
    '聖路易紅雀':'STL',
    '舊金山巨人':'SFG',
    '堪薩斯皇家':'KCR'
}


match = {'2023-05-24T06:10': {'away': '芝加哥白襪',
                      'away_odds': 1.85,
                      'home': '克里夫蘭守護者',
                      'home_odds': 1.65},
 '2023-05-24T06:35': {'away': '德州遊騎兵',
                      'away_odds': 1.45,
                      'home': '匹茲堡海盜',
                      'home_odds': 2.15},
 '2023-05-24T06:40': {'away': '多倫多藍鳥',
                      'away_odds': 1.85,
                      'home': '坦帕灣光芒',
                      'home_odds': 1.65},
 '2023-05-24T07:05': {'away': '聖地牙哥教士',
                      'away_odds': 1.55,
                      'home': '華盛頓國民',
                      'home_odds': 1.95},
 '2023-05-24T07:20': {'away': '洛杉磯道奇',
                      'away_odds': 2.45,
                      'home': '亞特蘭大勇士',
                      'home_odds': 1.35},
 '2023-05-24T07:40': {'away': '紐約大都會',
                      'away_odds': 1.75,
                      'home': '芝加哥小熊',
                      'home_odds': 1.75},
 '2023-05-24T08:40': {'away': '邁阿密馬林魚',
                      'away_odds': 1.65,
                      'home': '科羅拉多落磯山',
                      'home_odds': 1.85},
 '2023-05-24T09:38': {'away': '波士頓紅襪',
                      'away_odds': 1.7,
                      'home': '洛杉磯天使',
                      'home_odds': 1.8},
 '2023-05-24T09:40': {'away': '奧克蘭運動家',
                      'away_odds': 2.7,
                      'home': '西雅圖水手',
                      'home_odds': 1.28}}

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

new_match = {}

for key, value in match.items():
    date = key[:10]
    away = value['away'].replace(' ', '')
    home = value['home'].replace(' ', '')
    new_key = f"{date}{home}{away}"
    new_match[new_key] = value

match = new_match



pprint.pprint(match)