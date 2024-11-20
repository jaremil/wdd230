// API KEY: 7590dbb49a635877ec7bee7393a49b2b

// {"coord":{"lon":-111.79,"lat":43.83},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":260.14,"feels_like":256.47,"temp_min":260.14,"temp_max":260.14,"pressure":1037,"humidity":92,"sea_level":1037,"grnd_level":855},"visibility":10000,"wind":{"speed":1.54,"deg":70},"clouds":{"all":100},"dt":1732113247,"sys":{"type":1,"id":5735,"country":"US","sunrise":1732112942,"sunset":1732147031},"timezone":-25200,"id":5605242,"name":"Rexburg","cod":200} 


document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=43.83&lon=-111.79&appid=7590dbb49a635877ec7bee7393a49b2b';
    const weatherCard = document.getElementById('weather-card');
    const kelvinFahrenheit = (kelvin) => ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);

    fetch(API_URL)
        .then(response => response.json()) 
        .then(data => {
            const temperatureF = kelvinFahrenheit(weather.main);
            const conditionDescription = weather.description;
            const iconId = weather.icon;

            const weatherHTML = `
                <img src="https://api.openweathermap.org/data/2.5/weather?${iconId}7590dbb49a635877ec7bee7393a49b2b" alt="weather icon">
                <p>${temperatureF}°F</p>
                <p>${conditionDescription}</p>
            `;
            weatherCard.innerHTML = weatherHTML;
        });
});