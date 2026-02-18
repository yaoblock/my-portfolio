import rawContent from "@/content.json";

export type ContentItem = {
  title: string;
  url?: string;
  description?: string;
};

export type PosterItem = {
  title: string;
  subtitle: string;
  image: string;
};

export type WatchingStats = {
  watched: number;
  wish: number;
};

export type ReadingStats = {
  read: number;
  wish: number;
  reading: number;
};

export type SiteContent = {
  siteTitle: string;
  intro?: string;
  contact?: {
    email?: string;
    twitter?: string;
  };
  working: ContentItem[];
  writing: ContentItem[];
  watching: ContentItem[];
  watchingStats?: WatchingStats;
  watchingPosters: PosterItem[];
  reading: ContentItem[];
  readingStats?: ReadingStats;
  readingPosters: PosterItem[];
};

const source = rawContent as Partial<SiteContent>;

const content: SiteContent = {
  siteTitle: source.siteTitle ?? "",
  intro: source.intro,
  contact: source.contact,
  working: source.working ?? [],
  writing: source.writing ?? [],
  watching: source.watching ?? [],
  watchingStats: source.watchingStats,
  watchingPosters: source.watchingPosters ?? [],
  reading: source.reading ?? [],
  readingStats: source.readingStats,
  readingPosters: source.readingPosters ?? [],
};

export default content;
