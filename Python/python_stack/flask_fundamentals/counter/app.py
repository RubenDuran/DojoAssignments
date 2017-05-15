from flask import Flask, render_template, request, redirect, session
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)
# print app.secret_key


def sessionCounter():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 1

    return session['counter']
def sessionPlusTwo():
    session['counter'] +=1
    return session['counter']
def sessionReset():
    session['counter'] = 0
    return session['counter']

@app.route('/')
def index():
    sessionCounter()
    return render_template('index.html',count = session['counter'])
@app.route('/count')
def count():
    sessionPlusTwo()
    return redirect('/')

@app.route('/reset')
def reset():
    sessionReset()
    return redirect('/')


app.run(debug=True)
