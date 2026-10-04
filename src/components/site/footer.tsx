import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-mono text-sm">{SITE.studio}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Studio hybrid di {SITE.city}. Situs kustom, SaaS, web app, dan toko —
            dibangun dari nol, diserahkan utuh.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Index
          </p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-foreground/90 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/create" className="text-sm text-foreground/90 hover:text-accent">
                Buat Situs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            Kanal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Instagram @_n.clo
              </a>
            </li>
            <li>
              <a
                href={SITE.threads}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                Threads
              </a>
            </li>
            <li>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                GitHub /nclodev
              </a>
            </li>
          </ul>
          <p className="mt-6 font-mono text-[11px] leading-relaxed text-muted-foreground">
            {SITE.hours}
            <br />
            {SITE.response}
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>
            {SITE.mark} · {SITE.tagline}
          </span>
          <span>{SITE.axes.join(" / ")}</span>
        </div>
      </div>
    </footer>
  );
}
