
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var data = require('./routes/data');
var user = require('./routes/user');
var questions = require('./routes/question');
var quizEntry = require('./routes/quizEntry');
//var showQuiz = require('./routes/showQuiz');
var http = require('http');
var path = require('path');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.post('/signIn', user.signIn);

app.get('/signUp', function(req, res){
  res.render('signUp');
});

app.post('/signUp', user.signUp);

app.get('/quizEntry', function(req, res){
  res.render('quizEntry');
});

//app.get('/showQuiz', showQuiz.showQuiz);

app.post('/quizEntry', quizEntry.newQuiz);

app.get('/showQuiz', quizEntry.quizNames);

app.get('/startQuiz/:id', quizEntry.startQuiz);

app.get('/quiz/:id', quizEntry.quiz);

/*app.get('/quiz', function(req, res){
  res.render('quiz');
});*/

app.get('/qEntry', function(req, res){
  res.render('qEntry');
});

app.post('/qEntry', questions.question);

app.get('/test', function(req, res){
  res.send("alert..")
});

app.get('/getAllQuiz', quizEntry.getQuizNames);

app.get('/no/:firstNo/:secondNo', routes.calculate);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
