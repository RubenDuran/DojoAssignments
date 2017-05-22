from django.shortcuts import render, redirect, HttpResponse

# Create your views here.

def index(request):
    return render(request,'survey_form/index.html')

def result(request):
    return render(request,'survey_form/results.html')

def process(request):
    try:
        request.session['count'] += 1
    except KeyError:
        request.session['count'] = 0

    request.session["name"] = request.POST['name']
    request.session["location"]= request.POST['location']
    request.session["lang"]= request.POST['lang']
    request.session["comment"]= request.POST['comment']

    return redirect('/result')
