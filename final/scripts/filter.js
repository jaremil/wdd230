export function filterByCategory(websites, category) {
    return websites.filter((website) => website.category === category);
  }
  
  export function filterByTechnology(websites, technology) {
    return websites.filter((website) =>
      website.technologies.includes(technology)
    );
  }
  
  export function getTechnologiesSummary(websites) {
    return websites.reduce((acc, website) => {
      website.technologies.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
      });
      return acc;
    }, {});
  }