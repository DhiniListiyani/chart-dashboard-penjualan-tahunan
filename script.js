    // Data Penjualan
    const labels = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", 
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
    const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];


    // Menambahkan data ke tabel
    const tableBody = document.querySelector("#penjualanTable tbody");

    // Fungsi untuk menambahkan data ke tabel
    function addDataToTable(year, data) {
        let row = `<tr><td>${year}</td>`; // Membuka baris dengan tahun

        for (let i = 0; i < data.length; i++) {
            row += `<td>${data[i]}</td>`; // Menambahkan data ke baris yang sama
        }

        row += "</tr>"; // Menutup baris setelah semua data ditambahkan
        tableBody.innerHTML += row; // Menambahkan baris ke tabel
    }

    // Memanggil data tahun 2022
    addDataToTable(2022, data2022);

    // Memanggil data tahun 2023
    addDataToTable(2023, data2023);


    // Konfigurasi Chart.js
    const ctx = document.getElementById("penjualanChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "2022",
                    data: data2022,
                    backgroundColor: "rgba(54, 162, 235, 0.6)", // Biru
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                },
                {
                    label: "2023",
                    data: data2023,
                    backgroundColor: "rgba(255, 99, 132, 0.6)", // Merah
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Laporan Penjualan Tahun 2022 vs 2023"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10000
                }
            }
        }
    });

