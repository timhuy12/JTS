from django.shortcuts import render
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Item
from .serializer import ItemSerializer, CreateItemSerializer
from rest_framework.views import APIView

class ItemView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemCreate(APIView):
    serializer_class = CreateItemSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            validated_data = serializer.validated_data
            name = validated_data.get('name')
            aliases = validated_data.get('aliases')
            aliasestwo = validated_data.get('aliasestwo')  # Fixed from 'aliases' to 'aliasestwo'
            location = validated_data.get('location')
            shelf = validated_data.get('shelf')
            amount = validated_data.get('amount')

            if Item.objects.filter(name=name).exists():
                return Response(
                    {"error": "An item with this name already exists."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            if Item.objects.filter(aliases=aliases).exists():
                return Response(
                    {"error": "An item with this alias already exists."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            if Item.objects.filter(aliasestwo=aliasestwo).exists():
                return Response(
                    {"error": "An item with this aliasestwo already exists."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            if not all([name, aliases, aliasestwo, location, shelf, amount]):
                return Response(
                    {"error": "All fields must be provided."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            # Save the item if no conflicts
        
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# @api_view(['POST'])
# def create_item(request):
#     serializer = ItemSerializer(data = request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def item_detail(request, pk):
#     try:
#         item = Item.objects.get(pk=pk)
#     except Item.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)
    
#     if request.method == 'GET':
#         serializer = ItemSerializer(item)
#         return Response(serializer.data)
    
#     if request.method == 'PUT':
#         serializer = ItemSerializer(item, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     if request.method == 'DELETE':
#         item.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
    


