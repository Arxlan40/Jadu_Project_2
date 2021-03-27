
const registerNameInput = document.getElementById("registerName");
const registerUsernameInput = document.getElementById("registerUsername");
const registerEmailInput = document.getElementById("registerEmail");
const registerPasswordInput = document.getElementById("registerPassword");
const registerRepeatPasswordInput = document.getElementById("registerRepeatPassword");
const registerbtn = document.getElementById("registerbutton");

const userStorage = localStorage.getItem("users");
const JSONToUser = JSON.parse(userStorage);
let users = JSONToUser || [];

class User {
    username;
    name;
    email;
    password;
    constructor(username, name, email, password) {
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password
    }
}

registerbtn.addEventListener("click", function () {
    if (registerNameInput.value != "" && registerUsernameInput.value != "" && registerEmailInput.value != "" && registerRepeatPasswordInput.value != "" && registerPasswordInput.value != "") {

        if (registerRepeatPasswordInput.value == registerPasswordInput.value) {
            const user = new User(registerUsernameInput.value, registerNameInput.value, registerEmailInput.value, registerRepeatPasswordInput.value);
            users.push(user);
            const usersJson = JSON.stringify(users);
            localStorage.setItem("users", usersJson);

            registerRepeatPasswordInput.value = "";
            registerPasswordInput.value = "";
            registerNameInput.value = '';
            registerEmailInput.value = '';
            registerUsernameInput.value = "";

            window.alert("Congratulations You are Registered Successfully");

        }
        else {
            window.alert("Your Passowrd didnt match Confirm Password");
        }

    }
    else {
        window.alert("Please Fill all the required fields");
    }
});
