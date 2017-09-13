var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Option = mongoose.model('Option');
var User = mongoose.model('User');

module.exports = {

    create: function(req, res) {
        console.log("in questions.js create function....", req.body );
        console.log('---',  req.body.content.length);
        if(req.body['content'].length > 8){
            var newQuestion = new Question(req.body);
            newQuestion._user = req.session.userId;
            newQuestion.save(function(err, savedQuestion) {
                if (err) {
                    console.log("something went wrong");
                    res.json(err);
                } else {
                    console.log("message saved");
                    res.json(newQuestion);
                }
            })
        } else{
            console.log("must be atleast 8 characters long");
            res.json("must be atleast 8 characters long");
        }
    },

    getQuestion: function(req, res) {
        console.log("@@@@@##### in get question", req.body);
        Question.find({
            _id: req.body.qID
        }).exec(function(err, question) {
            if (err) {
                res.json(err);
            } else {
                res.json(question);
            }
        })
    },
    getQuestions: function(req, res) {
        console.log('in get questions controller');
        Question.find({}).populate('_user').exec(function(err, questions) {
            if (err) {
                res.json(err);
            } else {
                res.json(questions);
            }
        })
    },
    destroy: function(req, res) {
        console.log('destroy destroy');
        Question.find({_id:req.params.id}).exec(function(err, questions) {
            if (err) {
                res.json(err);
            } else {
                Option.find({_question:req.params.id}).exec(function(err, options) {
                    if (err) {
                        res.json(err);
                    } else {
                        for(let option of options){
                            option.remove();
                        }
                        // res.json(options);
            }
        })
        questions[0].remove();
        // res.json(questions);
    }

})
},
}
