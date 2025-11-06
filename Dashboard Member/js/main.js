// js/main.js
// Fungsi global digunakan di semua halaman

function loadUser() {
  // Data dummy user
  const user = {
    name: "Budi",
    id: "BUDI1234",
    email: "budi@gmail.com",
  };

  localStorage.setItem("user", JSON.stringify(user));

  // Update elemen user di navbar dan profil
  document.getElementById("userName").textContent = user.name;
  if (document.getElementById("profileName")) {
    document.getElementById("profileName").textContent = user.name;
    document.getElementById("profileId").textContent = user.id;
    document.getElementById("profileEmail").textContent = user.email;
  }
}

// Logout sederhana (simulasi)
function logout() {
  localStorage.removeItem("user");
  alert("Anda telah logout!");
  window.location.href = "index.html";
}

// Salin link referral
function copyReferralLink() {
  const link = document.getElementById("referralLink").textContent;
  navigator.clipboard.writeText(link);
  alert("Link referral berhasil disalin!");
}

// Format rupiah
function formatRupiah(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

// Tambahan untuk dashboard (generasi grid)
document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("generasiGrid");
  if (!grid) return;

  for (let i = 1; i <= 10; i++) {
    const div = document.createElement("div");
    div.className = "generasi-item";
    div.innerHTML = `<h6>Generasi ${i}</h6><p>${
      Math.floor(Math.random() * 50) + 1
    } anggota</p>`;
    grid.appendChild(div);
  }
});
