import type { Poster } from "./content";

export function posterKey(poster: Poster): string {
  return `${poster.image}::${poster.title}::${poster.subtitle}`;
}
