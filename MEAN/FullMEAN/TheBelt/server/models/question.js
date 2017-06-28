var mongoose = require('mongoose');
var schema = mongoose.Schema;
var QuestionSchema = mongoose.Schema({
    content: {type: String, minlength: 10, require: true},
    description: {type: String}
}, {timestamps:true})
mongoose.model('Question', QuestionSchema);
