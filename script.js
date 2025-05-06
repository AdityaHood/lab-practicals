const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")

let formSubmit = document.getElementById("submit");

formSubmit.addEventListener("submit",function(event){
    event.preventDefault();

    let user = {
        fullname : fullname.value,
        email:email.value,
        password: password.value
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    console.log("users array" + users)
    localStorage.setItem("users",JSON.stringify(users));

    window.location.href="userlist.html"
})