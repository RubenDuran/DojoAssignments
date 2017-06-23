var mongoose = require('mongoose');
var CustomerSchema = mongoose.Schema({
	name: {type: String, minlength: 3, require: true}
},
 {timestamps: true})
mongoose.model('Customer', CustomerSchema);
