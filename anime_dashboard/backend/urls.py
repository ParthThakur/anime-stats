from django.urls import path
from .views import GetInfo, UserList

urlpatterns = [
    path('getAniList', UserList.as_view()),
    path('<str:page>/<int:id>', GetInfo.as_view()),
]
