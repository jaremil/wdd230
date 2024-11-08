document.addEventListener("DOMContentLoaded", function() {

    const passwordForm = document.querySelector(".userpassForm"); 
    const errorMessage = document.getElementById("error-message");
    
    if (passwordForm) {
        passwordForm.addEventListener("submitForm", function(event) {
            event.preventDefault();

            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("passConfirm").value;

            if (password !== confirmPassword) {
                errorMessage.style.display = "block";
                errorMessage.textContent = "Passwords do not match. Please try again.";
                
                document.getElementById("password").value = "";
                document.getElementById("passConfirm").value = "";
                document.getElementById("password").focus();
            } else {
                errorMessage.style.display = "none"; 
                alert("Passwords match. Form submitted!");
                passwordForm.submitForm();
            }
        });
    }

    const emailForm = document.querySelector(".userpassForm");
    
    if (emailForm) {
        emailForm.addEventListener("submitForm", function(event) {
            const emailInput = document.getElementById("email");
            const emailValue = emailInput.value;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

            if (!emailPattern.test(emailValue)) {
                errorMessage.style.display = "block";
                errorMessage.textContent = "Please enter a valid email address ending with @byui.edu.";
                event.preventDefault(); 
            } else {
                errorMessage.style.display = "none";
            }
        });
    }

    const pageRating = document.getElementById("pageRating");
    const ratingValue = document.getElementById("ratingValue");

    if (pageRating && ratingValue) {
        ratingValue.textContent = pageRating.value;

        pageRating.addEventListener("input", function() {
            ratingValue.textContent = pageRating.value;
        });
    }
});