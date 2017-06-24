var mongoose = require('mongoose');
var schema = mongoose.Schema;
var BidderSchema = mongoose.Schema({
    name: {type: String, minlength: 3, require: true}
}, {timestamps:true})
mongoose.model('Bidder', BidderSchema);
