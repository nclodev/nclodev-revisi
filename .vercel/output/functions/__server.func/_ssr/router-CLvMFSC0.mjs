import { i as __toESM } from "../_runtime.mjs";
import { K as notFound, _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as require_jsx_runtime, v as createRootRoute, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as TriangleAlert, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/journal-BH6gbSca.js
var POSTS = [
	{
		slug: "nnx-root",
		title: "NNX .root",
		date: "2026-06-08",
		dateLabel: "8 Jun 2026",
		excerpt: "Catatan pembuka studio. Kenapa nclodev dikerjakan sebagai sistem, bukan sebagai kumpulan halaman.",
		tags: ["studio", "sistem"],
		body: [
			"nclodev bukan tema. Itu index. NNX .root adalah cara kami menata kerja: piksel, kode, dan data dalam satu praktik, dikerjakan dari Makassar.",
			"Situs studio yang lama menumpuk 26 koleksi A–Z di halaman depan. Itu jujur — kami memang berpikir dalam bahasa visual per industri — tapi tidak ramah untuk orang yang datang dengan satu pertanyaan: bisakah kalian membangun situs saya.",
			"Revisi ini memisahkan dua hal yang sebelumnya bertumpuk. Katalog sistem tetap ada, lengkap A sampai Z. Di depannya: studio yang bisa dihubungi, paket yang bisa dipilih, dan proses yang tidak disembunyikan.",
			"Hybrid, dari nol, artinya tidak ada page builder di belakang layar. Desain disetujui di Figma. Kode diserahkan setelah lunas. Jika suatu hari klien pergi ke developer lain, mereka pergi membawa miliknya, bukan sewa."
		]
	},
	{
		slug: "sistem-dulu",
		title: "Sistem dulu, halaman belakangan",
		date: "2026-07-22",
		dateLabel: "22 Jul 2026",
		excerpt: "Mengapa kami menolak mulai dari homepage. Token, tipe, dan gerak diputuskan sebelum hero ditulis.",
		tags: ["desain", "proses"],
		body: [
			"Homepage adalah hasil, bukan fondasi. Kalau dikerjakan duluan, setiap halaman berikutnya menjadi negosiasi ulang: spasi beda, tombol beda, foto memaksa layout.",
			"Kami mulai dari sistem. Warna sebagai token, bukan sebagai selera. Skala tipe yang sama di mobile dan desktop. Jarak 4 dan 8. Radius yang konsentris. Gerak yang bisa dihormati oleh prefers-reduced-motion.",
			"26 koleksi di nclodev adalah perpustakaan karakter, bukan 26 template siap pakai. ASCEND tidak bisa ditempel ke klinik. HUMANIZE tidak bisa dipakai roastery. Klien memilih arah; kami membangun milik mereka di atas disiplin yang sama.",
			"Baru sesudah itu halaman. Hero, layanan, bukti, formulir. Urutannya membosankan. Itulah gunanya."
		]
	},
	{
		slug: "dari-makassar",
		title: "Dari Makassar, tanpa markup kota",
		date: "2026-09-14",
		dateLabel: "14 Sep 2026",
		excerpt: "Remote untuk seluruh Indonesia. Harga tidak naik karena klien duduk di Jakarta, dan tidak turun karena kami duduk di sini.",
		tags: ["studio", "remote"],
		body: [
			"Jam kerja kami WITA. Staging tidak peduli zona waktu. Discovery Call lewat WhatsApp atau Google Meet, 30 sampai 60 menit, tanpa komitmen.",
			"Banyak studio menaikkan harga untuk klien di kota besar dan menurunkan ekspektasi untuk klien di luar itu. Kami tidak. Scope menentukan harga. Kota klien tidak.",
			"Yang kami minta jelas: logo, draf teks, referensi, dan kisaran budget. Yang tidak kami jual: pertemuan tatap muka sebagai line item, lock-in platform, dan jaminan peringkat Google.",
			"Jika Anda di luar Makassar, itu bukan pengecualian. Itu kasus normal."
		]
	},
	{
		slug: "tiga-paket",
		title: "Concept, Architecture, Realization",
		date: "2026-09-28",
		dateLabel: "28 Sep 2026",
		excerpt: "Tiga tangga, bukan seratus add-on. Mulai dari yang cukup, naik ketika bisnisnya minta.",
		tags: ["paket", "scope"],
		body: [
			"CONCEPT untuk satu tawaran yang harus live: 1–2 halaman, form, CTA. Tidak perlu CMS. Kuota revisi kecil karena scopenya kecil.",
			"ARCHITECTURE untuk bisnis yang harus menjelaskan dirinya: 5–10 halaman, sistem desain, integrasi standar. CMS masuk sebagai sadar-pilih, bukan sebagai kejutan di invoice.",
			"REALIZATION untuk toko dan web app. Auth, peran, payment Indonesia, QA yang dilaporkan. Support pasca-launch lebih panjang karena permukaannya lebih lebar.",
			"Kalau budget terbatas, mulai CONCEPT. Kodenya tetap milik Anda. Naik tangga kemudian, bukan beli istana untuk pamer tahun pertama."
		]
	}
];
function getPost(slug) {
	return POSTS.find((p) => p.slug === slug) ?? null;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/cn-Ccejyh36.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/collections-BkcIJQaD.js
var DARK = {
	bg: "#111110",
	fg: "#f2f0ea"
};
var LIGHT = {
	bg: "#f3f0e8",
	fg: "#161513"
};
var COLLECTIONS = [
	{
		letter: "a",
		industry: "Apparel",
		theme: "ASCEND",
		mode: "dark",
		accent: "#B59410",
		...DARK,
		tagline: "Designed for ambitious industries.",
		description: "Sistem untuk merek yang ingin naik kelas tanpa berteriak. Kontras ekstrem, ruang negatif luas, sudut siku — pakaian, arsitektur, dan brand yang menghitung setiap milimeter.",
		character: [
			"Sinematik",
			"Visioner",
			"Minimal elit"
		],
		focus: [
			"Brand progresif",
			"Premium modern",
			"Performa tinggi"
		],
		niches: [
			"Fashion",
			"Arsitektur",
			"Agency",
			"Augmented identity"
		],
		displayFont: "Space Grotesk",
		bodyFont: "Source Sans 3",
		principles: [
			"Kontras ekstrem",
			"Ruang negatif luas",
			"Sudut 90° tajam"
		],
		motion: "Hard cuts, transisi linear horizontal tanpa fade."
	},
	{
		letter: "b",
		industry: "Beauty",
		theme: "BLOOM",
		mode: "light",
		accent: "#8A9A86",
		...LIGHT,
		tagline: "Emotion through elegant interaction.",
		description: "Kecantikan sebagai editorial, bukan katalog diskon. Interaksi halus, palet mineral, tipografi yang bernapas — untuk klinik, skincare, dan house of beauty.",
		character: [
			"Tenang",
			"Sensori",
			"Teliti"
		],
		focus: [
			"Ritual perawatan",
			"Sentuhan lembut",
			"Kepercayaan"
		],
		niches: [
			"Skincare",
			"Klinik estetik",
			"Salon",
			"Fragrance"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Kulit kertas hangat",
			"Aksen sage",
			"Foto sebagai ruang"
		],
		motion: "Fade lembut, stagger pada kartu produk."
	},
	{
		letter: "c",
		industry: "Coffee",
		theme: "CORE",
		mode: "light",
		accent: "#A34527",
		...LIGHT,
		tagline: "Built around human connection.",
		description: "Kafe, roastery, dan ruang yang hidup dari percakapan. Hangat, analog, terpusat pada manusia — bukan pada filter Instagram.",
		character: [
			"Hangat",
			"Terang",
			"Manusiawi"
		],
		focus: [
			"Koneksi",
			"Ritual harian",
			"Tempat duduk"
		],
		niches: [
			"Roastery",
			"Kedai",
			"F&B neighborhood",
			"Subscription biji"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Cokelat terbakar",
			"Kertas cream",
			"Foto tangan dan uap"
		],
		motion: "Ease yang lambat, seperti menuang."
	},
	{
		letter: "d",
		industry: "Digital Agency",
		theme: "DEPTH",
		mode: "dark",
		accent: "#00FFCC",
		bg: "#05050A",
		fg: "#F0F3F8",
		tagline: "Multi-dimensional digital experiences.",
		description: "Bahasa studio digital: gelap, berlapis, eksperimental. Dipakai saat produk harus terasa seperti sistem, bukan brosur.",
		character: [
			"Gelap",
			"Futuristik",
			"Eksperimental",
			"Dinamis"
		],
		focus: [
			"Sistem berlapis",
			"Teknologi imersif",
			"Gerak di sumbu Z"
		],
		niches: [
			"Data",
			"Devices",
			"Defense",
			"Desain sistem"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Kisi halus",
			"Aksen satu titik",
			"Kedalaman, bukan neon semrawut"
		],
		motion: "Hover-tilt ringan, easing cubic-bezier(0.25, 1, 0.5, 1)."
	},
	{
		letter: "e",
		industry: "Education",
		theme: "EVOLVE",
		mode: "light",
		accent: "#3B82F6",
		...LIGHT,
		tagline: "Systems designed to grow.",
		description: "Sekolah, kursus, dan platform belajar yang harus jelas di mobile. Hierarki tegas, progres terlihat, tanpa maskot yang berisik.",
		character: [
			"Jelas",
			"Sabar",
			"Terstruktur"
		],
		focus: [
			"Kurikulum",
			"Akses",
			"Pertumbuhan"
		],
		niches: [
			"Edtech",
			"Kampus",
			"Kursus",
			"Beasiswa"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Biru sebagai arah",
			"Kartu pelajaran",
			"Tipografi yang terbaca lama"
		],
		motion: "Slide antar modul, tanpa dramatisasi."
	},
	{
		letter: "f",
		industry: "Food",
		theme: "FEEL",
		mode: "adaptive",
		accent: "#E03131",
		...DARK,
		tagline: "Experience designed to be felt.",
		description: "Rasa lebih dulu, UI belakangan. Merah sebagai nafsu makan, foto penuh bingkai, menu yang bisa diganti tiap musim.",
		character: [
			"Lapar",
			"Langsung",
			"Berselera"
		],
		focus: [
			"Menu",
			"Reservasi",
			"Suasana"
		],
		niches: [
			"Restoran",
			"Cloud kitchen",
			"Bakeri",
			"Delivery"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Foto penuh",
			"Tipe besar pada nama hidangan",
			"Aksen merica"
		],
		motion: "Reveal cepat pada kartu menu."
	},
	{
		letter: "g",
		industry: "Gaming",
		theme: "GRAVITY",
		mode: "dark",
		accent: "#A3B8CC",
		...DARK,
		tagline: "Digital presence with gravity.",
		description: "Bukan neon arcade. Gravitasi: antarmuka yang berat, tenang, dan percaya diri — untuk studio game, esports, dan rilis.",
		character: [
			"Berat",
			"Tenang",
			"Presisi"
		],
		focus: [
			"Rilis",
			"Roster",
			"Dunia"
		],
		niches: [
			"Studio game",
			"Esports",
			"Launcher",
			"Komunitas"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Baja dingin",
			"HUD minimal",
			"Tipografi tabular"
		],
		motion: "Snap, bukan bounce."
	},
	{
		letter: "h",
		industry: "Healthcare",
		theme: "HUMANIZE",
		mode: "light",
		accent: "#4F46E5",
		...LIGHT,
		tagline: "Technology made human.",
		description: "Klinik dan praktik yang harus terasa aman. Kontras AA, janji temu yang jelas, bahasa yang tidak menakuti pasien.",
		character: [
			"Tenang",
			"Terpercaya",
			"Manusiawi"
		],
		focus: [
			"Janji temu",
			"Layanan",
			"Kepercayaan"
		],
		niches: [
			"Klinik",
			"Praktik dokter",
			"Lab",
			"Kesehatan mental"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Banyak udara",
			"Aksen indigo tertahan",
			"Form yang ramah"
		],
		motion: "Transisi pendek, tidak mengganggu baca."
	},
	{
		letter: "i",
		industry: "AI",
		theme: "INTELLIGENCE",
		mode: "dark",
		accent: "#10B981",
		...DARK,
		tagline: "Smart systems for modern worlds.",
		description: "Produk AI yang tidak memakai gradient ungu. Hijau terminal sebagai sinyal sistem hidup — untuk tools, agent, dan infrastruktur model.",
		character: [
			"Tajam",
			"Tenang",
			"Operasional"
		],
		focus: [
			"Sistem",
			"Kecepatan",
			"Kontrol"
		],
		niches: [
			"AI tools",
			"Agent",
			"Infrastruktur",
			"Ops"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Mono untuk status",
			"Aksen hidup",
			"Panel, bukan poster"
		],
		motion: "Cursor blink, number pop-in."
	},
	{
		letter: "j",
		industry: "Jobs",
		theme: "JOURNEY",
		mode: "light",
		accent: "#E67E22",
		...LIGHT,
		tagline: "Every interaction is a journey.",
		description: "Karir sebagai rute, bukan database lowongan. Oranye sebagai tenaga, alur lamaran yang tidak menghinakan pelamar.",
		character: [
			"Hangat",
			"Tegas",
			"Bergerak"
		],
		focus: [
			"Lowongan",
			"Employer brand",
			"Alur lamaran"
		],
		niches: [
			"Board karir",
			"HR tech",
			"Kampus career",
			"Agensi talenta"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Kartu peran",
			"Langkah yang terlihat",
			"Tipe yang jujur"
		],
		motion: "Slide langkah, progress yang tenang."
	},
	{
		letter: "k",
		industry: "Kinetic Interface",
		theme: "KINETIC",
		mode: "dark",
		accent: "#EAF205",
		...DARK,
		tagline: "Motion becomes identity.",
		description: "Gerak adalah merek. Dipakai saat produk harus terasa fisik — kontrol, instrumen, antarmuka yang merespons tangan.",
		character: [
			"Cepat",
			"Fisik",
			"Berani"
		],
		focus: [
			"Motion system",
			"Respons sentuh",
			"Identitas gerak"
		],
		niches: [
			"Product UI",
			"Instrumen",
			"Kontrol",
			"Eksperimen"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Aksen sinyal",
			"Grid ketat",
			"Tidak ada hiasan diam"
		],
		motion: "Transform-only, 150–250ms, origin dari kursor."
	},
	{
		letter: "l",
		industry: "Luxury",
		theme: "LEGACY",
		mode: "dark",
		accent: "#C5A028",
		...DARK,
		tagline: "Built to outlast trends.",
		description: "Mewah yang diam. Emas sebagai satu garis, bukan sebagai wallpaper. Untuk house yang menghitung dekade, bukan kuartal.",
		character: [
			"Diam",
			"Tahan lama",
			"Teliti"
		],
		focus: [
			"Warisan",
			"Material",
			"Waktu"
		],
		niches: [
			"Maison",
			"Perhiasan",
			"Hospitality",
			"Watch"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Sedikit logam",
			"Tipografi lebar",
			"Foto sunyi"
		],
		motion: "Hampir tidak ada. Satu fade, selesai."
	},
	{
		letter: "m",
		industry: "Metaverse",
		theme: "META",
		mode: "dark",
		accent: "#D000FF",
		...DARK,
		tagline: "Beyond conventional interfaces.",
		description: "Ruang di luar layar datar. Dipakai hemat — hanya ketika produk memang tinggal di dunia 3D, spatial, atau identitas digital.",
		character: [
			"Spasial",
			"Berani",
			"Non-linear"
		],
		focus: [
			"World",
			"Identitas",
			"Presence"
		],
		niches: [
			"Spatial",
			"Avatar",
			"Virtual venue",
			"Digital twin"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Kedalaman Z",
			"Aksen satu kanal",
			"UI sebagai HUD"
		],
		motion: "Parallax tertahan, tidak mabuk."
	},
	{
		letter: "n",
		industry: "Network Systems",
		theme: "NEXUS",
		mode: "dark",
		accent: "#38BDF8",
		...DARK,
		tagline: "Connecting digital ecosystems.",
		description: "Infrastruktur yang harus terbaca operator. Status, topologi, dan waktu uptime lebih penting daripada hero image.",
		character: [
			"Operasional",
			"Jelas",
			"Tersambung"
		],
		focus: [
			"Topologi",
			"Status",
			"Integrasi"
		],
		niches: [
			"Infra",
			"ISP",
			"Devtools",
			"Observability"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Tabular nums",
			"Biru sinyal",
			"Panel rapat"
		],
		motion: "State swap, bukan karnaval."
	},
	{
		letter: "o",
		industry: "Organic",
		theme: "ORIGIN",
		mode: "light",
		accent: "#5D4A3A",
		...LIGHT,
		tagline: "Rooted in authentic identity.",
		description: "Bahan, tanah, rantai pasok. Cokelat tanah dan kertas. Untuk pangan, kebun, dan merek yang menolak plastik visual.",
		character: [
			"Mentah",
			"Jujur",
			"Lambat"
		],
		focus: [
			"Asal",
			"Bahan",
			"Musim"
		],
		niches: [
			"F&B organik",
			"Kebun",
			"Craft",
			"CSA"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Tekstur kertas",
			"Foto mentah",
			"Tipe yang tidak mengkilap"
		],
		motion: "Lambat, seperti musim."
	},
	{
		letter: "p",
		industry: "Portfolio",
		theme: "PRECISION",
		mode: "light",
		accent: "#EF4444",
		...LIGHT,
		tagline: "Every detail engineered.",
		description: "Portofolio yang menyunting, bukan menumpuk. Merah sebagai penanda karya, grid yang kaku, caption yang pendek.",
		character: [
			"Ketat",
			"Editorial",
			"Tajam"
		],
		focus: [
			"Karya",
			"Proses",
			"Kredit"
		],
		niches: [
			"Desainer",
			"Fotografer",
			"Studio",
			"Arsitek"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Grid kaku",
			"Caption mono",
			"Satu aksen per halaman"
		],
		motion: "Hard cut antar proyek."
	},
	{
		letter: "q",
		industry: "Quantum Tech",
		theme: "QUANTUM",
		mode: "dark",
		accent: "#6366F1",
		...DARK,
		tagline: "Advanced systems beyond perception.",
		description: "Riset dan deep tech yang tidak boleh terasa seperti mainan. Indigo tertahan, diagram sebagai konten, klaim yang bisa diaudit.",
		character: [
			"Riset",
			"Gelap",
			"Presisi"
		],
		focus: [
			"Paper",
			"Lab",
			"Sistem"
		],
		niches: [
			"Deep tech",
			"Lab",
			"Hardware",
			"Riset"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Diagram dulu",
			"Klaim kecil",
			"Aksen indigo"
		],
		motion: "Hampir statis."
	},
	{
		letter: "r",
		industry: "Recording",
		theme: "RHYTHM",
		mode: "dark",
		accent: "#EC4899",
		...DARK,
		tagline: "Flow-driven digital interaction.",
		description: "Label, studio rekam, artis. Playback sebagai navigasi. Gelap seperti ruang mixing, aksen seperti lampu channel.",
		character: [
			"Berirama",
			"Malam",
			"Fokus"
		],
		focus: [
			"Rilis",
			"Player",
			"Roster"
		],
		niches: [
			"Label",
			"Studio",
			"Podcast",
			"Artis"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Player selalu ada",
			"Tipografi album",
			"Gelap studio"
		],
		motion: "Sesuai beat, tidak looping murahan."
	},
	{
		letter: "s",
		industry: "Studio",
		theme: "SPECTRUM",
		mode: "adaptive",
		accent: "#7928CA",
		...DARK,
		tagline: "Unlimited creative dimensions.",
		description: "Studio kreatif yang harus muat banyak medium. Adaptive: terang untuk proses, gelap untuk showcase.",
		character: [
			"Luas",
			"Adaptif",
			"Kuratorial"
		],
		focus: [
			"Showreel",
			"Disiplin",
			"Metode"
		],
		niches: [
			"Creative studio",
			"Motion",
			"Brand",
			"Produksi"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Mode ganda",
			"Grid karya",
			"Warna sebagai indeks"
		],
		motion: "Crossfade antar medium."
	},
	{
		letter: "t",
		industry: "Transportation",
		theme: "TRANSITION",
		mode: "dark",
		accent: "#10B981",
		...DARK,
		tagline: "Designed for continuous change.",
		description: "Logistik, mobility, armada. Status perjalanan dan waktu lebih penting daripada ilustrasi kendaraan.",
		character: [
			"Bergerak",
			"Operasional",
			"Andal"
		],
		focus: [
			"Rute",
			"Waktu",
			"Armada"
		],
		niches: [
			"Mobility",
			"Logistik",
			"Armada",
			"Transit"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Waktu tabular",
			"Peta tenang",
			"Status hidup"
		],
		motion: "Progress linear, tidak memantul."
	},
	{
		letter: "u",
		industry: "University",
		theme: "UNITY",
		mode: "light",
		accent: "#6B7280",
		...LIGHT,
		tagline: "Systems connected as one.",
		description: "Kampus sebagai jaringan, bukan brosur. Abu-abu arsitektural, navigasi yang menahan ratusan halaman.",
		character: [
			"Institusional",
			"Tenang",
			"Tersambung"
		],
		focus: [
			"Fakultas",
			"Riset",
			"Mahasiswa"
		],
		niches: [
			"Kampus",
			"Fakultas",
			"Jurnal",
			"Alumni"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Navigasi dalam",
			"Tipografi serius",
			"Aksen batu"
		],
		motion: "Page slide pendek."
	},
	{
		letter: "v",
		industry: "Venture",
		theme: "VELOCITY",
		mode: "dark",
		accent: "#FF5E00",
		...DARK,
		tagline: "Fast systems with clear direction.",
		description: "Dana, studio venture, perusahaan yang bergerak cepat. Oranye sebagai vektor, angka sebagai hero.",
		character: [
			"Cepat",
			"Tajam",
			"Langsung"
		],
		focus: [
			"Portofolio",
			"Thesis",
			"Kecepatan"
		],
		niches: [
			"VC",
			"Studio",
			"Holdco",
			"Accelerator"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Angka besar",
			"Aksen vektor",
			"Copy pendek"
		],
		motion: "Masuk dari kanan, 200ms."
	},
	{
		letter: "w",
		industry: "Workshops",
		theme: "WONDER",
		mode: "light",
		accent: "#A855F7",
		...LIGHT,
		tagline: "Built to inspire curiosity.",
		description: "Kelas, workshop, komunitas belajar. Rasa ingin tahu tanpa konfeti. Jadwal jelas, mentor terlihat, daftar tunggu jujur.",
		character: [
			"Ingin tahu",
			"Hangat",
			"Terbuka"
		],
		focus: [
			"Kelas",
			"Mentor",
			"Cohort"
		],
		niches: [
			"Workshop",
			"Bootcamp",
			"Komunitas",
			"Maker"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Kartu sesi",
			"Waktu yang jujur",
			"Aksen satu titik"
		],
		motion: "Stagger kartu kelas."
	},
	{
		letter: "x",
		industry: "XR",
		theme: "XPERIENCE",
		mode: "dark",
		accent: "#39FF14",
		...DARK,
		tagline: "The future of interaction.",
		description: "AR, VR, instalasi. Sinyal hijau pada ruang gelap — untuk demo, device, dan pengalaman yang tidak muat di landing biasa.",
		character: [
			"Spasial",
			"Sinyal",
			"Berani"
		],
		focus: [
			"Device",
			"Demo",
			"Presence"
		],
		niches: [
			"AR",
			"VR",
			"Instalasi",
			"Spatial app"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"HUD",
			"Sinyal hijau",
			"Depth cue"
		],
		motion: "Z-axis, reduced-motion fallback ke fade."
	},
	{
		letter: "y",
		industry: "Yield Analytics",
		theme: "YIELD",
		mode: "light",
		accent: "#0EA5E9",
		...LIGHT,
		tagline: "Systems optimized for outcomes.",
		description: "Angka yang harus dipercaya. Grafik sebagai isi, bukan dekorasi. Untuk analytics, ops, dan tim yang diukur dari hasil.",
		character: [
			"Terukur",
			"Jernih",
			"Tenang"
		],
		focus: [
			"Metrik",
			"Outcome",
			"Keputusan"
		],
		niches: [
			"Analytics",
			"Finops",
			"Revops",
			"Dashboard"
		],
		displayFont: "IBM Plex Mono",
		bodyFont: "Source Sans 3",
		principles: [
			"Tabular nums",
			"Chart sebagai konten",
			"Aksen langit"
		],
		motion: "Number pop-in, skeleton ke data."
	},
	{
		letter: "z",
		industry: "Flagship Brands",
		theme: "ZENITH",
		mode: "dark",
		accent: "#B28B4C",
		...DARK,
		tagline: "The highest form of digital identity.",
		description: "Flagship: satu merek, satu standar tertinggi. Dipakai ketika situs harus menjadi mark, bukan kanal.",
		character: [
			"Puncak",
			"Tenang",
			"Mutlak"
		],
		focus: [
			"Identitas",
			"Editorial",
			"Keabadian"
		],
		niches: [
			"Flagship",
			"Maison",
			"House",
			"Icon"
		],
		displayFont: "Syne",
		bodyFont: "Source Sans 3",
		principles: [
			"Sedikit elemen",
			"Tipe sebagai mark",
			"Aksen perunggu"
		],
		motion: "Hampir tidak bergerak."
	}
];
function getCollection(letter) {
	return COLLECTIONS.find((c) => c.letter === letter.toLowerCase()) ?? null;
}
var FEATURED = [
	"d",
	"c",
	"i",
	"l",
	"p",
	"a"
];
function relatedCollections(letter, n = 3) {
	const i = COLLECTIONS.findIndex((c) => c.letter === letter.toLowerCase());
	if (i < 0) return COLLECTIONS.slice(0, n);
	const out = [];
	for (let k = 1; k <= COLLECTIONS.length && out.length < n; k++) out.push(COLLECTIONS[(i + k) % COLLECTIONS.length]);
	return out;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLvMFSC0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var SITE = {
	name: "nclodev",
	mark: "_n.clo",
	studio: "NNX .root",
	title: "NNX .root | nclodev",
	tagline: "Hybrid Dev from Scratch.",
	axes: [
		"PIXELS",
		"CODE",
		"DATA"
	],
	city: "Makassar, Indonesia",
	tz: "Asia/Makassar",
	hours: "Senin–Sabtu 09.00–21.00 WITA",
	response: "Biasanya dibalas dalam 1–3 jam pada jam kerja",
	github: "https://github.com/nclodev",
	instagram: "https://www.instagram.com/_n.clo",
	threads: "https://www.threads.com/@_n.clo"
};
var NAV = [
	{
		to: "/",
		label: ".root"
	},
	{
		to: "/kategori",
		label: "Kategori"
	},
	{
		to: "/tema",
		label: "Tema"
	},
	{
		to: "/studio",
		label: "Studio"
	},
	{
		to: "/blog",
		label: "Jurnal"
	}
];
var WHY = [
	{
		title: "Kode yang Anda miliki",
		body: "Source code diserahkan 100% setelah pelunasan. Tidak ada lock-in, tidak ada biaya lisensi tahunan, bebas dilanjutkan developer manapun."
	},
	{
		title: "Desain sebelum kode",
		body: "Wireframe dan mockup hi-fi di Figma disetujui dulu. Anda melihat tampilan persis sebelum satu baris kode ditulis."
	},
	{
		title: "Kontrak, bukan janji",
		body: "Scope, timeline, harga, kuota revisi, dan hak milik tertulis. Pekerjaan tidak dimulai tanpa kontrak yang ditandatangani."
	},
	{
		title: "Stack production-grade",
		body: "Next.js, TypeScript, Tailwind, Supabase — bukan WordPress atau page builder. Kode yang bisa di-scale dan dirawat."
	},
	{
		title: "Staging dari hari pertama",
		body: "Link staging aktif sejak development dimulai. Update progres via WhatsApp setiap 2–3 hari kerja."
	},
	{
		title: "Remote, harga transparan",
		body: "Berbasis di Makassar, melayani seluruh Indonesia. Tidak ada markup domisili, tidak ada biaya pertemuan."
	}
];
var AUDIENCES = [
	{
		title: "UMKM & bisnis lokal",
		body: "Landing page atau company profile yang tidak terlihat seperti template gratisan — mencerminkan brand dan bisa dipercaya calon pelanggan."
	},
	{
		title: "Startup & produk digital",
		body: "MVP atau landing yang convert, dengan fondasi kode yang siap scale ke web app penuh."
	},
	{
		title: "Kreator & freelancer",
		body: "Portofolio yang setara dengan kualitas karyanya, bukan template yang dipakai semua orang."
	},
	{
		title: "Klinik & jasa profesional",
		body: "Situs informatif dengan booking, appointment, dan struktur layanan yang jelas."
	},
	{
		title: "Toko online custom",
		body: "Bukan Shopify atau marketplace. Kontrol penuh atas tampilan, checkout, dan payment gateway Indonesia."
	},
	{
		title: "Institusi & organisasi",
		body: "Situs informatif dengan manajemen konten yang bisa dikelola tim internal tanpa coding."
	}
];
var PROCESS = [
	{
		n: "01",
		title: "Discovery Call",
		time: "1–2 hari · gratis",
		body: "Sesi 30–60 menit via WhatsApp atau Google Meet. Kebutuhan, referensi, fitur, deadline, kisaran budget. Tanpa komitmen."
	},
	{
		n: "02",
		title: "Proposal",
		time: "1–3 hari kerja",
		body: "Scope per halaman, stack, timeline, harga, dan syarat. Bisa diklarifikasi atau dinegosiasi sebelum setuju."
	},
	{
		n: "03",
		title: "Kontrak & DP",
		time: "50% untuk mulai",
		body: "Kontrak digital ditandatangani, DP 50% dikonfirmasi, lalu proyek masuk antrian pengerjaan."
	},
	{
		n: "04",
		title: "Desain",
		time: "wireframe → hi-fi",
		body: "Struktur disetujui dulu, lalu mockup Figma untuk mobile dan desktop. Kode menunggu desain ditandatangani."
	},
	{
		n: "05",
		title: "Development",
		time: "5–30+ hari kerja",
		body: "Repo, staging, komponen, halaman, fitur. Anda memantau real-time. Update 2–3 hari sekali."
	},
	{
		n: "06",
		title: "QA, UAT, live",
		time: "lalu support",
		body: "Uji browser, perangkat, Lighthouse, form, keamanan. UAT klien, pelunasan, deployment produksi, support pasca-launch."
	}
];
var EXCLUDED = [
	{
		title: "Copywriting & konten artikel",
		body: "Teks halaman disiapkan klien. Copywriting UI dasar tersedia sebagai add-on."
	},
	{
		title: "Foto & video produksi",
		body: "Pemotretan tidak termasuk. Stock bebas lisensi dipakai jika aset klien belum ada."
	},
	{
		title: "Logo & brand identity",
		body: "Logo wajib dari klien. Pembuatan logo bukan bagian layanan situs."
	},
	{
		title: "Iklan digital",
		body: "Pixel tracking dipasang. Pengelolaan Meta/Google/TikTok Ads tidak termasuk."
	},
	{
		title: "Hosting & domain",
		body: "Biaya berulang dibayar klien langsung ke platform. NNX hanya setup awal, tanpa margin."
	},
	{
		title: "Jaminan ranking Google",
		body: "Technical SEO dikerjakan benar. Peringkat bergantung konten, backlink, dan persaingan."
	}
];
var FAQ = [
	{
		q: "Saya belum pernah buat website. Dari mana harus mulai?",
		a: "Dari Discovery Call. Ceritakan bisnis dan tujuannya — kami bantu tentukan paket yang cukup, bukan yang berlebihan. Tidak perlu semua materi siap di hari itu."
	},
	{
		q: "Berapa estimasi biaya dan lama pengerjaan?",
		a: "Bergantung scope. CONCEPT untuk 1–2 halaman, ARCHITECTURE untuk company profile 5–10 halaman, REALIZATION untuk toko atau web app. Development 5–30+ hari kerja. Angka pastinya keluar di proposal setelah call."
	},
	{
		q: "Apa bedanya dengan Wix atau WordPress?",
		a: "Bukan page builder. Kode custom, milik Anda setelah lunas, tanpa lock-in platform. Stack-nya production-grade dan bisa dilanjutkan developer lain."
	},
	{
		q: "Belum punya logo, apakah bisa mulai?",
		a: "Discovery dan proposal bisa. Fase desain menunggu logo SVG atau PNG resolusi tinggi. Tanpa logo, identitas visual tidak bisa ditutup."
	},
	{
		q: "Bagaimana memantau progres?",
		a: "Staging live sejak hari pertama development. Update via WhatsApp setiap 2–3 hari kerja. Channel: WhatsApp, Google Meet, email untuk dokumen."
	},
	{
		q: "Bisakah saya edit konten sendiri nanti?",
		a: "Ya, jika mengambil CMS. ARCHITECTURE+ memakai Sanity, REALIZATION bisa custom admin. Tanpa CMS, perubahan konten lewat add-on atau proyek lanjutan."
	},
	{
		q: "Apakah situs akan muncul di Google?",
		a: "Technical SEO, sitemap, schema, dan performa termasuk. Ranking tidak dijamin — itu kerja konten dan otoritas domain, bukan saklar di kode."
	},
	{
		q: "Apakah DP bisa dikembalikan?",
		a: "Tidak. DP 50% mencakup waktu discovery dan fase desain. Jika batal, aset desain yang sudah selesai diserahkan; kode belum dilunasi tidak diserahkan."
	},
	{
		q: "Bisa dilanjutkan developer lain?",
		a: "Bisa. Setelah pelunasan, seluruh kode custom dan file Figma menjadi milik Anda."
	},
	{
		q: "Melayani di luar Makassar?",
		a: "Ya. Remote untuk seluruh Indonesia. Tidak ada biaya tatap muka dan tidak ada markup berdasarkan kota klien."
	},
	{
		q: "Sudah punya website lama. Bisa dimigrasi?",
		a: "Redesign visual atau migrasi ke Next.js dikerjakan sebagai proyek tersendiri, bukan add-on diam-diam di tengah jalan."
	},
	{
		q: "Apakah NNX mengurus iklan?",
		a: "Tidak. Pixel dipasang, kampanye tidak. Kalau butuh fitur di luar proposal, ditulis dulu — lalu estimasi biaya dan waktu tambahan."
	}
];
var SERVICES = [
	{
		code: "01",
		title: "Situs kustom",
		body: "Landing, company profile, portofolio. Dirancang sebagai sistem, dibangun dari nol, bukan template."
	},
	{
		code: "02",
		title: "SaaS & web app",
		body: "Autentikasi, peran, dashboard, logika bisnis. Fondasi yang bisa tumbuh, bukan prototipe sekali pakai."
	},
	{
		code: "03",
		title: "Toko & mobile web",
		body: "E-commerce custom, PWA, payment Indonesia. Kontrol penuh atas checkout dan katalog."
	},
	{
		code: "04",
		title: "Sistem desain",
		body: "26 bahasa visual A–Z. Setiap industri punya karakter, palet, dan gerak yang berbeda."
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-sm",
					children: SITE.studio
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",
					children: [
						"Studio hybrid di ",
						SITE.city,
						". Situs kustom, SaaS, web app, dan toko — dibangun dari nol, diserahkan utuh."
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
					children: "Index"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2",
					children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "text-sm text-foreground/90 hover:text-accent",
						children: item.label
					}) }, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/create",
						className: "text-sm text-foreground/90 hover:text-accent",
						children: "Buat Situs"
					}) })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
						children: "Kanal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.instagram,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-accent",
								children: "Instagram @_n.clo"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.threads,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-accent",
								children: "Threads"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.github,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-accent",
								children: "GitHub /nclodev"
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground",
						children: [
							SITE.hours,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							SITE.response
						]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					SITE.mark,
					" · ",
					SITE.tagline
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.axes.join(" / ") })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[color,background-color,border-color,transform,opacity] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-accent",
			outline: "border border-border bg-transparent text-foreground hover:border-accent/50 hover:bg-muted",
			ghost: "text-muted-foreground hover:text-foreground",
			invert: "bg-ink text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 rounded-[var(--radius-sm)] px-5 text-sm",
			lg: "h-12 rounded-[var(--radius-md)] px-6 text-sm",
			sm: "h-9 rounded-[var(--radius-xs)] px-3 text-xs"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function formatWita(d) {
	return new Intl.DateTimeFormat("en-GB", {
		timeZone: SITE.tz,
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false
	}).format(d);
}
function WitaClock({ className }) {
	const [time, setTime] = (0, import_react.useState)("--:--:--");
	(0, import_react.useEffect)(() => {
		const tick = () => setTime(formatWita(/* @__PURE__ */ new Date()));
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("font-mono text-[11px] tabular-nums tracking-[0.14em] text-muted-foreground", className),
		children: [time, " WITA"]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-baseline gap-2 text-foreground",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm tracking-tight",
						children: SITE.mark
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline",
						children: SITE.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-150 hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WitaClock, { className: "hidden lg:inline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/create",
								onClick: () => setOpen(false),
								children: ["Buat Situs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden pl-0.5 sm:inline",
									"aria-hidden": true,
									children: "→"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "relative inline-flex size-11 items-center justify-center text-foreground md:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-expanded": open,
							"aria-label": open ? "Tutup menu" : "Buka menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-x-0 top-14 bottom-0 z-40 bg-background md:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col px-6 py-8",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "border-b border-border py-4 font-display text-3xl font-semibold tracking-tight",
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/create",
						onClick: () => setOpen(false),
						className: "mt-8 inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-primary px-6 text-sm font-medium text-primary-foreground",
						children: "Buat Situs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-auto font-mono text-[11px] tracking-[0.14em] text-muted-foreground",
						children: SITE.city
					})
				]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var styles_default = "/assets/styles-DF1XTRJH.css";
var APP_NAME = "NNX .root | nclodev";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "nclodev — studio hybrid di Makassar. Situs kustom, SaaS, web app, dan toko, dibangun dari nol."
			},
			{
				name: "theme-color",
				content: "#0c0c0b"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&family=Syne:wght@500;600;700;800&display=swap"
			}
		]
	}),
	component: RootDocument,
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70dvh] max-w-[720px] flex-col justify-center px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "404 · path not in .root"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl font-semibold",
				children: "Halaman ini tidak ada."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "Index A–Z masih di Kategori. Paket dan brief ada di Buat Situs."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "mt-8 inline-flex h-11 w-fit items-center rounded-[var(--radius-sm)] bg-primary px-5 text-sm font-medium text-primary-foreground",
				children: "Kembali ke .root"
			})
		]
	})
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "id",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$10 = () => import("./routes-7Wpg8J1s.mjs");
var Route$10 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "NNX .root | nclodev" }, {
		name: "description",
		content: "Studio hybrid di Makassar. Situs kustom, SaaS, dan web app — dibangun dari nol, bukan dari template."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("../_-U2L6_byR.mjs");
var Route$9 = createFileRoute("/$")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./blog-GHsbigBI.mjs");
var Route$8 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./create-BOwDaK-1.mjs");
var Route$7 = createFileRoute("/create")({
	validateSearch: (s) => ({
		paket: typeof s.paket === "string" ? s.paket : void 0,
		sistem: typeof s.sistem === "string" ? s.sistem : void 0
	}),
	head: () => ({ meta: [{ title: "Buat Situs · nclodev" }, {
		name: "description",
		content: "Website custom dari nol. Bukan template. Discovery Call gratis, kontrak resmi, source code diserahkan."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./kategori-ptifj1jl.mjs");
var Route$6 = createFileRoute("/kategori")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./studio-Bt-4_6Yq.mjs");
var Route$5 = createFileRoute("/studio")({
	head: () => ({ meta: [{ title: "Studio · nclodev" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./tema-BVcy3d8Y.mjs");
var Route$4 = createFileRoute("/tema")({
	head: () => ({ meta: [{ title: "Tema · nclodev" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./blog.index-DF7rzRMJ.mjs");
var Route$3 = createFileRoute("/blog/")({
	head: () => ({ meta: [{ title: "Jurnal · nclodev" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog._slug-DF63ECg6.mjs");
var Route$2 = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = getPost(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.post.title} · nclodev` : "Jurnal" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./kategori.index-CbY0JEU-.mjs");
var Route$1 = createFileRoute("/kategori/")({
	head: () => ({ meta: [{ title: "Kategori · nclodev" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./kategori._letter-d832hx-m.mjs");
var Route = createFileRoute("/kategori/$letter")({
	loader: ({ params }) => {
		const collection = getCollection(params.letter);
		if (!collection) throw notFound();
		return { collection };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.collection.theme} · nclodev` : "Sistem · nclodev" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var SplatRoute = Route$9.update({
	id: "/$",
	path: "/$",
	getParentRoute: () => Route$11
});
var BlogRoute = Route$8.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$11
});
var CreateRoute = Route$7.update({
	id: "/create",
	path: "/create",
	getParentRoute: () => Route$11
});
var KategoriRoute = Route$6.update({
	id: "/kategori",
	path: "/kategori",
	getParentRoute: () => Route$11
});
var StudioRoute = Route$5.update({
	id: "/studio",
	path: "/studio",
	getParentRoute: () => Route$11
});
var TemaRoute = Route$4.update({
	id: "/tema",
	path: "/tema",
	getParentRoute: () => Route$11
});
var BlogIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var BlogSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => BlogRoute
});
var KategoriIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => KategoriRoute
});
var KategoriLetterRoute = Route.update({
	id: "/$letter",
	path: "/$letter",
	getParentRoute: () => KategoriRoute
});
var BlogRouteChildren = {
	BlogSlugRoute,
	BlogIndexRoute
};
var BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
var KategoriRouteChildren = {
	KategoriLetterRoute,
	KategoriIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	SplatRoute,
	BlogRoute: BlogRouteWithChildren,
	CreateRoute,
	KategoriRoute: KategoriRoute._addFileChildren(KategoriRouteChildren),
	StudioRoute,
	TemaRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { cn as _, Button as a, FAQ as c, SITE as d, WHY as f, relatedCollections as g, getCollection as h, Route$7 as i, PROCESS as l, FEATURED as m, Route as n, AUDIENCES as o, COLLECTIONS as p, Route$2 as r, EXCLUDED as s, router_exports as t, SERVICES as u, POSTS as v };
