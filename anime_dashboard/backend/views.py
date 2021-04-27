from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

import itertools
import requests
import json
import asyncio


def get_user_list(username):
    ani_list = []
    url = f'https://myanimelist.net/animelist/{username}/load.json'
    for offset in itertools.count(step=300):
        data = requests.get(url + f'?offset={offset}')
        ani_list.extend(data.json())
        if len(data.json()) < 300:
            break

        if offset % 300 > 20:
            break

    return ani_list


class UserList(APIView):

    def get(self, request, format=None):
        username = request.GET.get('username')
        if username is not None:
            anilist = get_user_list(username)
            return Response({'anilist': anilist}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Invalid request'},
                            status=status.HTTP_400_BAD_REQUEST)

        return response
