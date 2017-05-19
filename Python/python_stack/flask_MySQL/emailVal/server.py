from flask import Flask, request, redirect, render_template, session, flash
from sqlconnect import MySQLConnector
import os, re

app = Flask(__name__)
app.secret_key = os.urandom(24)
mysql = MySQLConnector(app,'myNewFriends')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')



@app.route('/verify', methods=['POST'])
def create():
    query = "SELECT email, DATE_FORMAT(created_at,'%l:%i %p') as time, DATE_FORMAT(created_at, '%c/%e/%y') as date FROM friend_email"
    emails = mysql.query_db(query)
    email = request.form['email']
    print email

    if len(email) < 1:
        flash("Name cannot be empty!")
        return redirect('/')
    elif not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        for e in emails:
            if e['email'] == email:
                flash("Email already in database")
                return redirect('/')


    query = "INSERT INTO friend_email (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
    data = {'email': email,}
    flash("The email address you entered {} is a Valid email address! Thank You!".format(email))

    mysql.query_db(query, data)
    print emails
    return render_template('success.html', email_list = emails)


app.run(debug=True)
