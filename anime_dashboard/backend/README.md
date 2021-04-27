# API Backend

API backend to get user data from MyAnimeList.net

## Implemented Calls:

#### Get user's entire anime list:

```html
/backend/getAnimeList
```

#### URL Paameters:

```
username: string (Required, MyAnimeList username)
refresh: bool (Optional, Refresh Anime List)
```

> Note: Anime list can be refreshed only once every hour.

#### Response:

##### JSON:

```json
{
    'anilist': <list>
    'error_message': Explanation of error if exists.
}
```

#### Example api call:

```
/backend/getAnimeList?username=mal_user&refresh=true
```
