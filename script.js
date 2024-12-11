document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");
  const nameInput = document.querySelector("input[placeholder='Name']");
  const passwordInput = document.querySelector("input[placeholder='Password']");
  const confirmPasswordInput = document.querySelector(
    "input[placeholder='Confirm Password']"
  );

  const nameMessage = document.querySelector("#nameMessage");
  const passwordMessage = document.querySelector("#passwordMessage");
  const confirmPasswordMessage = document.querySelector(
    "#confirmPasswordMessage"
  );
  
  const nameSuccess = document.querySelector("#nameSuccess");
  const passwordSuccess = document.querySelector("#passwordSuccess");
  const confirmPasswordSuccess = document.querySelector(
    "#confirmPasswordSuccess"
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitValidation();
  });

  function submitValidation() {
    let isValid = true;

    // Name validation
    const name = nameInput.value.split(" ").join();
    const nameLength = name.length;
    
    if (name === "" || nameLength < 5 || nameLength > 15) {
      nameMessage.textContent = `You entered ${nameLength} characters for name, but it should be between 5 and 15 characters.`;
      nameSuccess.textContent = "";
      isValid = false;
    } else {
      nameMessage.textContent = "";
      nameSuccess.textContent = "✔";
      }
      
    // Password validation
    const password = passwordInput.value.split(" ").join();
    const passwordLength = password.length;
    if (passwordLength < 10 || passwordLength > 20) {
      passwordMessage.textContent = `You entered ${passwordLength} characters for password, but it should be between 10 and 20 characters.`;
      passwordSuccess.textContent = "";
      isValid = false;
    } else {
      passwordMessage.textContent = "";
      passwordSuccess.textContent = "✔";
    }

    // Confirm password validation
    const confirmPassword = confirmPasswordInput.value.split(" ").join();
    if (confirmPassword !== password) {
      confirmPasswordMessage.textContent = "Passwords must match.";
      confirmPasswordSuccess.textContent = "";
      isValid = false;
    } else {
      confirmPasswordMessage.textContent = "";
      confirmPasswordSuccess.textContent = "✔";
    }

    if (isValid) {
      // You can enable submission or send the data
      console.log("Form submitted successfully!");
    } else {
        console.log("form is unsecessufl ")
    }
} 
});
