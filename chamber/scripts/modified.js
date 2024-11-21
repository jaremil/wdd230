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

