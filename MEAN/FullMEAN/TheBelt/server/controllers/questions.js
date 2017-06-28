var mongoose = require('mongoose');
var Question = mongoose.model('Question');


module.exports = {

    create: function(req, res) {
        var newQuestion = new Question(req.body);
        newQuestion.save(function(err, savedQuestion) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                res.json(savedQuestion);
            }
        })

    },

    // getQuestion: function(req, res) {
    //     Question.find({
    //         content: req.body.content
    //     }).populate('_bidder').sort({
    //         $natural: -1
    //     }).limit(1).exec(function(err, question) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(question);
    //         }
    //     })
    // },

    getQuestions: function(req, res) {
        Question.find({}).exec(function(err, questions) {
            if (err) {
                console.log("happy", err);
                res.json(err);

            } else {
                console.log("more happy", questions);
                res.json(questions);
            }
        })
    },
    getQuestion: function(req, res) {
        console.log('in get? ----------------', req.params);
        console.log('or----', req.params.id);
        Question.findOne({_id:req.params.id}).exec(function(err, question) {
            if (err) {
                console.log("sad", err);
                res.json(err);

            } else {
                console.log("more sad", question);
                res.json(question);
            }
        })
    },
}
