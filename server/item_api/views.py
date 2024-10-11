from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Items #changable just depends on what class/model you are using from models.py
from .serializers import ItemSerializer #serializers name from .serializer

#create endpoints
# Create your views here.

#
@api_view(['GET']) # define if its a get post etc... this is from imported from rest_framework.decorators
def get_item(request):
    items = Items.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)
    #in the () you need to return the serialized data 

@api_view(['POST'])
def create_item(request):
    serializer = ItemSerializer(data = request.data) # get the data of the frontend and serialize it
    if serializer.is_valid(): #making sure it is valid
        serializer.save() # save it in our data base
        return Response(serializer.data, status = status.HTTP_201_CREATED) # return 201 and response with the data back to the user 
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST) #sends error if not valid

@api_view(['GET', 'PUT', 'DELETE'])
def item_detail(request, pk):
    try:
        items = Items.objects.get(pk=pk)
    except Items.DoesNotExist:  
        Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = ItemSerializer(items)
        return Response(serializer.data)
    
    if request.method == 'PUT': 
        serializer = ItemSerializer(items, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    if request.method == 'DELETE':
        items.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
