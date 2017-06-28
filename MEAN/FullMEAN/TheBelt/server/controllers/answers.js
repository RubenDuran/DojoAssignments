var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');
var User = mongoose.model('User');

module.exports = {

    create: function(req, res) {
        var newAnswer = new Answer(req.body);
        // newAnswer._user = req.session.userId;
        newAnswer.save(function(err, savedAnswer) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                res.json(newAnswer);
            }
        })

    },
    //
    // getAnswer: function(req, res) {
    //     Answer.find({
    //         _question: req.body.question
    //     }).populate('_user').sort({
    //         $natural: -1
    //     }).limit(1).exec(function(err, answer) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(answer);
    //         }
    //     })
    // },

    getAnswers: function(req, res) {
        Answer.find({
            _question: req.body.question
        }).populate('_user').exec(function(err, answers) {
            if (err) {
                res.json(err);
            } else {
                res.json(answers);
            }
        })
    },

}
