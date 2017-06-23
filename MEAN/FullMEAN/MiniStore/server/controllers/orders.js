var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Product = mongoose.model('Product');
module.exports = {
	create: function(req,res){
		console.log("in the messages controller's create method")
		var newOrder = new Order(req.body);
		newOrder._user = req.session.userId;
		newOrder.save(function(err, savedMessage){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("message saved");
				res.json(newMessage);
			}
		})
	},
	getOrders: function(req,res){
		console.log("in the messages controller's index method");
		// Message.find({}).populate('_user').populate({path:'comments', model:'Comment', populate:{path:'_user', model:'User'}})
		// .exec(function(err, messages){
		// 	if(err){
		// 		console.log("something went wrong");
		// 		res.json(err);
		// 	}else{
		// 		console.log("gottem");
		// 		console.log(messages);
		// 		res.json(messages);
		// 	}
		// })
	}
}
