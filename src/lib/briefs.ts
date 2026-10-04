const KEY = "nclodev.briefs.v1";

export type Brief = {
  id: string;
  createdAt: string;
  name: string;
  contact: string;
  business: string;
  packageId: string;
  system: string;
  goal: string;
  deadline: string;
  notes: string;
};

export function loadBriefs(): Brief[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Brief[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBrief(input: Omit<Brief, "id" | "createdAt">): Brief {
  const brief: Brief = {
    ...input,
    id: `NNX-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
  };
  const next = [brief, ...loadBriefs()].slice(0, 20);
  localStorage.setItem(KEY, JSON.stringify(next));
  return brief;
}

export function formatBrief(b: Brief) {
  return [
    `Brief ${b.id}`,
    `Nama: ${b.name}`,
    `Kontak: ${b.contact}`,
    `Bisnis: ${b.business}`,
    `Paket: ${b.packageId || "belum dipilih"}`,
    `Sistem: ${b.system || "—"}`,
    `Tujuan: ${b.goal}`,
    `Deadline: ${b.deadline || "—"}`,
    b.notes ? `Catatan: ${b.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}
