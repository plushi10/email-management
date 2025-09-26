export function loginPage(app) {
    var _a;
    app.innerHTML = `
    <h1>log in</h1>
    <p>Email</p>
    <input type="email" name="email" id="email" required>
    <p>Password</p>
    <input type="text" name="password" id="password" required> <br> 
    <div class="submit">
        <input type="button" id="logIn" value="logIn">
        <p>Already have an account? <a href="#" id='toSingIn'>Sing in</a></p>
    </div>
    `;
    let emailBox = document.getElementById("email");
    let passwordBox = document.getElementById("password");
    let submitLogin = document.getElementById("logIn");
    // change the page to singIn
    (_a = document.getElementById("toSingIn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "#singIn";
    });
    submitLogin === null || submitLogin === void 0 ? void 0 : submitLogin.addEventListener("click", async () => {
        try {
            const res = await fetch("http://localhost:3000/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: emailBox.value,
                    password: passwordBox.value,
                }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                console.log("you are in");
            }
            else {
                console.log("error:", data.message);
            }
        }
        catch (err) {
            console.error("Server error:", err);
        }
    });
}
//# sourceMappingURL=logIn.js.map