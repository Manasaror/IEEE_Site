export interface SeoProps {
  /** Page title (rendered as `<title>` and og:title / twitter:title). */
  title: string;
  /** Meta description used for search results and social previews. */
  description?: string;
  /** Absolute or root-relative URL to the canonical version of the page. */
  canonicalUrl?: string;
  /** Open Graph preview image (absolute URL recommended). */
  ogImage?: string;
  /** Open Graph content type, e.g. "website" | "article". */
  ogType?: string;
  /** Prevents the page from being indexed when true. */
  noindex?: boolean;
}
