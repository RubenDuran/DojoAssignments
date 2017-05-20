from flask import Flask, session, render_template, redirect, request
import random as r, os
app = Flask(__name__)
app.secret_key = os.urandom(24)
gold = 0
stringList = []

def sessionGold():
    try:
        session['gold'] += gold
    except KeyError:
        session['gold'] = 0
    return session['gold']

# def sessionString():
#     try:
#         session['string'] += string
#     except KeyError:
#         session['string'] = ''
#     return session['string']

@app.route('/')
def index():
    sessionGold()
    return render_template("index.html", gold = session['gold'], stringList = stringList)

@app.route('/process_money', methods=['POST'])
def process_money():
    print "Got Post Info"
    building = request.form['building']
    if building == "farm":
        rand = r.randint(10, 21)
        # session['string']= 'Earned {} golds from the {}!'.format(rand,building)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        session['gold'] += rand
    elif building == "cave":
        rand =  r.randint(5, 11)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        session['gold'] += rand
    elif building == "house":
        rand = r.randint(2,6)
        stringList.append('Earned {} golds from the {}!'.format(rand,building))
        session['gold'] += rand
    else:
        rand = r.randint(-50,50)
        session['gold'] += rand
        if rand < 0:
            stringList.append('Entered a casino and lost {} gold... Ouch..'.format(rand))
        else:
            stringList.append('Earned {} golds from the {}!'.format(rand,building))

    return redirect('/')
app.run(debug=True) # run our server
