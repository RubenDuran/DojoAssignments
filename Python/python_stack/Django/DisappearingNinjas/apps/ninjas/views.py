from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request,'ninjas/index.html')

def ninjas(request):
    return render(request,'ninjas/ninjas.html')

def ninja(request,id):
    color = id
    print(color)
    if color == "red":
        img="/static/ninjas/images/raphael.jpg"
    elif color == "orange":
        img="/static/ninjas/images/michaelangelo.jpg"
    elif color =="blue":
        img="/static/ninjas/images/leonardo.jpg"
    elif color =="purple":
        img="/static/ninjas/images/donatello.jpg"
    else:
        img ="/static/ninjas/images/notapril.jpg"
    print(img)

    context = {
        'color':img
    }
    return render(request, 'ninjas/ninja.html',context)

# def colors(request, id):
#     color = id
#     print(color)
#     if color == "red":
#         img="raphael.jpg"
#     elif color == "orange":
#         img="michaelangelo.jpg"
#     elif color =="blue":
#         img="leonardo.jpg"
#     elif color =="purple":
#         img="donatello.jpg"
#     else:
#         img ="notapril.jpg"
#     print(img)
#     return redirect('/ninja')
