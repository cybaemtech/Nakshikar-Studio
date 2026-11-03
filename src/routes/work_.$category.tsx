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
    if (typeof window !== "undefined" && resolved) {
      try {
        sessionStorage.setItem("portfolio_active_category", resolved);
      } catch (e) {}
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
