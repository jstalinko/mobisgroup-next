# SekaiDrama 🎬

SekaiDrama adalah platform streaming drama pendek (vertical drama) modern yang mengaggregasi konten dari berbagai sumber populer. Dibangun dengan teknologi web terkini untuk performa maksimal dan pengalaman pengguna yang premium.

## 🚀 Fitur Utama
- **Multi-Source:** Terintegrasi dengan DramaBox, ReelShort, FreeReels, dll.
- **Tanpa Iklan:** Pengalaman menonton yang bersih.
- **Responsive Design:** Tampilan mobile-first yang elegan.
- **Fast Performance:** Ditenagai oleh Next.js 16.

## 🛠️ Persyaratan Sistem
Sebelum memulai, pastikan komputer Anda sudah terinstall:
- [Node.js](https://nodejs.org/) (Versi 18 LTS atau 20 LTS disarankan)
- Git (Opsional)

## 📦 Panduan Instalasi (Localhost)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer Anda:

### 1. Ekstrak Source Code
1.  Download file ZIP source code.
2.  Ekstrak (unzip) file tersebut ke folder tujuan di komputer Anda.
3.  Buka terminal (Command Prompt/PowerShell) dan masuk ke folder hasil ekstrak tersebut.
    ```bash
    cd sekaidrama
    ```

### 2. Install Dependencies
Install semua library yang dibutuhkan project ini:
```bash
npm install
# atau jika menggunakan yarn
yarn install
# atau pnpm
pnpm install
```

### 3. Konfigurasi Environment Variable
Buat file bernama `.env` di root folder project, dan isi dengan konfigurasi berikut:

### 4. Jalankan Development Server
Mulai server lokal untuk pengembangan:
```bash
npm run dev
```

Buka browser dan kunjungi [http://localhost:3000](http://localhost:3000).

## 🌐 Deploy ke VPS
Untuk panduan lengkap cara upload dan install di VPS (Ubuntu/Debian) agar website bisa diakses publik, silakan baca file:
👉 **[DEPLOY_VPS.md](./DEPLOY_VPS.md)**

## 🔧 Script Perintah
| Command | Fungsi |
|---------|--------|
| `npm run dev` | Menjalankan server development |
| `npm run build` | Membuat build production |
| `npm run start` | Menjalankan build production |
| `npm run lint` | Cek error coding style (Linting) |

## 📁 Struktur Folder
```
src/
├── app/                    # Halaman & Routing (Next.js App Router)
├── components/             # Komponen UI (React)
├── hooks/                  # Custom Hooks (Logic)
├── lib/                    # Helper & Utilities
└── styles/                 # Global CSS
```

---
Dibuat dengan ❤️ menggunakan Next.js, Tailwind CSS, dan Shadcn UI.
