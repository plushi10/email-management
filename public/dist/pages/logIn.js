export function loginPage(app) {
    app.innerHTML = `
    <h1>log in</h1>
    <p>Email</p>
    <input type="email" name="email" id="email" required>
    <p>Password</p>
    <input type="text" name="password" id="password" required> <br> 
    <div class="submit">
        <input type="button" id="logIn" value="logIn">
        <p>Already have an account? <a href="">Sing in</a></p>
    </div>
    `;
    let emailBox = document.getElementById("email");
    let passwordBox = document.getElementById("password");
    let submitLogin = document.getElementById("logIn");
    let testEmail = "gigi@gmail.com";
    let testPassw = "1234";
    function logIn() {
        const email = emailBox.value.trim();
        const password = passwordBox.value.trim();
        if ((email === testEmail) && (password === testPassw)) {
            console.log("you are in");
        }
        else {
            console.log("error during the access");
        }
    }
    submitLogin === null || submitLogin === void 0 ? void 0 : submitLogin.addEventListener("click", logIn);
}
//# sourceMappingURL=logIn.js.map