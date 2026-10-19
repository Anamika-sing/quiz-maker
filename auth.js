const form = document.getElementById("registerForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match!");

return;

}

const user = {

name,

email,

password

};

localStorage.setItem("quizUser", JSON.stringify(user));

alert("Registration Successful!");

window.location.href="login.html";

});

}


const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("loginEmail").value.trim().toLowerCase();

const password = document.getElementById("loginPassword").value;

let user = null;

try{

user = JSON.parse(localStorage.getItem("quizUser"));

}catch(error){

user = null;

}

if(!user){

alert("No account found. Please register first.");

window.location.href="register.html";

return;

}

if(email === user.email.toLowerCase() && password === user.password){

localStorage.setItem("quizLoggedIn","true");

alert("Login Successful!");

window.location.href="index.html";

}else{

alert("Incorrect email or password.");

}

});

}