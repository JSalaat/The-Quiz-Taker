
    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }
    else {

        function sendId(str) {
            window.location.assign("/startQuiz/"+str);
        }
    }

