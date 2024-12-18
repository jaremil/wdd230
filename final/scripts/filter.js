export function filterByCategory(websites, category) {
  if (!Array.isArray(websites)) {
    throw new Error("websites must be an array");
  }
  return websites.filter((website) => website.category === category);
}

export function filterByTechnology(websites, technology) {
  if (!Array.isArray(websites)) {
    throw new Error("websites must be an array");
  }
  return websites.filter((website) =>
    Array.isArray(website.technologies) &&
    website.technologies.includes(technology)
  );
}

export function getTechnologiesSummary(websites) {
  if (!Array.isArray(websites)) {
    throw new Error("websites must be an array");
  }
  return websites.reduce((acc, website) => {
    if (Array.isArray(website.technologies)) {
      website.technologies.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
      });
    }
    return acc;
  }, {});
}
