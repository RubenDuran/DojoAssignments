var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var User = mongoose.model('User');
var Comment = mongoose.model('Comment');
module.exports = {
	create: function(req,res){
		console.log("in the messages controller's create method")
		var newMessage = new Message(req.body);
		newMessage._user = req.session.userId;
		newMessage.save(function(err, savedMessage){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("message saved");
				res.json(newMessage);
			}
		})
	},
	index: function(req,res){
		console.log("in the messages controller's index method");
		Message.find({}).populate('_user').populate({path:'comments', model:'Comment', populate:{path:'_user', model:'User'}})
		.exec(function(err, messages){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("gottem");
				console.log(messages);
				res.json(messages);
			}
		})
	}
}
