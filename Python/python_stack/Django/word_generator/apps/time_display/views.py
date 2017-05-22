from django.shortcuts import render, redirect
import random, string

def genWord():
    word = ''.join([random.choice(string.ascii_letters.upper() + string.digits) for n in range(14)])
    return word

def index(request):
    word = genWord()
    try:
        request.session['count'] += 1
    except KeyError:
        request.session['count'] = 0

    context = {
        "word": word
        }
    print (context)
    return render(request,'time_display/index.html',context)

def generate(request):
    return redirect('/')
