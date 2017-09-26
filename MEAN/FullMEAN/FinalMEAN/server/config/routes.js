var Users = require('./../controllers/users.js');
var Appointments = require('./../controllers/appointments.js');
var path = require('path');

function authenticate(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        // res.sendStatus(401);
        prompt("password")
    }
}

module.exports = function(app) {

    app.post('/api/users', Users.create);
    app.get('/', function(req, res, next) {
        res.sendFile(path.resolve('./final-mean/dist/index.html'));
    })
    app.use(authenticate);
    app.get('/api/user', Users.getUser);
    // app.post('/api/bids/all', Bids.getBids);
    // app.post('/api/bids/one', Bids.getBid);
    // app.get('/api/restart', Bids.restart);
    // app.get('/api/bids/name', Bidders.getName);
    app.get('/api/logout', Users.logout);
}
