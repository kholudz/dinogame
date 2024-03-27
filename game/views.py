from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request,'game/homePage.html')


def td(request):
    return render(request,'game/TD.html')


def nhi(request):
    return render(request,'game/nhi.html')

