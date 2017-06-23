var Users = require('./../controllers/users.js');
var Comments = require('./../controllers/comments.js');
var Messages = require('./../controllers/messages.js');
var path = require('path');
function authenticate(req,res,next){
	if(req.session.userId){
		next();
	}else{
		res.sendStatus(401);
	}
}

module.exports = function(app){

	app.post('/api/users', Users.create);
	app.get('/wall', function(req,res, next){
		res.sendFile(path.resolve('./wallApp/dist/index.html'));
	})
	app.get('/login', function(req,res, next){
		res.sendFile(path.resolve('./wallApp/dist/index.html'));
	})
	app.use(authenticate);
	app.get('/api/current_user', Users.getCurrent);
	app.post('/api/messages', Messages.create);
	app.get('/api/messages', Messages.index);
	app.post('/api/comments/:id', Comments.create);

}
