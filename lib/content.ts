import rawContent from "@/content.json";

/** A text entry with optional link and description. */
export type Entry = {
  title: string;
  url?: string;
  description?: string;
  period?: string;
  layout?: "quote";
  logo?: string;
  tags?: string[];
};

/** A poster card (book cover, movie poster, etc.). */
export type Poster = {
  title: string;
  subtitle: string;
  image: string;
};

/** An external link. */
export type Link = {
  href: string;
  label: string;
  date?: string;
};

/** A media collection section (watching / reading). */
export type Shelf = {
  stats?: Record<string, number>;
  posters: Poster[];
  notes: Link[];
};

/** Root content schema for the portfolio. */
export type SiteContent = {
  siteTitle: string;
  intro?: string;
  contact?: { email?: string; twitter?: string };
  working: Entry[];
  writing: Entry[];
  watching: Shelf;
  reading: Shelf;
};

const content = rawContent as unknown as SiteContent;

export default content;
