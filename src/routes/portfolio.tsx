import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, categoryToSlug } from "@/lib/categorySlugs";
import { WorkPortfolio } from "@/components/WorkPortfolio";
import { PORTFOLIO_OVERVIEW_SEO } from "@/data/portfolioCategorySeo";

interface PortfolioSearch {
  category?: string;
  page?: number;
}

export const Route = createFileRoute("/portfolio")({
  validateSearch: (search: Record<string, unknown>): PortfolioSearch => {
    const categoryParam = typeof search.category === "string" ? search.category : undefined;
    const pageParam = Number(search.page);
    return {
      category: categoryParam,
      page: pageParam > 0 ? pageParam : undefined,
    };
  },

  head: () => ({
    meta: [
      { title: PORTFOLIO_OVERVIEW_SEO.title },
      { name: "description", content: PORTFOLIO_OVERVIEW_SEO.metaDescription },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: PORTFOLIO_OVERVIEW_SEO.title },
      { property: "og:description", content: PORTFOLIO_OVERVIEW_SEO.metaDescription },
      { property: "og:image", content: "https://nakshikarsstudio.com/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:url", content: "https://nakshikarsstudio.com/portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PORTFOLIO_OVERVIEW_SEO.title },
      { name: "twitter:description", content: PORTFOLIO_OVERVIEW_SEO.metaDescription },
      { name: "twitter:image", content: "https://nakshikarsstudio.com/og-image.jpg" },
      { name: "twitter:image:alt", content: PORTFOLIO_OVERVIEW_SEO.title },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://nakshikarsstudio.com/portfolio#webpage",
              url: "https://nakshikarsstudio.com/portfolio",
              name: PORTFOLIO_OVERVIEW_SEO.title,
              description: PORTFOLIO_OVERVIEW_SEO.metaDescription,
              isPartOf: {
                "@id": "https://nakshikarsstudio.com/#website",
              },
              about: {
                "@id": "https://nakshikarsstudio.com/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/portfolio#breadcrumb",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nakshikarsstudio.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Portfolio",
                  item: "https://nakshikarsstudio.com/portfolio",
                },
              ],
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://nakshikarsstudio.com/portfolio" }],
  }),
  component: PortfolioRouteComponent,
});

function PortfolioRouteComponent() {
  const { category: searchCat, page } = Route.useSearch();
  let initialCat = "Graphics";
  if (searchCat) {
    const matched = slugToCategory(searchCat);
    if (matched) initialCat = matched;
  } else if (typeof window !== "undefined") {
    try {
      const saved = sessionStorage.getItem("portfolio_active_category");
      if (saved) {
        sessionStorage.removeItem("portfolio_active_category");
        initialCat = saved;
      }
    } catch (e) {}
  }

  return (
    <WorkPortfolio
      initialCategory={initialCat as any}
      initialPage={page || 1}
      isCategoryRoute={false}
    />
  );
}
