var mongoose = require('mongoose');
var schema = mongoose.Schema;
var AnswerSchema = mongoose.Schema({
    content: {type: String, minlength: 4, require: true},
    correct: {type: Boolean, require: true},
    _question: {type: schema.Types.ObjectId, ref: 'Question'},
}, {timestamps:true})
mongoose.model('Answer', AnswerSchema);
