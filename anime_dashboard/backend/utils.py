import itertools
import requests


DATETIME_FORMAT = '%m/%d/%Y, %H:%M:%S, %Z%z'
JIKAN_BASE_URL = 'http://127.0.0.1:8000/v3'


def get_user_list(username, list_type):
    key = list_type[:5]

    url = f'{JIKAN_BASE_URL}/user/{username}/{list_type}/all/'
    data = requests.get(url)
    list_ = data.json()

    for offset in itertools.count(start=2):
        if offset > 20:
            break

        else:
            _data = requests.get(url + f'{offset}').json()
            list_[key].extend(_data[key])

            if len(_data[key]) < 300:
                break

    return list_, data.status_code


def get_info(id: int, page: str, detail: str = None) -> dict:
    request_url = f'{JIKAN_BASE_URL}/{page}/{id}/'
    if detail is not None:
        request_url += detail
    data = requests.get(request_url)
    return data.json(), data.status_code
