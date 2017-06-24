var mongoose = require('mongoose');
var schema = mongoose.Schema;
var BidSchema = mongoose.Schema({
    amount: {type: Number, require:true},
	product: {type: String, require:true},
	_bidder: {type: schema.Types.ObjectId, ref: 'Bidder'},
}, {timestamps:true})
mongoose.model('Bid', BidSchema);
