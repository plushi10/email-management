let emailBox = document.getElementById("email");
let passwordBox = document.getElementById("password");
let submitLogin = document.getElementById("logIn");
let testEmail = "gigi@gmail.com";
let testPassw = "1234";
function logIn() {
    let email = emailBox.value.trim();
    let password = passwordBox.value.trim();
    if ((email === testEmail) && (password === testPassw)) {
        console.log("you are in");
    }
    else {
        console.log("error during the access");
    }
}
submitLogin === null || submitLogin === void 0 ? void 0 : submitLogin.addEventListener("click", logIn);
export {};
//# sourceMappingURL=script.js.map