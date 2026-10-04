import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as COLLECTIONS } from "./router-CLvMFSC0.mjs";
import { t as ModeBadge } from "./mode-badge-B1i7r90Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tema-BVcy3d8Y.js
var import_jsx_runtime = require_jsx_runtime();
function TemaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "Indeks visual"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
				children: "Tema"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[52ch] text-muted-foreground",
				children: "26 aksen, tiga mode. Dark untuk sistem yang tinggal di malam. Light untuk yang harus dibaca lama. Adaptive untuk yang harus keduanya."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
				children: COLLECTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/kategori/$letter",
					params: { letter: c.letter },
					className: "group overflow-hidden rounded-[var(--radius-lg)] border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-20",
						style: { background: c.accent }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: [
									c.letter.toUpperCase(),
									" · ",
									c.industry
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-lg font-semibold",
								children: c.theme
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeBadge, {
								mode: c.mode,
								className: "mt-2 block"
							})
						]
					})]
				}, c.letter))
			})
		]
	});
}
//#endregion
export { TemaPage as component };
