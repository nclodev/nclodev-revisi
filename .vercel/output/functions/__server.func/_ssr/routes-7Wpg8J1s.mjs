import { q as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as Button, d as SITE, f as WHY, h as getCollection, l as PROCESS, m as FEATURED, p as COLLECTIONS, u as SERVICES, v as POSTS } from "./router-CLvMFSC0.mjs";
import { t as PACKAGES } from "./packages-C1JVdSBf.mjs";
import { t as SystemFrame } from "./system-frame-D11Ec8uT.mjs";
import { t as ModeBadge } from "./mode-badge-B1i7r90Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-7Wpg8J1s.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = FEATURED.map((id) => getCollection(id)).filter((c) => Boolean(c));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 grid-fade opacity-80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-[1400px] gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,1fr)_220px] lg:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
						children: [SITE.studio, " ()"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 max-w-[14ch] font-display text-[clamp(2.6rem,7vw,5.6rem)] font-semibold leading-[0.95]",
						children: [
							"Sistem dulu.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Halaman belakangan."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-[46ch] text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: [
							"Studio hybrid di ",
							SITE.city,
							". Situs kustom, SaaS, web app, dan toko — dirancang sebagai sistem visual, ditulis sebagai kode milik Anda, bukan sebagai sewa template."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/create",
								children: ["Buat Situs", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									children: "→"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/kategori",
								children: "26 sistem"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: SITE.axes.join("  /  ")
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex lg:flex-col lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-x-6 gap-y-1.5",
						children: COLLECTIONS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kategori/$letter",
							params: { letter: c.letter },
							className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-150 hover:text-foreground",
							children: [c.letter, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 opacity-40",
								children: c.theme.slice(0, 3)
							})]
						}, c.letter))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-[11px] leading-relaxed text-muted-foreground",
						children: [
							SITE.city,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							SITE.hours
						]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1400px] sm:grid-cols-2 lg:grid-cols-4",
				children: SERVICES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: i % 2 === 0 ? "border-b border-border px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r" : "border-b border-border px-4 py-8 sm:px-6 lg:border-b-0 lg:border-r last:lg:border-r-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-muted-foreground",
							children: s.code
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-2xl font-semibold",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: s.body
						})
					]
				}, s.code))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Katalog"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: "Enam bahasa visual"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kategori",
						className: "inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground",
						children: ["Semua A–Z", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: featured.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kategori/$letter",
						params: { letter: c.letter },
						className: "group rounded-[calc(var(--radius-lg)+8px)] p-2 transition-colors duration-150 hover:bg-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SystemFrame, { collection: c }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between px-2 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									c.letter.toUpperCase(),
									" / ",
									c.industry
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeBadge, { mode: c.mode })]
						})]
					}, c.letter))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border bg-paper text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50",
						children: "Paket"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 max-w-[18ch] font-display text-3xl font-semibold sm:text-4xl",
						children: "Tiga tangga. Bukan seratus add-on."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-px overflow-hidden rounded-[var(--radius-xl)] bg-ink/10 md:grid-cols-3",
						children: PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-paper p-6 sm:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[11px] tracking-[0.16em]",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold",
									children: p.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-ink/70",
									children: p.fit
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/50",
									children: p.pages
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/create",
									search: { paket: p.id },
									className: "mt-8 inline-flex items-center gap-1 text-sm font-medium",
									children: [
										"Ambil ",
										p.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5" })
									]
								})
							]
						}, p.id))
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
						children: "Alur"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: "Dari call sampai live"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3",
						children: PROCESS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-border py-8 pr-6 lg:border-r lg:px-6 lg:[&:nth-child(3n)]:border-r-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-mono text-[11px] text-muted-foreground",
									children: [
										step.n,
										" · ",
										step.time
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-semibold",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: step.body
								})
							]
						}, step.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Kenapa NNX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold sm:text-4xl",
						children: "Kode milik Anda. Desain sebelum commit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/studio",
							children: "Baca studio"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-6 sm:grid-cols-2",
					children: WHY.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-semibold",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted-foreground",
						children: item.body
					})] }, item.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-4 py-16 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "Jurnal"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-semibold",
						children: "Catatan studio"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground",
						children: "Semua"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-border border-y border-border",
					children: POSTS.slice(0, 3).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "grid gap-2 py-6 sm:grid-cols-[140px_1fr_auto] sm:items-baseline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: post.dateLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-semibold",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "hidden size-4 text-muted-foreground sm:block" })
						]
					}, post.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-20 sm:px-6 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Discovery Call · gratis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-[16ch] font-display text-4xl font-semibold sm:text-5xl",
					children: "Satu pesan. Mulai dari sini."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-[48ch] text-muted-foreground",
					children: "Tanpa komitmen. Kami bantu tentukan scope yang cukup — lalu proposal yang bisa dibaca, bukan yang bisa ditafsirkan."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				size: "lg",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/create",
					children: "Mulai Discovery Call"
				})
			})]
		}) })
	] });
}
//#endregion
export { Home as component };
