import rawContent from "@/content.json";

export type ContentItem = {
  title: string;
  url?: string;
  description?: string;
  layout?: "quote";
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

export type NoteLink = {
  href: string;
  label: string;
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
  watchingNotes: NoteLink[];
  reading: ContentItem[];
  readingStats?: ReadingStats;
  readingPosters: PosterItem[];
  readingNotes: NoteLink[];
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
  watchingNotes: source.watchingNotes ?? [],
  reading: source.reading ?? [],
  readingStats: source.readingStats,
  readingPosters: source.readingPosters ?? [],
  readingNotes: source.readingNotes ?? [],
};

export default content;
