

var mongoose = require('mongoose');


var resultSchema = mongoose.Schema({
    quizID:String,
    userID:String,
    result: Array,
    date: Array
});

var resultDb = mongoose.model('result', resultSchema);


exports.result = function(req, res){

    var quizID = req.body.quizID;
    var userID = req.body.userID;
    var result = req.body.result;
    var date = new Date();

    var nResult = new resultDb({
        quizID: quizID,
        userID: userID,
        result: result,
        date: [date.getDate() ,date.getMonth() , date.getFullYear()]

    });

    nResult.save(function(err,data){

        res.send({err:err,data:data});

    });

};
exports.getUserResults = function(req, res){

    var userID = req.body.userID;

    resultDb.find({userID:userID}, function (err, data) {
        res.send({err: err, data: data});

    });

};
