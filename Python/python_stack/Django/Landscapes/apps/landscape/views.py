from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    return render(request,'landscape/index.html')

def rand(request, id):
    num = int(id)
    if num > 0 and num <11:
        request.session['img'] = 'https://images.unsplash.com/photo-1447814890817-cf74792e6dca?dpr=1&auto=format&fit=crop&w=1080&h=720&q=80&cs=tinysrgb&crop=&bg='
    elif num< 21:
        request.session['img'] = 'https://images.unsplash.com/photo-1470164971321-eb5ac2c35f2e?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;h=717&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg='
    elif num< 31:
        request.session['img'] = 'https://images.unsplash.com/photo-1445462657202-a0893228a1e1?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;h=720&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg='
    elif num < 41:
        request.session['img'] = 'https://images.unsplash.com/photo-1446413145391-40052a2477ee?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;h=720&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg='
    else:
        request.session['img'] = 'https://images.unsplash.com/photo-1432958820763-f53004484ceb?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1080&amp;h=718&amp;q=80&amp;cs=tinysrgb&amp;crop=&amp;bg='

    return render(request, 'landscape/img.html')

# def img(request):
#     img = request.session['img']
#     context = {
#         'img':img
#     }
#     return render(request, 'landscape/img.html')
