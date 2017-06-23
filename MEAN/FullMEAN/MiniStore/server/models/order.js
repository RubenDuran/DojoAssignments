var mongoose = require('mongoose');
var schema = mongoose.Schema;
var OrderSchema = mongoose.Schema({
	quantity: {type: Number, require:true},
	_customer: {type: schema.Types.ObjectId, ref: 'Customer'},
	_product: [{type: schema.Types.ObjectId, ref: 'Product'}]
}, {timestamps:true})
mongoose.model('Order', OrderSchema);
