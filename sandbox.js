async function loadPhotographers() {
    try {
        const response = await fetch('sandbox.json');
        const data = await response.json();
        initializeFiltering(data.photographers);
    } catch (error) {
        console.error("Error loading the data:", error);
    }
}

function displayPhotographers(photographers) {
    const photographerList = document.getElementById("photographerList");
    photographerList.innerHTML = '';  

    photographers.forEach(photographer => {
        const photographerCard = document.createElement("div");
        photographerCard.classList.add("photographer-card");

        photographerCard.innerHTML = `
            <h3>${photographer.name}</h3>
            <p><strong>Category:</strong> ${photographer.category}</p>
            <p><strong>Style:</strong> ${photographer.style}</p>
        `;
        photographerList.appendChild(photographerCard);
    });
}

function filterPhotographers(photographers) {
    const categoryFilter = document.getElementById("categoryFilter").value;
    const styleFilter = document.getElementById("styleFilter").value;

    const filteredPhotographers = photographers.filter(photographer => {
        const matchesCategory = categoryFilter ? photographer.category === categoryFilter : true;
        const matchesStyle = styleFilter ? photographer.style === styleFilter : true;
        return matchesCategory && matchesStyle;
    });
    displayPhotographers(filteredPhotographers);
}

function initializeFiltering(photographers) {
    displayPhotographers(photographers);

    document.getElementById("categoryFilter").addEventListener("change", () => filterPhotographers(photographers));
    document.getElementById("styleFilter").addEventListener("change", () => filterPhotographers(photographers));
}

loadPhotographers();