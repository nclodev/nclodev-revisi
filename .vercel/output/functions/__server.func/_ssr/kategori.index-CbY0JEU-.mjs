import { i as __toESM } from "../_runtime.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as cn, p as COLLECTIONS } from "./router-CLvMFSC0.mjs";
import { t as Input } from "./input-wh9sfmgP.mjs";
import { t as ModeBadge } from "./mode-badge-B1i7r90Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kategori.index-CbY0JEU-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "Semua"
	},
	{
		id: "dark",
		label: "Dark"
	},
	{
		id: "light",
		label: "Light"
	},
	{
		id: "adaptive",
		label: "Adaptive"
	}
];
function KategoriPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [mode, setMode] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return COLLECTIONS.filter((c) => {
			if (mode !== "all" && c.mode !== mode) return false;
			if (!query) return true;
			return c.theme.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query) || c.letter.includes(query) || c.tagline.toLowerCase().includes(query);
		});
	}, [q, mode]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
				children: "26 sistem"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl font-semibold sm:text-5xl",
				children: "Kategori"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-[52ch] text-muted-foreground",
				children: "Bahasa visual per industri. Bukan template siap pakai — arah karakter sebelum kami merancang milik Anda."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(f.id),
						className: cn("h-9 rounded-full px-4 font-mono text-[11px] uppercase tracking-[0.14em]", mode === f.id ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"),
						children: f.label
					}, f.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Cari industri atau tema",
					className: "sm:max-w-xs",
					"aria-label": "Cari koleksi"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 divide-y divide-border border-y border-border",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/kategori/$letter",
					params: { letter: c.letter },
					className: "grid grid-cols-[48px_1fr] items-baseline gap-4 py-5 sm:grid-cols-[64px_160px_1fr_auto] sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] text-muted-foreground",
							children: c.letter.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-sm tracking-widest",
							children: c.theme
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "col-span-2 text-sm text-muted-foreground sm:col-span-1",
							children: [
								c.industry,
								" — ",
								c.tagline
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden items-center gap-4 sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-2.5 rounded-full",
								style: { background: c.accent },
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeBadge, { mode: c.mode })]
						})
					]
				}) }, c.letter))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-12 text-sm text-muted-foreground",
				children: "Tidak ada yang cocok."
			}) : null
		]
	});
}
//#endregion
export { KategoriPage as component };
