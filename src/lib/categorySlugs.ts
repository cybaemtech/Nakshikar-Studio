import { CATEGORIES, type Category } from "@/data/worksData";

export const CATEGORY_SLUG_MAP: Record<Category, string> = {
  "Graphics": "graphics",
  "Wall Design": "wall-design",
  "Paintings": "paintings",
  "Murals": "murals",
  "Nameplates": "nameplates",
  "Interior Support": "interior-support",
};

export const SLUG_TO_CATEGORY_MAP: Record<string, Category> = {
  "graphics": "Graphics",
  "wall-design": "Wall Design",
  "walldesign": "Wall Design",
  "wall design": "Wall Design",
  "paintings": "Paintings",
  "painting": "Paintings",
  "murals": "Murals",
  "mural": "Murals",
  "nameplates": "Nameplates",
  "nameplate": "Nameplates",
  "interior-support": "Interior Support",
  "interiorsupport": "Interior Support",
  "interior support": "Interior Support",
};

export const VALID_CATEGORY_SLUGS = [
  "graphics",
  "wall-design",
  "paintings",
  "murals",
  "nameplates",
  "interior-support",
] as const;

export type ValidCategorySlug = (typeof VALID_CATEGORY_SLUGS)[number];

export function categoryToSlug(category: string): string {
  const matched = CATEGORIES.find(
    (c) => c.toLowerCase() === category.toLowerCase()
  );
  if (matched && CATEGORY_SLUG_MAP[matched]) {
    return CATEGORY_SLUG_MAP[matched];
  }
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCategory(slug: string): Category | null {
  if (!slug) return null;
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  if (SLUG_TO_CATEGORY_MAP[normalized]) {
    return SLUG_TO_CATEGORY_MAP[normalized];
  }
  const directMatch = CATEGORIES.find(
    (c) => c.toLowerCase() === normalized || CATEGORY_SLUG_MAP[c] === normalized
  );
  return directMatch || null;
}

export function isValidCategorySlug(slug: string): boolean {
  if (!slug) return false;
  const normalized = decodeURIComponent(slug).toLowerCase().trim();
  return (VALID_CATEGORY_SLUGS as readonly string[]).includes(normalized);
}
