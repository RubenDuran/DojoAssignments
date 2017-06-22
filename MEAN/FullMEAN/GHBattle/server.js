var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');

var app = express();

// setting up express
app.use(express.static(path.join(__dirname, 'battle', 'dist')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    extended: true
}));

// set up mongoose
mongoose.connect('mongodb://localhost/gh_battle');
var UserSchema = mongoose.Schema({
    score: Number,
    imagePath: String,
    username: String,
}, {
    timestamps: true
})
mongoose.model('User', UserSchema);
var User = mongoose.model('User');


//Routes
app.get('/users', function(req, res) {
    User.find({}).sort([['score', 'descending']]).exec(function(err, users){
        if (err) {
            console.log('Something went wrong');
            res.json(err)
            res.sendStatus(500);
        } else {
            console.log('Found all users');
            res.json(users);
        }
    })
})
app.post('/users', function(req, res) {
    User.findOne({username: req.body.username}, function(err, foundUser){
		if(foundUser){
			console.log('found a user:', foundUser);
            foundUser.username = req.body.username;
			foundUser.score = req.body.score;
			foundUser.imagePath = req.body.imagePath;
			foundUser.save(function(err, updatedUser){
				if(err){
					console.log('something went wrong updating your user');
					res.json(err);
				}else{
					console.log('user updated!');
					res.json(updatedUser);
				}
			})
		}else{
			console.log('user not found, creating new user');
			var user = new User(req.body);
			user.save(function(err, createdUser){
				if(err){
					console.log('Something went wrong making your user.')
					res.json(err);
				}else{
					console.log('user created!');
					res.json(createdUser);
				}
			})
		}
	})
})
// catch-all route to make sure any non-express angular routes are serving the angular index.html so that it can render properly
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./battle/dist/index.html"));
});

//Server listen
app.listen(8000, function() {
    console.log("running on localhost:8000");
})
