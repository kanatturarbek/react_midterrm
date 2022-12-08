from django.db import models

# Create your models here.
class Anime(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    imgurl = models.CharField(max_length=255)
    likes = models.IntegerField(default = 0)
    
