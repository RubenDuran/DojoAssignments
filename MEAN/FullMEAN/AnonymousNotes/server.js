// loading modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

// set up mongoose
mongoose.connect('mongodb://localhost/fullmean_demo1');
var MessageSchema = mongoose.Schema({
    content: String,
    name: String
}, {
    timestamps: true
})
mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

// setting up express
app.use(express.static(path.join(__dirname, 'anonymousNotesApp', 'dist')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    extended: true
}));


app.get('/messages', function(req, res) {
    Message.find({}, function(err, messages) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json(messages);
        }
    })
})
app.post('/messages', function(req, res) {
    console.log(req.body);
    var message = new Message(req.body);
    message.save(function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            console.log("message successfully created!");
            Message.find({}, function(err, messages) {
                if (err) {
                    onsole.log(err);
                    res.sendStatus(500);
                } else {
                    res.json(messages);
                }
            })
        }
    })
})
// catch-all route to make sure any non-express angular routes are serving the angular index.html so that it can render properly
app.all("*", (req, res, next) => {
    res.sendfile(path.resolve("./anonymousNotesApp/dist/index.html"));
});

app.listen(8000, function() {
    console.log("running on localhost:8000");
})
