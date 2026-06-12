# TUTORIAL EKSEKUSI — Gustiansyah Portfolio Website v1.5 White Premium

Versi ini menggantikan v1.4.

Perubahan penting:

- Visual direction kembali ke **White-based Premium**.
- Figma tetap keluar dari live pipeline.
- Localhost `npm run dev` tetap jadi pusat QA.
- Vercel hanya setelah milestone.

Pipeline final:

```text
GPT / Gemini
→ Codex
→ Localhost Preview pakai npm run dev
→ Local QA
→ GitHub
→ Vercel hanya setelah milestone
```

---

# 0. Prinsip Utama

Jangan langsung deploy ke Vercel setiap ada perubahan kecil.

Jangan buka Figma saat coding kalau PC mulai berat.

Jangan suruh Codex bikin semua website dalam satu task.

Jangan mulai Task 2 sebelum Task 1 hijau di localhost.

Visual direction V1:

```text
Clean white-based premium editorial interface.
```

Bukan dark neutral.

---

# 1. File yang Perlu Masuk ke GitHub

Masukkan file ini ke repo:

```text
PRD.md
docs/PRD_EXECUTION_PATCH_v1_5_WHITE_PREMIUM.md
docs/TUTORIAL_EKSEKUSI_GUSTI_PORTFOLIO_v1_5_WHITE_PREMIUM.md
docs/CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md
docs/CHECKLIST_LOCALHOST_QA_v1_5_WHITE_PREMIUM.md
```

File dictionary Creative Finder jangan dulu dipaksa masuk kalau Task 1 baru base routing.

Dictionary nanti dipakai di Task 4.

Nanti nama dan lokasi final dictionary adalah:

```text
src/data/creativeFinderDictionary.ts
```

Kalau project tidak pakai folder `/src`, pakai:

```text
data/creativeFinderDictionary.ts
```

atau:

```text
app/data/creativeFinderDictionary.ts
```

Yang penting nama final file harus:

```text
creativeFinderDictionary.ts
```

---

# 2. Cara Upload File ke GitHub

## Cara paling mudah lewat website GitHub

1. Buka repo GitHub.
2. Klik tombol **Add file**.
3. Pilih **Create new file**.
4. Untuk PRD utama, isi nama file:

```text
PRD.md
```

5. Paste isi PRD utama.
6. Scroll bawah.
7. Commit message:

```text
docs: add PRD
```

8. Klik **Commit changes**.

Untuk file docs:

1. Klik **Add file**.
2. Pilih **Create new file**.
3. Isi nama file seperti ini:

```text
docs/PRD_EXECUTION_PATCH_v1_5_WHITE_PREMIUM.md
```

GitHub otomatis membuat folder `docs`.

4. Paste isi file.
5. Commit.

Ulangi untuk:

```text
docs/TUTORIAL_EKSEKUSI_GUSTI_PORTFOLIO_v1_5_WHITE_PREMIUM.md
docs/CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md
docs/CHECKLIST_LOCALHOST_QA_v1_5_WHITE_PREMIUM.md
```

---

# 3. Apa yang Dilempar ke Codex Pertama Kali

Jangan lempar semua file.

Jangan bilang “build full website”.

Yang dilempar ke Codex pertama adalah isi file:

```text
docs/CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md
```

Prompt ke Codex:

```text
Read PRD.md and docs/PRD_EXECUTION_PATCH_v1_5_WHITE_PREMIUM.md first.

Then execute only the task inside docs/CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md.

Do not expand the scope.
Do not build the header yet.
Do not build Creative Finder yet.
Do not build the homepage sections yet.
Do not deploy to Vercel.
After finishing, report files changed, routes created, assumptions, and how to test with npm run dev.
```

---

# 4. Apa yang Harus Dilakukan Setelah Codex Selesai

Setelah Codex selesai dan membuat perubahan di repo/branch, jangan buka Vercel dulu.

Sekarang tugasnya test lokal.

---

# 5. Setup Localhost di PC

## 5.1 Buka VS Code atau terminal

Buka folder project lu.

Kalau belum punya project di PC, clone repo dulu:

```bash
git clone <URL_REPO_GITHUB_LU>
```

Masuk ke folder repo:

```bash
cd <NAMA_FOLDER_REPO>
```

Contoh:

```bash
cd gusti-portfolio-2026
```

## 5.2 Ambil perubahan terbaru dari GitHub

```bash
git pull
```

## 5.3 Install dependency

Kalau baru pertama kali buka project di PC:

```bash
npm install
```

Kalau sebelumnya sudah pernah, tetap aman jalankan lagi kalau ada perubahan package.

## 5.4 Jalankan local server

```bash
npm run dev
```

Biasanya muncul:

```text
Local: http://localhost:3000
```

Buka di browser:

```text
http://localhost:3000
```

Kalau terminal menampilkan port lain, misalnya 3001, buka:

```text
http://localhost:3001
```

---

# 6. Route yang Harus Dicek Setelah Task 1

Buka satu per satu:

```text
http://localhost:3000
http://localhost:3000/work
http://localhost:3000/capabilities
http://localhost:3000/library
http://localhost:3000/workspace
```

Semua harus kebuka.

Kalau salah satu 404 atau error, Task 1 belum selesai.

---

# 7. Checklist Visual Task 1

Visual harus terasa:

```text
white-based
clean
premium
editorial
banyak whitespace
high contrast typography
bukan dark mode
bukan dark neutral
bukan generic CV template
```

Di halaman Home, harus ada:

```text
Gustiansyah
Homepage structure will follow the locked PRD order.
```

Lalu list:

```text
1. Header
2. Opening Hero Text
3. Motion / Video Journey Preview
4. Core Hero Text
5. Creative Finder
6. Featured Work
7. Capabilities Preview
8. Creative Library Preview
9. AI Workspace / Generator Preview
10. Footer
```

Di `/work`, harus ada:

```text
Featured Work
STARMAP
ALFAS FRAGRANCE
FABIL NATURAL
FAT SPORT
```

Di `/capabilities`, harus ada:

```text
Capabilities
AI Product Visuals
AI Video Production
AI Photoshoot
Ecommerce Campaigns
UGC Content Direction
Motion Design
PDP / Product Display Design
Branding & Packaging
```

Di `/library`, harus ada kategori library.

Di `/workspace`, harus ada workflow:

```text
Product Input
Reference & Direction
AI Photoshoot Output
Catalog / Lookbook Output
Campaign Output
UGC Concept Output
AI Video Direction
PDP / Product Page Output
Motion Reveal
```

---

# 8. Checklist Larangan Task 1

Pastikan tidak ada:

```text
Carlos
fashion designer
flag icon
dark/light toggle
dark neutral background
lorem ipsum random
fake client logo
fake achievement
old PDF content
full homepage design yang belum diminta
Creative Finder yang belum waktunya
rich dropdown yang belum waktunya
```

Download CV dan Hire Me belum perlu jadi tombol penuh di Task 1, tapi requirement-nya tidak boleh dihapus dari dokumen atau arah project.

---

# 9. Kalau Ada Error, Harus Ngapain?

## Kalau terminal merah

Copy error lengkap dari terminal.

Kirim ke Codex:

```text
Fix this error only.

Do not redesign.
Do not expand the scope.
Do not build new features.
Only fix the error so Task 1 runs locally with npm run dev.
Here is the error:

<paste error>
```

## Kalau browser error

Screenshot boleh, tapi lebih penting copy pesan error.

Kirim ke Codex dengan format yang sama.

## Kalau route 404

Kirim:

```text
The route <route yang error> returns 404.

Fix routing only.
Do not redesign.
Do not expand the task scope.
```

---

# 10. Kapan Boleh Commit / Merge?

Boleh commit atau approve PR hanya kalau:

```text
npm run dev jalan
semua 5 route kebuka
tidak ada error terminal
tidak ada konten terlarang
placeholder sesuai PRD
visual white-based premium sudah minimal terbaca
```

Kalau belum, jangan merge.

---

# 11. Kapan Boleh Vercel?

Bukan setelah Task 1.

Vercel hanya setelah milestone.

Milestone pertama:

```text
Base routes + header + rich dropdown stable locally
```

Artinya Vercel baru boleh setelah:

```text
Task 1 selesai
Task 2 selesai
Task 1 + Task 2 hijau di localhost
```

Sebelum Vercel, jalankan:

```bash
npm run build
```

Kalau build aman, baru push/merge ke GitHub dan biarkan Vercel deploy.

---

# 12. Urutan Task Setelah Task 1

Jangan lompat-lompat.

Urutan benar:

```text
Task 1 — Base Routing & Pages
Task 2 — Header + Rich Dropdown Navigation
Task 3 — Homepage Opening + Motion Slot + Core Hero
Task 4 — Creative Finder + creativeFinderDictionary.ts
Task 5 — Featured Work Section
Task 6 — Capabilities Preview
Task 7 — Creative Library Preview
Task 8 — AI Workspace / Generator Preview
Task 9 — Footer
Task 10 — Work Page + future /work/[slug]
Task 11 — Capabilities Page
Task 12 — Library Page
Task 13 — Workspace / Process Page
Task 14 — Responsive QA
Milestone Vercel Deploy
```

---

# 13. Command Harian yang Dipakai

Ambil update:

```bash
git pull
```

Install/update dependency:

```bash
npm install
```

Jalankan dev server:

```bash
npm run dev
```

Stop dev server:

```text
Ctrl + C
```

Build test sebelum Vercel:

```bash
npm run build
```

---

# 14. Flow Harian Paling Simpel

Pakai pola ini setiap hari:

```text
1. Pilih satu task
2. Lempar task itu ke Codex
3. Codex selesai
4. git pull
5. npm install
6. npm run dev
7. cek localhost
8. kalau error, lempar error ke Codex
9. kalau aman, commit/approve
10. lanjut task berikutnya
```

---

# 15. Jangan Lakukan Ini

Jangan:

```text
- buka Vercel untuk cek task kecil
- buka Figma sambil coding kalau PC berat
- suruh Codex build full website
- campur Task 1 dan Task 2
- deploy sebelum localhost hijau
- lanjut task baru saat task sebelumnya masih error
- biarkan Codex menambah dependency search/AI tanpa izin
- mengubah visual direction ke dark neutral tanpa persetujuan
```

---

# 16. Kesimpulan Eksekusi Sekarang

Yang harus dilakukan sekarang:

```text
1. Upload/commit file docs ke GitHub
2. Lempar CODEX_TASK_01_BASE_ROUTING_v1_5_WHITE_PREMIUM.md ke Codex
3. Setelah Codex selesai, git pull
4. npm install
5. npm run dev
6. cek 5 route lokal
7. kalau hijau, lanjut Task 2
```

Vercel nanti. Figma hanya referensi statis kalau benar-benar perlu.
