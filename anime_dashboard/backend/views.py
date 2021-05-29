from django.shortcuts import render
from requests.sessions import session

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from .utils import get_user_list
from .utils import get_info


class UserList(APIView):

    def get(self, request, list_type, username, format=None):
        if username is not None:
            list_, status_code = get_user_list(username, list_type)
            return Response(list_, status=status_code)


class GetInfo(APIView):

    def get(self, request, page, id, detail=None, format=None):
        if id is not None:
            data, status_code = get_info(id, page, detail)
            return Response(data, status=status_code)
        else:
            return Response({'Error': 'Invalid request'},
                            status=status.HTTP_400_BAD_REQUEST)
