
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }

    else {

    $("#submitAns").click(function(){

        var ans = $("input[name=ans]:checked").val();
        //var ans = '';


        alert(ans);


        })

    }

});