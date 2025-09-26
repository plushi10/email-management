export function singinPage(app) {
    var _a;
    app.innerHTML = `
        <h1>Sing In</h1> 
        <p>Email</p>
        <input type="email" name="emailSingin" id="emailSingin" required> <br>
        <p>Password</p>
        <input type="text" name="passwordSingin" id="passwordSingin" required> <br>
        <p>Username</p>
        <input type="text" name="usernameSingin" id="usernameSingin" required> <br>
        <p>Name</p>
        <input type="text" name="nameSingin" id="nameSingin" > <br>
        <p>Surename</p>
        <input type="text" name="surenameSingin" id="surenameSingin" > <br>
        <p>Date born</p>
        <input type="date" name="bornlSingin" id="bornSingin" > <br>
    
    <div class="submit">
        <input type="button" id="logIn" value="logIn">
        <p>Already have an account? <a href="#" id='toLogIn'>Log in</a></p>
    </div>
    `;
    (_a = document.getElementById("toLogIn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "#logIn";
    });
    const email = document.getElementById("emailSingin");
    const password = document.getElementById("passwordSingin");
    const username = document.getElementById("usernameSingin");
    const name = document.getElementById("nameSingin");
    const surename = document.getElementById("surenameSingin");
    const bornDate = document.getElementById("bornSingin");
}
//# sourceMappingURL=singIn.js.map