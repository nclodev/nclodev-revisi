import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemFrame } from "@/components/site/system-frame";
import { ModeBadge } from "@/components/site/mode-badge";
import { getCollection, relatedCollections } from "@/lib/collections";

export const Route = createFileRoute("/kategori/$letter")({
  loader: ({ params }) => {
    const collection = getCollection(params.letter);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.collection.theme} · nclodev`
          : "Sistem · nclodev",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { collection: c } = Route.useLoaderData();
  const related = relatedCollections(c.letter);

  return (
    <main>
      <section
        className="border-b border-border"
        style={{ background: c.bg, color: c.fg }}
      >
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-60">
            {c.letter.toUpperCase()} series · {c.industry}
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.9]">
            {c.theme}
          </h1>
          <p className="mt-6 max-w-[40ch] text-lg opacity-80">{c.tagline}</p>
          <div className="mt-8 h-1 w-14 rounded-full" style={{ background: c.accent }} />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ModeBadge mode={c.mode} className="opacity-70" />
            <span className="font-mono text-[11px] tracking-[0.16em]">
              ACCENT {c.accent}
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Karakter
            </p>
            <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-muted-foreground">
              {c.description}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {c.character.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Fokus
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Niche
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.niches.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Palet
            </p>
            <ul className="mt-6 space-y-3">
              {[
                ["Background", c.bg],
                ["Foreground", c.fg],
                ["Accent", c.accent],
              ].map(([name, value]) => (
                <li key={name} className="flex items-center gap-3">
                  <span
                    className="size-8 rounded-[var(--radius-xs)]"
                    style={{ background: value, boxShadow: "var(--shadow-border)" }}
                  />
                  <span>
                    <span className="block text-sm">{name}</span>
                    <span className="font-mono text-[11px] text-muted-foreground">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Tipografi
            </p>
            <p className="mt-6 font-display text-3xl font-semibold">{c.displayFont}</p>
            <p className="mt-2 text-sm text-muted-foreground">Display / judul</p>
            <p className="mt-6 text-lg">{c.bodyFont}</p>
            <p className="mt-2 text-sm text-muted-foreground">Body / UI</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Prinsip & gerak
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {c.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.motion}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Preview
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Apa yang dibangun dengan {c.theme}
          </h2>
          <div className="mt-8 max-w-xl">
            <SystemFrame collection={c} />
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Siap membangun?
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Mulai dengan {c.theme}
            </h2>
            <p className="mt-3 max-w-[48ch] text-muted-foreground">
              Sistem ini arah, bukan file jadi. Discovery Call untuk melihat apakah
              cocok dengan bisnis Anda.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/create" search={{ sistem: c.letter }}>
              Buat Situs dengan {c.theme}
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Berikutnya
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.letter}
                to="/kategori/$letter"
                params={{ letter: item.letter }}
                className="flex items-center justify-between rounded-[var(--radius-md)] border border-border px-4 py-4 hover:bg-muted"
              >
                <span>
                  <span className="block font-mono text-[11px] text-muted-foreground">
                    {item.letter.toUpperCase()} / {item.industry}
                  </span>
                  <span className="font-display text-lg font-semibold">{item.theme}</span>
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
