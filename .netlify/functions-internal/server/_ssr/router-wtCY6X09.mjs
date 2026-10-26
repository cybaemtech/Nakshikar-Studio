import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as createFileRoute, j as useRouter, m as Link, p as createRootRouteWithContext, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { A as Sparkles, C as Hammer, D as Brush, E as Building2, O as ArrowUpRight, S as Image, T as Facebook, _ as Mail, a as Printer, b as Landmark, c as PhoneCall, d as Paintbrush, f as Monitor, g as MapPin, h as Medal, i as Quote, j as Layers, k as ArrowRight, l as PencilRuler, m as Menu, n as Users, o as Plus, p as Minus, r as Settings, s as Phone, t as X, u as Palette, v as Lightbulb, w as Frame, x as Instagram, y as LayoutGrid } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-wtCY6X09.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BUBxJlBE.css";
var logo_default = "/assets/logo-BgkOD3Vc.png";
var NAV = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Services",
		href: "/services"
	},
	{
		label: "Our Work",
		href: "/work"
	},
	{
		label: "Contact",
		href: "/contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-all duration-500 ${scrolled ? "glass rounded-full shadow-soft border border-[color:var(--gold)]/20" : ""}`,
			style: scrolled ? {
				paddingTop: 10,
				paddingBottom: 10
			} : {},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "flex items-center gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_default,
					alt: "Nakshikar's Studio",
					className: "h-9 sm:h-11 w-auto"
				})
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden lg:flex items-center gap-9",
				children: NAV.map((n) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Link, {
					to: n.href,
					className: "group relative text-[13px] tracking-[0.18em] uppercase font-medium text-[color:var(--royal-deep)]",
					activeProps: { className: "text-gradient-gold" },
					children: [n.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 -bottom-1 h-px w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" })]
				}, n.href))
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/contact",
				className: "hidden md:inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-medium shadow-soft hover:scale-[1.03] transition-transform",
				children: ["Commission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Menu",
				onClick: () => setOpen((v) => !v),
				className: "lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full glass",
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
			})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "lg:hidden mx-5 mt-3 rounded-3xl glass p-6 flex flex-col gap-4",
				children: [NAV.map((n) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(Link, {
					to: n.href,
					onClick: () => setOpen(false),
					className: "text-sm tracking-[0.18em] uppercase font-medium",
					activeProps: { className: "text-gradient-gold" },
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "rounded-full bg-royal-gradient text-white px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-center",
					children: "Commission"
				})]
			})
		})]
	});
}
var painting_default = "/assets/painting-DC7uUdEP.jpg";
var mural_default = "/assets/mural-Ba71_6dZ.jpg";
var sculpture_default = "/assets/sculpture-gPyDcOsK.jpg";
var signage_default = "/assets/signage-CPYurZhO.jpg";
var print_default = "/assets/print-DR6jB6Ku.jpg";
var graphic_default = "/assets/graphic-ByGSet1k.jpg";
var uiux_default = "/assets/uiux-Cso-Dmur.jpg";
var wallart_default = "/assets/wallart-DDoojwUe.jpg";
function Footer() {
	const gallery = [
		painting_default,
		mural_default,
		sculpture_default,
		signage_default,
		print_default,
		graphic_default,
		uiux_default,
		wallart_default
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[color:var(--charcoal)] text-white relative overflow-hidden mt-auto",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-mesh opacity-15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-12",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-6",
					children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Nakshikar's Studio",
						className: "h-12 w-auto bg-white rounded-xl p-2"
					}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70 leading-relaxed max-w-md",
						children: "A premium art & design studio crafting heirloom paintings, murals, sculptures, signages, branding and digital experiences."
					}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: [Instagram, Facebook].map((Icon, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("a", {
							href: "#",
							className: "h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/15 flex items-center justify-center transition-colors",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
					]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3 text-sm text-white/80",
						children: NAV.map((n) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("li", {
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: n.href,
								className: "hover:text-[color:var(--gold-light)] transition-colors",
								children: n.label
							})
						}, n.href))
					})]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-4",
					children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5",
						children: "From the studio"
					}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-2 mb-6",
						children: gallery.map((g, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
							className: "aspect-square rounded-lg overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g,
								alt: "",
								loading: "lazy",
								className: "h-full w-full object-cover hover:scale-110 transition-transform duration-700"
							})
						}, i))
					}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => e.preventDefault(),
						className: "flex items-center gap-2 rounded-full glass-dark p-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Subscribe to our journal",
							className: "bg-transparent px-4 py-2 text-sm outline-none flex-1 text-white placeholder:text-white/40"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full bg-gold-gradient text-white px-4 py-2 text-[11px] tracking-[0.2em] uppercase",
							children: "Join"
						})]
					})
					]
				})
				]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline-gold mt-14 mb-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Nakshikar's Studio. All rights reserved."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-devanagari text-[color:var(--gold-light)]",
					children: "जिथे नक्षी जन्मा येते."
				})]
			})
			]
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-7xl font-bold text-foreground",
				children: "404"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-xl font-semibold text-foreground",
				children: "Page not found"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "The page you're looking for doesn't exist or has been moved."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
					children: "Go home"
				})
			})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold tracking-tight text-foreground",
				children: "This page didn't load"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Something went wrong on our end. You can try refreshing or head back home."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
					children: "Go home"
				})]
			})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nakshikar's Studio — Premium Art & Design Studio" },
			{
				name: "description",
				content: "Nakshikar's Studio crafts paintings, murals, sculptures, signages, branding and digital design for residential, commercial and luxury spaces."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Tiro+Devanagari+Marathi&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col min-h-screen",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-grow",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var hero_mural_default = "/assets/hero-mural-DkzZoJ3-.jpg";
var portrait_default = "/assets/portrait-Eg2AO_r4.jpg";
var install_default = "/assets/install-CMUggjAg.jpg";
var stone_default = "/assets/stone-BiMYsu7d.jpg";
var abstract_default = "/assets/abstract-Cctt-rjb.jpg";
function SectionEyebrow({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4 mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-gold-gradient" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] tracking-[0.32em] uppercase text-[color:var(--gold-deep)] font-semibold",
			children: text
		})]
	});
}
var Route$4 = createFileRoute("/work")({ head: () => ({ meta: [{ title: "Our Work | Nakshikar's Studio" }] }) }).update({ component: Work });
var FILTERS = [
	"All",
	"Murals",
	"Paintings",
	"Sculptures",
	"Signages",
	"Branding",
	"Digital"
];
var WORKS = [
	{
		src: hero_mural_default,
		cat: "Murals",
		title: "Royal Peacock Mural",
		place: "Pune Residence"
	},
	{
		src: sculpture_default,
		cat: "Sculptures",
		title: "Golden Dancer",
		place: "Mumbai Gallery"
	},
	{
		src: signage_default,
		cat: "Signages",
		title: "Boutique Facade",
		place: "Bandra"
	},
	{
		src: portrait_default,
		cat: "Paintings",
		title: "Heritage Portrait",
		place: "Private Collection"
	},
	{
		src: mural_default,
		cat: "Murals",
		title: "Hotel Lobby Mural",
		place: "Goa Resort"
	},
	{
		src: wallart_default,
		cat: "Paintings",
		title: "Geometry in Gold",
		place: "Lounge, Pune"
	},
	{
		src: install_default,
		cat: "Murals",
		title: "Ceiling Fresco",
		place: "Heritage Hotel"
	},
	{
		src: stone_default,
		cat: "Sculptures",
		title: "Ganesha Stone",
		place: "Courtyard Install"
	},
	{
		src: graphic_default,
		cat: "Branding",
		title: "Identity System",
		place: "Luxe Hospitality"
	},
	{
		src: print_default,
		cat: "Branding",
		title: "Brand Collateral",
		place: "Boutique Studio"
	},
	{
		src: uiux_default,
		cat: "Digital",
		title: "Website Design",
		place: "Art Marketplace"
	},
	{
		src: abstract_default,
		cat: "Paintings",
		title: "Indigo & Gold",
		place: "Corporate HQ"
	}
];
function Work() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [selectedImage, setSelectedImage] = (0, import_react.useState)(null);
	const filtered = WORKS.filter((w) => filter === "All" || w.cat === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground min-h-screen pt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pt-8 pb-20 sm:pt-12 sm:pb-28 bg-[color:var(--cream)] relative overflow-hidden min-h-[calc(100vh-6rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-40 h-96 w-96 rounded-full bg-royal-gradient opacity-15 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1500px] px-[8%] relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Our Portfolio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[1] tracking-tight",
							children: [
								"A gallery of",
								" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gradient-gold",
									children: "our finest"
								}),
								" ",
								"work."
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: FILTERS.map((f) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f),
							className: `px-4 py-2 rounded-full text-[11px] tracking-[0.22em] uppercase font-medium transition-all ${filter === f ? "bg-royal-gradient text-white shadow-soft" : "bg-white border border-[color:var(--gold)]/30 text-[color:var(--royal-deep)] hover:border-[color:var(--gold)]"}`,
							children: f
						}, f))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]",
					children: filtered.map((w, i) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(motion.figure, {
						initial: {
							opacity: 0,
							y: 40
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: i % 3 * .07
						},
						onClick: () => setSelectedImage(w),
						className: "group relative mb-5 break-inside-avoid rounded-3xl overflow-hidden bg-white shadow-soft cursor-zoom-in",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: w.src,
								alt: w.title,
								loading: "lazy",
								className: "w-full h-auto object-cover transition-transform duration-[1400ms] group-hover:scale-[1.08]"
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/85 via-[color:var(--charcoal)]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white",
								children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block px-3 py-1 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-semibold mb-3",
									children: w.cat
								}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl leading-tight",
									children: w.title
								}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.18em] uppercase opacity-80 mt-1",
									children: w.place
								})
								]
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-[color:var(--charcoal)]" })
							})
							]
						})
					}, `${filter}-${i}`))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			children: selectedImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				onClick: () => setSelectedImage(null),
				className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10 cursor-zoom-out",
				children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedImage(null),
					className: "absolute top-6 right-6 h-12 w-12 rounded-full glass bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					initial: {
						scale: .95,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					exit: {
						scale: .95,
						opacity: 0
					},
					transition: { duration: .3 },
					src: selectedImage.src,
					alt: selectedImage.title,
					className: "max-h-[90vh] max-w-full rounded-xl object-contain cursor-default",
					onClick: (e) => e.stopPropagation()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: 20
					},
					transition: { delay: .2 },
					className: "absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white cursor-default pointer-events-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block px-3 py-1 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-semibold mb-3",
						children: selectedImage.cat
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl sm:text-4xl leading-tight drop-shadow-lg",
						children: selectedImage.title
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tracking-[0.18em] uppercase opacity-90 mt-1 drop-shadow-md",
						children: selectedImage.place
					})
					]
				})
				]
			})
		})]
	});
}
var Route$3 = createFileRoute("/services")({ head: () => ({ meta: [{ title: "Services | Nakshikar's Studio" }] }) }).update({ component: Services });
var SERVICES = [
	{
		icon: Brush,
		title: "Paintings",
		img: portrait_default,
		items: [
			"Realistic Portraits",
			"Abstract Canvas",
			"Wall Art",
			"Custom Commissions"
		]
	},
	{
		icon: Palette,
		title: "Artworks & Murals",
		img: mural_default,
		items: [
			"Hand-painted Murals",
			"Nameplates",
			"Gift Articles",
			"Interior Artwork"
		]
	},
	{
		icon: Frame,
		title: "Signages",
		img: signage_default,
		items: [
			"LED Signage",
			"3D Branding",
			"Informative Boards",
			"Building Names"
		]
	},
	{
		icon: Hammer,
		title: "Sculptures",
		img: stone_default,
		items: [
			"Fiber",
			"Metal",
			"Stone",
			"Statues"
		]
	},
	{
		icon: Printer,
		title: "Print Solutions",
		img: print_default,
		items: [
			"UV Printing",
			"Eco-Solvent",
			"One Way Vision",
			"Custom Wallpapers"
		]
	},
	{
		icon: Sparkles,
		title: "Graphic Design",
		img: graphic_default,
		items: [
			"Logo & Identity",
			"Brochures & Profiles",
			"Packaging",
			"Posters & Menus"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background text-foreground min-h-screen pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white min-h-[calc(100vh-6rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Our Services" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight max-w-4xl mx-auto",
						children: [
							"From sketch to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "installation"
							}),
							" —",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"a complete creative solution."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: SERVICES.map((s, i) => {
						const Icon = s.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							initial: {
								opacity: 0,
								y: 50
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .7,
								delay: i % 4 * .08
							},
							className: "group relative rounded-3xl overflow-hidden bg-[color:var(--cream)] border border-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-56 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: s.img,
									alt: s.title,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
								}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/80 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 h-11 w-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-white" })
								})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl mb-3 text-[color:var(--charcoal)]",
									children: s.title
								}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5 text-sm text-muted-foreground",
									children: s.items.map((it) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-[color:var(--gold)]" }),
											" ",
											it
										]
									}, it))
								}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium",
									children: ["Discover", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })]
								})
								]
							})]
						}, s.title);
					})
				})]
			})
		})
	});
}
var studio_default = "/assets/studio-DyHFB40t.jpg";
var Route$2 = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "Contact | Nakshikar's Studio" }] }) }).update({ component: Contact });
function Field({ label, type = "text", placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			placeholder,
			className: "mt-2 w-full rounded-2xl bg-white border border-[color:var(--gold)]/30 px-5 py-4 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-4 focus:ring-[color:var(--gold)]/15 transition-all"
		})]
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-background text-foreground min-h-screen pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white relative overflow-hidden min-h-[calc(100vh-6rem)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Get in touch" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1] tracking-tight",
						children: [
							"Let's create something",
							" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "unforgettable."
							})
						]
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: "Tell us about your space, your idea, or your brand. We'll respond within one working day."
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: [
							{
								icon: Mail,
								label: "studio@nakshikars.com"
							},
							{
								icon: Phone,
								label: "+91 98765 43210"
							},
							{
								icon: MapPin,
								label: "Nakshikar's Studio, Pune, Maharashtra, India"
							}
						].map(({ icon: Icon, label }) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-[color:var(--gold)]/30 p-4 bg-[color:var(--cream)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-11 w-11 rounded-full bg-royal-gradient flex items-center justify-center text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: label
							})]
						}, label))
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-3xl overflow-hidden border border-[color:var(--gold)]/30 h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: studio_default,
							alt: "Studio",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => {
						e.preventDefault();
					},
					className: "lg:col-span-7 rounded-3xl bg-[color:var(--cream)] p-7 sm:p-10 border border-[color:var(--gold)]/25 space-y-5 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Your name",
							placeholder: "Full name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							placeholder: "you@email.com"
						})]
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone",
							placeholder: "+91 ..."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Service of interest",
							placeholder: "Mural, Sculpture, Branding..."
						})]
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-medium",
							children: "Project details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 5,
							placeholder: "Tell us about your space and vision...",
							className: "mt-2 w-full rounded-2xl bg-white border border-[color:var(--gold)]/30 px-5 py-4 text-sm outline-none focus:border-[color:var(--gold)] focus:ring-4 focus:ring-[color:var(--gold)]/15 transition-all"
						})]
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						className: "inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium shadow-luxe hover:scale-[1.02] transition-transform",
						children: ["Send Enquiry ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
					})
					]
				})]
			})
		})
	});
}
var aboutheader_default = "/assets/aboutheader-DSVrMUsv.png";
var about_footer_default = "/assets/about%20footer-B8m65csL.png";
var sketch_default = "/assets/sketch-CAFAJGEk.jpg";
var Route$1 = createFileRoute("/about")({ head: () => ({ meta: [{ title: "About Us | Nakshikar's Studio" }] }) }).update({ component: AboutPage });
function AboutHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white min-h-[85vh] flex items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 z-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: aboutheader_default,
				alt: "Paint brushes",
				className: "w-full h-full object-cover object-top"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl w-full px-5 sm:px-8 relative z-10 grid md:grid-cols-2 mt-4 lg:mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 max-w-[650px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "text-[12px] font-bold tracking-[0.15em] uppercase text-[#cca651] flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-1.5 mr-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10 h-[1.5px] bg-[#cca651]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-6 h-[1.5px] bg-[#cca651]" })]
					}), "Art that speaks. Experience that delivers."]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 },
					className: "font-display text-[clamp(2.8rem,4.8vw,5.5rem)] leading-[1.02] tracking-tight text-[#16213e]",
					children: [
						"Crafted with",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[color:var(--gold)]",
							children: "Imagination."
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "whitespace-nowrap",
							children: ["Backed by ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[color:var(--gold)]",
								children: "Experience."
							})]
						})
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .2 },
					className: "text-[#4a4a4a] text-[15px] leading-relaxed max-w-sm font-medium",
					children: [
						"We blend imagination, craftsmanship and innovation",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to create timeless artworks that inspire."
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .3 },
					className: "flex flex-wrap items-center gap-4 pt-6",
					children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "flex items-center justify-center gap-3 rounded-[4px] bg-[#1a224a] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-white/80" }), " Contact Us"]
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work",
						className: "flex items-center justify-center gap-3 rounded-[4px] bg-[#cca651] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-4 w-4 text-white/80" }), " Our Work"]
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "flex items-center justify-center gap-3 rounded-[4px] bg-black/5 backdrop-blur-sm border border-[#cca651] text-[#1a224a] px-7 py-3 text-sm font-semibold hover:bg-white/50 transition-all shadow-sm min-w-[145px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-4 w-4 text-[#cca651]" }), " Our Services"]
					})
					]
				})
				]
			})
		})]
	});
}
function OurJourney() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-24 sm:py-32 bg-[color:var(--cream)] relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 opacity-[0.07] pointer-events-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
				alt: "Sketch",
				className: "w-full h-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--cream)] via-transparent to-[color:var(--cream)]" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Our Journey" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[color:var(--royal-deep)]",
					children: [
						"From a Vision",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"To a Creative Legacy"
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: [
						"Founded in 2011, Nakshikar's Studio began with a simple belief – art has the power to transform spaces and touch lives.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Today, we are a collective of thinkers, writers, designers and makers delivering meaningful artistic experiences across multiple disciplines."
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-signature text-4xl text-[color:var(--gold)] pt-2 pb-4",
					children: "Nakshikar's Studio"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--royal-deep)] text-white px-8 py-3.5 text-sm font-medium hover:bg-[color:var(--gold)] transition-colors shadow-lg",
					children: ["Explore More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4",
				children: [
					{
						num: "12+",
						text: "Years of Experience",
						icon: Medal,
						active: false
					},
					{
						num: "250+",
						text: "Projects Completed",
						icon: Palette,
						active: true
					},
					{
						num: "100+",
						text: "Happy Clients",
						icon: Users,
						active: false
					},
					{
						num: "15+",
						text: "Sectors Served",
						icon: Building2,
						active: false
					}
				].map((s, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: `rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border transition-all ${s.active ? "bg-[color:var(--royal-deep)] text-white border-transparent scale-105 shadow-2xl z-10 -translate-y-2" : "bg-white border-[color:var(--gold)]/20 text-[color:var(--charcoal)] shadow-soft"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
						className: `h-10 w-10 mb-5 ${s.active ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`,
						strokeWidth: 1.5
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl sm:text-5xl mb-3",
						children: s.num
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `text-xs uppercase tracking-[0.2em] font-medium leading-relaxed ${s.active ? "text-white/80" : "text-muted-foreground"}`,
						children: s.text
					})
					]
				}, i))
			})]
		})]
	});
}
function ExistingAboutData() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-20 sm:py-32 bg-white relative overflow-hidden h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-32 top-32 h-96 w-96 rounded-full bg-gold-gradient opacity-20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-8 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "About the Studio" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.02] tracking-tight text-[color:var(--charcoal)]",
					children: [
						"A house of artists,",
						" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "designers"
						}),
						" and",
						" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[color:var(--royal-deep)]",
							children: "craftspeople."
						})
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: "Born from a love for Indian craft and modern design, Nakshikar's Studio is where heritage technique meets contemporary vision. We collaborate with homeowners, architects, hoteliers and brands to translate ideas into objects that endure."
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-devanagari text-xl text-[color:var(--royal-deep)] italic",
					children: ["जिथे नक्षी जन्मा येते. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[color:var(--gold-deep)]",
						children: "— Where art is born."
					})]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-6 pt-4",
					children: [
						{
							n: "12+",
							l: "Years of craft"
						},
						{
							n: "500+",
							l: "Projects delivered"
						},
						{
							n: "120+",
							l: "Happy clients"
						}
					].map((s) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						className: "border-l border-[color:var(--gold)]/40 pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl sm:text-4xl text-[color:var(--royal-deep)]",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-1",
							children: s.l
						})]
					}, s.l))
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7 relative h-[500px] sm:h-[600px] z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .9 },
					className: "absolute top-0 right-0 w-[62%] h-[58%] rounded-3xl overflow-hidden shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: studio_default,
						alt: "Studio at work",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .9,
						delay: .15
					},
					className: "absolute bottom-0 left-0 w-[52%] h-[55%] rounded-3xl overflow-hidden shadow-luxe border-4 border-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: install_default,
						alt: "Installation",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .8
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						duration: .9,
						delay: .3
					},
					className: "absolute top-[40%] right-[8%] w-[28%] aspect-square rounded-3xl overflow-hidden shadow-luxe border-4 border-white animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sketch_default,
						alt: "Sketch",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})
				]
			})]
		})]
	});
}
function Milestones() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32 bg-[color:var(--cream)] relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-20 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Our Milestones" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work",
					className: "inline-flex items-center gap-2 rounded-xl bg-[color:var(--royal-deep)] text-white px-7 py-3 text-sm font-medium shadow-soft hover:bg-[color:var(--gold)] transition-colors",
					children: "Explore More"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[70px] left-0 w-full h-[1px] bg-[color:var(--gold)]/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-5 gap-8",
					children: [
						{
							year: "2011",
							desc: "Studio founded in Pune with a focus on identity design",
							img: sketch_default
						},
						{
							year: "2015",
							desc: "First major mural & sculpture installation",
							img: sculpture_default
						},
						{
							year: "2018",
							desc: "Collaborated with AMUL & Mahapeek",
							img: mural_default
						},
						{
							year: "2022",
							desc: "Expanded into interior + architectural branding",
							img: studio_default
						},
						{
							year: "2026",
							desc: "Revamped studio presence & digital identity",
							img: uiux_default
						}
					].map((s, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .15 },
						className: "relative text-center flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[140px] w-[140px] rounded-full border-[6px] border-white shadow-luxe overflow-hidden bg-[color:var(--cream)] relative z-10 mb-4 ring-1 ring-[color:var(--gold)]/20 ring-offset-4 ring-offset-[color:var(--cream)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.year,
								className: "h-full w-full object-cover hover:scale-110 transition-transform duration-700"
							})
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl text-[color:var(--charcoal)] mb-2 relative z-10",
							children: s.year
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed max-w-[180px] mx-auto",
							children: s.desc
						})
						]
					}, i))
				})]
			})]
		})
	});
}
function InsideStudio() {
	const images = [
		install_default,
		painting_default,
		studio_default,
		sculpture_default,
		mural_default
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 sm:py-32 bg-white relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Inside the Studio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-4 mt-12",
				children: images.map((img, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-soft group cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img,
						alt: "Studio life",
						className: "h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
					}), i === images.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 bg-black/50 flex items-end justify-center pb-8 backdrop-blur-[2px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-[color:var(--royal-deep)] backdrop-blur-md border border-white/20 text-white px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors",
							children: "Explore More"
						})
					})]
				}, i))
			})]
		})
	});
}
function FirstProjectCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-[25px] pb-[100px] pt-10 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative py-16 sm:py-20 overflow-hidden bg-[color:var(--charcoal)] rounded-[35px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_footer_default,
					alt: "Dark Paint Texture",
					className: "w-full h-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[color:var(--gold)] text-sm tracking-[0.2em] uppercase font-medium mb-6",
						children: "Our First Project"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.05] tracking-tight mb-8",
						children: [
							"Every Masterpiece",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Starts with a Vision."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/80 text-xl font-light",
						children: "Let's create something extraordinary together."
					})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-center justify-start lg:justify-end gap-4",
					children: [
						{
							icon: PhoneCall,
							label: "Contact Us",
							sub: "Let's Talk",
							link: "/contact"
						},
						{
							icon: LayoutGrid,
							label: "Our Work",
							sub: "See Our Projects",
							link: "/work"
						},
						{
							icon: Layers,
							label: "Our Services",
							sub: "What We Do",
							link: "/services"
						}
					].map((c, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(Link, {
						to: c.link,
						className: "glass-dark border border-[color:var(--gold)]/30 rounded-2xl p-5 w-36 sm:w-40 flex flex-col items-center text-center hover:bg-white/10 hover:border-[color:var(--gold)] hover:-translate-y-2 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-7 w-7 text-[color:var(--gold)] mb-3 stroke-[1.5]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white text-sm font-medium mb-1",
							children: c.label
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-white/60 text-[10px] uppercase tracking-[0.15em]",
							children: c.sub
						})
						]
					}, i))
				})]
			})]
		})
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutHero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OurJourney, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExistingAboutData, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestones, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsideStudio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirstProjectCTA, {})
		]
	});
}
var girl_default = "/assets/girl-CnMjab_X.png";
var AboutSection = () => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-10 pb-24 sm:pt-20 sm:pb-32 bg-[color:var(--cream)] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[500px] sm:h-[600px] flex items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: -50,
							rotate: -10
						},
						whileInView: {
							opacity: 1,
							x: 0,
							rotate: -5
						},
						viewport: { once: true },
						transition: { duration: .8 },
						className: "absolute z-10 w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -left-4 sm:-left-8 top-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1964&auto=format&fit=crop",
							alt: "Artwork Detail",
							className: "w-full h-full object-cover"
						})
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 50
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .2
						},
						className: "relative z-20 w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-luxe border-4 border-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
							alt: "Workshop",
							className: "w-full h-full object-cover"
						})
					}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							x: 50,
							rotate: 10
						},
						whileInView: {
							opacity: 1,
							x: 0,
							rotate: 5
						},
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .4
						},
						className: "absolute z-30 w-56 sm:w-72 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -right-4 sm:-right-8 bottom-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
							alt: "Installation",
							className: "w-full h-full object-cover"
						})
					})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						className: "text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)] font-medium mb-4 block",
						children: "The Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: .1 },
						className: "font-display text-[clamp(2.2rem,4vw,3.6rem)] text-[color:var(--charcoal)] mb-6 leading-[1.05] tracking-tight",
						children: ["Crafting Legacy Through ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "Art & Architecture"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: .2 },
						className: "text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed",
						children: "Since our inception, Nakshikar's Studio has been synonymous with unparalleled craftsmanship. We believe that every space has a story to tell, and our artwork is the medium through which these stories are immortalized."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-8 sm:gap-10 mt-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .3 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl text-gradient-gold mb-2",
								children: "150+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold",
								children: "Projects Completed"
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .4 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl text-gradient-gold mb-2",
								children: "25"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold",
								children: "Years Experience"
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .5 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl text-gradient-gold mb-2",
								children: "50+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold",
								children: "Awards Won"
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .6 },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl text-gradient-gold mb-2",
								children: "100%"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold",
								children: "Client Satisfaction"
							})]
						})
						]
					})
					]
				})]
			})
		})
	});
};
var TESTIMONIALS = [
	{
		name: "Rohit & Sneha Patil",
		role: "Private Residence, Pune",
		quote: "Our living room mural is the soul of the home. Every guest stops to admire it — the craftsmanship is impeccable."
	},
	{
		name: "Aditya Sharma",
		role: "Founder, Aurum Hospitality",
		quote: "From the lobby murals to our brand identity, Nakshikar's translated our vision into something timeless and unmistakably premium."
	},
	{
		name: "Priya Deshmukh",
		role: "Principal Architect",
		quote: "A rare studio that genuinely collaborates. Their attention to detail across mediums — paint, metal, print — is exceptional."
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
		return () => clearInterval(t);
	}, []);
	const t = TESTIMONIALS[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-8 pb-28 sm:pt-12 sm:pb-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Client Stories" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] tracking-tight max-w-3xl mx-auto",
					children: [
						"Loved by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "homeowners,"
						}),
						" hotels & brands."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-4xl mx-auto rounded-3xl bg-[color:var(--cream)] border border-[color:var(--gold)]/30 p-8 sm:p-14 overflow-hidden shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-gradient opacity-20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -20
						},
						transition: { duration: .6 },
						className: "relative text-center max-w-3xl mx-auto py-2",
						children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex items-center justify-center w-14 h-14 rounded-full bg-royal-gradient text-white shadow-luxe mb-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-[color:var(--gold)]" })
						}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[color:var(--charcoal)] mb-8",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl sm:text-2xl text-[color:var(--royal-deep)]",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1",
								children: t.role
							})]
						})
						]
					}, i)
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-center gap-2 mt-10",
					children: TESTIMONIALS.map((_, idx) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("button", {
						onClick: () => setI(idx),
						className: `h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-royal-gradient" : "w-4 bg-[color:var(--gold)]/40"}`,
						"aria-label": `Testimonial ${idx + 1}`
					}, idx))
				})
				]
			})]
		})
	});
}
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Nakshikar's Studio — Where Art is Born" },
			{
				name: "description",
				content: "Premium art & design studio: paintings, murals, sculptures, signages, branding, print solutions, UI/UX and custom artwork."
			},
			{
				property: "og:title",
				content: "Nakshikar's Studio"
			},
			{
				property: "og:description",
				content: "Premium art & design studio crafting paintings, murals, sculptures, signages, and brand experiences."
			},
			{
				property: "og:image",
				content: hero_mural_default
			}
		]
	})
}).update({ component: Home });
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative min-h-[100svh] pt-32 pb-20 overflow-hidden bg-mesh noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "noise-overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full bg-gold-gradient opacity-30 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-32 right-0 h-[520px] w-[520px] rounded-full bg-royal-gradient opacity-25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 space-y-8",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .8 },
					className: "inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-gold-gradient" }), "Art • Design • Craft Studio"]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display font-medium leading-[0.95] tracking-tight text-[clamp(2.6rem,6.5vw,5.4rem)] text-[color:var(--charcoal)]",
					children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, { text: "Where" }),
						" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "art",
							delay: .15
						}),
						" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "is born.",
								delay: .3
							})
						}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "Crafted",
							delay: .45
						}),
						" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "by hand,",
							delay: .6
						}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-[color:var(--royal-deep)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "loved forever.",
								delay: .75
							})
						})
					]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .9,
						duration: .8
					},
					className: "text-base sm:text-lg text-[color:var(--muted-foreground)] max-w-xl leading-relaxed",
					children: [
						"Nakshikar's Studio is a creative atelier crafting ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "paintings, murals, sculptures, signages, branding" }),
						" and digital design — for homes, hotels, corporates and cultural spaces."
					]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1.05,
						duration: .8
					},
					className: "flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/work",
						className: "group inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium shadow-luxe hover:scale-[1.03] transition-transform",
						children: ["Explore Portfolio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:rotate-45" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/services",
						className: "group inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium text-[color:var(--royal-deep)] hover:bg-[color:var(--gold)]/10 transition-colors",
						children: "Our Services"
					})]
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						delay: 1.3,
						duration: 1
					},
					className: "flex items-center gap-8 pt-4",
					children: [
						{
							n: "500+",
							l: "Projects"
						},
						{
							n: "12+",
							l: "Years"
						},
						{
							n: "9",
							l: "Disciplines"
						}
					].map((s) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-gradient-gold",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1",
							children: s.l
						})]
					}, s.l))
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6 relative h-[520px] sm:h-[620px] lg:h-[680px]",
				children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: y1 },
					className: "absolute top-0 right-0 w-[58%] h-[62%] rounded-3xl overflow-hidden shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
						src: hero_mural_default,
						alt: "Hand-painted mural",
						className: "h-full w-full object-cover",
						initial: { scale: 1.15 },
						animate: { scale: 1 },
						transition: {
							duration: 1.4,
							ease: "easeOut"
						}
					})
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: y2 },
					className: "absolute top-[18%] left-0 w-[42%] h-[40%] rounded-3xl overflow-hidden shadow-soft border-4 border-white animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sculpture_default,
						alt: "Sculpture",
						className: "h-full w-full object-cover"
					})
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: y3 },
					className: "absolute bottom-0 left-[10%] w-[48%] h-[44%] rounded-3xl overflow-hidden shadow-luxe border-4 border-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mural_default,
						alt: "Abstract mural",
						className: "h-full w-full object-cover"
					})
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					style: { y: y2 },
					className: "absolute bottom-[8%] right-0 w-[36%] h-[36%] rounded-3xl overflow-hidden shadow-soft border-4 border-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: signage_default,
						alt: "Signage",
						className: "h-full w-full object-cover"
					})
				}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .6
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						delay: 1.2,
						duration: .7
					},
					className: "absolute top-[55%] left-[35%] -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-gold-gradient flex items-center justify-center shadow-luxe animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 mx-auto text-white" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] tracking-[0.3em] uppercase text-white mt-1 font-semibold",
							children: "Bespoke"
						}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] tracking-[0.3em] uppercase text-white",
							children: "Artistry"
						})
						]
					})
				})
				]
			})]
		})
		]
	});
}
function SplitReveal({ text, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block overflow-hidden align-baseline",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: { y: "110%" },
			animate: { y: 0 },
			transition: {
				delay,
				duration: .9,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "inline-block",
			children: text
		})
	});
}
function Marquee() {
	const items = [
		"Paintings",
		"Murals",
		"Sculptures",
		"Signages",
		"Print",
		"Branding",
		"UI / UX",
		"Wall Art",
		"Sketching",
		"Installations"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative border-y border-[#cca651] bg-[#16213e] py-3 sm:py-4 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex marquee whitespace-nowrap gap-12 items-center",
			children: [
				...items,
				...items,
				...items
			].map((it, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("span", {
				className: "font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white",
					children: it
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-12 text-[#cca651]",
					children: "✦"
				})]
			}, i))
		})
	});
}
var CATEGORIES = [
	{
		label: "Paintings",
		img: painting_default,
		sub: "Realistic • Portrait • Abstract",
		link: "/work"
	},
	{
		label: "Murals",
		img: mural_default,
		sub: "Hand-painted • Large Scale",
		link: "/work"
	},
	{
		label: "Sculptures",
		img: sculpture_default,
		sub: "Fiber • Metal • Stone",
		link: "/work"
	},
	{
		label: "Signages",
		img: signage_default,
		sub: "LED • 3D • Branded",
		link: "/work"
	},
	{
		label: "Wall Art",
		img: wallart_default,
		sub: "Custom • Textured",
		link: "/work"
	},
	{
		label: "Print Solutions",
		img: print_default,
		sub: "UV • Eco-Solvent",
		link: "/work"
	},
	{
		label: "Graphic Design",
		img: graphic_default,
		sub: "Logo • Identity • Print",
		link: "/work"
	}
];
function WhatWeCreate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 sm:py-36 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "What We Create" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6 mb-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[clamp(2rem,5vw,4.2rem)] leading-[1] tracking-tight max-w-3xl",
					children: [
						"Nine disciplines.",
						" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-gradient-gold",
							children: "One studio."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground max-w-md leading-relaxed",
					children: "Every category below is hand-crafted in-house — from the first sketch to the final installation."
				})]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
				children: CATEGORIES.map((c, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(motion.a, {
					href: c.link,
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .7,
						delay: i % 4 * .07
					},
					className: "group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/5] lg:aspect-square block",
					children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: c.img,
						alt: c.label,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
					}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/90 via-[color:var(--charcoal)]/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] tracking-[0.25em] uppercase opacity-80 mb-1",
							children: c.sub
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl sm:text-3xl leading-none",
								children: c.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-9 w-9 rounded-full bg-gold-gradient flex items-center justify-center transition-transform duration-500 group-hover:rotate-45",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 text-white" })
							})]
						})]
					})
					]
				}, c.label))
			})
			]
		})
	});
}
var PROCESS = [
	{
		n: "01",
		t: "Concept",
		d: "We begin with a conversation to understand your ideas, goals and the story behind your space.",
		icon: Lightbulb
	},
	{
		n: "02",
		t: "Sketch",
		d: "Ideas take shape on paper. We sketch, experiment and refine until the vision feels right.",
		icon: PencilRuler
	},
	{
		n: "03",
		t: "Design",
		d: "We bring the concept to life with detailed renders, color studies and material selections.",
		icon: Monitor
	},
	{
		n: "04",
		t: "Production",
		d: "Our skilled artists and craftsmen transform the design using premium materials and techniques.",
		icon: Paintbrush
	},
	{
		n: "05",
		t: "Execution",
		d: "Every detail is carefully executed with precision, quality checks and passion at every step.",
		icon: Settings
	},
	{
		n: "06",
		t: "Installation",
		d: "We deliver and install the artwork with care, ensuring a flawless and lasting impression.",
		icon: Landmark
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-11 sm:py-20 bg-[#F7F4EE] relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] w-full pl-[8%] pr-5 sm:pr-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[12px] font-bold tracking-[0.2em] uppercase text-[#cca651] mb-4",
					children: "THE PROCESS"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.05] tracking-tight text-[#16213e] mb-2",
					children: [
						"From a Single Thought",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"to a Finished ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#cca651] italic",
							children: "Masterpiece."
						})
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative w-full max-w-[750px] mx-auto mt-12 flex flex-col items-center justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: girl_default,
						alt: "The Process",
						className: "w-full h-auto object-contain"
					})
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative pl-2 lg:pl-12 pt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[26px] lg:left-[72px] top-[24px] bottom-8 w-[2px] border-l-[3px] border-dotted border-[#16213e]/15" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-4",
					children: PROCESS.map((p, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6 relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 w-[48px] h-[48px] rounded-full border border-[#cca651]/50 bg-white flex items-center justify-center relative shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5 text-[#cca651]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 pb-4 border-b border-[#16213e]/10 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[#cca651] font-bold text-[16px] mb-0",
								children: p.n
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[#16213e] font-display text-[22px] mb-1",
								children: p.t
							}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-end justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#4a4a4a] text-[13px] leading-[1.5] max-w-[320px]",
									children: p.d
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "flex items-center text-[11px] font-bold text-[#16213e] hover:text-[#cca651] transition-colors whitespace-nowrap pt-1 uppercase tracking-wide border-b border-transparent hover:border-[#cca651] pb-1",
									children: ["Explore More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-3 w-3" })]
								})]
							})
							]
						})]
					}, p.n))
				})]
			})]
		})
	});
}
var FAQS = [
	{
		q: "What kinds of projects do you take on?",
		a: "Residences, hotels, restaurants, corporates, schools and cultural spaces — from a single commissioned painting to full interior art programs."
	},
	{
		q: "Do you handle on-site installation?",
		a: "Yes. Our team manages the entire process — from sketch to white-glove on-site installation, including lighting and finishing."
	},
	{
		q: "How long does a typical commission take?",
		a: "Smaller paintings start at 2–3 weeks. Large murals and sculptural installs range from 4 to 12 weeks depending on scale and material."
	},
	{
		q: "Can you match a specific style or palette?",
		a: "Absolutely. Every commission begins with a brief, color study and material samples tailored to your space and story."
	},
	{
		q: "Do you also offer branding and digital design?",
		a: "Yes — we are a full creative studio. Logo, identity, packaging, print, UI/UX and websites are all crafted in-house."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 sm:py-36 bg-[color:var(--cream)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { text: "Frequently Asked" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight",
					children: ["Questions, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gradient-gold",
						children: "answered."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: FAQS.map((f, i) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-white border border-[color:var(--gold)]/25 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(open === i ? null : i),
						className: "w-full flex items-center justify-between gap-6 text-left p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg sm:text-xl",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 h-9 w-9 rounded-full bg-gold-gradient flex items-center justify-center text-white",
							children: open === i ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						children: open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								height: 0,
								opacity: 0
							},
							animate: {
								height: "auto",
								opacity: 1
							},
							exit: {
								height: 0,
								opacity: 0
							},
							transition: {
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-6 text-muted-foreground leading-relaxed",
								children: f.a
							})
						})
					})]
				}, i))
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeCreate, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
		]
	});
}
var WorkRoute = Route$4.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$5
});
var ServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute,
	ContactRoute,
	ServicesRoute,
	WorkRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
