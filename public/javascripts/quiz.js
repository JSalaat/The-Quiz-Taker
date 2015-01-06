
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

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
            $('#ques').html(data.data[0].question);
            $('#ans1').html(data.data[0].ans1);
            $('#ans2').html(data.data[0].ans2);
            $('#ans3').html(data.data[0].ans3);
            $('#ans4').html(data.data[0].ans4);


        }).error(function (err, textStatus) {
            console.log(err)
        });


    $("#submitAns").click(function(){

        var ans = $("input[name=ans]:checked").val();
        //var ans = '';


        alert(ans);


        })

    }

});