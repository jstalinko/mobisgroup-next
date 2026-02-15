# Panduan Instalasi di VPS (Ubuntu/Debian)

Panduan ini akan membantu Anda menginstal source code SekaiDrama di VPS (Virtual Private Server). Kami merekomendasikan menggunakan OS **Ubuntu 20.04** atau **22.04 LTS**.

## 1. Persiapan Awal
Pastikan Anda sudah login ke VPS Anda via SSH (Putty atau Terminal).

```bash
# Update paket sistem
sudo apt update && sudo apt upgrade -y

# Install curl, unzip, dan zip jika belum ada
sudo apt install curl unzip zip -y
```

## 2. Instalasi Node.js (Versi 20/22 Recommended)
Kita akan menggunakan NVM (Node Version Manager) atau instalasi langsung dari NodeSource.

```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Cek versi (pastikan muncul v20 atau lebih baru)
node -v
npm -v
```

## 3. Upload Source Code
Karena Anda mendapatkan file ini dari Google Drive (biasanya format .zip), Anda perlu menguploadnya ke VPS.

### Cara Upload (Via SFTP/FileZilla)
1.  Buka FileZilla (atau aplikasi FTP lain).
2.  Connect ke VPS Anda (masukkan IP, username: `root`, password, port: `22`).
3.  Upload file zip source code (misal: `sekaidrama.zip`) ke folder `/root` atau `/var/www/`.

### Ekstrak File
Setelah upload selesai, kembali ke terminal VPS dan ekstrak filenya.

```bash
# Contoh jika file ada di /root, kita pindahkan ke /var/www/sekaidrama
mkdir -p /var/www/sekaidrama
mv sekaidrama.zip /var/www/sekaidrama/
cd /var/www/sekaidrama

# Ekstrak file
unzip sekaidrama.zip

# Hapus file zip agar hemat space (Opsional)
rm sekaidrama.zip
```

> **Hapus folder node_modules:** Jika di dalam zip ada folder `node_modules` atau `.next`, sebaiknya dihapus dulu sebelum install ulang dependencies di VPS, untuk menghindari error beda OS.

## 4. Instalasi Dependencies & Build
Install semua library yang dibutuhkan dan build aplikasi untuk production.

```bash
# Pastikan Anda ada di dalam folder project
cd /var/www/sekaidrama

# Install dependencies
npm install

# Build aplikasi Next.js (Pastikan tidak ada error)
npm run build
```

> **Catatan:** Jika VPS Anda memiliki RAM kecil (1GB), proses build mungkin gagal. Solusinya: Build di laptop lokal Anda, lalu upload folder `.next`, `public`, `package.json`, dan `next.config.ts` ke VPS.

## 5. Menjalankan Aplikasi dengan PM2
Agar aplikasi tetap jalan walaupun Anda menutup terminal, gunakan PM2 process manager.

```bash
# Install PM2 secara global
sudo npm install -g pm2

# Jalankan aplikasi
pm2 start npm --name "sekaidrama" -- start

# Simpan konfigurasi agar auto-start saat VPS restart
pm2 save
pm2 startup
```

Sekarang aplikasi berjalan di port 3000 (default).

## 6. Setup Domain & Nginx (Reverse Proxy)
Agar bisa diakses via domain (contoh: `drama.com`) dan port 80/443, kita gunakan Nginx.

```bash
# Install Nginx
sudo apt install nginx -y

# Buat konfigurasi server block
sudo nano /etc/nginx/sites-available/sekaidrama
```

Isi file tersebut dengan konfigurasi berikut ini (ganti `domain-anda.com`):

```nginx
server {
    listen 80;
    server_name domain-anda.com www.domain-anda.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Simpan (Ctrl+O, Enter) dan Keluar (Ctrl+X).

Aktifkan konfigurasi:
```bash
sudo ln -s /etc/nginx/sites-available/sekaidrama /etc/nginx/sites-enabled/
sudo nginx -t  # Cek error
sudo systemctl restart nginx
```

## 7. Pasang SSL (HTTPS) Gratis
Gunakan Certbot untuk mengamankan website dengan HTTPS.

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Generate sertifikat otomatis
sudo certbot --nginx -d domain-anda.com -d www.domain-anda.com
```
Ikuti instruksi di layar. Pilih opsi **2 (Redirect)** agar semua trafik dipaksa ke HTTPS.

## 8. Selesai! 🎉
Website Anda sekarang sudah live dan bisa diakses di `https://domain-anda.com`.

---

### Tips Maintenance
- **Update Code:**
  Jika ada update, upload file baru via SFTP (timpa file lama), lalu jalankan:
  ```bash
  npm install
  npm run build
  pm2 restart sekaidrama
  ```
- **Cek Error Log:**
  ```bash
  pm2 logs sekaidrama
  ```
