import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, isValidCategorySlug, categoryToSlug } from "@/lib/categorySlugs";
import { WorkPortfolio } from "@/components/WorkPortfolio";
import { CATEGORY_SEO_MAP, PORTFOLIO_OVERVIEW_SEO } from "@/data/portfolioCategorySeo";

interface CategoryPortfolioSearch {
  page?: number;
}

export const Route = createFileRoute("/portfolio_/$category")({
  validateSearch: (search: Record<string, unknown>): CategoryPortfolioSearch => {
    const pageParam = Number(search.page);
    return {
      page: pageParam > 1 ? pageParam : undefined,
    };
  },
  beforeLoad: ({ params }) => {
    const { category } = params;
    if (!isValidCategorySlug(category)) {
      const resolved = slugToCategory(category);
      if (resolved) {
        const slug = categoryToSlug(resolved);
        throw redirect({
          to: "/portfolio/$category",
          params: { category: slug },
          replace: true,
        } as any);
      }
      // If completely invalid slug, fallback to graphics
      throw redirect({
        to: "/portfolio/$category",
        params: { category: "graphics" },
        replace: true,
      } as any);
    }
  },
  head: ({ params }) => {
    const matched = slugToCategory(params.category);
    const categorySlug = matched ? categoryToSlug(matched) : params.category.toLowerCase();
    const canonicalUrl = `https://nakshikarsstudio.com/portfolio/${categorySlug}`;
    const seo = matched ? CATEGORY_SEO_MAP[matched] : PORTFOLIO_OVERVIEW_SEO;

    return {
      meta: [
        { title: seo.title },
        { name: "description", content: seo.metaDescription },
        { property: "og:site_name", content: "Nakshikar's Studio" },
        { property: "og:type", content: "website" },
        { property: "og:title", seoTitle: seo.title, content: seo.title },
        { property: "og:description", content: seo.metaDescription },
        { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
        { property: "og:url", content: canonicalUrl },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": `${canonicalUrl}#webpage`,
                url: canonicalUrl,
                name: seo.title,
                description: seo.metaDescription,
                isPartOf: {
                  "@id": "https://nakshikarsstudio.com/#website",
                },
                about: {
                  "@id": "https://nakshikarsstudio.com/#organization",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${canonicalUrl}#breadcrumb`,
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
                    name: matched || "Portfolio",
                    item: canonicalUrl,
                  },
                ],
              },
            ],
          },
        },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: CategoryPortfolioPage,
});

function CategoryPortfolioPage() {
  const { category: slug } = Route.useParams();
  const { page } = Route.useSearch();
  const matchedCategory = slugToCategory(slug) || "Graphics";

  return (
    <WorkPortfolio
      initialCategory={matchedCategory}
      initialPage={page || 1}
      isCategoryRoute={true}
    />
  );
}
