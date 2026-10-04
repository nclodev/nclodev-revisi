import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2, v as POSTS } from "./router-CLvMFSC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-DF63ECg6.js
var import_jsx_runtime = require_jsx_runtime();
function PostPage() {
	const { post } = Route$2.useLoaderData();
	const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[720px] px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "hover:text-foreground",
						children: "Jurnal"
					}),
					" · ",
					post.dateLabel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 font-display text-4xl font-semibold sm:text-5xl",
				children: post.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted-foreground",
				children: post.excerpt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-5 text-[1.05rem] leading-[1.65]",
				children: post.body.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
			}),
			others.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "mt-16 border-t border-border pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Lanjut baca"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-3",
					children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog/$slug",
						params: { slug: p.slug },
						className: "font-display text-xl font-semibold hover:text-accent",
						children: p.title
					}) }, p.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { PostPage as component };
