

var user = "HasanNaseem";
var pwd = "123456789";
var loggedin = 0;
var rem = 0;
var rem_u;
var rem_p;

$("#login-b").click(function(){
    if (loggedin){
        document.getElementById("login-b").innerHTML = "Log In | Sign Up";
        loggedin = 0;
    } else {
        $('#LoginModal').modal('show');
        if (rem){
            document.getElementById("usr-name").value = rem_u;
            document.getElementById("usr-pwd").value = rem_p;
        } else {
            document.getElementById("usr-name").value = "";
            document.getElementById("usr-pwd").value = "";
        }
    }
});
$("#login-s").click(function(){
    if (user == document.getElementById("usr-name").value){
        if (pwd == document.getElementById("usr-pwd").value){
            loggedin = 1;
            if (document.getElementById("usr-rem").checked){
                rem_u = user;
                rem_p = pwd;
            }
            document.getElementById("login-b").innerHTML = "Log Out";
            $('#LoginModal').modal('hide');
        }
    }
});
$("#post-ad").click(function(){
    if (loggedin){
        window.location.href = "post.html"
    } else {
        $('#LoginModal').modal('show');
    }
});