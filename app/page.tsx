import type { ReactNode } from "react";
import Image from "next/image";
import content, {
  type ContentItem,
  type NoteLink,
  type PosterItem,
} from "@/lib/content";
import LifeCounter from "./LifeCounter";

function externalLinkProps(url?: string) {
  if (!url || !url.startsWith("http")) {
    return {};
  }
  return { target: "_blank" as const, rel: "noopener noreferrer" };
}

function itemKey(item: ContentItem): string {
  return `${item.title}::${item.url ?? ""}::${item.description ?? ""}`;
}

function posterKey(poster: PosterItem): string {
  return `${poster.image}::${poster.title}::${poster.subtitle}`;
}

function splitLines(text?: string): string[] {
  return text ? text.split("\n").filter(Boolean) : [];
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8 mb-20">
      <h2 className="text-base font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ItemTitle({ item }: { item: ContentItem }) {
  const url = item.url?.trim();
  if (!url) {
    return <>{item.title}</>;
  }

  return (
    <a
      href={url}
      className="hover:text-foreground underline underline-offset-2"
      {...externalLinkProps(url)}
    >
      {item.title}↗
    </a>
  );
}

function ItemDescription({
  item,
  highlightResearchTeam = false,
}: {
  item: ContentItem;
  highlightResearchTeam?: boolean;
}) {
  if (!item.description) {
    return null;
  }

  const lines = splitLines(item.description);
  const key = itemKey(item);
  const canLinkResearchTeam =
    highlightResearchTeam && item.title === "DODO DEX" && Boolean(item.url);

  const renderLine = (line: string) => {
    if (!canLinkResearchTeam || !item.url || !line.includes("Research team")) {
      return line;
    }

    const [before, after] = line.split("Research team");
    return (
      <>
        {before}
        <a
          href={item.url}
          className="hover:text-foreground underline underline-offset-2 text-zinc-500 dark:text-zinc-400"
          {...externalLinkProps(item.url)}
        >
          Research team↗
        </a>
        {after}
      </>
    );
  };

  return (
    <div className="text-zinc-500 dark:text-zinc-400 mt-0.5 space-y-0.5">
      {lines.map((line, lineIndex) => {
        const lineKey = `${key}::line::${lineIndex}`;
        if (line.startsWith("*")) {
          return (
            <div key={lineKey} className="flex gap-2">
              <span className="shrink-0">•</span>
              <span>{renderLine(line.slice(1))}</span>
            </div>
          );
        }
        return <div key={lineKey}>{renderLine(line)}</div>;
      })}
    </div>
  );
}

function PosterGrid({
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

function NoteList({ links }: { links: NoteLink[] }) {
  return (
    <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground underline underline-offset-2"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const introLines = splitLines(content.intro);
  const introHeader = introLines[0];
  const introTagline = introLines[1];
  const email = content.contact?.email;
  const twitter = content.contact?.twitter;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
        <header className="mb-12 sm:mb-20">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {content.siteTitle}
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Hi I&apos;m YAO</p>

          <div className="mt-4 flex flex-row items-end gap-3 sm:gap-6">
            <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
              {introHeader && (
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
                  {introHeader.split(" | ").map((line) => (
                    <span key={line} className="block">
                      {line.trim()}
                    </span>
                  ))}
                </p>
              )}

              {(email || twitter) && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-foreground underline underline-offset-2"
                    >
                      Email
                    </a>
                  )}
                  {email && twitter && " · "}
                  {twitter && (
                    <a
                      href={twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground underline underline-offset-2"
                    >
                      Twitter
                    </a>
                  )}
                </p>
              )}
            </div>

            <div className="flex shrink-0 flex-col items-end gap-2">
              <Image
                src="/avatar.png"
                alt="YAO avatar"
                width={96}
                height={96}
                priority
                sizes="(min-width: 640px) 96px, 80px"
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
              <LifeCounter />
            </div>
          </div>
        </header>

        <Section id="working" title="Working">
          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
            {content.working.map((item) => (
              <li key={itemKey(item)} className="block">
                <span className="text-foreground">
                  <ItemTitle item={item} />
                </span>
                <ItemDescription item={item} highlightResearchTeam />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="writing" title="Writing">
          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
            {content.writing.map((item) => {
              if (item.layout !== "quote") {
                return (
                  <li key={itemKey(item)} className="block">
                    <span className="text-foreground">
                      <ItemTitle item={item} />
                    </span>
                    <ItemDescription item={item} />
                  </li>
                );
              }

              return (
                <li key={itemKey(item)} className="block">
                  <div className="text-center">
                    {introTagline && <p className="font-medium text-foreground">{introTagline}</p>}
                    <span className="text-foreground mt-2 block">
                      <ItemTitle item={item} />
                    </span>
                    <Image
                      src="/quote-note.png"
                      alt="Le besoin d'avoir raison, marque d'esprit vulgaire. / 加缪笔记"
                      width={800}
                      height={500}
                      sizes="(max-width: 640px) 100vw, 24rem"
                      className="mt-3 h-auto max-w-sm rounded object-cover mx-auto block"
                    />
                    <div className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm">
                      <p>The need to be right is the mark of a vulgar mind.</p>
                      <p className="mt-1">— Albert Camus</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Section>

        <Section id="watching" title="Watching">
          {content.watchingStats && (
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Watched {content.watchingStats.watched}
              {" · "}
              Want to watch {content.watchingStats.wish}
            </p>
          )}

          {content.watchingPosters.length > 0 && (
            <>
              <PosterGrid
                posters={content.watchingPosters}
                alt={(poster) => poster.subtitle}
                caption={(poster) => poster.subtitle}
              />

              <div className="mt-6">
                <p className="text-sm text-foreground mb-3">
                  <span className="font-medium">2025 favorites：</span>{" "}
                  <a
                    href="https://x.com/liuyaoyao_611/status/2010707878706102391?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2"
                  >
                    Part 1
                  </a>
                  {" / "}
                  <a
                    href="https://x.com/liuyaoyao_611/status/2010710683462377953?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2"
                  >
                    Part 2
                  </a>
                </p>
                <NoteList links={content.watchingNotes} />
              </div>
            </>
          )}
        </Section>

        <Section id="reading" title="Reading">
          {content.readingStats && (
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              Read {content.readingStats.read} books{" · "}
              Want to read {content.readingStats.wish}{" · "}
              Reading {content.readingStats.reading}
            </p>
          )}

          {content.readingPosters.length > 0 && (
            <PosterGrid
              posters={content.readingPosters}
              alt={(poster) => poster.title}
              caption={(poster) => (
                <>
                  <span className="font-medium text-foreground">{poster.title}</span>
                  <br />
                  {poster.subtitle}
                </>
              )}
            />
          )}

          <div className="mt-4">
            <NoteList links={content.readingNotes} />
          </div>
        </Section>

        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { href: "#working", label: "Working" },
              { href: "#writing", label: "Writing" },
              { href: "#watching", label: "Watching" },
              { href: "#reading", label: "Reading" },
            ].map((nav) => (
              <li key={nav.href}>
                <a href={nav.href} className="hover:text-foreground">
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4">Data updated annually.</p>
        </footer>
      </main>
    </div>
  );
}
