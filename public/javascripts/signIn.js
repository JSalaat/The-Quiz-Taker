
$(document).ready(function(){

    $("#signIn").click(function(){

        var username = $("#inputusername").val();
        var password = $("#inputPassword").val();

        var data = {
            username : username,
            password: password
        };
        $.ajax({
            type:"POST",
            url:"/signIn",
            data:data
        }).success(function(data, textstatus) {

            sessionStorage.setItem('signedInUser', JSON.stringify(data.data));

            sessionStorage.getItem('signedInUser');



        }).error(function(err,textStatus){
            console.log(err)
        })
    })

});