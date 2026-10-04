import { q as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as cn } from "./router-CLvMFSC0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/input-wh9sfmgP.js
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-[var(--radius-sm)] border border-border bg-muted px-3 text-sm text-foreground placeholder:text-muted-foreground/70", "transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
//#endregion
export { Input as t };
