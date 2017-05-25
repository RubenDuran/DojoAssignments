from django.shortcuts import render, redirect
from .models import Course

def index(request):
    courses = Course.objects.all()
    context = {
        "courses": courses
        }
    return render(request,'course/index.html', context)

def add(request, methods='POST'):
    print(request.POST['title'])
    course = Course.objects.create(title= request.POST['title'],description=request.POST['description'], created_at='NOW()',updated_at='NOW()')
    return redirect('/')

def remove(request, methods='POST'):
    id = request.POST['id']
    return redirect('/courses/destroy/{}'.format(id))

def destroy(request, id):
    id = id
    course = Course.objects.get(id=id)
    context = {
        'id': id,
        'course':course
    }
    return render(request,'course/destroy.html', context)

def delete(request, methods='POST'):
    id = int(request.POST['id'])
    Course.objects.filter(id=id).delete()
    return redirect('/')
