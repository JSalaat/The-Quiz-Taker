
$(document).ready(function(){

    sessionStorage.getItem('signedInUser');
    console.log(sessionStorage);


    $("#submitAns").click(function(){

        var ans = $("input[name=ans]:checked").val();
        //var ans = '';


        alert(ans);


    })

});