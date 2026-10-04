import { createFileRoute, Link } from "@tanstack/react-router";
import { COLLECTIONS } from "@/lib/collections";
import { ModeBadge } from "@/components/site/mode-badge";

export const Route = createFileRoute("/tema")({
  head: () => ({
    meta: [{ title: "Tema · nclodev" }],
  }),
  component: TemaPage,
});

function TemaPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Indeks visual
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Tema</h1>
      <p className="mt-4 max-w-[52ch] text-muted-foreground">
        26 aksen, tiga mode. Dark untuk sistem yang tinggal di malam. Light untuk
        yang harus dibaca lama. Adaptive untuk yang harus keduanya.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.letter}
            to="/kategori/$letter"
            params={{ letter: c.letter }}
            className="group overflow-hidden rounded-[var(--radius-lg)] border border-border"
          >
            <div className="h-20" style={{ background: c.accent }} />
            <div className="p-3">
              <p className="font-mono text-[11px] text-muted-foreground">
                {c.letter.toUpperCase()} · {c.industry}
              </p>
              <p className="mt-1 font-display text-lg font-semibold">{c.theme}</p>
              <ModeBadge mode={c.mode} className="mt-2 block" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
