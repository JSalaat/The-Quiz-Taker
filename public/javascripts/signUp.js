
$(document).ready(function(){

    sessionStorage.getItem('signedInUser');
    console.log(sessionStorage);


    $("#signUp").click(function(){

        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#pass").val();

        var data = {
            username : username,
            email : email,
            password: password
        };
        $.ajax({
            type:"POST",
            url:"/signUp",
            data:data
        }).success(function(data, textstatus) {
            console.log(data)

        }).error(function(err,textStatus){
            console.log(err)
        })


    })

});
/*
$.ajax({
    method:"POST",
    url:"/SignUp",
    data:data
}).success(function(data, textstatus) {
    console.log(data)

}).error(function(err,textStatus){
    console.log(err)
})*/