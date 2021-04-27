from django.urls import path
from .views import UserList

urlpatterns = [
    path('getAniList', UserList.as_view())
]
