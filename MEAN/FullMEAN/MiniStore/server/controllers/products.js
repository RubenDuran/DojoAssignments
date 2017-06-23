var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
	create: function(req,res){
		Message.findOne({_id: req.params.id}).exec(function(err, message){
			if(err){
				console.log("LOL")
				res.json(err);
			}else{
				console.log("found message, creating comment");
				console.log(message);
				var newComment = new Comment(req.body);
				newComment._user = req.session.userId;
				newComment.save(function(err){
					if(err){
						console.log("something went wrong");
						res.json(err);
					}else{
						console.log("created comment");
						message.comments.push(newComment._id);
						message.save(function(err){
							if(err){
								console.log("something went wrong saving the message");
								res.json(err);
							}else{
								console.log("message was saved with the new comment.")
								res.json(message);
							}
						})
					}
				})
			}
		})
	},
    getProducts: function(req,res){
        if(err){
    				console.log("LOL")
    				res.json(err);
    			}else{
    				console.log("found message, creating comment");
	// 	Message.findOne({_id: req.params.id}).exec(function(err, message){
	// 		if(err){
	// 			console.log("LOL")
	// 			res.json(err);
	// 		}else{
	// 			console.log("found message, creating comment");
	// 			console.log(message);
	// 			var newComment = new Comment(req.body);
	// 			newComment._user = req.session.userId;
	// 			newComment.save(function(err){
	// 				if(err){
	// 					console.log("something went wrong");
	// 					res.json(err);
	// 				}else{
	// 					console.log("created comment");
	// 					message.comments.push(newComment._id);
	// 					message.save(function(err){
	// 						if(err){
	// 							console.log("something went wrong saving the message");
	// 							res.json(err);
	// 						}else{
	// 							console.log("message was saved with the new comment.")
	// 							res.json(message);
	// 						}
	// 					})
	// 				}
	// 			})
	// 		}
	// 	})
	// }
}
}
}
