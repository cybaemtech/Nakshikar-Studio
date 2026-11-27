export declare const DEFAULT_OG_IMAGE: string;

export interface RouteSeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
}

export declare const ROUTES_SEO: Record<string, RouteSeoMeta>;

export declare function escapeAttr(text: string): string;
export declare function escapeTitle(text: string): string;
export declare function transformHtmlWithSeo(html: string, seo: RouteSeoMeta): string;

