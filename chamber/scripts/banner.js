function checkBannerDisplay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); 
   
    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        document.getElementById("chamber-banner").style.display = "block";
    } else {
        document.getElementById("chamber-banner").style.display = "none";
    }
}

document.getElementById("close-banner").addEventListener("click", function() {
    document.getElementById("chamber-banner").style.display = "none";
});

window.onload = checkBannerDisplay;