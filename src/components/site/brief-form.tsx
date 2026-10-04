import { useState, type FormEvent, type ReactNode, type SelectHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/packages";
import { COLLECTIONS } from "@/lib/collections";
import { formatBrief, saveBrief, type Brief } from "@/lib/briefs";
import { SITE } from "@/lib/site";

const GOALS = [
  "Landing / satu tawaran",
  "Company profile",
  "Portofolio",
  "Toko online",
  "Web app / dashboard",
  "Belum yakin",
];

export function BriefForm({
  defaultPackage,
  defaultSystem,
}: {
  defaultPackage?: string;
  defaultSystem?: string;
}) {
  const [sent, setSent] = useState<Brief | null>(null);
  const [copied, setCopied] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const brief = saveBrief({
      name: String(data.get("name") || "").trim(),
      contact: String(data.get("contact") || "").trim(),
      business: String(data.get("business") || "").trim(),
      packageId: String(data.get("packageId") || ""),
      system: String(data.get("system") || ""),
      goal: String(data.get("goal") || ""),
      deadline: String(data.get("deadline") || "").trim(),
      notes: String(data.get("notes") || "").trim(),
    });
    setSent(brief);
  }

  if (sent) {
    const text = formatBrief(sent);
    return (
      <div className="rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Brief {sent.id}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold">Tersimpan di perangkat ini.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Kirim teks di bawah ke Instagram @_n.clo atau GitHub. {SITE.response}.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-[var(--radius-md)] bg-muted p-4 font-mono text-xs leading-relaxed">
          {text}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={async () => {
              await navigator.clipboard.writeText(text);
              setCopied(true);
            }}
          >
            {copied ? "Tersalin" : "Salin brief"}
          </Button>
          <Button asChild variant="outline">
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              Buka Instagram
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nama" htmlFor="name">
          <Input id="name" name="name" required autoComplete="name" />
        </Field>
        <Field label="WhatsApp atau email" htmlFor="contact">
          <Input id="contact" name="contact" required autoComplete="tel" />
        </Field>
      </div>
      <Field label="Bisnis / merek" htmlFor="business">
        <Input id="business" name="business" required />
      </Field>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Paket" htmlFor="packageId">
          <Select id="packageId" name="packageId" defaultValue={defaultPackage || ""}>
            <option value="">Belum yakin — bantu pilih</option>
            {PACKAGES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Sistem visual (opsional)" htmlFor="system">
          <Select id="system" name="system" defaultValue={defaultSystem || ""}>
            <option value="">Tidak dipilih</option>
            {COLLECTIONS.map((c) => (
              <option key={c.letter} value={c.letter}>
                {c.letter.toUpperCase()} · {c.theme} · {c.industry}
              </option>
            ))}
          </Select>
        </Field>
      </div>
      <Field label="Tujuan situs" htmlFor="goal">
        <Select id="goal" name="goal" defaultValue={GOALS[0]}>
          {GOALS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Deadline (jika ada)" htmlFor="deadline">
        <Input id="deadline" name="deadline" placeholder="Contoh: launching 1 Des" />
      </Field>
      <Field label="Catatan" htmlFor="notes">
        <Textarea
          id="notes"
          name="notes"
          placeholder="Referensi, kompetitor, hal yang harus ada, hal yang tidak."
        />
      </Field>
      <Button type="submit" size="lg">
        Kirim brief
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Brief disimpan di browser Anda. Kirim salinannya lewat Instagram agar kami
        bisa membalas. {SITE.hours}.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

function Select({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className="h-11 w-full rounded-[var(--radius-sm)] border border-border bg-muted px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      {...props}
    />
  );
}
