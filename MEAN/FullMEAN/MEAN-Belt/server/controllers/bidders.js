var mongoose = require('mongoose');
var Bidder = mongoose.model('Bidder');
module.exports = {
    create: function(req, res) {
        Bidder.findOne(req.body).exec(function(err, foundBidder) {
            if (foundBidder) {
                req.session.bidderId = foundBidder._id;
                console.log(req.session.bidderId);
                res.json(foundBidder);
            } else {
                var newBidder = new Bidder(req.body);
                newBidder.save(function(err, savedBidder) {
                    if (err) {
                        res.json(err);
                    } else {
                        req.session.bidderId = savedBidder._id;
                        console.log(req.session.bidderId);
                        res.json(savedBidder);
                    }
                })
            }
        })
    },
    logout: function(req, res) {
        req.session.userId = null;
        req.session.user = null;
        res.sendStatus(200);
    },
    getName: function(req, res) {
        Bidder.findOne({
            _id: req.session.bidderId
        }).exec(function(err, bidder) {
            if (err) {
                res.json(err);
            } else {
                res.json(bidder.name);
            }
        })
    },
}
