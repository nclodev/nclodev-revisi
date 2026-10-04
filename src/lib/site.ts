export const SITE = {
  name: "nclodev",
  mark: "_n.clo",
  studio: "NNX .root",
  title: "NNX .root | nclodev",
  tagline: "Hybrid Dev from Scratch.",
  axes: ["PIXELS", "CODE", "DATA"] as const,
  city: "Makassar, Indonesia",
  tz: "Asia/Makassar",
  hours: "Senin–Sabtu 09.00–21.00 WITA",
  response: "Biasanya dibalas dalam 1–3 jam pada jam kerja",
  github: "https://github.com/nclodev",
  instagram: "https://www.instagram.com/_n.clo",
  threads: "https://www.threads.com/@_n.clo",
};

export const NAV = [
  { to: "/", label: ".root" },
  { to: "/kategori", label: "Kategori" },
  { to: "/tema", label: "Tema" },
  { to: "/studio", label: "Studio" },
  { to: "/blog", label: "Jurnal" },
] as const;

export const WHY = [
  {
    title: "Kode yang Anda miliki",
    body: "Source code diserahkan 100% setelah pelunasan. Tidak ada lock-in, tidak ada biaya lisensi tahunan, bebas dilanjutkan developer manapun.",
  },
  {
    title: "Desain sebelum kode",
    body: "Wireframe dan mockup hi-fi di Figma disetujui dulu. Anda melihat tampilan persis sebelum satu baris kode ditulis.",
  },
  {
    title: "Kontrak, bukan janji",
    body: "Scope, timeline, harga, kuota revisi, dan hak milik tertulis. Pekerjaan tidak dimulai tanpa kontrak yang ditandatangani.",
  },
  {
    title: "Stack production-grade",
    body: "Next.js, TypeScript, Tailwind, Supabase — bukan WordPress atau page builder. Kode yang bisa di-scale dan dirawat.",
  },
  {
    title: "Staging dari hari pertama",
    body: "Link staging aktif sejak development dimulai. Update progres via WhatsApp setiap 2–3 hari kerja.",
  },
  {
    title: "Remote, harga transparan",
    body: "Berbasis di Makassar, melayani seluruh Indonesia. Tidak ada markup domisili, tidak ada biaya pertemuan.",
  },
] as const;

export const AUDIENCES = [
  {
    title: "UMKM & bisnis lokal",
    body: "Landing page atau company profile yang tidak terlihat seperti template gratisan — mencerminkan brand dan bisa dipercaya calon pelanggan.",
  },
  {
    title: "Startup & produk digital",
    body: "MVP atau landing yang convert, dengan fondasi kode yang siap scale ke web app penuh.",
  },
  {
    title: "Kreator & freelancer",
    body: "Portofolio yang setara dengan kualitas karyanya, bukan template yang dipakai semua orang.",
  },
  {
    title: "Klinik & jasa profesional",
    body: "Situs informatif dengan booking, appointment, dan struktur layanan yang jelas.",
  },
  {
    title: "Toko online custom",
    body: "Bukan Shopify atau marketplace. Kontrol penuh atas tampilan, checkout, dan payment gateway Indonesia.",
  },
  {
    title: "Institusi & organisasi",
    body: "Situs informatif dengan manajemen konten yang bisa dikelola tim internal tanpa coding.",
  },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Discovery Call",
    time: "1–2 hari · gratis",
    body: "Sesi 30–60 menit via WhatsApp atau Google Meet. Kebutuhan, referensi, fitur, deadline, kisaran budget. Tanpa komitmen.",
  },
  {
    n: "02",
    title: "Proposal",
    time: "1–3 hari kerja",
    body: "Scope per halaman, stack, timeline, harga, dan syarat. Bisa diklarifikasi atau dinegosiasi sebelum setuju.",
  },
  {
    n: "03",
    title: "Kontrak & DP",
    time: "50% untuk mulai",
    body: "Kontrak digital ditandatangani, DP 50% dikonfirmasi, lalu proyek masuk antrian pengerjaan.",
  },
  {
    n: "04",
    title: "Desain",
    time: "wireframe → hi-fi",
    body: "Struktur disetujui dulu, lalu mockup Figma untuk mobile dan desktop. Kode menunggu desain ditandatangani.",
  },
  {
    n: "05",
    title: "Development",
    time: "5–30+ hari kerja",
    body: "Repo, staging, komponen, halaman, fitur. Anda memantau real-time. Update 2–3 hari sekali.",
  },
  {
    n: "06",
    title: "QA, UAT, live",
    time: "lalu support",
    body: "Uji browser, perangkat, Lighthouse, form, keamanan. UAT klien, pelunasan, deployment produksi, support pasca-launch.",
  },
] as const;

export const EXCLUDED = [
  {
    title: "Copywriting & konten artikel",
    body: "Teks halaman disiapkan klien. Copywriting UI dasar tersedia sebagai add-on.",
  },
  {
    title: "Foto & video produksi",
    body: "Pemotretan tidak termasuk. Stock bebas lisensi dipakai jika aset klien belum ada.",
  },
  {
    title: "Logo & brand identity",
    body: "Logo wajib dari klien. Pembuatan logo bukan bagian layanan situs.",
  },
  {
    title: "Iklan digital",
    body: "Pixel tracking dipasang. Pengelolaan Meta/Google/TikTok Ads tidak termasuk.",
  },
  {
    title: "Hosting & domain",
    body: "Biaya berulang dibayar klien langsung ke platform. NNX hanya setup awal, tanpa margin.",
  },
  {
    title: "Jaminan ranking Google",
    body: "Technical SEO dikerjakan benar. Peringkat bergantung konten, backlink, dan persaingan.",
  },
] as const;

export const FAQ = [
  {
    q: "Saya belum pernah buat website. Dari mana harus mulai?",
    a: "Dari Discovery Call. Ceritakan bisnis dan tujuannya — kami bantu tentukan paket yang cukup, bukan yang berlebihan. Tidak perlu semua materi siap di hari itu.",
  },
  {
    q: "Berapa estimasi biaya dan lama pengerjaan?",
    a: "Bergantung scope. CONCEPT untuk 1–2 halaman, ARCHITECTURE untuk company profile 5–10 halaman, REALIZATION untuk toko atau web app. Development 5–30+ hari kerja. Angka pastinya keluar di proposal setelah call.",
  },
  {
    q: "Apa bedanya dengan Wix atau WordPress?",
    a: "Bukan page builder. Kode custom, milik Anda setelah lunas, tanpa lock-in platform. Stack-nya production-grade dan bisa dilanjutkan developer lain.",
  },
  {
    q: "Belum punya logo, apakah bisa mulai?",
    a: "Discovery dan proposal bisa. Fase desain menunggu logo SVG atau PNG resolusi tinggi. Tanpa logo, identitas visual tidak bisa ditutup.",
  },
  {
    q: "Bagaimana memantau progres?",
    a: "Staging live sejak hari pertama development. Update via WhatsApp setiap 2–3 hari kerja. Channel: WhatsApp, Google Meet, email untuk dokumen.",
  },
  {
    q: "Bisakah saya edit konten sendiri nanti?",
    a: "Ya, jika mengambil CMS. ARCHITECTURE+ memakai Sanity, REALIZATION bisa custom admin. Tanpa CMS, perubahan konten lewat add-on atau proyek lanjutan.",
  },
  {
    q: "Apakah situs akan muncul di Google?",
    a: "Technical SEO, sitemap, schema, dan performa termasuk. Ranking tidak dijamin — itu kerja konten dan otoritas domain, bukan saklar di kode.",
  },
  {
    q: "Apakah DP bisa dikembalikan?",
    a: "Tidak. DP 50% mencakup waktu discovery dan fase desain. Jika batal, aset desain yang sudah selesai diserahkan; kode belum dilunasi tidak diserahkan.",
  },
  {
    q: "Bisa dilanjutkan developer lain?",
    a: "Bisa. Setelah pelunasan, seluruh kode custom dan file Figma menjadi milik Anda.",
  },
  {
    q: "Melayani di luar Makassar?",
    a: "Ya. Remote untuk seluruh Indonesia. Tidak ada biaya tatap muka dan tidak ada markup berdasarkan kota klien.",
  },
  {
    q: "Sudah punya website lama. Bisa dimigrasi?",
    a: "Redesign visual atau migrasi ke Next.js dikerjakan sebagai proyek tersendiri, bukan add-on diam-diam di tengah jalan.",
  },
  {
    q: "Apakah NNX mengurus iklan?",
    a: "Tidak. Pixel dipasang, kampanye tidak. Kalau butuh fitur di luar proposal, ditulis dulu — lalu estimasi biaya dan waktu tambahan.",
  },
] as const;

export const SERVICES = [
  {
    code: "01",
    title: "Situs kustom",
    body: "Landing, company profile, portofolio. Dirancang sebagai sistem, dibangun dari nol, bukan template.",
  },
  {
    code: "02",
    title: "SaaS & web app",
    body: "Autentikasi, peran, dashboard, logika bisnis. Fondasi yang bisa tumbuh, bukan prototipe sekali pakai.",
  },
  {
    code: "03",
    title: "Toko & mobile web",
    body: "E-commerce custom, PWA, payment Indonesia. Kontrol penuh atas checkout dan katalog.",
  },
  {
    code: "04",
    title: "Sistem desain",
    body: "26 bahasa visual A–Z. Setiap industri punya karakter, palet, dan gerak yang berbeda.",
  },
] as const;
