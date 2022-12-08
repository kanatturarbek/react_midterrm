from requests import request

from rest_framework import generics, mixins

from api.serializers import *
from api.models import *

class AnimeListAPIView(generics.ListCreateAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer

class AnimeDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer