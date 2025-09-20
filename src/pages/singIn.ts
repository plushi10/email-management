import { userUI } from "../components/user.js";

export function singinPage( app: HTMLElement): void{
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

    document.getElementById("toLogIn")?.addEventListener("click",(e)=>{
        e.preventDefault();
        window.location.hash = "#logIn";
    })

    const email= document.getElementById("emailSingin") as HTMLInputElement;
    const password = document.getElementById("passwordSingin") as HTMLInputElement;
    const username = document.getElementById("usernameSingin") as HTMLInputElement;
    const name = document.getElementById("nameSingin") as HTMLInputElement;
    const surename = document.getElementById("surenameSingin") as HTMLInputElement;
    const bornDate = document.getElementById("bornSingin") as HTMLInputElement;
    
    let user : userUI | null = new userUI(email.value,password.value,username.value);
    if(!user.singIn()){
        user = null;
    }
}
