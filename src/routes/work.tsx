import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, categoryToSlug } from "@/lib/categorySlugs";
import { WorkPortfolio } from "@/components/WorkPortfolio";

interface WorkSearch {
  category?: string;
  page?: number;
}

export const Route = createFileRoute("/work")({
  validateSearch: (search: Record<string, unknown>): WorkSearch => {
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
        to: `/work/${slug}` as any,
        search: pageNum > 1 ? { page: pageNum } : {},
        replace: true,
      });
    }
  },
  head: () => ({
    meta: [
      { title: "Murals, Paintings & Creative Projects Portfolio | Nakshikar's Studio" },
      {
        name: "description",
        content:
          "View selected murals, paintings, wall designs, graphics, nameplates and interior projects created by Nakshikars Studio for diverse spaces and brands.",
      },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Murals, Paintings & Creative Projects Portfolio | Nakshikar's Studio" },
      {
        property: "og:description",
        content:
          "View selected murals, paintings, wall designs, graphics, nameplates and interior projects created by Nakshikars Studio for diverse spaces and brands.",
      },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/work" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": "https://nakshikarsstudio.com/work#webpage",
              url: "https://nakshikarsstudio.com/work",
              name: "Murals, Paintings & Creative Projects Portfolio | Nakshikar's Studio",
              description:
                "View selected murals, paintings, wall designs, graphics, nameplates and interior projects created by Nakshikars Studio for diverse spaces and brands.",
              isPartOf: {
                "@id": "https://nakshikarsstudio.com/#website",
              },
              about: {
                "@id": "https://nakshikarsstudio.com/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/work#breadcrumb",
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
                  "name": "Portfolio",
                  "item": "https://nakshikarsstudio.com/work",
                },
              ],
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://nakshikarsstudio.com/work" }],
  }),
  component: WorkRouteComponent,
});

function WorkRouteComponent() {
  const { page } = Route.useSearch();
  return (
    <WorkPortfolio
      initialCategory="Graphics"
      initialPage={page || 1}
      isCategoryRoute={false}
    />
  );
}
