from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User, Post, Like
from django.db.models import Count

# Create your views here.


def index(request):
    return render(request, 'dojo_sectets/index.html')


def register(request):
    if request.method == 'POST':
        errors = User.objects.validate(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully registered!')
            User.objects.create(first_name=request.POST['f_name'], last_name=request.POST['l_name'], email=request.POST[
                                'email'], password=request.POST['pw'], created_at='NOW()', updated_at='NOW()')
            email=request.POST["email"]
            user_details = User.objects.filter(email=email)
            user = user_details[0]
            request.session['user_id'] = user.id
            return redirect('/secrets')
        return redirect('/')
    print('hello')
    return redirect('/')


def login(request):
    if request.method == 'POST':
        errors = User.objects.signin(request.POST)
        if errors:
            for error in errors:
                messages.error(request, error)
        else:
            messages.success(request, 'Successfully logged in!')
            email=request.POST["email"]
            user_details = User.objects.filter(email=email)
            user = user_details[0]
            request.session['user_id'] = user.id
            return redirect('/secrets')
        return redirect('/')

def secrets(request):
    user_id = request.session.get('user_id')
    if not user_id:
        return redirect('/')
    user = User.objects.get(pk=user_id)
    list_of_all_my_like_ids = Like.objects.filter(user=user).values_list('post__id',flat=True)

    secrets = Post.objects.all().annotate(Count('like')).order_by('-created_at').values()[:5]

    for secret in secrets:
        if secret['id'] in list_of_all_my_like_ids:
            secret['already_liked']=True
        else:
            secret['already_liked']=False

    context = {
        'user': user,
        'secrets': secrets,
    }
    return render(request,'dojo_sectets/secrets.html')

def add_secret(request):

    user_id = request.session.get('user_id')
    if not user_id:
        return redirect('/')
    user = User.objects.get(pk=user_id)
    Post.objects.create(content=request.POST['new_secret'],user=user)

    return redirect('/secrets')


def top_secrets(request):
    user_id = request.get('user_id')
    if not user_id:
        return redirect('/')
    user = request.session.get(pk=user_id)

    list_of_all_my_like_ids = Like.objects.filter(user=user).values_list('post__id',flat=True)

    secrets = Post.objects.all().annotate(Count('like')).order_by('-like__count').values()

    context = {
        'user': user,
        'secrets':secrets,
    }
    return render(request, 'dojo_sectets/top_secrets.html')






def like(request, id):
    user_id = request.session.get('user_id')
    if not user_id:
        return redirect('/')
    user = User.objects.get(pk=user_id)
    post = Post.objects.get(pk=id)

    check_likes = Like.objects.filter(user=user, post=post)
    if not check_likes:
        Like.objects.create(user=user, post=post)
    return redirect('/')

def delete(request, id):
    user_id = request.session.get('user_id')
    if not user_id:
        return redirect('/')
    Post.objects.get(pk=id).delete()
    return redirect('/secrets')
