function calculateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature-input').value);
    const windSpeed = parseFloat(document.getElementById('wind-speed-input').value); 

    if (isNaN(temperature) || isNaN(windSpeed)) {
        document.getElementById('wind-chill-result').textContent = "Please enter valid numbers.";
        return;
    }

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        document.getElementById('wind-chill-result').textContent = windChill.toFixed(2) + " °F"; 
    } else {
        document.getElementById('wind-chill-result').textContent = "Wind chill calculation not applicable.";
    }
}