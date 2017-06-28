var Users = require('./../controllers/users.js');
var Answers = require('./../controllers/answers.js');
var Questions = require('./../controllers/questions.js');
var path = require('path');

function authenticate(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = function(app) {

    app.post('/api/users', Users.create);
    app.get('/', function(req, res, next) {
        res.sendFile(path.resolve('./QandA/dist/index.html'));
    })
    app.use(authenticate);
    app.post('/api/addQuestion', Questions.create);
    app.get('/api/getQuestions', Questions.getQuestions);
    app.get('/api/getQuestion/:id', Questions.getQuestion);
    app.get('/api/getUser', Users.getUser);
    app.post('/api/addAnswer', Answers.create);
    // app.post('/api/bids/all', Bids.getBids);
    // app.post('/api/bids/one', Bids.getBid);getQuestions
    // app.get('/api/restart', Bids.restart);
    // app.get('/api/bids/name', Bidders.getName);
    // app.get('/api/logout', Bidders.logout);
}
