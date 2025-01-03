const apiKey = "8L72Jii3WwGi3d0BaPnzPxnzLSlvwpgEzqbap7AS1Do4OTR3S5knUqNq";

const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("result");
let sentinelObserver;
let totalImagesDisplayed = 0;
const MAX_IMAGES = 28;

const setupListeners = () => {
  searchForm.addEventListener("submit", onSearchFormSubmit);
};

const onSearchFormSubmit = (e) => {
  e.preventDefault();
  const query = searchForm.query.value.trim();

  totalImagesDisplayed = 0;
  const apiURL = `https://api.pexels.com/v1/search?query=${query}&orientation=landscape`;

  fetchImages(apiURL)
    .then((data) => displayResults(data))
    .finally(hideLoading);
};

const displayResults = (data) => {
  removeObserver();

  if (data.total_results === 0) {
    searchResult.innerHTML = `
      <div class="no-result">No images found.</div>
    `;
    return;
  }

  if (data.page === 1) {
    searchResult.innerHTML = "";
  }

  data.photos.forEach((photo) => {
    if (totalImagesDisplayed >= MAX_IMAGES) return;

    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
      <a class:"filterToggle" href="${photo.url}" target="_blank">
        <img 
          data-src="${photo.src.medium}" 
          alt="${photo.alt}" 
          class="lazy-image" 
        />
      </a>
    `;

    searchResult.appendChild(gridItem);
    totalImagesDisplayed++;
  });

  lazyLoadImages();

  if (totalImagesDisplayed < MAX_IMAGES) {
    createObserver(data.next_page);
  }
};

const showLoading = () => {
  const div = document.createElement("div");
  div.classList.add("loader");

  document.body.prepend(div);
};

const hideLoading = () => {
  const loader = document.querySelector(".loader");
  loader && loader.remove();
};

const createObserver = (nextPageURL) => {
  if (!nextPageURL) return;

  const sentinel = document.createElement("div");
  sentinel.id = "sentinel";

  document.querySelector(".container").appendChild(sentinel);

  sentinelObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadMoreResults(nextPageURL);
      }
    });
  });

  sentinelObserver.observe(sentinel);
};

const removeObserver = () => {
  const sentinel = document.getElementById("sentinel");
  sentinel && sentinel.remove();

  if (sentinelObserver) {
    sentinelObserver.disconnect();
    sentinelObserver = null;
  }
};

const fetchImages = async (apiURL) => {
  const response = await fetch(apiURL, {
    headers: { Authorization: apiKey },
  });
  return await response.json();
};

const loadMoreResults = (nextPageURL) => {
  if (totalImagesDisplayed >= MAX_IMAGES) {
    removeObserver();
    return;
  }

  showLoading();

  fetchImages(nextPageURL)
    .then((data) => displayResults(data))
    .finally(hideLoading);
};

const lazyLoadImages = () => {
  const lazyImages = document.querySelectorAll(".lazy-image");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src; 
        lazyImage.classList.remove("lazy-image");
        observer.unobserve(lazyImage); 
      }
    });
  });

  lazyImages.forEach((image) => {
    imageObserver.observe(image);
  });
};

setupListeners();