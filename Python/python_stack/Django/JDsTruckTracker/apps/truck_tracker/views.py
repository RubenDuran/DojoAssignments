from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from . models import User, Image, Truck, Category, Color
import bcrypt, urllib
from . import twilio_config as twilio


def index(request):
    return render(request, 'truck_tracker/index.html')

def trucks(request):
    truck_categories = Category.objects.all()
    context = {
        'truck_categories': truck_categories
    }
    return render(request, 'truck_tracker/trucks.html', context)

def add_truck(request):
    truck_categories = Category.objects.all()
    context = {
        'truck_categories': truck_categories
    }
    return render(request, 'truck_tracker/add.html', context)

def add(request):
    if request.method == 'POST' and request.FILES['img']:
        category = request.POST['category']
        category = Category.objects.get(category_name=category)
        p_color = request.POST['primary_color']
        s_color = request.POST['secondary_color']
        img = request.FILES['img']
        print img

        truck = Truck.objects.create(user=request.session['user'], category=category)
        color = Color.objects.create(primary_color=p_color, secondary_color=s_color,truck_color=truck)
        Image.objects.create(truck_pic=truck,document= img)


        # errors = Truck.objects.validate(request.POST)
        # if errors:
        #     for error in errors:
        #         messages.error(request, error)
        # else:
        #     print request.POST['category']


    return redirect('/category/{}'.format(category))

def delete(request):
    return redirect('/trucks')

def logout(request):
    del request.session['user_id']
    return redirect('/')

def register(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully registered!')
            hashed = bcrypt.hashpw(
                request.POST['pw'].encode(), bcrypt.gensalt())

            user_phone = "+1"+str(request.POST['phone_one'])+str(request.POST['phone_two'])+str(request.POST['phone_three'])
            print user_phone

            User.objects.create(f_name=request.POST['f_name'], l_name=request.POST['l_name'], username=request.POST[
                                'username'], password=hashed, created_at='NOW()', updated_at='NOW()', phone=user_phone)
            username = request.POST["username"]
            user_details = User.objects.filter(username=username)
            user = user_details[0]
            request.session['user_id'] = user.id

            twilio.client.messages.create(
                to = user_phone,
                from_= "+14803728939",
                body="Thanks for signing up! You'll receive a notification everytime a new truck gets added")
            return redirect('/trucks')
    return redirect('/')

def login(request):
    if request.method == 'POST':
        errors = User.objects.signin(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully logged in!')
            username = request.POST["username"]
            user_details = User.objects.filter(username=username)
            user = user_details[0]
            request.session['user_id'] = user.id
            return redirect('/trucks')
        return redirect('/')

def search(request):
    return redirect('/specific_truck')

def category(request, id):

    category = urllib.unquote(id).decode('utf8')
    print category
    trucks = Truck.objects.filter(category__category_name = category)

    context = {
        'trucks': trucks,
        'category': category,
    }

    return render(request,'truck_tracker/category.html', context)

def specific_truck(request,id,truck_id):
    return render(request, 'truck_tracker/truck.html')

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
