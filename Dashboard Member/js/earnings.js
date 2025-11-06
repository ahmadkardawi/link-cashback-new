// js/earnings.js

document.addEventListener("DOMContentLoaded", function () {
  loadUser(); // dari main.js

  const tableBody = document.querySelector("#earningsTable tbody");
  const totalEarningsEl = document.getElementById("totalEarnings");

  // Data dummy penghasilan
  const earnings = [
    {
      date: "2025-10-01",
      desc: "Bonus Pendaftaran Anggota Baru",
      type: "Bonus",
      status: "Berhasil",
      amount: 500000,
    },
    {
      date: "2025-10-03",
      desc: "Komisi Generasi 1",
      type: "Komisi",
      status: "Berhasil",
      amount: 200000,
    },
    {
      date: "2025-10-04",
      desc: "Komisi Generasi 2",
      type: "Komisi",
      status: "Pending",
      amount: 100000,
    },
    {
      date: "2025-10-05",
      desc: "Bonus Target Mingguan",
      type: "Bonus",
      status: "Berhasil",
      amount: 300000,
    },
    {
      date: "2025-10-07",
      desc: "Komisi Generasi 3",
      type: "Komisi",
      status: "Berhasil",
      amount: 150000,
    },
    {
      date: "2025-10-09",
      desc: "Bonus Level Up",
      type: "Bonus",
      status: "Berhasil",
      amount: 1000000,
    },
  ];

  // Render ke tabel
  let total = 0;
  earnings.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.date}</td>
      <td>${item.desc}</td>
      <td>${item.type}</td>
      <td><span class="badge ${
        item.status === "Berhasil" ? "bg-success" : "bg-warning text-dark"
      }">${item.status}</span></td>
      <td>${formatRupiah(item.amount)}</td>
    `;
    tableBody.appendChild(tr);

    if (item.status === "Berhasil") total += item.amount;
  });

  totalEarningsEl.textContent = formatRupiah(total);
});
