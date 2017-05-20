from django.shortcuts import render, HttpResponse
import time
from time import gmtime, strftime

somevalue = time.strftime('%b %d, %Y', gmtime())
anothervalue = time.strftime('%I:%M %p', gmtime())
print (somevalue)
print (anothervalue)

# Create your views here.
def index(request):
    context = {
        "somekey":somevalue,
        "anotherkey":anothervalue
        }
    return render(request,'timedisplay/index.html',context)
