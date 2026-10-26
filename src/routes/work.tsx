import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, categoryToSlug } from "@/lib/categorySlugs";

interface LegacyWorkSearch {
  category?: string;
  page?: number;
}

export const Route = createFileRoute("/work")({
  validateSearch: (search: Record<string, unknown>): LegacyWorkSearch => {
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

    const pageNum = Number(search.page);
    throw redirect({
      to: "/portfolio",
      search: pageNum > 1 ? { page: pageNum } : {},
      replace: true,
    } as any);
  },
  component: () => null,
});
