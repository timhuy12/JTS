from django.urls import path
from .views import get_items, create_item, item_detail

urlpatterns = [
    path('items/', get_items, name='get_items'),
    path('items/create', create_item, name='create_item'),
    path('items/<int:pk>', item_detail, name='item_detail'),

]