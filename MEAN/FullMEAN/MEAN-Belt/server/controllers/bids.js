var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var Bidder = mongoose.model('Bidder');
module.exports = {
	create: function(req,res){
		console.log("in the bids controller's create method", req.body)
        console.log("session = ", req.session.bidderId);
		var newBid = new Bid(req.body);
		newBid._bidder = req.session.bidderId;
		newBid.save(function(err, savedBid){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("message saved");
				res.json(newBid);
			}
		})
	},
	index: function(req,res){
		console.log("in the bids controller's index method");
		Bid.find({product: req.params.product}).exec(function(err, products){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("gottem");
				console.log(products);
				res.json(products);
			}
		})
	},
    delete: function(req,res){
		console.log("in the bids controller's delete method");
		Bid.find({product: req.params.product}).exec(function(err, products){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("gottem-delete");
				// console.log(products);
				// res.json(products);
                products.remove();
			}
		})
	},
    

}
