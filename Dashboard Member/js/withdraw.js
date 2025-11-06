// js/withdraw.js

document.addEventListener("DOMContentLoaded", function () {
  loadUser(); // dari main.js

  const tableBody = document.querySelector("#withdrawTable tbody");
  const totalWithdrawEl = document.getElementById("totalWithdraw");

  // Data dummy riwayat penarikan
  const withdrawData = [
    {
      date: "2025-10-02",
      account: "1234567890",
      bank: "BCA",
      status: "Berhasil",
      amount: 1000000,
    },
    {
      date: "2025-10-05",
      account: "9876543210",
      bank: "Mandiri",
      status: "Berhasil",
      amount: 2000000,
    },
    {
      date: "2025-10-08",
      account: "5678912345",
      bank: "BNI",
      status: "Pending",
      amount: 500000,
    },
    {
      date: "2025-10-10",
      account: "1234509876",
      bank: "BRI",
      status: "Berhasil",
      amount: 1500000,
    },
  ];

  let total = 0;
  withdrawData.forEach((item, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${item.date}</td>
      <td>${item.account}</td>
      <td>${item.bank}</td>
      <td><span class="badge ${
        item.status === "Berhasil" ? "bg-success" : "bg-warning text-dark"
      }">${item.status}</span></td>
      <td>${formatRupiah(item.amount)}</td>
    `;
    tableBody.appendChild(tr);

    if (item.status === "Berhasil") total += item.amount;
  });

  totalWithdrawEl.textContent = formatRupiah(total);
});
