
const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const ageInput = document.getElementById("age");

const successMessage = document.getElementById("successMessage");

function showError(inputId, message) {
    document.getElementById(inputId + "Error").textContent = message;
}

function validateForm() {
    let valid = true;

    
    if (nameInput.value.trim() === "") {
        showError("name", "Name is required.");
        valid = false;
    } else {
        showError("name", "");
    }

     
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        showError("email", "Email is required.");
        valid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
        showError("email", "Please enter a valid email.");
        valid = false;
    } else {
        showError("email", "");
    }

     
    if (passwordInput.value.length < 8) {
        showError("password", "Password must be at least 8 characters.");
        valid = false;
    } else {
        showError("password", "");
    }

     
    if (confirmPasswordInput.value === "") {
        showError("confirmPassword", "Please confirm your password.");
        valid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError("confirmPassword", "Passwords do not match.");
        valid = false;
    } else {
        showError("confirmPassword", "");
    }

     
    const age = Number(ageInput.value);

    if (ageInput.value.trim() === "" ||
        !Number.isInteger(age) || age < 1 || age > 120) {
        showError("age", "Enter a valid age between 1 and 120.");
        valid = false;
    } else {
        showError("age", "");
    }

    return valid;
}


form.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.textContent = "";

    if (validateForm()) {
        successMessage.textContent =
            "Registration completed successfully!";
    }
});


form.addEventListener("input", function() {
    successMessage.textContent = "";
    validateForm();
});
