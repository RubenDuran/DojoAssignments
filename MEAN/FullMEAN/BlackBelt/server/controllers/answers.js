var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');


module.exports = {

    create: function(req,request, res) {
        console.log("in options create-----", req.body);
        console.log('option1', req.body.fake1);
        console.log('option2', req.body.fake2);
        console.log('answer', req.body.answer);


        var newAnswer = new Answer({content:req.body.answer});
        newAnswer._question = req.body.qID;
        newAnswer.correct = true;
        newAnswer.save(function(err, savedAnswer) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
        var newAnswer = new Answer({content:req.body.fake1});
        newAnswer._question = req.body.qID;
        newAnswer.correct = false;
        newAnswer.save(function(err, savedAnswer) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
        var newAnswer = new Answer({content:req.body.fake2});
        newAnswer._question = req.body.qID;
        newAnswer.correct = false;
        newAnswer.save(function(err, savedAnswer) {
            if (err) {
                console.log("something went wrong");
                res.json(err);
            } else {
                console.log("message saved");
                // res.json(savedOption);
            }
        })
    },

    getAnswers: function(req, res) {
        console.log("chkn req in get options",req.body);
        Answer.find({
            _question: req.body.id
        })
        // .sort([['votes', 'descending']])
        .exec(function(err, answers) {
            if (err) {
                res.json(err);
            } else {
                console.log('i got the answers',answers);
                res.json(answers);
            }
        })
    },

    checkAnswers: function(req, res) {
        console.log("chkn req in chk answers",req.body);
        let resp = [];
        for(let i = 0; i<3; i++){
            console.log('in for loop - chkAnswer', req.body[i] );
            Answer.find({
                content: req.body[i]
            })
            // .sort([['votes', 'descending']])
            .exec(function(err, answers) {
                if (err) {
                    res.json(err);
                } else {

                    console.log('i got the answers for i', answers);
                    console.log('the temp variable - ', resp);
                    resp.push(answers[0])
                    console.log('the temp variable - after push ', resp);
                    // if(i === 2){
                    //     res.json(resp);
                    // }
                    res.json(resp);

                }
            })
        }
    res.json(resp);
},

    // addVote: function(req, res) {
    //     console.log("chkn req in add vote",req.body);
    //     var temp = Option.find({
    //         _id: req.body.id
    //     }).exec(function(err, vote) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             console.log('i got the options',vote);
    //             console.log("the temp",temp);
    //             vote[0].votes += 1;
    //             console.log("votes after adding", vote);
    //             vote[0].save(function(err, savedOption) {
    //                 if (err) {
    //                     console.log("something went wrong");
    //                     res.json(err);
    //                 } else {
    //                     console.log("vote added");
    //                     // res.json(savedOption);
    //                 }
    //             })
    //
    //
    //             res.json(vote);
    //         }
    //     })
    // },

}
