
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
//var user = mongoose.model('users')

var userSchema = mongoose.Schema({
    userName:String,
    email: String,
    pass: String

});

var user = mongoose.model('user', userSchema);


exports.list = function(req, res){
  user.find({},function(err,data){

        res.send({err:err,data:data});

});

    //res.send("respond with a resource");
};

exports.signUp = function(req, res){

    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var user_info = new user({
        userName: username,
        email: email,
        pass: password

    });

    user_info.save(function(err,data){

        res.send({err:err,data:data});

    });

    //res.send(username + " " + email + " " + password);

  };

exports.signIn = function(req, res) {

    var username = req.body.username;
    var password = req.body.password;

    user.find({userName: username, pass: password}, function (err, data) {
        res.send({err: err, data: data});
        console.log(data);
        console.log(err);


    })
}