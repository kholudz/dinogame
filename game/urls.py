from django.urls import path
from . import views

urlpatterns = [
  
    path('', views.home,name='homePage'),
    path('td', views.td,name='TD'),
    path('nhi', views.nhi,name='nhi'),

]
