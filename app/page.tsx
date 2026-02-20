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
          <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {/* DODO */}
            <li className="py-8 first:pt-0">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-foreground font-semibold text-lg">
                    PR Director, DODO
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2021 – 2025</p>
                </div>
                <Image src="/logo/dodo.png" alt="" width={120} height={40} className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert" />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                DODO - A decentralized exchange backed by Coinbase Ventures, with $141B+ in trading volume and 3M+ users. I built <a href="https://dodotopia.notion.site/Dr-DODO-is-Researching-6c18bbca8ea0465ab94a61ff5d2d7682" target="_blank" rel="noopener noreferrer" className="not-italic font-semibold text-foreground no-underline hover:text-foreground">Dr.DODO<sup className="text-[0.6em] ml-0.5 no-underline">↗</sup></a> from scratch — a DeFi research brand and 6-person team that published industry reports with protocols like CowSwap and leading Market Makers. Hosted AMAs, spoke on conference panels, and advised early-stage crypto funds on due diligence.
              </p>
              <div className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}>
                <span>#DeFi Research</span>
                <span>#Content Strategy</span>
                <span>#Public Speaking</span>
              </div>
            </li>

            {/* Tencent */}
            <li className="py-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-foreground font-semibold text-lg">
                    Senior PR Manager, Tencent
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2017 – 2020</p>
                </div>
                <Image src="/logo/tencent.avif" alt="" width={120} height={40} className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert" />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                Led a 6-person PR team, 100+ campaigns. Headed the China launch of <em className="not-italic font-semibold text-foreground">PUBG</em> (绝地求生) — the game faced massive media and regulatory pressure, but we turned it around through crisis PR and media strategy, got it to market, and won a company-level award. Also ran <em className="not-italic font-semibold text-foreground">Naruto Mobile</em> (火影忍者) PR for two years: 15.3M new users, 200% KPI.
              </p>
              <div className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}>
                <span>#Crisis PR</span>
                <span>#Media Relations</span>
                <span>#Campaign Strategy</span>
              </div>
            </li>

            {/* NetEase */}
            <li className="py-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-foreground font-semibold text-lg">
                    PR Manager, NetEase
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2014 – 2017</p>
                </div>
                <Image src="/logo/netease.png" alt="" width={120} height={40} className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert" />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                Ran PR and brand marketing for <em className="not-italic font-semibold text-foreground">Fantasy Westward Journey</em> (梦幻西游) — one of China's most iconic online games. Partnered with top idols like TFBOYS and turned the game IP into film, theater, and animation. Wrote for company leadership and shaped its public narrative. As one of a 5-person founding team, built NetEase Games' social-media operation from zero.
              </p>
              <div className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}>
                <span>#Brand Marketing</span>
                <span>#IP Collaboration</span>
                <span>#Executive Communications</span>
              </div>
            </li>
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
