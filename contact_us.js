
const contactfieldName = document.getElementById("contactfieldName");
const contactfieldEmail = document.getElementById("contactfieldEmail");
const contactfieldMessage = document.getElementById("contactfieldMessage");
const contactbutton = document.getElementById("contactbutton");

const usermessages = localStorage.getItem("usersmessages");
const JSONToUser = JSON.parse(usermessages);
let users = JSONToUser || [];

class contactDetails {
    message;
    name;
    email;
    constructor(username, name, email,) {
        this.message = username;
        this.name = name;
        this.email = email;
    }
}

contactbutton.addEventListener("click", function () {
    if (contactfieldName.value != "" && contactfieldEmail.value != "" && contactfieldMessage.value != "") {

        const usermessage = new contactDetails(contactfieldMessage.value, contactfieldName.value, contactfieldEmail.value,);
        users.push(usermessage);
        const usersJson = JSON.stringify(usermessage);
        localStorage.setItem("usersmessages", usersJson);

        window.alert("Your message is sent to the admin");


    }
    else {
        window.alert("Please fill the contact form before sending message");
    }
});
