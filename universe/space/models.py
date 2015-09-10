from django.db import models


class Planet(models.Model):
    name = models.CharField(max_length=12, blank=False, null=False)
    mass = models.IntegerField()
    distance_from_sun = models.IntegerField()
