from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone

from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from datetime import datetime, timedelta

from .utils import get_user_list
from .utils import get_info


class UserList(APIView):

    def get(self, request, username, format=None):
        refresh = True if request.GET.get('refresh') == "true" else False
        if username is not None:
            if refresh:
                anilist, last_updated = get_user_list(username, refresh=False)
                if last_updated + timedelta(seconds=3600) > timezone.now():
                    return Response({'anilist': anilist,
                                     'error_message': 'Can\'t refresh within 1 hour of last refresh.'},
                                    status=status.HTTP_403_FORBIDDEN)  # Should be 202_NO_CHANGE

            anilist = get_user_list(username, refresh=refresh)
            return Response({'anilist': anilist}, status=status.HTTP_200_OK)
        else:
            return Response({'Error': 'Invalid request'},
                            status=status.HTTP_400_BAD_REQUEST)

        return response


class GetInfo(APIView):

    def get(self, request, page, id, format=None):
        if id is not None:
            return Response(*get_info(id, page))
        else:
            return Response({'Error': 'Invalid request'},
                            status=status.HTTP_400_BAD_REQUEST)
