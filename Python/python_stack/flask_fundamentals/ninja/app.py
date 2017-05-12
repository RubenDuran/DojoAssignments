from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/ninja')
def ninjas():
    return render_template('ninjas.html')

@app.route('/ninja/<color>')
def ninja(color):
    print color
    if color == "red":
        img="raphael.jpg"
    elif color == "orange":
        img="michaelangelo.jpg"
    elif color =="blue":
        img="leonardo.jpg"
    elif color =="purple":
        img="donatello.jpg"
    else:
        img ="notapril.jpg"
    print img  
    return render_template('ninja.html',img = img)

app.run(debug=True)
