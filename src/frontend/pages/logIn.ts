export function loginPage (app: HTMLElement ): void{
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


    let emailBox = document.getElementById("email") as HTMLInputElement;
    let passwordBox = document.getElementById("password") as HTMLInputElement;
    let submitLogin = document.getElementById("logIn");

    
    // change the page to singIn
    document.getElementById("toSingIn")?.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.hash = "#singIn";
    })
    
    submitLogin?.addEventListener("click",async () => {
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
            } else {
                console.log("error:", data.message);
            }
        } catch (err) {
            console.error("Server error:", err);
        }
    });

}