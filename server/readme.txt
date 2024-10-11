set up:
https://blog.logrocket.com/using-react-django-create-app-tutorial/
https://www.youtube.com/watch?v=HBE4K1Xu9us

when you make the setup install it on a virtual environment by using
python -m venv (name)

you will need to activate the virtual environment using (name)\scripts\activate

you should see a (name) infront of your path when in the terminal.

then install django by...
    pip install django djangorestframework django-cors-headers

django-admin startproject newproject/(name of django folder)

cd newproject/

python manage.py startapp api // makes a file called api

in the other folder there should be a setting.py folder where you would go to installed_apps
 and add in 'rest_framework', "(newproject)"

Then go to the api folder and go to models.py
this is what i type inside the file

class item(models.Model):
    name = models.CharField(max_length= 100)
    location = models.CharField(max_length = 100)
    amount = models.IntegerField()

    def __str_(self):
        return self.name

now we have a model create we want to generate the database on it
terminal: python manage.py makemigrations //creates a db.sqlite3
python manage.py migrate //actually migrate them
now we create a serializer.py file the normal way into api folder.
note that you can see it running at the the url http://127.0.0.1:8000/api
to view your apis you would put http://127.0.0.1:8000/api/item #items part can be change depending on what name you used
this might give an error and if it does it has really good feedback


// this file is going to tell python how to transform our model into json data that we can access in our api
in the file type

from rest_framework import serializers
from .models import item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

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


