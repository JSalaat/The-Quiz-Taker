
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }
    else {
        $.ajax({
            type: "GET",
            url: "/getAllQuiz"
        }).success(function (data, textstatus) {


        $("#newQuiz").click(function () {

            var quizname = $("#quizName").val();
            var description = $("#quizDes").val();

            //alert(quizname + " " + description);
            var data = {
                quizname: quizname,
                description: description
            };
            $.ajax({
                type: "POST",
                url: "/quizEntry",
                data: data
            }).success(function (data, textstatus) {
                console.log(data)

            }).error(function (err, textStatus) {
                console.log(err)
            })
        })
    }
        )}


});