var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var Bidder = mongoose.model('Bidder');
module.exports = {
    create: function(req, res) {
        console.log("in the bids controller's create method", req.body)
        console.log("session = ", req.session.bidderId);
		console.log("checking query details",req.body.product);
        Bid.find({
            product: req.body.product
        }).sort('-amount').limit(1).exec(function(err, foundBid) {
			console.log('found ', foundBid);
			console.log("oh man ", foundBid.length);
			console.log('reqbodyamount - ',req.body.amount );

            if (foundBid.length && req.body.amount < foundBid[0].amount) {
                return res.json(err);
            } else {
                var newBid = new Bid(req.body);
                newBid._bidder = req.session.bidderId;
                newBid.save(function(err, savedBid) {
                    if (err) {
                        console.log("something went wrong");
                        res.json(err);
                    } else {
                        console.log("message saved");
                        res.json(newBid);
                    }
                })
            }

        })

    },
    getBid: function(req, res) {
        Bid.find({
            product: req.body.product
        }).populate('_bidder').sort({
            $natural: -1
        }).limit(1).exec(function(err, prods) {
            if (err) {
                console.log("something went wrong", req.body);
                res.json(err);
            } else {
                console.log("gottem", prods);
                res.json(prods);
            }
        })
    },



    getBids: function(req,res){
    	console.log("in the bids controller's index method", req.body.product);
    	// console.log("the body", req.body);
    	console.log("the body prod", req.body['product']);
    	Bid.find({product: req.body.product}).populate('_bidder').exec(function(err, prods){
    		if(err){
    			console.log("something went wrong" , req.body);
    			res.json(err);
    		}else{
    			console.log("gottem");
    			console.log(prods);
    			res.json(prods);
    		}
    	})
    },
    delete: function(req, res) {
        console.log("in the bids controller's delete method");
        Bid.find({
            product: req.params.product
        }).exec(function(err, products) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("gottem-delete");
                // console.log(products);
                // res.json(products);
                products.remove();
            }
        })
    },


}
