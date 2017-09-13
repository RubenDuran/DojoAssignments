var mongoose = require('mongoose');
var Option = mongoose.model('Option');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = {

    create: function(req,request, res) {
        console.log("in options create-----", req.body);
        console.log('option1', req.body.option1);
        console.log('option2', req.body.option2);
        console.log('option3', req.body.option3);
        console.log('option4', req.body.option4);

        var newOption = new Option({content:req.body.option1});
        newOption._question = req.body.qID;
        newOption.save(function(err, savedOption) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
        var newOption = new Option({content:req.body.option2});
        newOption._question = req.body.qID;
        newOption.save(function(err, savedOption) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
        var newOption = new Option({content:req.body.option3});
        newOption._question = req.body.qID;
        newOption.save(function(err, savedOption) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
        var newOption = new Option({content:req.body.option4});
        newOption._question = req.body.qID;
        newOption.save(function(err, savedOption) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })

    },

    getOptions: function(req, res) {
        console.log("chkn req in get options",req.body);
        Option.find({
            _question: req.body.qID
        }).sort([['votes', 'descending']]).exec(function(err, options) {
            if (err) {
                res.json(err);
            } else {
                console.log('i got the options',options);
                res.json(options);
            }
        })
    },

    addVote: function(req, res) {
        console.log("chkn req in add vote",req.body);
        var temp = Option.find({
            _id: req.body.id
        }).exec(function(err, vote) {
            if (err) {
                res.json(err);
            } else {
                console.log('i got the options',vote);
                console.log("the temp",temp);
                vote[0].votes += 1;
                console.log("votes after adding", vote);
                vote[0].save(function(err, savedOption) {
                    if (err) {
                        console.log("something went wrong");
                        res.json(err);
                    } else {
                        console.log("vote added");
                        // res.json(savedOption);
                    }
                })


                res.json(vote);
            }
        })
    },

}
