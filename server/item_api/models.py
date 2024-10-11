from django.db import models

# Create your models here.
class Items(models.Model):
    name = models.CharField(max_length = 100)
    location = models.CharField(max_length = 100)
    shelf = models.CharField(max_length = 100)
    amount = models.IntegerField
    
    def __str__(self):
        return self.name