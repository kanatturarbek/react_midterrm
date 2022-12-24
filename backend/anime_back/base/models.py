from django.db import models

# Create your models here.

class Movie(models.Model):
    img = models.CharField(max_length = 200)
    name = models.CharField(max_length = 200)
    year = models.IntegerField()
    description = models.TextField()
    src = models.CharField(max_length = 200)
    