from django.urls import path
from .views import item_detail, ItemView, ItemCreate

urlpatterns = [
    path('items/', ItemView.as_view()),
    path('items/create', ItemCreate.as_view()),
    path('items/<int:pk>', item_detail, name='item_detail'),

]