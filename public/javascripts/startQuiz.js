
    var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }
    else {

        function startQuiz() {
            var str = (window.location.pathname).substr(11,window.location.pathname.length)
            window.location.assign("/quiz/"+str);
        }
    }



