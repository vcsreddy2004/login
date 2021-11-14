let captchaCode;
let attempt = 3;
let userName = document.querySelector("#userName");
let password = document.querySelector("#password");
let captcha = document.querySelector("#captcha");
window.addEventListener("load" , captchaGenration());
function captchaGenration()
{
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let a = letters[Math.floor(Math.random() * letters.length)];
    let b = letters[Math.floor(Math.random() * letters.length)];
    let c = letters[Math.floor(Math.random() * letters.length)];
    let d = letters[Math.floor(Math.random() * letters.length)];
    let e = letters[Math.floor(Math.random() * letters.length)];
    captchaCode = a+b+c+d+e;
    document.querySelector("#displayCaptcha").innerText = captchaCode;
}
let login = document.querySelector("#login");
login.addEventListener("click" , () => {
    let loginErr = document.querySelector("#loginErr");
    let empty = "";
    userName.style.border = "1px solid black";
    password.style.border = "1px solid black";
    captcha.style.border = "1px solid black";
    switch(empty)
    {
        case userName.value: userName.style.border = "2px solid red";
        case password.value: password.style.border = "2px solid red";
        case captcha.value: captcha.style.border = "2px solid red";
    }
    if(userName.value == "")
    {
        captchaGenration();
        loginErr.classList.add("badge-warning");
        loginErr.classList.add("text-warning");
        loginErr.classList.remove("badge-danger");
        loginErr.classList.remove("text-danger");
        loginErr.classList.remove("badge-success");
        loginErr.classList.remove("text-success");
        loginErr.innerText = "user name can not be left empty";
    }
    else if(password.value == "")
    {
        captchaGenration();
        loginErr.classList.add("badge-warning");
        loginErr.classList.add("text-warning");
        loginErr.classList.remove("badge-danger");
        loginErr.classList.remove("text-danger");
        loginErr.classList.remove("badge-success");
        loginErr.classList.remove("text-success");
        loginErr.innerText = "password can not be left empty";    
    }
    else if(captcha.value == "")
    {
        captchaGenration();
        loginErr.classList.add("badge-warning");
        loginErr.classList.add("text-warning");
        loginErr.classList.remove("badge-danger");
        loginErr.classList.remove("text-danger");
        loginErr.classList.remove("badge-success");
        loginErr.classList.remove("text-success");
        loginErr.innerText = "captcha can not be left empty";
    }
    else if(captcha.value == captchaCode)
    {
        if(userName.value == "root")
        {
            if(password.value == "tour" && attempt>0)
            {
                captchaGenration();
                loginErr.classList.add("badge-success");
                loginErr.classList.add("text-success");
                loginErr.classList.remove("badge-warning");
                loginErr.classList.remove("text-warning");
                loginErr.classList.remove("badge-danger");
                loginErr.classList.remove("text-danger");
                loginErr.innerText = "login success";
                attempt = 3;
            }
            else
            {
                password.value = "";
                captchaGenration();
                attempt--;
                if(attempt<=0)
                {
                    loginErr.classList.add("badge-danger");
                    loginErr.classList.add("text-danger");
                    loginErr.classList.remove("badge-success");
                    loginErr.classList.remove("text-success");
                    loginErr.classList.remove("badge-warning");
                    loginErr.classList.remove("text-warning");
                    password.style.border = "2px solid red";
                    loginErr.innerText = "too many attempts";
                }
                else
                {
                    password.value = "";
                    captchaGenration();
                    loginErr.classList.add("badge-danger");
                    loginErr.classList.add("text-danger");
                    loginErr.classList.remove("badge-success");
                    loginErr.classList.remove("text-success");
                    loginErr.classList.remove("badge-warning");
                    loginErr.classList.remove("text-warning");
                    password.style.border = "2px solid red";
                    loginErr.innerText = `you have ${attempt} attempts only`;
                }
            }
        }
        else
        {
            userName.value = "";
            captchaGenration();
            loginErr.classList.add("badge-warning");
            loginErr.classList.add("text-warning");
            loginErr.classList.remove("badge-success");
            loginErr.classList.remove("text-success");
            loginErr.classList.remove("badge-danger");
            loginErr.classList.remove("text-danger");
            userName.style.border = "2px solid red";
            loginErr.innerText = "invalid user name";    
        }
    }
    else
    {
        captcha.value = "";
        captchaGenration();
        loginErr.classList.add("badge-warning");
        loginErr.classList.add("text-warning");
        loginErr.classList.remove("badge-success");
        loginErr.classList.remove("text-success");
        loginErr.classList.remove("badge-danger");
        loginErr.classList.remove("text-danger");
        captcha.style.border = "2px solid red";
        loginErr.innerText = "invalid captcha";    
    }
});
userName.addEventListener("keyup" , ()=> {
    if(userName.value == "")
    {
        userName.style.border = "2px solid red";
    }
    else
    {
        userName.style.border = "2px solid green";
    }
});
password.addEventListener("keyup" , ()=> {
    if(password.value == "")
    {
        password.style.border = "2px solid red";
    }
    else
    {
        password.style.border = "2px solid green";
    }
});
captcha.addEventListener("keyup" , ()=> {
    if(captcha.value == "")
    {
        captcha.style.border = "2px solid red";
    }
    else
    {
        captcha.style.border = "2px solid green";
    }
});