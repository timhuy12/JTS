from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField("Name", max_length=240, default='unknown')
    aliases = models.CharField("Aliases", max_length=240, default='unknown')
    aliasestwo = models.CharField("Aliases", max_length=240, default='unknown')
    location = models.CharField("Location", max_length=240, default='unknown')
    shelf = models.CharField("Shelf", max_length=240, default='unknown')
    amount = models.IntegerField("Amount", default='unknown')

    def __str__(self):
        return self.name