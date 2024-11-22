document.addEventListener("DOMContentLoaded", () => {
    const memberContainer = document.getElementById("memberContainer");
    const toggleViewButton = document.getElementById("toggleView");
  
    fetch('./data/members.json')
      .then(response => response.json())
      .then(data => {
        renderMembers(data, "grid");
      })
      .catch(error => console.error("Error loading members:", error));
  
    let currentView = "grid";
  
    toggleViewButton.addEventListener("click", () => {
      currentView = currentView === "grid" ? "list" : "grid";
      memberContainer.className = currentView + "-view";
      fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
          renderMembers(data, currentView);
        });
    });
  
    function renderMembers(members, view) {
      memberContainer.innerHTML = "";
      members.forEach(member => {
        const memberElement = document.createElement("div");
        memberElement.className = "member";
        memberElement.innerHTML = `
          <img class="directoryImg" src="./images/${member.image}" alt="${member.name}">
          <div>
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership Level:</strong> ${member.membershipLevel}</p>
            <p>${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          </div>
        `;
        memberContainer.appendChild(memberElement);
      });
    }
  });  