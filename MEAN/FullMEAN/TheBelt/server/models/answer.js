var mongoose = require('mongoose');
var schema = mongoose.Schema;
var AnswerSchema = mongoose.Schema({
    content: {type: String, minlength: 5, require: true},
    details: {type: String},
    likes: {type: Number, require:true, default: 0},
    _user: {type: schema.Types.ObjectId, ref: 'User'},
    _question: {type: schema.Types.ObjectId, ref: 'Question'},
}, {timestamps:true})
mongoose.model('Answer', AnswerSchema);
