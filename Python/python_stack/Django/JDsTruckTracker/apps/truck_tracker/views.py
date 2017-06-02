from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from . models import User, Image, Truck, Category, Color
import bcrypt

def index(request):
    return render(request, 'truck_tracker/index.html')

def trucks(request):
    truck_categories = Category.objects.all()
    context = {
        'truck_categories': truck_categories
    }
    return render(request, 'truck_tracker/trucks.html', context)

def add_truck(request):
    return render(request, 'truck_tracker/add.html')

def add(request):
    return redirect('/add_truck')

def delete(request):
    return redirect('/trucks')

def logout(request):
    return redirect('/trucks')

def register(request):
    return redirect('/trucks')

def login(request):
    return redirect('trucks')

def search(request):
    return redirect('/specific_truck')

def category(request, id):
    return render(request,'truck_tracker/category.html')

def specific_truck(request,id,truck_id):
    return render(request, 'truck_tracker/truck.html')

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
