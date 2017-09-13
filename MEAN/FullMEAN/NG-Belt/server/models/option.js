var mongoose = require('mongoose');
var schema = mongoose.Schema;
var OptionSchema = mongoose.Schema({
    content: {type: String, minlength: 5, require: true},
    votes: {type: Number, default: 0},
    _question: {type: schema.Types.ObjectId, ref: 'Question'},
}, {timestamps:true})
mongoose.model('Option', OptionSchema);
