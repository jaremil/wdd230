const baseURL = "https://yourgithubusername.github.io/wdd230/"; 
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    displayLinks(data);
  } catch (error) {
    console.error("Failed to fetch links data:", error);
  }
}

function displayLinks(weeks) {
  const activityLinksDiv = document.getElementById("activity-links");
  
  weeks.lessons.forEach(lesson => {
    const lessonSection = document.createElement("section");

    const lessonTitle = document.createElement("h3");
    lessonTitle.textContent = `Lesson ${lesson.lesson}`;
    lessonSection.appendChild(lessonTitle);
    
    const linkList = document.createElement("ul");
    
    lesson.links.forEach(link => {
      const listItem = document.createElement("li");
      
      const anchor = document.createElement("a");
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;

      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });
    
    lessonSection.appendChild(linkList);
    activityLinksDiv.appendChild(lessonSection);
  });
}

getLinks();


// open weather API

// API KEY: 7590dbb49a635877ec7bee7393a49b2b

document.addEventListener('DOMContentLoaded', () => {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=43.83&lon=-111.79&appid=7590dbb49a635877ec7bee7393a49b2b';
  const weatherCard = document.getElementById('weather-card');
  const kelvinFahrenheit = (kelvin) => ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);

  fetch(API_URL)
      .then(response => response.json()) 
      .then(data => {
          const iconId = data.weather[0].icon;
          const temperatureF = Math.round(kelvinFahrenheit(data.main.temp));
          const weatherDescription = data.weather[0].description;

          const weatherHTML = `
              <img class="iconImg" src="https://openweathermap.org/img/wn/${iconId}.png" alt="weather icon">
              <span class="weatherText">${temperatureF}°F</span>
              <span class="weatherText"> - </span>
              <span class="weatherText">${weatherDescription}</span>
          `;
          weatherCard.innerHTML = weatherHTML;
      });
});