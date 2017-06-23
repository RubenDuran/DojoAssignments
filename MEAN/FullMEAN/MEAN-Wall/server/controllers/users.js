var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	getCurrent: function(req,res){
		console.log("in users controller's getCurrent method");
		User.findOne({_id: req.session.userId}).exec(function(err, foundUser){
			if(err){
				console.log('something went wrong');
				res.json(err);
			}else{
				console.log("found current user");
				res.json(foundUser);
			}
		})
	},
	create: function(req,res){
		console.log("in users controller's create method");
		User.findOne(req.body).exec(function(err, foundUser){
			if(foundUser){
				console.log("user in db")
				req.session.userId = foundUser._id;
				res.json(foundUser);
			}else{
				var newUser = new User(req.body);
				newUser.save(function(err,savedUser){
					if(err){
						console.log("something went wrong");
						res.json(err);
					}else{
						console.log("created user");
						req.session.userId = savedUser._id;
						res.json(savedUser);
					}
				})
			}
		})
	}
}
