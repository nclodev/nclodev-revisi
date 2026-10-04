import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn } from "./router-CLvMFSC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/system-frame-D11Ec8uT.js
var import_jsx_runtime = require_jsx_runtime();
function SystemFrame({ collection, className }) {
	const line = `${collection.fg}22`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-[var(--radius-lg)]", className),
		style: {
			background: collection.bg,
			color: collection.fg
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-3",
			style: { boxShadow: `0 1px 0 ${line}` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono text-[10px] tracking-[0.18em] uppercase opacity-70",
				children: [
					collection.letter,
					". ",
					collection.theme
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "size-1.5 rounded-full",
				style: { background: collection.accent }
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-4 py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.22em] opacity-50",
					children: collection.industry
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display mt-2 text-2xl font-semibold tracking-tight",
					children: collection.theme
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-[28ch] text-xs leading-relaxed opacity-70",
					children: collection.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-3 gap-2",
					children: [
						0,
						1,
						2
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-14 rounded-[var(--radius-sm)]",
						style: { background: i === 1 ? collection.accent : `${collection.fg}14` }
					}, i))
				})
			]
		})]
	});
}
//#endregion
export { SystemFrame as t };
