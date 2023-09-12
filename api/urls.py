from django.urls import path
from . import views

urlpatterns = [
    path('', views.getMovies),
    path('add/', views.addMovie),
]