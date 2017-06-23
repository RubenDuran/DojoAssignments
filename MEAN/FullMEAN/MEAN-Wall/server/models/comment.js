var mongoose = require('mongoose');
var schema = mongoose.Schema;
var CommentSchema = mongoose.Schema({
	content: {type: String, minlength: 8},
	_user: {type: schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true})
mongoose.model('Comment', CommentSchema);
