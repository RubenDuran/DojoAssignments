from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request,'user_val/index.html')

def validate(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST['user_name'])
        if errors:
            for error in errors:
                messages.error(request,error)
        else:
            messages.success(request,'The new username you entered ({}) is valid. Thank you!'.format(request.POST['user_name']))
            User.objects.create(username= request.POST['user_name'])
            return redirect('/success')
        return redirect('/')

def success(request):
    context = {
        'users': User.objects.all()
    }
    return render(request, 'user_val/success.html',context)
