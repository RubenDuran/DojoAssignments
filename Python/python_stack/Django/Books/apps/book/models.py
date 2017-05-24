from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length= 38)
    published_date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length= 38)
    in_print = models.BooleanField()
    
