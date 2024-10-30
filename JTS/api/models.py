from django.db import models
import string

# def search_item(find):
#     while True:
#         if Item.objects.filter(name.startswith(find) or aliases.startswith(find) or aliasestwo.startswith(find))
#             return Item.object
        
#     return find


# Create your models here.

class Item(models.Model):
    name = models.CharField("Name", max_length=240, default='unknown', unique=True)
    aliases = models.CharField("Aliases", max_length=240, default='unknown', unique=True)
    aliasestwo = models.CharField("Aliases", max_length=240, default='unknown', unique=True)
    location = models.CharField("Location", max_length=240, default='unknown')
    shelf = models.CharField("Shelf", max_length=240, default='unknown')
    amount = models.IntegerField("Amount", default='unknown')

    def __str__(self):
        return self.name