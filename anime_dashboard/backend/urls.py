from django.urls import path
from .views import GetInfo, UserList

urlpatterns = [
    path('<str:list_type>/<str:username>', UserList.as_view()),
    path('<str:page>/<int:id>', GetInfo.as_view()),
    path('<str:page>/<int:id>/<str:detail>', GetInfo.as_view()),
]
