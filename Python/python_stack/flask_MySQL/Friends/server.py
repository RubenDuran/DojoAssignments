from flask import Flask, request, redirect, render_template, session, flash
from sqlconnect import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'myNewFriends')

@app.route('/')
def index():
    query = "SELECT name, age, year(created_at) as y, DATE_FORMAT(created_at, '%b %D') as fs FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/update_friend/<friend_id>', methods=['POST'])
def update(friend_id):
    query = "UPDATE friends SET name = :name, age = :age WHERE id = :id"
    data = {
             'name': request.form['name'],
             'age': request.form['age'],
             'id': friend_id
           }
    mysql.query_db(query, data)
    return redirect('/')


@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (name, age, created_at, updated_at) VALUES (:name, :age, NOW(), NOW())"
    data = {
             'name': request.form['name'],
             'age': request.form['age']
           }

    mysql.query_db(query, data)
    return redirect('/')

@app.route('/remove_friend/<friend_id>', methods=['POST'])
def delete(friend_id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': friend_id}
    mysql.query_db(query, data)
    return redirect('/')


app.run(debug=True)
