var mongoose = require('mongoose');
var schema = mongoose.Schema;
var QuestionSchema = mongoose.Schema({
    content: {type: String, minlength: 8, require: true},
    _user: {type: schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true})
mongoose.model('Question', QuestionSchema);
