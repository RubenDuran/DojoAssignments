from flask import Flask, render_template, request, redirect, session
import os, random


app = Flask(__name__)
app.secret_key = os.urandom(24)
# print app.secret_key


def sessionCounter():
    try:
        session['counter'] += 1
    except KeyError:
        session['counter'] = 0

    return session['counter']

def genRand():
    sessionCounter()
    if session['counter'] == 0:
        session['rand_num'] = random.randrange(0, 101)
        print session['rand_num']
        # sessionCounter()
        return session['rand_num']
    else:
        pass

def sessionReset():
    session['counter'] = 0
    return session['counter']

@app.route('/')
def index():
    try:
        session.pop('rand_num')
    except KeyError:
        pass
    genRand()
    return render_template('index.html',rand = session['rand_num'], val = '<form action="/guess" method="post"><input type="text" name="guess"><input type="submit" value="Button"></form>')


@app.route('/guess', methods=['POST'])
def guess():
    guess = int(request.form['guess'])
    print guess
    print session['rand_num']
    if session['rand_num'] == guess:
        return render_template('/index.html', val = '<div class="result green"><h2>'+ str(guess) +' was the right number!</h2></div><form action="/play" method="post"><input type="submit" value="Play Again!"></form>')

    elif session['rand_num'] < guess:
        return render_template('/index.html', val = '<div class="result red"><h2>Too high!</h2></div><form action="/guess" method="post"><input type="text" name="guess"><input type="submit" value="Submit"></form>')

    else:
        return render_template('/index.html', val = '<div class="result red"><h2>Too low!</h2></div><form action="/guess" method="post"><input type="text" name="guess"><input type="submit" value="Submit"></form>')

@app.route('/play', methods=['POST'])
def play():
    return render_template('/index.html')

#
# @app.route('/reset')
# def reset():
#     sessionReset()
#     return redirect('/')


app.run(debug=True)
