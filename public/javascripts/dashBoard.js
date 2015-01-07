
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }

    else {

        var user = JSON.parse(sessionStorage.getItem('signedInUser'))[0];

        $.ajax({
            type: "POST",
            url: "/getUserResults",
            data: {userID: user._id}
        }).success(function (data, textstatus) {
            $('#userData').html(data);
            console.log(data)

        }).error(function (err, textStatus) {
            console.log(err)
        });
    }

});