import rawContent from "@/content.json";

/** A poster card (book cover, movie poster, etc.). */
export type Poster = {
  title: string;
  subtitle: string;
  image: string;
};

/** An article or note entry. */
export type Article = {
  title: string;
  date?: string;
  href: string;
};

/** A curated favorites group (e.g. "2025 favorites"). */
export type FavoriteGroup = {
  title: string;
  links: { label: string; href: string }[];
};

/** The writing section with a quote banner and articles. */
export type Writing = {
  quote: { image: string; text: string; author: string };
  notionUrl: string;
  articles: Article[];
};

/** A media collection section (watching / reading). */
export type Shelf = {
  stats?: Record<string, number>;
  posters: Poster[];
  articles?: Article[];
  favorites?: FavoriteGroup[];
};

/** Root content schema for the portfolio. */
export type SiteContent = {
  siteTitle: string;
  contact?: { email?: string; twitter?: string };
  writing: Writing;
  watching: Shelf;
  reading: Shelf;
};

const content = rawContent as unknown as SiteContent;

export default content;
