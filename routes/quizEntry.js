/**
 * Created by panacloud on 30/12/2014.
 */


/*
 * GET users listing.
 */

var mongoose = require('mongoose');


var quizSchema = mongoose.Schema({
    quizName:String,
    quizDes:String

});

var quizDb = mongoose.model('quiz', quizSchema);


/*exports.list = function(req, res){
    user.find({},function(err,data){

        res.send({err:err,data:data});

    });

    //res.send("respond with a resource");
};*/


exports.newQuiz = function(req, res){

        var quizName = req.body.quizname;
        var quizDes = req.body.description;

    var nQuiz = new quizDb({
        quizName: quizName,
        quizDes: quizDes

    });

    nQuiz.save(function(err,data){

        res.send({err:err,data:data});

    });

    //res.send(username + " " + email + " " + password);

};

exports.quizNames = function(req, res){


    quizDb.find(function (err, data) {
        res.send({err: err, data: data});


    });


    //res.send(username + " " + email + " " + password);

};
