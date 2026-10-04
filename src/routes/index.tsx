import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemFrame } from "@/components/site/system-frame";
import { ModeBadge } from "@/components/site/mode-badge";
import { COLLECTIONS, FEATURED, getCollection } from "@/lib/collections";
import { PACKAGES } from "@/lib/packages";
import { POSTS } from "@/lib/journal";
import { PROCESS, SERVICES, SITE, WHY } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NNX .root | nclodev" },
      {
        name: "description",
        content:
          "Studio hybrid di Makassar. Situs kustom, SaaS, dan web app — dibangun dari nol, bukan dari template.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = FEATURED.map((id) => getCollection(id)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  );

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-fade opacity-80" />
        <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_220px] lg:py-28">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {SITE.studio} ()
            </p>
            <h1 className="mt-6 max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.95]">
              Sistem dulu.
              <br />
              Halaman belakangan.
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Studio hybrid di {SITE.city}. Situs kustom, SaaS, web app, dan toko —
              dirancang sebagai sistem visual, ditulis sebagai kode milik Anda,
              bukan sebagai sewa template.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/create">
                  Buat Situs
                  <span aria-hidden>→</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/kategori">26 sistem</Link>
              </Button>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {SITE.axes.join("  /  ")}
            </p>
          </div>
          <div className="hidden lg:flex lg:flex-col lg:gap-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {COLLECTIONS.map((c) => (
                <Link
                  key={c.letter}
                  to="/kategori/$letter"
                  params={{ letter: c.letter }}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-150 hover:text-foreground"
                >
                  {c.letter}
                  <span className="ml-2 opacity-40">{c.theme.slice(0, 3)}</span>
                </Link>
              ))}
            </div>
            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
              {SITE.city}
              <br />
              {SITE.hours}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <article
              key={s.code}
              className={
                i % 2 === 0
                  ? "border-b border-border px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r"
                  : "border-b border-border px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r last:lg:border-r-0"
              }
            >
              <p className="font-mono text-[11px] text-muted-foreground">{s.code}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Katalog
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Enam bahasa visual
              </h2>
            </div>
            <Link
              to="/kategori"
              className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              Semua A–Z
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={c.letter}
                to="/kategori/$letter"
                params={{ letter: c.letter }}
                className="group rounded-[calc(var(--radius-lg)+8px)] p-2 transition-colors duration-150 hover:bg-muted"
              >
                <SystemFrame collection={c} />
                <div className="flex items-center justify-between px-2 pt-3">
                  <p className="text-sm">
                    {c.letter.toUpperCase()} / {c.industry}
                  </p>
                  <ModeBadge mode={c.mode} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Paket
          </p>
          <h2 className="mt-2 max-w-[18ch] font-display text-3xl font-semibold sm:text-4xl">
            Tiga tangga. Bukan seratus add-on.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] bg-ink/10 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <article key={p.id} className="bg-paper p-6 sm:p-8">
                <p className="font-mono text-[11px] tracking-[0.16em]">{p.name}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{p.kicker}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.fit}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50">
                  {p.pages}
                </p>
                <Link
                  to="/create"
                  search={{ paket: p.id }}
                  className="mt-8 inline-flex items-center gap-1 text-sm font-medium"
                >
                  Ambil {p.name}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Alur
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Dari call sampai live
          </h2>
          <ol className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((step) => (
              <li
                key={step.n}
                className="border-t border-border py-8 pr-6 lg:border-r lg:px-6 lg:[&:nth-child(3n)]:border-r-0"
              >
                <p className="font-mono text-[11px] text-muted-foreground">
                  {step.n} · {step.time}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Kenapa NNX
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Kode milik Anda. Desain sebelum commit.
            </h2>
            <Button asChild className="mt-8" variant="outline">
              <Link to="/studio">Baca studio</Link>
            </Button>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {WHY.slice(0, 4).map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Jurnal
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Catatan studio</h2>
            </div>
            <Link
              to="/blog"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
            >
              Semua
            </Link>
          </div>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline"
              >
                <span className="font-mono text-[11px] text-muted-foreground">
                  {post.dateLabel}
                </span>
                <span className="font-display text-xl font-semibold">{post.title}</span>
                <ArrowUpRight className="hidden size-4 text-muted-foreground sm:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Discovery Call · gratis
            </p>
            <h2 className="mt-3 max-w-[16ch] font-display text-4xl font-semibold sm:text-5xl">
              Satu pesan. Mulai dari sini.
            </h2>
            <p className="mt-4 max-w-[48ch] text-muted-foreground">
              Tanpa komitmen. Kami bantu tentukan scope yang cukup — lalu proposal
              yang bisa dibaca, bukan yang bisa ditafsirkan.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/create">Mulai Discovery Call</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
