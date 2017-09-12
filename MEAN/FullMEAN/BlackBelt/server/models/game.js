var mongoose = require('mongoose');
var schema = mongoose.Schema;
var GameSchema = mongoose.Schema({
    percentage: {type: String, minlength: 2, require: true},
    score: {type: Number, default: 0},
    _user: {type: schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true})
mongoose.model('Game', GameSchema);
