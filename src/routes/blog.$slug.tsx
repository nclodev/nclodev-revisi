import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, POSTS } from "@/lib/journal";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.post.title} · nclodev` : "Jurnal" }],
  }),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="mx-auto max-w-[720px] px-4 py-16 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <Link to="/blog" className="hover:text-foreground">
          Jurnal
        </Link>
        {" · "}
        {post.dateLabel}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
      <div className="mt-10 space-y-5 text-[1.05rem] leading-[1.65]">
        {post.body.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      {others.length ? (
        <aside className="mt-16 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Lanjut baca
          </p>
          <ul className="mt-4 space-y-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="font-display text-xl font-semibold hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </main>
  );
}
