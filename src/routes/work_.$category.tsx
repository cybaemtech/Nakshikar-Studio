import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, isValidCategorySlug, categoryToSlug } from "@/lib/categorySlugs";
import { WorkPortfolio } from "@/components/WorkPortfolio";

interface CategoryWorkSearch {
  page?: number;
}

export const Route = createFileRoute("/work_/$category")({
  validateSearch: (search: Record<string, unknown>): CategoryWorkSearch => {
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
          to: `/work/${slug}` as any,
          replace: true,
        });
      }
      // If completely invalid slug, fallback to graphics
      throw redirect({
        to: "/work/graphics" as any,
        replace: true,
      });
    }
  },
  head: ({ params }) => {
    const matched = slugToCategory(params.category);
    const categorySlug = matched ? categoryToSlug(matched) : params.category.toLowerCase();
    const canonicalUrl = `https://nakshikarsstudio.com/work/${categorySlug}`;
    const pageTitle = `${matched || "Creative Projects"} Portfolio | Nakshikar's Studio`;
    const pageDesc = `View selected ${matched ? matched.toLowerCase() : "creative"} projects created by Nakshikar's Studio in Pune, PCMC & Mumbai.`;

    return {
      meta: [
        { title: pageTitle },
        { name: "description", content: pageDesc },
        { property: "og:site_name", content: "Nakshikar's Studio" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: pageDesc },
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
                name: pageTitle,
                description: pageDesc,
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
                    "position": 1,
                    "name": "Home",
                    "item": "https://nakshikarsstudio.com/",
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": matched || "Portfolio",
                    "item": canonicalUrl,
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
  component: CategoryWorkPage,
});

function CategoryWorkPage() {
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
