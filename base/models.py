from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    genre = models.CharField(max_length=200)
    desc = models.CharField(max_length=500)
    cover = models.CharField(max_length=300)
