
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    var userAnswers = [];

    var currentQuestion = 0;

    if(isSignedIn == null){

        window.location.assign("/");

    }

    else {

        var str = (window.location.pathname).substr(6,window.location.pathname.length);

        var data = {
            quizID : str
        };
        $.ajax({
            type: "POST",
            url: "/getAllQuestionsByID",
            data: data
        }).success(function (data, textstatus) {
            console.log(data);

            getQuestion = function (currentQuestion) {
                $('#ques').html(data.data[currentQuestion].question);
                $('#ans1').html(data.data[currentQuestion].ans1);
                $('#ans2').html(data.data[currentQuestion].ans2);
                $('#ans3').html(data.data[currentQuestion].ans3);
                $('#ans4').html(data.data[currentQuestion].ans4);

                correctans = data.data[currentQuestion].correctans;

                length = data.data.length;

            };
            getQuestion(currentQuestion);

        }).error(function (err, textStatus) {
            console.log(err)
        });

        $("#submitAns").click(function() {

            var selectedAns = $("input[name=ans]:checked").val();

            if (selectedAns == correctans) {
                alert('Correct ans');
                userAnswers.push(true);

                console.log(userAnswers);
                console.log('selectedAns is ' + selectedAns);

            }
            else {
                alert('Incorrect ans');
                userAnswers.push(false);

                console.log(userAnswers);
                console.log('selectedAns is ' + selectedAns);
            }

                currentQuestion++;

                if(currentQuestion >= length){

                    sessionStorage.setItem('result', JSON.stringify(userAnswers));

                    var user = JSON.parse(sessionStorage.getItem('signedInUser'))[0];

                    var data = {
                        quizID: str,
                        userID: user._id,
                        result: userAnswers
                    };

                    $.ajax({
                        type: "POST",
                        url: "/saveResult",
                        data: data
                    }).success(function (data, textstatus) {
                        console.log(data)

                    }).error(function (err, textStatus) {
                        console.log(err)
                    });

                    window.location.assign("/result");

                }
                else {
                   getQuestion(currentQuestion);
                    if(currentQuestion == length-1) {
                        $("#submitAns").html('Show Results');
                    }
                }
            });






    }

});