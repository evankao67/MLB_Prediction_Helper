import json
import requests
import pprint
import datetime


game_date = '2023-05-24'

#中午11點前抓今天賠率
#中午11點後抓隔天賠率


sport = 'MLB'
access_token = 'FREE_20_TIMES_PRE_DAY_FOR_TEST_ONLY'
endpoint = 'https://api.sportsbot.tech/odds_movements'

url = endpoint + '/' + sport + '/' + game_date
params = {'access_token': access_token}
response = requests.get(url, params=params)
result = json.loads(response.text)
result = response.json()
pprint.pprint(result['data'])

