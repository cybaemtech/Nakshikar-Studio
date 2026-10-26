import { createFileRoute, redirect } from "@tanstack/react-router";
import { slugToCategory, categoryToSlug } from "@/lib/categorySlugs";

interface LegacyCategoryWorkSearch {
  page?: number;
}

export const Route = createFileRoute("/work_/$category")({
  validateSearch: (search: Record<string, unknown>): LegacyCategoryWorkSearch => {
    const pageParam = Number(search.page);
    return {
      page: pageParam > 1 ? pageParam : undefined,
    };
  },
  beforeLoad: ({ params, search }) => {
    const { category } = params;
    const resolved = slugToCategory(category);
    const slug = resolved ? categoryToSlug(resolved) : category.toLowerCase();
    const pageNum = Number(search.page);

    throw redirect({
      to: "/portfolio/$category",
      params: { category: slug },
      search: pageNum > 1 ? { page: pageNum } : {},
      replace: true,
    } as any);
  },
  component: () => null,
});
