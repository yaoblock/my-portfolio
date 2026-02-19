import Image from "next/image";
import Link from "next/link";
import content from "@/lib/content";
import { itemKey, splitLines } from "@/lib/utils";
import Section from "./components/section";
import ItemTitle from "./components/item-title";
import ItemDescription from "./components/item-description";
import PosterGrid from "./components/poster-grid";
import NoteList from "./components/note-list";
import LifeCounter from "./components/life-counter";
import Avatar from "./components/avatar";
import AsciiSpinner from "./components/ascii-spinner";

const muted = "text-zinc-500 dark:text-zinc-400";
const secondary = "text-zinc-600 dark:text-zinc-400";
const linkHover = "hover:text-foreground transition-colors";

export default function Home() {
  const introTagline = splitLines(content.intro)[1];
  const email = content.contact?.email;
  const twitter = content.contact?.twitter;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <header className="mb-16 sm:mb-24">
          {/* Avatar + Title */}
          <div className="relative">
            <div className="absolute -top-8 -right-2 z-10 sm:-top-8 sm:right-4">
              <Avatar />
            </div>
            <h1 className="text-[clamp(3rem,15vw,6rem)] font-bold tracking-tight leading-none">
              {content.siteTitle}
            </h1>
          </div>

          {/* Intro */}
          <p className="mt-6 text-base font-bold tracking-tighter text-foreground sm:mt-8 sm:text-lg">
            I AM YAO.
          </p>
          <p
            className={`mt-2 text-base leading-relaxed sm:text-lg ${secondary}`}
          >
            {
              "A PR manager who shipped games at Tencent and NetEase, then fell into the crypto rabbit hole. Studied drama at Nanjing University and cinema at New York University — "
            }
            <em className="font-serif">
              no cut, still rolling, scene unknown.
            </em>
          </p>

          {/* Status */}
          <div className={`mt-4 text-base`}>
            <p className="tracking-tighter italic">
              <AsciiSpinner /> Learning vibe coding
            </p>
            <p className="italic font-semibold tracking-tighter">
              A PR manager who now opens pull requests.
            </p>
          </div>

          {/* Links */}
          <div className={`mt-6 flex items-center gap-4 text-sm ${muted}`}>
            {email && (
              <Link href={`mailto:${email}`} className={linkHover}>
                [Email]
              </Link>
            )}
            {twitter && (
              <Link
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={linkHover}
              >
                [Twitter]
              </Link>
            )}
          </div>
        </header>

        <Section id="working" title="Working">
          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
            {content.working.map((item) => (
              <li key={itemKey(item)}>
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
                  <li key={itemKey(item)}>
                    <span className="text-foreground">
                      <ItemTitle item={item} />
                    </span>
                    <ItemDescription item={item} />
                  </li>
                );
              }

              return (
                <li key={itemKey(item)}>
                  <div className="text-center">
                    {introTagline && (
                      <p className="font-medium text-foreground">
                        {introTagline}
                      </p>
                    )}
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
                    <div className={`mt-3 text-sm ${muted}`}>
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
          {content.watching.stats && (
            <p className={`text-sm mb-6 ${secondary}`}>
              Watched {content.watching.stats.watched}
              {" · "}
              Want to watch {content.watching.stats.wish}
            </p>
          )}

          {content.watching.posters.length > 0 && (
            <>
              <PosterGrid
                posters={content.watching.posters}
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
                    className={`underline underline-offset-2 ${secondary} ${linkHover}`}
                  >
                    Part 1
                  </a>
                  {" / "}
                  <a
                    href="https://x.com/liuyaoyao_611/status/2010710683462377953?s=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`underline underline-offset-2 ${secondary} ${linkHover}`}
                  >
                    Part 2
                  </a>
                </p>
                <NoteList links={content.watching.notes} />
              </div>
            </>
          )}
        </Section>

        <Section id="reading" title="Reading">
          {content.reading.stats && (
            <p className={`text-sm mb-6 ${secondary}`}>
              Read {content.reading.stats.read} books{" · "}
              Want to read {content.reading.stats.wish}
              {" · "}
              Reading {content.reading.stats.reading}
            </p>
          )}

          {content.reading.posters.length > 0 && (
            <PosterGrid
              posters={content.reading.posters}
              alt={(poster) => poster.title}
              caption={(poster) => (
                <>
                  <span className="font-medium text-foreground">
                    {poster.title}
                  </span>
                  <br />
                  {poster.subtitle}
                </>
              )}
            />
          )}

          <div className="mt-4">
            <NoteList links={content.reading.notes} />
          </div>
        </Section>

        <footer
          className={`pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm ${muted}`}
        >
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {[
              { href: "#working", label: "Working" },
              { href: "#writing", label: "Writing" },
              { href: "#watching", label: "Watching" },
              { href: "#reading", label: "Reading" },
            ].map((nav) => (
              <li key={nav.href}>
                <a href={nav.href} className={linkHover}>
                  {nav.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <LifeCounter />
          </div>
        </footer>
      </main>
    </div>
  );
}
