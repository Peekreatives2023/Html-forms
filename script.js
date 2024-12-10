document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.querySelector(".login-form");
    const error = document.querySelector("#message")
    const nameInput = document.querySelector("input[placeholder='Name']")


    const passwordInput = document.querySelector("input[placeholder='Password']")

    const confirmPasswordInput = document.querySelector(
      "input[placeholder='Confirmpassword']");
     
    const submitButton = document.querySelector(".submit-btn");

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submitValidation()
    })

   function submitValidation(name, password, confirmPassword ){
    
       name = nameInput.value.trim();
       if (name === "" | name.length < 5) {
           error.textContent = "input your name"
            setTimeout(() => {
                error.textContent = ""
            }, 2000);
       }
       password = passwordInput.value.trim()
       if (password.length < 10) {
        console.log("it works")
    }
    confirmPassword = confirmPasswordInput.value.trim();
    if (confirmPassword != password) {
        //  alert("check your password");
        console.log("it works")
       }
       
    }
    
})







 // Get the Values
    // const  = ;
    // console.log("This is", nameValue)

    // const passwordValue = passwordInput.value.trim();
    // const confirmvalue = confirmPasswordInput.value.trim()

    // if (nameValue === " "){
    //     alert("Name cannot be empty");
    //     nameInput.focus();
    //     return;
    // }