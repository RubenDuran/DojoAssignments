from django.shortcuts import render, redirect, HttpResponse
import random as r, os

gold = 0
stringList = []



def index(request):
    try:
        request.session['gold'] += gold
    except KeyError:
        request.session['gold'] = 0
    request.session['strings'] = stringList
    strList = request.session['strings']

    context = {
            "stringList": strList,
        }
    print(context)
    return render(request,'ninja_gold/index.html',context)

def process_money(request):
    building = request.POST['building']
    if building == "farm":
        rand = r.randint(10, 21)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        request.session['gold'] += rand
        request.session['strings']=stringList
    elif building == "cave":
        rand =  r.randint(5, 11)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        request.session['gold'] += rand
        request.session['strings']=stringList
    elif building == "house":
        rand = r.randint(2,6)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        request.session['gold'] += rand
        request.session['strings']=stringList
    else:
        rand = r.randint(-50,50)
        request.session['gold'] += rand
        if rand < 0:
            stringList.append('Entered a casino and lost {} gold... Ouch..'.format(rand))
            request.session['strings']=stringList
        else:
            stringList.append('Earned {} golds from the {}!'.format(rand,building))
            request.session['strings']=stringList
    return redirect('/')
