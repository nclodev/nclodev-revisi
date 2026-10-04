import { createFileRoute, Link } from "@tanstack/react-router";
import { AUDIENCES, PROCESS, SITE, WHY } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [{ title: "Studio · nclodev" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {SITE.studio}
          </p>
          <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[0.95]">
            Hybrid dari Makassar.
          </h1>
          <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            nclodev merancang sistem visual, menulis kodenya, dan merawat datanya.
            Remote untuk seluruh Indonesia. Harga tidak naik karena Anda di Jakarta,
            dan tidak turun karena kami di sini.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {SITE.axes.join(" / ")} · {SITE.hours}
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Prinsip
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((item) => (
              <article key={item.title} className="border-t border-border pt-5">
                <h2 className="font-display text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper text-ink">
        <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Untuk siapa
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Cocok jika Anda butuh milik sendiri.
          </h2>
          <p className="mt-4 max-w-[54ch] text-sm leading-relaxed text-ink/70">
            Tidak cocok jika Anda butuh situs dalam 1–2 hari tanpa desain, budget
            hanya untuk page builder, atau pekerjaan tanpa kontrak.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.body}</p>
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
          <ol className="mt-8 grid gap-0 sm:grid-cols-2">
            {PROCESS.map((step) => (
              <li key={step.n} className="border-t border-border py-8 pr-8">
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

      <section>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold">Siap briefing?</h2>
            <p className="mt-3 max-w-[48ch] text-muted-foreground">
              Pembayaran 50% DP setelah kontrak, 50% pelunasan setelah UAT — sebelum
              domain produksi. Metode: transfer bank atau e-wallet.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/create">Buat Situs</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
