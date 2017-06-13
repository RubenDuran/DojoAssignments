from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User

# Create your views here.


def index(request):
    return render(request, 'login_reg/index.html')


def register(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully registered!')
            User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'], email=request.POST[
                                'email'], password=request.POST['pw'], created_at='NOW()', updated_at='NOW()')
            request.session['user'] = request.POST['email']
            return redirect('/success')
        return redirect('/')


def success(request):
    email = request.session['user']

    context = {
        'users': User.objects.all(),
        # 'user': User.objects.get(id=num)
    }
    return render(request, 'login_reg/success.html', context)


def login(request):
    if request.method == 'POST':
        errors = User.objects.signin(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully logged in!')
            return redirect('/success')
        return redirect('/')
