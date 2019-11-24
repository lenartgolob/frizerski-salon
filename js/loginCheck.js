function login(){

    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
 
    if((username == "Lenart" && password == "password") || (username == "Janez" && password == "novak")){
       var delayInMilliseconds = 500; // delay 0,5 sekunde
       setTimeout(function() {
       localStorage.setItem("username", username);
       window.location = "namizje.html";
    }, delayInMilliseconds);
 
    }
 
    else {
       window.location = "login.html?msg=wrong_pass";
 
    }
 
 
     
 }