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