const loginValues = {
    email: "mariapazgaticatorres@gmail.com",
    password: "1234"
    }       
const loginEmail = loginValues.email;
const loginPassW = loginValues.password;

let formLogin = document.querySelector("form");
let message = document.querySelector("#formLoginMessage")

formLogin.addEventListener("submit", (e) =>{
        message.innerText = ""
        
        e.preventDefault()
        let emailVAL = formLogin.elements.email.value
        let passwordVAL = formLogin.elements.contraseña.value;

        if(loginEmail === emailVAL && loginPassW === passwordVAL){
            localStorage.setItem("email", emailVAL)
            localStorage.setItem("cart",JSON.stringify([]))
            localStorage.setItem("quantity", "0")
            location.href = "./index.html"
            message.innerText = ""
        }
        else{
            formLogin.elements.email.value = "";
            formLogin.elements.contraseña.value = "";
            message.innerText = "Email o contraseña inválidos."
        }
    })
