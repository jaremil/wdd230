// Date Display

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var currentDate = "Last Modification: " + month+ "/" + day + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
document.getElementById("lastModified").innerHTML = currentDate;

var currentDate = "©" + year;
document.getElementById("copyRight").innerHTML = currentDate;


// Hamburger Response Menu below

const handButton = document.querySelector('#menu');
const heading = document.querySelector('.heading');

handButton.addEventListener('click', () => {
    heading.classList.toggle('open');
    handButton.classList.toggle('open');
});

// How many times the page has been opened

let pageCount = localStorage.getItem('pageCount');

if (pageCount) {
    pageCount = parseInt(pageCount) + 1;
} else {
    pageCount = 1;
}
localStorage.setItem('pageCount', pageCount);

var pageVisits = pageCount;
document.getElementById("pageVisits").innerHTML = `Page Visits: ${pageVisits}`;

// Error for passwords that don't match

document.getElementById("passwordForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Passwords do not match. Please try again.";

        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";

        document.getElementById("password").focus();
    } else {
        errorMessage.style.display = "none";
        
        alert("Passwords match. Form submitted!");
        document.getElementById("passwordForm").submit();
    }
});

// Error for byui.edu

document.getElementById("emailForm").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const errorMessage = document.getElementById("error-message");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@school\.edu$/;

    if (!emailPattern.test(emailValue)) {
        errorMessage.style.display = "block"; 
        event.preventDefault(); 
    } else {
        errorMessage.style.display = "none";
    }
});

// Page rating

const pageRating = document.getElementById("pageRating");
const ratingValue = document.getElementById("ratingValue");

ratingValue.textContent = pageRating.value;

pageRating.addEventListener("input", function() {
    ratingValue.textContent = pageRating.value;
});