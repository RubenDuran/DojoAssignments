var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
	name: {type: String, minlength: 3}
})
mongoose.model('User', UserSchema);
