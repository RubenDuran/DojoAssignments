var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ProductSchema = mongoose.Schema({
	name: {type: String, minlength: 2, require: true},
    img: {type: String, minlength: 8, require: true},
    description: {type: String, minlength: 4, require: true},
    quantity: {type: Number, require: true},
}, {timestamps: true})
mongoose.model('Product', ProductSchema);
