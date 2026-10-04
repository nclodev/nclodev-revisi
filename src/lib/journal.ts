export type Post = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  tags: string[];
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "nnx-root",
    title: "NNX .root",
    date: "2026-06-08",
    dateLabel: "8 Jun 2026",
    excerpt:
      "Catatan pembuka studio. Kenapa nclodev dikerjakan sebagai sistem, bukan sebagai kumpulan halaman.",
    tags: ["studio", "sistem"],
    body: [
      "nclodev bukan tema. Itu index. NNX .root adalah cara kami menata kerja: piksel, kode, dan data dalam satu praktik, dikerjakan dari Makassar.",
      "Situs studio yang lama menumpuk 26 koleksi A–Z di halaman depan. Itu jujur — kami memang berpikir dalam bahasa visual per industri — tapi tidak ramah untuk orang yang datang dengan satu pertanyaan: bisakah kalian membangun situs saya.",
      "Revisi ini memisahkan dua hal yang sebelumnya bertumpuk. Katalog sistem tetap ada, lengkap A sampai Z. Di depannya: studio yang bisa dihubungi, paket yang bisa dipilih, dan proses yang tidak disembunyikan.",
      "Hybrid, dari nol, artinya tidak ada page builder di belakang layar. Desain disetujui di Figma. Kode diserahkan setelah lunas. Jika suatu hari klien pergi ke developer lain, mereka pergi membawa miliknya, bukan sewa.",
    ],
  },
  {
    slug: "sistem-dulu",
    title: "Sistem dulu, halaman belakangan",
    date: "2026-07-22",
    dateLabel: "22 Jul 2026",
    excerpt:
      "Mengapa kami menolak mulai dari homepage. Token, tipe, dan gerak diputuskan sebelum hero ditulis.",
    tags: ["desain", "proses"],
    body: [
      "Homepage adalah hasil, bukan fondasi. Kalau dikerjakan duluan, setiap halaman berikutnya menjadi negosiasi ulang: spasi beda, tombol beda, foto memaksa layout.",
      "Kami mulai dari sistem. Warna sebagai token, bukan sebagai selera. Skala tipe yang sama di mobile dan desktop. Jarak 4 dan 8. Radius yang konsentris. Gerak yang bisa dihormati oleh prefers-reduced-motion.",
      "26 koleksi di nclodev adalah perpustakaan karakter, bukan 26 template siap pakai. ASCEND tidak bisa ditempel ke klinik. HUMANIZE tidak bisa dipakai roastery. Klien memilih arah; kami membangun milik mereka di atas disiplin yang sama.",
      "Baru sesudah itu halaman. Hero, layanan, bukti, formulir. Urutannya membosankan. Itulah gunanya.",
    ],
  },
  {
    slug: "dari-makassar",
    title: "Dari Makassar, tanpa markup kota",
    date: "2026-09-14",
    dateLabel: "14 Sep 2026",
    excerpt:
      "Remote untuk seluruh Indonesia. Harga tidak naik karena klien duduk di Jakarta, dan tidak turun karena kami duduk di sini.",
    tags: ["studio", "remote"],
    body: [
      "Jam kerja kami WITA. Staging tidak peduli zona waktu. Discovery Call lewat WhatsApp atau Google Meet, 30 sampai 60 menit, tanpa komitmen.",
      "Banyak studio menaikkan harga untuk klien di kota besar dan menurunkan ekspektasi untuk klien di luar itu. Kami tidak. Scope menentukan harga. Kota klien tidak.",
      "Yang kami minta jelas: logo, draf teks, referensi, dan kisaran budget. Yang tidak kami jual: pertemuan tatap muka sebagai line item, lock-in platform, dan jaminan peringkat Google.",
      "Jika Anda di luar Makassar, itu bukan pengecualian. Itu kasus normal.",
    ],
  },
  {
    slug: "tiga-paket",
    title: "Concept, Architecture, Realization",
    date: "2026-09-28",
    dateLabel: "28 Sep 2026",
    excerpt:
      "Tiga tangga, bukan seratus add-on. Mulai dari yang cukup, naik ketika bisnisnya minta.",
    tags: ["paket", "scope"],
    body: [
      "CONCEPT untuk satu tawaran yang harus live: 1–2 halaman, form, CTA. Tidak perlu CMS. Kuota revisi kecil karena scopenya kecil.",
      "ARCHITECTURE untuk bisnis yang harus menjelaskan dirinya: 5–10 halaman, sistem desain, integrasi standar. CMS masuk sebagai sadar-pilih, bukan sebagai kejutan di invoice.",
      "REALIZATION untuk toko dan web app. Auth, peran, payment Indonesia, QA yang dilaporkan. Support pasca-launch lebih panjang karena permukaannya lebih lebar.",
      "Kalau budget terbatas, mulai CONCEPT. Kodenya tetap milik Anda. Naik tangga kemudian, bukan beli istana untuk pamer tahun pertama.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug) ?? null;
}
