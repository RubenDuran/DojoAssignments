var mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var Bidder = mongoose.model('Bidder');

module.exports = {

    create: function(req, res) {
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

    },

    getBid: function(req, res) {
        Bid.find({
            product: req.body.product
        }).populate('_bidder').sort({
            $natural: -1
        }).limit(1).exec(function(err, prods) {
            if (err) {
                res.json(err);
            } else {
                res.json(prods);
            }
        })
    },

    getBids: function(req, res) {
        Bid.find({
            product: req.body.product
        }).populate('_bidder').exec(function(err, prods) {
            if (err) {
                res.json(err);
            } else {
                res.json(prods);
            }
        })
    },

    restart: function(req, res) {
        Bid.find({}).remove().exec(function(err, bids) {
            if (err) {
                res.json(err);
            } else {
                res.json(bids)
            }
        })
    },
}
