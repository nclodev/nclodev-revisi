import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70dvh] max-w-[720px] flex-col justify-center px-6 py-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        404 · path not in .root
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold">Halaman ini tidak ada.</h1>
      <p className="mt-4 text-muted-foreground">
        Index A–Z masih di Kategori. Paket dan brief ada di Buat Situs.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 w-fit items-center rounded-[var(--radius-sm)] bg-primary px-5 text-sm font-medium text-primary-foreground"
      >
        Kembali ke .root
      </a>
    </main>
  );
}
