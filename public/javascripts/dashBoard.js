
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }

    else {

        var user = JSON.parse(sessionStorage.getItem('signedInUser'))[0];

        var userQuizName = '';
        var user_quizID = '';

        $.ajax({
            type: "POST",
            url: "/getUserResults",
            data: {userID: user._id}
        }).success(function (data, textstatus) {

            userData = JSON.stringify(data.data);
            user_quizResult = (data.data[0].result);
            user_quizID = JSON.parse(JSON.stringify(data.data[0].quizID));
            console.log(data)

        }).error(function (err, textStatus) {
            console.log(err)
        });
    }

        $.ajax({
            type: "GET",
            url: "/getAllQuiz"
        }).success(function (data, textstatus) {
            console.log(data);
            var quizIDs = [];
            quizIDs.push(data.data);

            quizIDs.forEach(function(a) {
                a.forEach(function(b) {
                if(b._id == user_quizID){
                    userQuizName = b.quizName;
                }
                });
            });

            var parsedResult = user_quizResult;

            var calculatedScore = 0;

            parsedResult.forEach(function(entry) {
                if(entry == true){
                    calculatedScore++;
                }
            });

            var percentage = ((calculatedScore/parsedResult.length)*100);

            var int = parseInt(percentage);

            var roundPerc = Math.round(int);

            var text = '';

            $('#userData').html(userQuizName + 'Your percentage is '+roundPerc+'%');

        }).error(function (err, textStatus) {
            console.log(err)
        });





});