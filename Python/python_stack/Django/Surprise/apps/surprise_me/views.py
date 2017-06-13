from django.shortcuts import render, redirect
from random import shuffle
VALUES = ['populate this list with various strings','Girl its you','Wine fine like a bottle from the 99','Play no Games', 'You know what your problem is?','Its true']
lis = []


# Create your views here.
def index(request):
    lis = []
    return render(request,'surprise_me/index.html')

def results(request):
    context ={
        'surprise':request.session['lis'],
        'num': int(request.session['num'])
    }
    return render(request, 'surprise_me/results.html',context)

def surprise(request, methods=['POST']):
    num = int(request.POST['num'])
    request.session['num'] = num
    (shuffle(VALUES))
    for i in range(num):
        lis.append(VALUES[i])
    request.session['lis']=lis
    return redirect('/results')
