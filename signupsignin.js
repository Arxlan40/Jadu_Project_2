// signup declarations
const regNameInput = document.getElementById("registerName");
const regUserNameInput = document.getElementById("registerUsername");
const regEmailInput = document.getElementById("registerEmail");
const regPassInput = document.getElementById("registerPassword");
const regRepPassInput = document.getElementById("registerRepeatPassword");
const regCheckBox = document.getElementById("registerCheck");
const btnReg = document.getElementById("btn_register");

// signin declarations
const loginNameEmailInput = document.getElementById("loginName");
const loginPassInput = document.getElementById("loginPassword");
const checkboxRemember = document.getElementById("loginCheckbox");
const btnSignin = document.getElementById("btn_signin");

//.......................................................................
const regUserJsonStorage = localStorage.getItem("regList");
const JsonToUser = JSON.parse(regUserJsonStorage);
let regList = JsonToUser || [];

const signinUserJsonStorage = localStorage.getItem("signinList");
const JsonToUser2 = JSON.parse(signinUserJsonStorage);
let signinList = JsonToUser2 || [];

class regClass {
  id;
  name;
  username;
  email;
  pass;
  confirmpass;
  checkbox;

  constructor(id, name, username, email, pass, confirmpass, checkbox) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.pass = pass;
    this.confirmpass = confirmpass;
    this.checkbox = checkbox;
  }
}

class signinClass {
  id;
  email_username;
  signinpasword;
  constructor(id, email_username, signinpasword) {
    this.id = id;
    this.email_username = email_username;
    this.signinpasword = signinpasword;
  }
}

btnReg.addEventListener("click", function () {
  if (
    regNameInput.value != "" &&
    regUserNameInput.value != "" &&
    regEmailInput.value != "" &&
    regPassInput.value != "" &&
    regRepPassInput.value != ""
  ) {
    if (regPassInput.value == regRepPassInput.value) {
      const varRegUser = new regClass(
        Date.now(),
        regNameInput.value,
        regUserNameInput.value,
        regEmailInput.value,
        regPassInput.value,
        regRepPassInput.value,
        regCheckBox.value
      );
      regList.push(varRegUser);
      const regUserJsonStorage = JSON.stringify(regList);
      localStorage.setItem("regList", regUserJsonStorage);
      // console.log(regList);
      regNameInput.value = "";
      regUserNameInput.value = "";
      regEmailInput.value = "";
      regPassInput.value = "";
      regRepPassInput.value = "";
      alert("Congratulations You are Registered Successfully.");
    } else {
      alert("Password don't match, Confirm Password!");
    }
  } else {
    alert("Fields are empty!");
  }
});

btnSignin.addEventListener("click", function () {
  if (loginNameEmailInput.value != "" && loginPassInput.value != "") {
    var findEmailpassword = regList.find((regClass) => {
      if (
        regClass.email == loginNameEmailInput.value &&
        regClass.pass == loginPassInput.value
      ) {
        return true;
      } else {
        return false;
      }
    });
    console.log(findEmailpassword);

    if (findEmailpassword != undefined) {
      const varSigninUser = new signinClass(
        Date.now(),
        loginNameEmailInput.value,
        loginPassInput.value,
        checkboxRemember.value
      );
      signinList.push(varSigninUser);
      const signinUserJsonStorage = JSON.stringify(signinList);
      localStorage.setItem("signinList", signinUserJsonStorage);
      alert("Welcome! You are successfully logged in!");
    } else {
      alert("email or password doesn't match!");
    }
  } else {
    alert("Fields are empty!");
  }
});
