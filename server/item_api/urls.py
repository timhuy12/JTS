from django.urls import path
from .views import get_item, create_item, item_detail

urlpatterns = [
    path('item/', get_item, name = 'get_item' ), # using this to call and make the api request
    path('item/create', create_item, name = 'create_item'),
    path('item/<int:pk>', item_detail, name = 'item_detail')

] # the path('items/') plays a part on what you want the name or the url for view api in http://127.0.0.1:8000/