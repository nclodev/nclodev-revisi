import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { COLLECTIONS, type Mode } from "@/lib/collections";
import { ModeBadge } from "@/components/site/mode-badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/kategori/")({
  head: () => ({
    meta: [{ title: "Kategori · nclodev" }],
  }),
  component: KategoriPage,
});

const FILTERS: Array<{ id: "all" | Mode; label: string }> = [
  { id: "all", label: "Semua" },
  { id: "dark", label: "Dark" },
  { id: "light", label: "Light" },
  { id: "adaptive", label: "Adaptive" },
];

function KategoriPage() {
  const [q, setQ] = useState("");
  const [mode, setMode] = useState<"all" | Mode>("all");

  const list = useMemo(() => {
    const query = q.trim().toLowerCase();
    return COLLECTIONS.filter((c) => {
      if (mode !== "all" && c.mode !== mode) return false;
      if (!query) return true;
      return (
        c.theme.toLowerCase().includes(query) ||
        c.industry.toLowerCase().includes(query) ||
        c.letter.includes(query) ||
        c.tagline.toLowerCase().includes(query)
      );
    });
  }, [q, mode]);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        26 sistem
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">Kategori</h1>
      <p className="mt-4 max-w-[52ch] text-muted-foreground">
        Bahasa visual per industri. Bukan template siap pakai — arah karakter
        sebelum kami merancang milik Anda.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setMode(f.id)}
              className={cn(
                "h-9 rounded-full px-4 font-mono text-[11px] uppercase tracking-[0.14em]",
                mode === f.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari industri atau tema"
          className="sm:max-w-xs"
          aria-label="Cari koleksi"
        />
      </div>

      <ul className="mt-10 divide-y divide-border border-y border-border">
        {list.map((c) => (
          <li key={c.letter}>
            <Link
              to="/kategori/$letter"
              params={{ letter: c.letter }}
              className="grid grid-cols-[48px_1fr] items-baseline gap-4 py-5 sm:grid-cols-[64px_160px_1fr_auto] sm:gap-6"
            >
              <span className="font-mono text-[11px] text-muted-foreground">
                {c.letter.toUpperCase()}
              </span>
              <span className="font-mono text-sm tracking-widest">{c.theme}</span>
              <span className="col-span-2 text-sm text-muted-foreground sm:col-span-1">
                {c.industry} — {c.tagline}
              </span>
              <span className="hidden items-center gap-4 sm:flex">
                <span
                  className="size-2.5 rounded-full"
                  style={{ background: c.accent }}
                  aria-hidden
                />
                <ModeBadge mode={c.mode} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {list.length === 0 ? (
        <p className="py-12 text-sm text-muted-foreground">Tidak ada yang cocok.</p>
      ) : null}
    </main>
  );
}
