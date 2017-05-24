from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=38)
    description = models.CharField(max_length= 38)
    weight = models.FloatField()
    price = models.FloatField()
    cost = models.FloatField()
    category = models.CharField(max_length= 38)
