
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {  mytitle: 'The Quiz Taker' });

};

exports.calculate = function(req, res){
  var firstNo = req.params.firstNo;
  var secondNo = req.params.secondNo;

  res.send("my no 1st is " + firstNo + " The no 2nd is " + secondNo + " and their addition is " + (parseInt(firstNo)+parseInt(secondNo)));
}