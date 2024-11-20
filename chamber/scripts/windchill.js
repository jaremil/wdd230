//windchill

function calculateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById('wind-chill').textContent = windChill.toFixed(2);
    } else {
        document.getElementById('wind-chill').textContent = 'N/A';
    }
}

//banner

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
