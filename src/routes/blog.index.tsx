import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS } from "@/lib/journal";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [{ title: "Jurnal · nclodev" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="mx-auto max-w-[860px] px-4 py-16 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        Jurnal
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        Catatan studio
      </h1>
      <p className="mt-4 max-w-[48ch] text-muted-foreground">
        Sistem, proses, dan cara kami bekerja dari Makassar. Bukan changelog produk.
      </p>
      <ul className="mt-12 divide-y divide-border border-y border-border">
        {POSTS.map((post) => (
          <li key={post.slug} className="py-8">
            <p className="font-mono text-[11px] text-muted-foreground">
              {post.dateLabel} · {post.tags.join(" · ")}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              <Link to="/blog/$slug" params={{ slug: post.slug }}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
