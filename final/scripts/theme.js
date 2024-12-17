window.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.querySelector("#changeToggle");
  
    function changeTheme() {
      var select = document.querySelector("select");
      var themeValue = select.value;
  
      console.log("Theme Selected: " + themeValue);
  
      localStorage.setItem("theme", themeValue);
  
      if (themeValue === "dark") {
        document.body.setAttribute("data-theme", "dark");
      } else {
        document.body.setAttribute("data-theme", "light");
      }
    }
  
    themeSelector.addEventListener("change", changeTheme);
  
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme) {
      console.log("Applying saved theme: " + savedTheme);
      document.body.setAttribute("data-theme", savedTheme);
      themeSelector.value = savedTheme;
    } else {
      console.log("No saved theme, applying default (light)");
      document.body.setAttribute("data-theme", "light");
      themeSelector.value = "light";
    }
  });