import requests

def download_csv(url, save_path):
    response = requests.get(url)
    with open(save_path, 'wb') as file:
        file.write(response.content)

if __name__ == '__main__':
    csv_url = 'https://projects.fivethirtyeight.com/mlb-api/mlb_elo_latest.csv'
    save_location = '/Users/evan/Downloads/mlb_elo_latest_daily.csv'
    download_csv(csv_url, save_location)
