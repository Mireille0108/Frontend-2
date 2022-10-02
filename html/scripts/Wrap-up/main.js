let Input = document.getElementById("input")
let email = document.getElementById("email")
let password = document.getElementById("password")
//let key=document.getElementById("key")
let button = document.getElementById("btn")
let form = document.querySelector(".form-container")
let saveData=[]


let saveInput;
Input.addEventListener("keyup", ((x) => { //Get the value of user input and save in new variable saveInput
    let name = x.target.value;
    if (name.length < 4) {// Validation
        Input.style.border = "1px solid red"
    } else {
        Input.style.border = "1px solid green"
    }
    saveInput = name
    //hideButton()
    console.log(x.target.value)
}))


//function hideButton() {
    if (saveInput >= 4 && savePassword >= 6) {
        button.disabled = false

    }

//}
let saveEmail
email.addEventListener("keyup",((y)=>{
let mail = y.target.value
saveEmail=mail
}))
let savePassword
password.addEventListener("keyup",(z)=>{
    let pin = z.target.value
    if (pin.length <6) {
        password.style.border="1px solid red"       
    }else{
        password.style.border="1px solid green"
    }
savePassword=pin
//hideButton()
})
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userObj = {
        input: saveInput,
        email: saveEmail,
        passsword: savePassword

    }
    const isUser = saveData.find((users)=>users.email===userObj.email)// Stop user from using the same email
    if(isUser){
        return alert("Email already exist")// Includes this...
    }

    saveData.push(userObj)
    console.log(userObj);
    localStorage.setItem("user", JSON.stringify(saveData));
})






