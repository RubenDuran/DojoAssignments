var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    create: function(req, res) {
        User.findOne(req.body).exec(function(err, foundUser) {
            if (foundUser) {
                req.session.userId = foundUser._id;
                console.log(req.session.userId);
                res.json(foundUser);
            } else {
                var newUser = new User(req.body);
                newUser.save(function(err, savedUser) {
                    if (err) {
                        res.json(err);
                    } else {
                        req.session.userId = savedUser._id;
                        console.log(req.session.userId);
                        res.json(savedUser);
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
    getUser: function(req, res) {
        User.findOne({
            _id: req.session.userId
        }).exec(function(err, user) {
            if (err) {
                res.json(err);
            } else {
                res.json(user);
            }
        })
    },
}
