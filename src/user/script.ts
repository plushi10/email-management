let emailBox = document.getElementById("email") as HTMLInputElement;
let passwordBox = document.getElementById("password") as HTMLInputElement;
let submitLogin = document.getElementById("logIn");

let testEmail: string = "gigi@gmail.com";
let testPassw: string = "1234";

function logIn(): void{
    let email = emailBox.value.trim();
    let password = passwordBox.value.trim()
    if((email === testEmail) && (password === testPassw)){
        console.log("you are in");

    }else{
        console.log("error during the access");
    }
}

submitLogin?.addEventListener("click",logIn);