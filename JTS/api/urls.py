from django.urls import path
from .views import  ItemView, ItemCreate

urlpatterns = [
    path('items/', ItemView.as_view()),
    path('items/create', ItemCreate.as_view()),
    

]