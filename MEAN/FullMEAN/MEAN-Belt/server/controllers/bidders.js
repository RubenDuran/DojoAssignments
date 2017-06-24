var mongoose = require('mongoose');
var Bidder = mongoose.model('Bidder');
module.exports = {
	create: function(req,res){
		console.log("in users controller's create method");
		Bidder.findOne(req.body).exec(function(err, foundBidder){
			if(foundBidder){
				console.log("user in db")
				req.session.bidderId = foundBidder._id;
				console.log(req.session.bidderId);
				res.json(foundBidder);
			}else{
				var newBidder = new Bidder(req.body);
				console.log("new bidder, req-body: ",req.body);
				newBidder.save(function(err,savedBidder){
					if(err){
						console.log("something went wrong");
						res.json(err);
					}else{
						console.log("created bidder");
						req.session.bidderId = savedBidder._id;
						console.log(req.session.bidderId);
						res.json(savedBidder);
					}
				})
			}
		})
	},
	getName: function(req,res){
		console.log("in the bids controller's getName method");
		Bidder.findOne({_id: req.session.bidderId}).exec(function(err, bidder){
			if(err){
				console.log("something went wrong");
				res.json(err);
			}else{
				console.log("got name", bidder);
				// console.log(products);
				// res.json(products);
                res.json(bidder.name);
			}
		})
	},
}
