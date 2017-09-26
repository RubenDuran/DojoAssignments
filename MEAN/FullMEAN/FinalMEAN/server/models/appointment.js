var mongoose = require('mongoose');
var schema = mongoose.Schema;
var AppointmentSchema = mongoose.Schema({
    complain: {type: String, minlength: 10, require: true},
    date: {type: Date, require: true},
    _user: {type: schema.Types.ObjectId, ref: 'User'},
}, {timestamps:true})
mongoose.model('Appointment', AppointmentSchema);
