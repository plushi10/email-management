import { userUI,type userDate} from "../components/user.js";

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

    let testEmail: string = "gigi@gmail.com";
    let testPassw: string = "1234";
    const userTest = new userUI(emailBox.value,passwordBox.value,"gigino");


    document.getElementById("toSingIn")?.addEventListener("click", (e)=>{
        e.preventDefault();
        window.location.hash = "#singIn";
    })

    submitLogin?.addEventListener("click",() => {
        const isLoggedIn = userTest.logIn(emailBox.value, passwordBox.value);
        if(isLoggedIn){
            console.log(userTest.email,userTest.password);
            console.log("you are in");
        }else{
            console.log("error during the access");
        }
    });

}