import { i as __toESM } from "../_runtime.mjs";
import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as cn, a as Button, c as FAQ, d as SITE, i as Route$7, p as COLLECTIONS, s as EXCLUDED } from "./router-CLvMFSC0.mjs";
import { t as Input } from "./input-wh9sfmgP.mjs";
import { t as PACKAGES } from "./packages-C1JVdSBf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/create-BOwDaK-1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-[var(--radius-md)] border border-border bg-muted px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/70", "transition-[border-color,box-shadow] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground", className),
		...props
	});
}
var KEY = "nclodev.briefs.v1";
function loadBriefs() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveBrief(input) {
	const brief = {
		...input,
		id: `NNX-${Date.now().toString(36).toUpperCase()}`,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	const next = [brief, ...loadBriefs()].slice(0, 20);
	localStorage.setItem(KEY, JSON.stringify(next));
	return brief;
}
function formatBrief(b) {
	return [
		`Brief ${b.id}`,
		`Nama: ${b.name}`,
		`Kontak: ${b.contact}`,
		`Bisnis: ${b.business}`,
		`Paket: ${b.packageId || "belum dipilih"}`,
		`Sistem: ${b.system || "—"}`,
		`Tujuan: ${b.goal}`,
		`Deadline: ${b.deadline || "—"}`,
		b.notes ? `Catatan: ${b.notes}` : ""
	].filter(Boolean).join("\n");
}
var GOALS = [
	"Landing / satu tawaran",
	"Company profile",
	"Portofolio",
	"Toko online",
	"Web app / dashboard",
	"Belum yakin"
];
function BriefForm({ defaultPackage, defaultSystem }) {
	const [sent, setSent] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const brief = saveBrief({
			name: String(data.get("name") || "").trim(),
			contact: String(data.get("contact") || "").trim(),
			business: String(data.get("business") || "").trim(),
			packageId: String(data.get("packageId") || ""),
			system: String(data.get("system") || ""),
			goal: String(data.get("goal") || ""),
			deadline: String(data.get("deadline") || "").trim(),
			notes: String(data.get("notes") || "").trim()
		});
		setSent(brief);
	}
	if (sent) {
		const text = formatBrief(sent);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[var(--radius-lg)] border border-border bg-card p-6 sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: ["Brief ", sent.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-2xl font-semibold",
					children: "Tersimpan di perangkat ini."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm leading-relaxed text-muted-foreground",
					children: [
						"Kirim teks di bawah ke Instagram @_n.clo atau GitHub. ",
						SITE.response,
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "mt-6 overflow-x-auto rounded-[var(--radius-md)] bg-muted p-4 font-mono text-xs leading-relaxed",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: async () => {
							await navigator.clipboard.writeText(text);
							setCopied(true);
						},
						children: copied ? "Tersalin" : "Salin brief"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.instagram,
							target: "_blank",
							rel: "noreferrer",
							children: "Buka Instagram"
						})
					})]
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Nama",
					htmlFor: "name",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "name",
						name: "name",
						required: true,
						autoComplete: "name"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "WhatsApp atau email",
					htmlFor: "contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "contact",
						name: "contact",
						required: true,
						autoComplete: "tel"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Bisnis / merek",
				htmlFor: "business",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "business",
					name: "business",
					required: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Paket",
					htmlFor: "packageId",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						id: "packageId",
						name: "packageId",
						defaultValue: defaultPackage || "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Belum yakin — bantu pilih"
						}), PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: p.id,
							children: p.name
						}, p.id))]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Sistem visual (opsional)",
					htmlFor: "system",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						id: "system",
						name: "system",
						defaultValue: defaultSystem || "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "Tidak dipilih"
						}), COLLECTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
							value: c.letter,
							children: [
								c.letter.toUpperCase(),
								" · ",
								c.theme,
								" · ",
								c.industry
							]
						}, c.letter))]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Tujuan situs",
				htmlFor: "goal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					id: "goal",
					name: "goal",
					defaultValue: GOALS[0],
					children: GOALS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: g,
						children: g
					}, g))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Deadline (jika ada)",
				htmlFor: "deadline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "deadline",
					name: "deadline",
					placeholder: "Contoh: launching 1 Des"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Catatan",
				htmlFor: "notes",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "notes",
					name: "notes",
					placeholder: "Referensi, kompetitor, hal yang harus ada, hal yang tidak."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				size: "lg",
				children: "Kirim brief"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: [
					"Brief disimpan di browser Anda. Kirim salinannya lewat Instagram agar kami bisa membalas. ",
					SITE.hours,
					"."
				]
			})
		]
	});
}
function Field({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
function Select({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		className: "h-11 w-full rounded-[var(--radius-sm)] border border-border bg-muted px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		...props
	});
}
function CreatePage() {
	const search = Route$7.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: ".analysis · Buat Situs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,6vw,4.8rem)] font-semibold leading-[0.95]",
						children: "Website yang benar-benar bekerja."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Bukan template. Bukan drag-and-drop. Dibangun dari nol dengan kode bersih, desain yang mencerminkan brand Anda, dan performa yang diuji — dari Discovery Call sampai situs live."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Paket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Pilih tangga yang cukup."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 lg:grid-cols-3",
						children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex flex-col rounded-[var(--radius-xl)] border border-border bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] tracking-[0.16em] text-muted-foreground",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold",
									children: p.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: p.fit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em]",
									children: p.pages
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-2 text-sm text-muted-foreground",
									children: p.includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-xs text-muted-foreground",
									children: [
										"Revisi ",
										p.revisions,
										". Support ",
										p.support,
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									className: "mt-8",
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#brief",
										children: p.name
									})
								})
							]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-[62ch] text-sm text-muted-foreground",
						children: "Budget terbatas? Mulai CONCEPT. Kodenya tetap milik Anda dan bisa naik ke ARCHITECTURE atau REALIZATION di proyek berikutnya."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			id: "brief",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Discovery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Satu brief. Tanpa komitmen."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "Isi yang Anda tahu. Yang belum, biarkan kosong. Kami balas lewat Instagram atau kontak yang Anda tulis — biasanya 1–3 jam pada jam kerja."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "ghost",
						className: "mt-6 px-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: "Baca kebijakan studio →"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, {
					defaultPackage: search.paket,
					defaultSystem: search.sistem
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Tidak termasuk"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Ekspektasi yang tepat dari awal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: EXCLUDED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: item.body
							})]
						}, item.title))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "FAQ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl font-semibold",
					children: "Yang biasanya ditanya."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer list-none font-display text-lg font-semibold [&::-webkit-details-marker]:hidden",
							children: item.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-[64ch] text-sm leading-relaxed text-muted-foreground",
							children: item.a
						})]
					}, item.q))
				})
			]
		}) })
	] });
}
//#endregion
export { CreatePage as component };
