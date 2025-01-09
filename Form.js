document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    

    clearErrors();
    const username = document.getElementById("username").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
  
    let isValid = true;
  
   

    if(username==null || username==""){
        alert("name cannot be blank")
        return false;
    };
    

    if(address==null || address==""){
        alert("Address cannot be blank")
        return false
    };
    

    if(phone.length<10) 
        {
            alert("Phone Number must be 10 Numbers")
            return false
         };
        

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showError("emailError", "Please enter a valid email address.");
        isValid = false;
    }
    

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,12}$/;
    if (!passwordPattern.test(password)) {
        showError("passwordError", "Password must be at least 8 characters long, with 1 uppercase, 1 lowercase, and 1 number.");
        isValid = false;
    }
  
    

  
    if (isValid) {
        alert("Registration successful!");
       
    }
  });
  
  function clearErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.style.display = "none";
        error.innerText = "";
    });
  }
  

  function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = "block";
  }