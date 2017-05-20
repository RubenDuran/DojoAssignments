from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'myportfolio/index.html')

def testimonials(request):
    return render(request,'myportfolio/testimonials.html')


def about(request):
    return render(request,'myportfolio/about.html')

def projects(request):
    return render(request,'myportfolio/projects.html')
