import { createFileRoute, Link } from "@tanstack/react-router";
import { BriefForm } from "@/components/site/brief-form";
import { PACKAGES } from "@/lib/packages";
import { EXCLUDED, FAQ } from "@/lib/site";
import { Button } from "@/components/ui/button";

type CreateSearch = {
  paket?: string;
  sistem?: string;
};

export const Route = createFileRoute("/create")({
  validateSearch: (s: Record<string, unknown>): CreateSearch => ({
    paket: typeof s.paket === "string" ? s.paket : undefined,
    sistem: typeof s.sistem === "string" ? s.sistem : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Buat Situs · nclodev" },
      {
        name: "description",
        content:
          "Website custom dari nol. Bukan template. Discovery Call gratis, kontrak resmi, source code diserahkan.",
      },
    ],
  }),
  component: CreatePage,
});

function CreatePage() {
  const search = Route.useSearch();

  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            .analysis · Buat Situs
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[0.95]">
            Website yang benar-benar bekerja.
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            Bukan template. Bukan drag-and-drop. Dibangun dari nol dengan kode
            bersih, desain yang mencerminkan brand Anda, dan performa yang diuji —
            dari Discovery Call sampai situs live.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Paket
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Pilih tangga yang cukup.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article
                key={p.id}
                className="flex flex-col rounded-[var(--radius-xl)] border border-border bg-card p-6"
              >
                <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                  {p.name}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{p.kicker}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.fit}</p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em]">
                  {p.pages}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {p.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  Revisi {p.revisions}. Support {p.support}.
                </p>
                <Button asChild className="mt-8" variant="outline">
                  <a href="#brief">{p.name}</a>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-[62ch] text-sm text-muted-foreground">
            Budget terbatas? Mulai CONCEPT. Kodenya tetap milik Anda dan bisa naik ke
            ARCHITECTURE atau REALIZATION di proyek berikutnya.
          </p>
        </div>
      </section>

      <section className="border-b border-border" id="brief">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Discovery
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Satu brief. Tanpa komitmen.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Isi yang Anda tahu. Yang belum, biarkan kosong. Kami balas lewat
              Instagram atau kontak yang Anda tulis — biasanya 1–3 jam pada jam kerja.
            </p>
            <Button asChild variant="ghost" className="mt-6 px-0">
              <Link to="/studio">Baca kebijakan studio →</Link>
            </Button>
          </div>
          <BriefForm defaultPackage={search.paket} defaultSystem={search.sistem} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Tidak termasuk
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Ekspektasi yang tepat dari awal.
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXCLUDED.map((item) => (
              <li key={item.title} className="border-t border-border pt-5">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">Yang biasanya ditanya.</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
