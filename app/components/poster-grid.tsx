import type { ReactNode } from "react";
import Image from "next/image";
import type { Poster } from "@/lib/content";
import { posterKey } from "@/lib/utils";

export default function PosterGrid({
  posters,
  alt,
  caption,
}: {
  posters: Poster[];
  alt: (poster: Poster) => string;
  caption: (poster: Poster) => ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-6">
      {posters.map((poster) => (
        <figure key={posterKey(poster)} className="group">
          <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={poster.image}
              alt={alt(poster)}
              fill
              referrerPolicy="no-referrer"
              sizes="(min-width: 640px) 180px, 30vw"
              className="object-cover"
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
