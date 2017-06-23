var mongoose = require('mongoose');
var schema = mongoose.Schema;
var MessageSchema = mongoose.Schema({
	content: {type: String, minlength: 8},
	_user: {type: schema.Types.ObjectId, ref: 'User'},
	comments: [{type: schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps:true})
mongoose.model('Message', MessageSchema);
