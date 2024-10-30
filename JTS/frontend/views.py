from django.shortcuts import render
#render index template and let react take care of it 

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
