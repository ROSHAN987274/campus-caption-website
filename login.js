
function togglePassword(){

let password = document.getElementById("password");
let icon = document.querySelector(".toggle-password");

if(password.type === "password"){

password.type = "text";
icon.classList.remove("fa-eye");
icon.classList.add("fa-eye-slash");

}
else{

password.type = "password";
icon.classList.remove("fa-eye-slash");
icon.classList.add("fa-eye");

}

}


document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let savedUser = localStorage.getItem("username");
let savedPass = localStorage.getItem("password");

if(username === savedUser && password === savedPass){

alert("Login Successful 🎬");

window.location.href="home.html";

}
else{

document.getElementById("errorMsg").textContent="Invalid Username or Password";

}

});