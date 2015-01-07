
$(document).ready(function(){

    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }

    else {

        var result = sessionStorage.getItem('result');

        var parsedResult = JSON.parse(result);

        var calculatedScore = 0;

        parsedResult.forEach(function(entry) {
            if(entry == true){
                calculatedScore++;
            }
        });

        var percentage = ((calculatedScore/parsedResult.length)*100);

        var int = parseInt(percentage);

        var roundPerc = Math.round(int);

        var text = '';

        if(roundPerc<40){
            text = "Sorry ! You have failed"
        }

        $('#result').html('Your result is '+parsedResult);

        $('#percentage').html('Your percentage is '+roundPerc+'%');





    }

});