import { websites } from "./data.js";
import {
  filterByCategory,
  filterByTechnology,
} from "./filter.js";

function renderWebsites(websites) {
  const container = document.getElementById("websites-container");
  container.innerHTML = "";

  websites.forEach((website) => {
    const div = document.createElement("div");
    div.className = "website-card";
    div.innerHTML = `
      <h2>${website.name}</h2>
      <p>Category: ${website.category}</p>
      <p>Technologies: ${website.technologies.join(", ")}</p>
    `;
    container.appendChild(div);
  });
}

function applyFilters() {
  const category = document.getElementById("category-filter").value;
  const technology = document.getElementById("technology-filter").value;

  let filteredWebsites = websites;

  if (category) {
    filteredWebsites = filterByCategory(filteredWebsites, category);
  }

  if (technology) {
    filteredWebsites = filterByTechnology(filteredWebsites, technology);
  }

  renderWebsites(filteredWebsites);
}

document
  .getElementById("apply-filters")
  .addEventListener("click", applyFilters);

renderWebsites(websites);


{/*  <select id="category-filter" class="filterToggle">
<option value="">All</option>
<option value="Personal">Personal</option>
<option value="Commercial">Commercial</option>
<option value="Content">Content</option>
<option value="Utility">Utility</option>
</select> 
<select id="category-filter" class="filterToggle">
<option value="">All</option>
<option value="portrait">Portrait Photography</option>
<option value="landscape">Landscape Photography</option>
<option value="stillLife">Still Life Photography</option>
<option value="macro">Macro Photography</option>
</select> */}


{/* <label for="technology-filter">Filter by Technology:</label>
<select id="technology-filter">
  <option value="">All</option>
  <option value="HTML">HTML</option>
  <option value="CSS">CSS</option>
  <option value="JavaScript">JavaScript</option>
  <option value="React">React</option>
  <option value="Node.js">Node.js</option>
  <option value="C#">C#</option>
</select>
<select id="technology-filter">
  <option value="">All</option>
  <option value="warn">Warm Tones</option>
  <option value="cool">Cool Tones</option>
  <option value="blackWhite">Black and White</option>
  <option value="vibrant">Vibrant Tones</option>
  <option value="muted">Muted Tones</option>
  <option value="pastel">Pastels</option>
</select> */}