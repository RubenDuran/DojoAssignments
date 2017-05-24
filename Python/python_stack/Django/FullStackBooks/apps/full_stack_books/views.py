from django.shortcuts import render, redirect
from .models import Book

# Create your views here.
def index(request):
    books = Book.objects.all()
    print(books)
    context = {
        "books": books
        }
    return render(request,'full_stack_books/index.html', context)

def add(request, methods='POST'):
    print(request.POST['title'])
    book = Book.objects.create(title= request.POST['title'],author=request.POST['author'],category= request.POST['category'], created_at='NOW()',updated_at='NOW()')
    return redirect('/')
