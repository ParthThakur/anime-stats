from django.shortcuts import render


def index(request, *args, **kwrgs):
    return render(request, 'frontend/index.html')
