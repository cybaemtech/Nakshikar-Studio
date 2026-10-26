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
  beforeLoad: ({ search }) => {
    if (search.category) {
      const matched = slugToCategory(search.category);
      const slug = matched
        ? categoryToSlug(matched)
        : search.category.toLowerCase().replace(/\s+/g, "-");
      const pageNum = Number(search.page);

      throw redirect({
        to: "/portfolio/$category",
        params: { category: slug },
        search: pageNum > 1 ? { page: pageNum } : {},
        replace: true,
      } as any);
    }
  },
  head: () => ({
    meta: [
      { title: PORTFOLIO_OVERVIEW_SEO.title },
      { name: "description", content: PORTFOLIO_OVERVIEW_SEO.metaDescription },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: PORTFOLIO_OVERVIEW_SEO.title },
      { property: "og:description", content: PORTFOLIO_OVERVIEW_SEO.metaDescription },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/portfolio" },
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
  const { page } = Route.useSearch();
  return (
    <WorkPortfolio
      initialCategory="Graphics"
      initialPage={page || 1}
      isCategoryRoute={false}
    />
  );
}
