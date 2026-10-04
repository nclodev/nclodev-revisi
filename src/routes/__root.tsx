import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/shell";
import appCss from "../styles.css?url";

const APP_NAME = "NNX .root | nclodev";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "nclodev — studio hybrid di Makassar. Situs kustom, SaaS, web app, dan toko, dibangun dari nol.",
      },
      { name: "theme-color", content: "#0c0c0b" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400&family=Syne:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootDocument,
  notFoundComponent: () => (
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
  ),
});

function RootDocument() {
  return (
    <html lang="id" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <SiteShell>
            <Outlet />
          </SiteShell>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
