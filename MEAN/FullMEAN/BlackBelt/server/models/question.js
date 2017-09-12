var mongoose = require('mongoose');
var schema = mongoose.Schema;
var QuestionSchema = mongoose.Schema({
    content: {type: String, minlength: 15, require: true},
}, {timestamps:true})
mongoose.model('Question', QuestionSchema);
