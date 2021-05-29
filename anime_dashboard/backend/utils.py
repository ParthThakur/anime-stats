from django.utils import timezone

import itertools
import requests
import json
import asyncio
from datetime import datetime

DATETIME_FORMAT = '%m/%d/%Y, %H:%M:%S, %Z%z'
JIKAN_BASE_URL = 'http://127.0.0.1:8000/v3'


def get_user_list(username, refresh=False):
    if refresh:
        ani_list = []
        url = f'https://myanimelist.net/animelist/{username}/load.json'
        for offset in itertools.count(step=300):
            data = requests.get(url + f'?offset={offset}')
            ani_list.extend(data.json())
            if len(data.json()) < 300:
                break

            if offset % 300 > 20:
                break

        with open(f'data/anime_lists/{username}.json', 'w') as fw:
            json.dump({'anime_list': ani_list,
                       'last_updated': timezone.now().strftime(DATETIME_FORMAT)}, fw)
        return ani_list

    else:
        try:
            with open(f'data/anime_lists/{username}.json', 'r') as fr:
                data = json.load(fr)
                return data['anime_list'], datetime.strptime(data['last_updated'], DATETIME_FORMAT)
        except FileNotFoundError:
            return get_user_list(username, refresh=True)


def get_info(id: int, page: str, session: requests.Session = None) -> dict:
    data = requests.get(f'{JIKAN_BASE_URL}/{page}/{id}')
    return data.json(), data.status_code
