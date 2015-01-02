
$(document).ready(function(){

    sessionStorage.getItem('signedInUser');
    console.log(sessionStorage);


    $("#newQuiz").click(function(){

        var quizname = $("#quizName").val();
        var description = $("#quizDes").val();

        //alert(quizname + " " + description);
        var data = {
            quizname : quizname,
            description: description
        };
        $.ajax({
            type:"POST",
            url:"/quizEntry",
            data:data
        }).success(function(data, textstatus) {
            console.log(data)

        }).error(function(err,textStatus){
            console.log(err)
        })
    })


});