# Log Pengembangan Proyek

## Status Saat Ini
- **App**: Navigasi 3 fitur (Bangun Datar, Bangun Ruang, Konversi Satuan).
- **ShapeInput**: Validasi input angka.
- **ShapeLayout**: Layout tampilan hasil.
- **Trapesium**: Logika hitung luas.
- **ThemeContext**: Fitur dark mode.
- **KonversiSatuan**: Input angka, pilih kategori, pilih satuan, logika konversi selesai.
- **BangunRuang**:
  - Kalkulator **Kubus** selesai (Volume + Luas Permukaan).
  - Kalkulator **Balok** selesai (Volume + Luas Permukaan).
  - Kalkulator **Tabung** selesai (Volume + Luas Permukaan).
  - Kalkulator **Kerucut** selesai (Volume + Luas Permukaan).
  - Kalkulator **Bola** selesai (Volume + Luas Permukaan).
- **Konsistensi UI/UX (Step 9)**: selesai.
  - Semua input pakai `ShapeInput`.
  - Semua hasil tampil via `ShapeLayout`.
  - Semua pesan error konsisten: `Input tidak valid`.
  - Tombol aksi konsisten: `Hitung Volume`, `Hitung Luas Permukaan`.
- **Testing Manual (Step 10)**: selesai.
  - Uji angka bulat, desimal, input kosong, non-angka.
  - Verifikasi rumus, reset input, dark mode, responsif.
- **Automated Testing (Step 15)**: selesai.
  - Vitest + React Testing Library (Navigation, Dark Mode, 2D/3D Calculators, Unit Conversion, ShapeInput numeric guard).
- **Finalisasi (Step 11)**: selesai.
  - Label dan rumus dirapikan.
  - Status proyek diperbarui.
  - Fitur selesai dan pending dicatat.
- **Aset SVG**:
  - `kubus.svg` ditambahkan di `src/img`.
  - `balok.svg` ditambahkan di `src/img`.

## Rencana Jangka Pendek
- Integrasi **daisyUI** untuk perapian komponen **Navbar**.

## Step by Step (Action Plan)

### Step 1 — Implement Balok ✅
- Tambah kalkulator Balok di `src/pages/BangunRuang.jsx`.
- Input:
  - panjang (`p`)
  - lebar (`l`)
  - tinggi (`t`)
- Output:
  - Volume: `V = p x l x t`
  - Luas Permukaan: `L = 2(pl + pt + lt)`
- Format hasil mengikuti Kubus:
  - baris Rumus
  - baris Input
  - baris Hasil
- Validasi gagal: tampilkan `Input tidak valid`.
- Setelah hitung: reset input.

### Step 2 — Tambah SVG Balok ✅
- Buat file baru: `src/img/balok.svg`.
- Hubungkan ke kalkulator Balok lewat `ShapeLayout`.

### Step 3 — Implement Tabung
- Tambah kalkulator Tabung di `src/pages/BangunRuang.jsx`.
- Input:
  - jari-jari (`r`)
  - tinggi (`t`)
- Output:
  - Volume: `V = πr²t`
  - Luas Permukaan: `L = 2πr(r + t)`
- Gunakan `Math.PI` untuk perhitungan.
- Format hasil + validasi + reset sama seperti Kubus.

### Step 4 — Tambah SVG Tabung
- Buat file baru: `src/img/tabung.svg`.
- Hubungkan ke kalkulator Tabung lewat `ShapeLayout`.

### Step 5 — Implement Kerucut
- Tambah kalkulator Kerucut di `src/pages/BangunRuang.jsx`.
- Input:
  - jari-jari (`r`)
  - tinggi (`t`)
  - garis pelukis (`s`) atau hitung dari `sqrt(r² + t²)`
- Output:
  - Volume: `V = 1/3 πr²t`
  - Luas Permukaan: `L = πr(r + s)`
- Format hasil + validasi + reset konsisten.

### Step 6 — Tambah SVG Kerucut
- Buat file baru: `src/img/kerucut.svg`.
- Hubungkan ke kalkulator Kerucut lewat `ShapeLayout`.

### Step 7 — Implement Bola
- Tambah kalkulator Bola di `src/pages/BangunRuang.jsx`.
- Input:
  - jari-jari (`r`)
- Output:
  - Volume: `V = 4/3 πr³`
  - Luas Permukaan: `L = 4πr²`
- Format hasil + validasi + reset konsisten.

### Step 8 — Tambah SVG Bola
- Buat file baru: `src/img/bola.svg`.
- Hubungkan ke kalkulator Bola lewat `ShapeLayout`.

### Step 9 — Konsistensi UI/UX ✅
- Semua input wajib pakai `ShapeInput`.
- Semua hasil wajib tampil via `ShapeLayout`.
- Semua pesan error pakai string sama: `Input tidak valid`.
- Tombol aksi:
  - `Hitung Volume`
  - `Hitung Luas Permukaan`
- Cek kontras warna untuk mode gelap.

### Step 10 — Testing Manual ✅
- Uji:
  - angka bulat
  - desimal
  - input kosong
  - input karakter non-angka
- Verifikasi:
  - hasil rumus benar
  - input ter-reset
  - tampilan dark mode aman
  - layout responsif mobile/desktop

### Step 11 — Finalisasi ✅
- Rapikan label dan rumus bila ada inkonsistensi.
- Update bagian **Status Saat Ini** setiap step selesai.
- Catat fitur selesai + fitur pending.

### Step 12 — Setup daisyUI (Navbar)
- Install package:
  - `npm install -D daisyui`
- Aktifkan plugin di `tailwind.config.js`.
- Pastikan class daisyUI terbaca saat dev server jalan.
- Catat versi package yang dipakai.

### Step 13 — Refactor Navbar dengan daisyUI
- Gunakan komponen:
  - `navbar`
  - `menu`
  - `dropdown` (mobile)
- Pertahankan state navigasi existing (`currentPage`, `setPage`).
- Tambah style active menu agar jelas halaman aktif.
- Pastikan kompatibel dengan dark mode dari `ThemeContext`.

### Step 14 — QA Navbar
- Uji tampilan:
  - desktop
  - mobile
- Uji interaksi:
  - buka/tutup menu mobile
  - pindah halaman
  - highlight menu aktif
- Uji dark mode:
  - kontras teks
  - latar navbar
