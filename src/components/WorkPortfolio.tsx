import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { LazyImage } from "@/components/LazyImage";
import { ALL_WORKS, CATEGORIES, type WorkItem, type Category } from "@/data/worksData";
import { categoryToSlug } from "@/lib/categorySlugs";

import logoF1 from "@/assets/Nakshikar logos image/Logo F 1.jpg";
import logoF2 from "@/assets/Nakshikar logos image/Logo F 2.jpg";
import logoF3 from "@/assets/Nakshikar logos image/Logo F 3.jpg";
import logoF4 from "@/assets/Nakshikar logos image/Logo F 4.jpg";

const LOGO_WORKS: WorkItem[] = [
  {
    id: "nak-logo-1",
    src: logoF1,
    cat: "Graphics",
    folder: "Logo",
    title: "Brand Identity & Emblem System",
    place: "Visual Identity Project",
    alt: "Brand Identity & Emblem System graphics design",
  },
  {
    id: "nak-logo-2",
    src: logoF2,
    cat: "Graphics",
    folder: "Logo",
    title: "Typographic Brandmark & Seal",
    place: "Custom Typography",
    alt: "Typographic Brandmark & Seal graphics design",
  },
  {
    id: "nak-logo-3",
    src: logoF3,
    cat: "Graphics",
    folder: "Logo",
    title: "Corporate Visual Symbol & Crest",
    place: "Brand Architecture",
    alt: "Corporate Visual Symbol & Crest graphics design",
  },
  {
    id: "nak-logo-4",
    src: logoF4,
    cat: "Graphics",
    folder: "Logo",
    title: "Heritage Monogram Design",
    place: "Identity & Packaging",
    alt: "Heritage Monogram Design graphics design",
  },
];

const ITEMS_PER_PAGE = 12;

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setColumnCount(1);
      else if (w < 1024) setColumnCount(2);
      else if (w < 1280) setColumnCount(3);
      else setColumnCount(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return columnCount;
}

interface WorkPortfolioProps {
  initialCategory?: Category;
  initialPage?: number;
  isCategoryRoute?: boolean;
}

export function WorkPortfolio({
  initialCategory = "Graphics",
  initialPage = 1,
  isCategoryRoute = false,
}: WorkPortfolioProps) {
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);
  const columnCount = useColumnCount();

  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);
  const [activeSubCategory, setActiveSubCategory] = useState<"Design" | "Logo">("Design");
  const [currentPage, setCurrentPage] = useState<number>(initialPage || 1);
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);

  // Sync state when props change
  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    setCurrentPage(initialPage || 1);
  }, [initialPage]);

  const isGraphicsLogo = activeCategory === "Graphics" && activeSubCategory === "Logo";

  // Filter items based on active category and subcategory
  const filteredWorks = isGraphicsLogo
    ? LOGO_WORKS
    : ALL_WORKS.filter((w) => {
        if (w.cat.toLowerCase() !== activeCategory.toLowerCase()) {
          return false;
        }

        if (activeCategory === "Graphics") {
          const isLogo =
            w.folder.toLowerCase().includes("logo") ||
            w.title.toLowerCase().includes("logo") ||
            w.title.toLowerCase().includes("brand identity");
          if (activeSubCategory === "Design" && isLogo) return false;
        }

        return true;
      });

  const totalPages = Math.max(1, Math.ceil(filteredWorks.length / ITEMS_PER_PAGE));
  const validPage = Math.min(currentPage, totalPages);

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const paginatedWorks = filteredWorks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Distribute paginated works into columns for gap-free flex masonry
  const columnsData = Array.from({ length: columnCount }, () => [] as typeof paginatedWorks);
  paginatedWorks.forEach((work, index) => {
    columnsData[index % columnCount].push(work);
  });

  const handleCategoryChange = (newCat: Category) => {
    setActiveCategory(newCat);
    setCurrentPage(1);

    const slug = categoryToSlug(newCat);
    navigate({
      to: `/work/${slug}` as any,
      search: {},
      replace: false,
    });
  };

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);

    const slug = categoryToSlug(activeCategory);
    if (isCategoryRoute) {
      navigate({
        to: `/work/${slug}` as any,
        search: newPage > 1 ? { page: newPage } : {},
        replace: true,
      });
    } else {
      navigate({
        to: "/work",
        search: newPage > 1 ? { page: newPage } : {},
        replace: true,
      });
    }

    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Generate pagination numbers array with ellipsis
  const getPaginationPages = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (validPage > 3) pages.push("...");

      const start = Math.max(2, validPage - 1);
      const end = Math.min(totalPages - 1, validPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (validPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="bg-background text-foreground min-h-screen pt-24">
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-[color:var(--cream)] relative overflow-hidden min-h-[calc(100vh-6rem)]">
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-royal-gradient opacity-15 blur-3xl" />
        <div className="mx-auto max-w-[1500px] px-5 sm:px-[6%] lg:px-[8%] relative z-10">
          {/* Header & Filter Tabs */}
          <div
            ref={galleryRef}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 scroll-mt-32"
          >
            <div>
              <SectionEyebrow text="Portfolio" />
              <h1 className="font-display text-[clamp(2.2rem,5.4vw,4.6rem)] leading-[1.02] tracking-tight text-[color:var(--charcoal)]">
                A gallery of{" "}
                <span className="italic text-gradient-gold font-normal">our finest</span>{" "}
                work.
              </h1>
            </div>

            {/* Category Filter Pills matching screenshot styling */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2.5 items-center">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-5 py-2.5 rounded-full text-[11px] tracking-[0.22em] uppercase font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-[#16213e] text-white shadow-md ring-2 ring-[color:var(--gold)]/40 scale-[1.03]"
                          : "bg-white border border-[color:var(--gold)]/30 text-[#16213e] hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/5"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Graphics Sub-categories */}
              <AnimatePresence>
                {activeCategory === "Graphics" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-wrap gap-2.5 items-center pl-1"
                  >
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mr-1">
                      Type:
                    </span>
                    {["Design", "Logo"].map((subCat) => {
                      const isActive = activeSubCategory === subCat;
                      return (
                        <button
                          key={subCat}
                          onClick={() => {
                            setActiveSubCategory(subCat as "Design" | "Logo");
                            setCurrentPage(1);
                          }}
                          className={`px-4 py-2 rounded-full text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
                            isActive
                              ? "bg-gold-gradient text-white shadow-md"
                              : "bg-white/50 border border-[color:var(--gold)]/30 text-[#16213e] hover:bg-[color:var(--gold)]/10"
                          }`}
                        >
                          {subCat}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Item Count & Context Bar */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[color:var(--gold)]/20 text-xs text-muted-foreground uppercase tracking-widest font-medium">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-[color:var(--gold)]" />
              <span>
                Showing{" "}
                <strong className="text-[color:var(--charcoal)]">
                  {paginatedWorks.length > 0 ? startIndex + 1 : 0}–
                  {Math.min(startIndex + ITEMS_PER_PAGE, filteredWorks.length)}
                </strong>{" "}
                of <strong className="text-[color:var(--charcoal)]">{filteredWorks.length}</strong>{" "}
                artworks
              </span>
            </div>
            <div>
              Page <strong className="text-[color:var(--charcoal)]">{validPage}</strong> of{" "}
              <strong className="text-[color:var(--charcoal)]">{totalPages}</strong>
            </div>
          </div>

          {/* Logo Showcase Grid OR Masonry Image Grid */}
          {isGraphicsLogo ? (
            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10 min-h-[500px]">
              {LOGO_WORKS.map((w, i) => (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  onClick={() => setSelectedImage(w)}
                  className="group relative rounded-3xl bg-white border-2 border-[color:var(--gold)]/30 hover:border-[color:var(--gold)] p-5 sm:p-7 shadow-card hover:shadow-luxe transition-all duration-500 cursor-zoom-in flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#faf8f5] border border-[color:var(--gold)]/15 mb-5 flex items-center justify-center p-4 sm:p-6">
                    <LazyImage
                      src={w.src}
                      alt={w.alt || w.title}
                      isPriority={true}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      containerClassName="w-full h-full flex items-center justify-center"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3.5 py-1.5 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-bold text-white shadow-md">
                        Identity 0{i + 1}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm z-20">
                      <ArrowUpRight className="h-4 w-4 text-[color:var(--royal-deep)]" />
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[color:var(--gold)]/15">
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-[color:var(--charcoal)] group-hover:text-[color:var(--royal-deep)] transition-colors">
                        {w.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                        {w.place}
                      </p>
                    </div>
                    <span className="text-[11px] uppercase tracking-widest text-[color:var(--gold-deep)] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : paginatedWorks.length > 0 ? (
            <div
              className="grid gap-5 items-start min-h-[500px]"
              style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
            >
              {columnsData.map((colItems, colIdx) => (
                <div key={`col-${colIdx}`} className="flex flex-col gap-5">
                  {colItems.map((w, i) => (
                    <motion.figure
                      key={w.id}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                      onClick={() => setSelectedImage(w)}
                      className="group relative rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-luxe transition-all duration-500 cursor-zoom-in border border-[color:var(--gold)]/10 hover:border-[color:var(--gold)]/40"
                    >
                      <div className="relative overflow-hidden">
                        <LazyImage
                          src={w.src}
                          alt={w.alt || w.title}
                          isPriority={colIdx === 0 && i === 0}
                          className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/90 via-[color:var(--charcoal)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white z-20">
                          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gold-gradient text-[11px] tracking-[0.22em] uppercase font-bold text-white shadow-md">
                            {w.cat}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 h-10 w-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <ArrowUpRight className="h-4 w-4 text-[color:var(--charcoal)]" />
                        </div>
                      </div>
                    </motion.figure>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              <p className="font-display text-2xl mb-2">No artworks found in this category.</p>
              <button
                onClick={() => handleCategoryChange("Graphics")}
                className="mt-4 px-6 py-2.5 rounded-full bg-royal-gradient text-white text-xs uppercase tracking-widest"
              >
                View Graphics
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[color:var(--gold)]/20">
              <button
                onClick={() => handlePageChange(validPage - 1)}
                disabled={validPage === 1}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  validPage === 1
                    ? "opacity-40 cursor-not-allowed bg-gray-200 text-gray-500"
                    : "bg-white border border-[color:var(--gold)]/30 text-[#16213e] hover:bg-[color:var(--gold)]/10 hover:border-[color:var(--gold)] shadow-sm"
                }`}
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </button>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {getPaginationPages().map((p, idx) => {
                  if (typeof p === "string") {
                    return (
                      <span key={`dots-${idx}`} className="px-2 text-gray-400 font-bold">
                        ...
                      </span>
                    );
                  }
                  const isCurrent = p === validPage;
                  return (
                    <button
                      key={`page-${p}`}
                      onClick={() => handlePageChange(p)}
                      className={`h-10 w-10 rounded-full text-xs font-bold transition-all duration-300 ${
                        isCurrent
                          ? "bg-gold-gradient text-white shadow-soft scale-110 ring-2 ring-[color:var(--gold)]/50"
                          : "bg-white border border-[color:var(--gold)]/25 text-[#16213e] hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
                      }`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(validPage + 1)}
                disabled={validPage === totalPages}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                  validPage === totalPages
                    ? "opacity-40 cursor-not-allowed bg-gray-200 text-gray-500"
                    : "bg-white border border-[color:var(--gold)]/30 text-[#16213e] hover:bg-[color:var(--gold)]/10 hover:border-[color:var(--gold)] shadow-sm"
                }`}
              >
                Next <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 sm:p-10 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 h-12 w-12 rounded-full glass bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage.src}
              alt={selectedImage.alt || selectedImage.title}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.15 }}
              className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 text-white cursor-default pointer-events-none max-w-lg"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gold-gradient text-[10px] tracking-[0.22em] uppercase font-semibold mb-3 shadow-md">
                {selectedImage.cat}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl leading-tight drop-shadow-lg font-medium">
                {selectedImage.title}
              </h3>
              <p className="text-sm tracking-[0.18em] uppercase opacity-90 mt-1 drop-shadow-md">
                {selectedImage.place}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
