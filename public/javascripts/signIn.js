
$(document).ready(function(){

    $("#signIn").click(function(){

        var username = $("#inputusername").val();
        var password = $("#inputPassword").val();

        if(username == '' || password == ''){
            $("#form").addClass('has-error');
        }
        else {


            var data = {
                username: username,
                password: password
            };
            $.ajax({
                type: "POST",
                url: "/signIn",
                data: data
            }).success(function (data, textstatus) {
                if(data.data == 0){
                    $("#form").addClass('has-error');

                }

                else {

                    sessionStorage.setItem('signedInUser', JSON.stringify(data.data));
                    sessionStorage.getItem('signedInUser');
                    window.location.assign("/showQuiz");
                }

            }).error(function (err, textStatus) {
                alert(err + textStatus);
            })
        }
    })

});