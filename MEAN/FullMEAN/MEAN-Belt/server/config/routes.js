var Bidders = require('./../controllers/bidders.js');
var Bids = require('./../controllers/bids.js');
var path = require('path');
function authenticate(req,res,next){
	if(req.session.bidderId){
		next();
	}else{
		res.sendStatus(401);
	}
}

module.exports = function(app){

	app.post('/api/bidders', Bidders.create);
	app.get('/', function(req,res, next){
		res.sendFile(path.resolve('./online-bid/dist/index.html'));
	})
	app.use(authenticate);
	app.post('/api/delete_bids', Bids.delete);
	app.post('/api/bids', Bids.create);
	app.get('/api/bids', Bids.index);
    app.get('/api/bids/name', Bidders.getName);

}
