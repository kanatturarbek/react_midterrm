from django.contrib import admin

from api.models import *

# Register your models here.

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'imgurl', 'likes')