# API Backend

API backend to get user data from MyAnimeList.net

## Implemented Calls:

### Get user's entire anime or manga list:

```
/backend/animelist/{MAL username}

/backend/mangalist/{MAL username}
```

> Note: Anime list is refreshed only once every hour.

##### Response (JSON):

```json
{
    "request_cached": bool,
    "request_cache_expiry": int (seconds),
    "anime" | "manga": list[ dict ]
}
```

##### Example api call:

```
/backend/animelist/Firo_
```

### Get Anime or Manga Details

```
/backend/anime/{id}(/detail_type)

/backend/manga/{id}(/detail_type)
```
