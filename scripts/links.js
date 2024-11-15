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