// js/team.js

document.addEventListener("DOMContentLoaded", function () {
  loadUser(); // dari main.js

  const teamContainer = document.getElementById("teamContainer");

  // Data dummy tim berdasarkan generasi
  const teamData = [
    { gen: 1, members: ["Andi", "Sinta", "Rudi", "Fajar"] },
    { gen: 2, members: ["Nina", "Bayu", "Tono", "Rizky", "Hana"] },
    { gen: 3, members: ["Lina", "Eka", "Rani"] },
    { gen: 4, members: ["Sari", "Dedi", "Putri", "Iqbal"] },
    { gen: 5, members: ["Ari", "Beni"] },
    { gen: 6, members: ["Yoga", "Fina"] },
    { gen: 7, members: ["Nino", "Tari", "Ali"] },
    { gen: 8, members: ["Rika", "Dina"] },
    { gen: 9, members: ["Tono", "Risa", "Dodi"] },
    { gen: 10, members: ["Wawan", "Nita"] },
  ];

  teamData.forEach((genData) => {
    const card = document.createElement("div");
    card.className = "team-card";

    const header = document.createElement("h5");
    header.textContent = `Generasi ${genData.gen}`;
    card.appendChild(header);

    const list = document.createElement("ul");
    list.className = "list-group list-group-flush";

    genData.members.forEach((member) => {
      const item = document.createElement("li");
      item.className =
        "list-group-item d-flex justify-content-between align-items-center";
      item.textContent = member;

      const badge = document.createElement("span");
      badge.className = "badge bg-success";
      badge.textContent = "Aktif";
      item.appendChild(badge);

      list.appendChild(item);
    });

    card.appendChild(list);
    teamContainer.appendChild(card);
  });
});
