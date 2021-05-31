from django.urls import path, re_path
from .views import GetInfo, UserList

urlpatterns = [
    re_path(r'^(?P<list_type>animelist|mangalist)/(?P<username>.+)$',
            UserList.as_view()),
    path('<str:page>/<int:id>', GetInfo.as_view()),
    path('<str:page>/<int:id>/<str:detail>', GetInfo.as_view()),
]
