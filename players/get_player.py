import requests
import statsapi
import csv

players = statsapi.get('sports_players', {'sportId':1, 'season':2023})
csv_file_path = '/Users/evan/python3/players.csv'
fieldnames = ['id', 'fullName', 'currentTeam', 'primaryPosition']

#print(len(players["people"]))
with open(csv_file_path, mode='w', newline='') as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    writer.writeheader()
    
    for data in players["people"]:
        PorB = 'Pitcher'
        if data['primaryPosition']['type'] != 'Pitcher':
            PorB = 'Batter'
           
        team = 'null' 
        if len(data['currentTeam'])==2:
            team = 'null'
        else:
            team = data['currentTeam']['name']
              
        writer.writerow({
            'id': data['id'],
            'fullName': data['fullName'],
            'currentTeam': team,
            'primaryPosition': PorB
        })


