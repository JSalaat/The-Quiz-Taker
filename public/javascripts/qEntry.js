
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
            var select = $('#toQuiz');

            for (var i = 0; i < data.data.length; i++) {

                select.append("<option value='" + data.data[i]._id + "'>" + data.data[i].quizName + "</option>");


            }
            console.log(data)

        }).error(function (err, textStatus) {
            console.log(err)
        });

        $("#submit").click(function () {

            var toQuiz = $("#toQuiz").val();
            var ques = $("#ques").val();
            var ans1 = $("#ans1").val();
            var ans2 = $("#ans2").val();
            var ans3 = $("#ans3").val();
            var ans4 = $("#ans4").val();
            var cAns = $("#cAns").val();

            console.log(toQuiz);

            //alert(toQuiz);
            //alert(ques + " " + ans1 + " " + ans2 +" " + ans3 +" " + ans4 + " " + cAns);

            var data = {
                toQuiz: toQuiz,
                ques: ques,
                ans1: ans1,
                ans2: ans2,
                ans3: ans3,
                ans4: ans4,
                cAns: cAns
            };

            $.ajax({
                type: "POST",
                url: "/qEntry",
                data: data
            }).success(function (data, textstatus) {
                console.log(data)

            }).error(function (err, textStatus) {
                console.log(err)
            })
        })
    }

});