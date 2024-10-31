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
document.getElementById("pageVisits").innerHTML = pageVisits;