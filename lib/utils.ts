import type { ContentItem, PosterItem } from "./content";

export function externalLinkProps(url?: string) {
  if (!url || !url.startsWith("http")) {
    return {};
  }
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

export function itemKey(item: ContentItem): string {
  return `${item.title}::${item.url ?? ""}::${item.description ?? ""}`;
}

export function posterKey(poster: PosterItem): string {
  return `${poster.image}::${poster.title}::${poster.subtitle}`;
}

export function splitLines(text?: string): string[] {
  return text ? text.split("\n").filter(Boolean) : [];
}
