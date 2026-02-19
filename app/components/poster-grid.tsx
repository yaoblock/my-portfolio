import type { ReactNode } from "react";
import Image from "next/image";
import type { PosterItem } from "@/lib/content";
import { posterKey } from "@/lib/utils";

export default function PosterGrid({
  posters,
  alt,
  caption,
}: {
  posters: PosterItem[];
  alt: (poster: PosterItem) => string;
  caption: (poster: PosterItem) => ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6">
      {posters.map((poster) => (
        <figure key={posterKey(poster)} className="group">
          <div className="relative aspect-[2/3] overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800">
            <Image
              src={poster.image}
              alt={alt(poster)}
              fill
              referrerPolicy="no-referrer"
              sizes="(min-width: 640px) 180px, 30vw"
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            {caption(poster)}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
