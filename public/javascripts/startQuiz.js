var isSignedIn = sessionStorage.getItem('signedInUser');

    if(isSignedIn == null){

        window.location.assign("/");

    }
    else {

        var str = (window.location.pathname).substr(11,window.location.pathname.length);

        $(document).ready(function(){
            $('#quiz').append("<span>Quiz ID :");
            $('#quiz').append(str);
            $('#quiz').append("</span>");
        });

        function startQuiz() {
            window.location.assign("/quiz/"+str);
        }

    }