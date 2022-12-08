from django.urls import path

from api.views import *

urlpatterns = [
    path('animes/', AnimeListAPIView.as_view()),
    path('animes/<int:pk>/', AnimeDetailAPIView.as_view())
]