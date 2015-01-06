/**
 * Created by panacloud on 30/12/2014.
 */


/*
 * GET users listing.
 */

var mongoose = require('mongoose');


var qSchema = mongoose.Schema({
    toQuiz:String,
    question:String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
    correctans: String

});

var questionDb = mongoose.model('question', qSchema);


/*exports.list = function(req, res){
    user.find({},function(err,data){

        res.send({err:err,data:data});

    });

    //res.send("respond with a resource");
};*/

exports.question = function(req, res){

    var toQuiz = req.body.toQuiz;
    var question = req.body.ques;
    var ans1 = req.body.ans1;
    var ans2 = req.body.ans2;
    var ans3 = req.body.ans3;
    var ans4 = req.body.ans4;
    var correctans = req.body.cAns;

    var nQuestion = new questionDb({
        toQuiz: toQuiz,
        question: question,
        ans1: ans1,
        ans2: ans2,
        ans3: ans3,
        ans4: ans4,
        correctans: correctans

    });

    nQuestion.save(function(err,data){

        res.send({err:err,data:data});

    });

    //res.send(username + " " + email + " " + password);

};

exports.getAllQuestionsByID = function(req, res){

    var quizID = req.body.quizID;

    questionDb.find({toQuiz:quizID}, function (err, data) {
        res.send({err: err, data: data});

        //res.render('showQuiz', {  data: data });
        //res.render('data', {  data: data.data });


    });


    //res.send(username + " " + email + " " + password);

};