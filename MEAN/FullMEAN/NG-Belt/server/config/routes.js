var Users = require('./../controllers/users.js');
var Options = require('./../controllers/options.js');
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
        res.sendFile(path.resolve('./ng-belt/dist/index.html'));
    })
    app.use(authenticate);
    app.post('/api/question/create', Questions.create);
    app.post('/api/option/create', Options.create);
    app.get('/api/questions', Questions.getQuestions);
    app.post('/api/question', Questions.getQuestion);
    app.post('/api/options', Options.getOptions);
    app.post('/api/votes', Options.addVote);
    app.get('/api/user', Users.getUser);
    app.get('/api/destroy/:id', Questions.destroy);
}
