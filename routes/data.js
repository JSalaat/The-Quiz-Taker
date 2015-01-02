
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quizApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));
db.once('open', function callback(){
    console.log("db connected")
});



//
//var usersSchema = mongoose.Schema({
//    userName:String,
//    email: String,
//    pass: String
//
//});
//
//mongoose.model('users', usersSchema);