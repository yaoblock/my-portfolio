import Image from "next/image";
import Link from "next/link";
import content from "@/lib/content";
import Section from "./components/section";
import PosterGrid from "./components/poster-grid";
import LifeCounter from "./components/life-counter";
import ExternalLink from "./components/external-link";
import ArticleList from "./components/article-list";
import Avatar from "./components/avatar";
import AsciiSpinner from "./components/ascii-spinner";

const muted = "text-zinc-500 dark:text-zinc-400";
const secondary = "text-zinc-600 dark:text-zinc-400";
const linkHover = "hover:text-foreground transition-colors";

export default function Home() {
  const email = content.contact?.email;
  const twitter = content.contact?.twitter;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-2xl px-6 py-24 sm:px-8">
        <header className="mb-16 sm:mb-24">
          {/* Avatar + Title */}
          <div className="relative group/header">
            <div className="absolute -top-12 right-0 z-10 sm:-top-10 sm:right-4">
              <Avatar />
            </div>
            <h1 className="glitch-on-hover text-[clamp(2.8rem,14vw,6rem)] font-bold tracking-tight leading-none whitespace-nowrap">
              {content.siteTitle}
            </h1>
          </div>

          {/* Intro */}
          <div className="mt-6 flex items-baseline justify-between sm:mt-8">
            <p className="text-base font-bold tracking-tighter text-foreground sm:text-lg">
              I AM YAO.
            </p>
            <LifeCounter />
          </div>
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
                    Research Lead
                    <span className="hidden sm:inline">, DODO</span>
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2021 – 2025</p>
                </div>
                <Image
                  src="/logo/dodo.png"
                  alt=""
                  width={120}
                  height={40}
                  className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert"
                />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                DODO - A decentralized exchange backed by Coinbase Ventures,
                with $141B+ in trading volume and 3M+ users. I built{" "}
                <ExternalLink href="https://dodotopia.notion.site/Dr-DODO-is-Researching-6c18bbca8ea0465ab94a61ff5d2d7682">
                  Dr.DODO
                </ExternalLink>{" "}
                from scratch — a DeFi research brand and 6-person team that
                published industry reports with protocols like CowSwap and
                leading Market Makers. Hosted AMAs, spoke on conference panels,
                and advised early-stage crypto funds on due diligence.
              </p>
              <div
                className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}
              >
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
                    Senior PR Manager
                    <span className="hidden sm:inline">, Tencent</span>
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2017 – 2020</p>
                </div>
                <Image
                  src="/logo/tencent.avif"
                  alt=""
                  width={120}
                  height={40}
                  className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert"
                />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                Led a 6-person PR team, 100+ campaigns. Headed the China launch
                of{" "}
                <em className="not-italic font-semibold text-foreground">
                  PUBG
                </em>{" "}
                (绝地求生) — the game faced massive media and regulatory
                pressure, but we turned it around through crisis PR and media
                strategy, got it to market, and won a company-level award. Also
                ran{" "}
                <em className="not-italic font-semibold text-foreground">
                  Naruto Mobile
                </em>{" "}
                (火影忍者) PR for two years: 15.3M new users, 200% KPI.
              </p>
              <div
                className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}
              >
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
                    PR Manager
                    <span className="hidden sm:inline">, NetEase</span>
                  </h3>
                  <p className={`mt-1 text-sm ${muted}`}>2014 – 2017</p>
                </div>
                <Image
                  src="/logo/netease.png"
                  alt=""
                  width={120}
                  height={40}
                  className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert"
                />
              </div>
              <p className={`mt-3 leading-relaxed ${secondary}`}>
                Ran PR and brand marketing for{" "}
                <em className="not-italic font-semibold text-foreground">
                  Fantasy Westward Journey
                </em>{" "}
                (梦幻西游) — one of China&apos;s most iconic online games.
                Partnered with top idols like TFBOYS and turned the game IP into
                film, theater, and animation. Wrote for company leadership and
                shaped its public narrative. As one of a 5-person founding team,
                built NetEase Games&apos; social-media operation from zero.
              </p>
              <div
                className={`mt-3 flex flex-wrap gap-x-3 text-sm tracking-wide ${muted}`}
              >
                <span>#Brand Marketing</span>
                <span>#IP Collaboration</span>
                <span>#Executive Communications</span>
              </div>
            </li>
          </ul>
        </Section>

        {/* TODO: Writing section content is placeholder — replace with real articles */}
        <Section id="writing" title="Writing">
          <div>
            <Image
              src={content.writing.quote.image}
              alt={content.writing.quote.text}
              width={800}
              height={500}
              sizes="(max-width: 640px) 100vw, 100%"
              className="w-full rounded-lg object-cover"
            />
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <p className={`text-sm leading-relaxed ${secondary}`}>
                  {content.writing.quote.text}
                </p>
                <p className={`mt-1 text-sm ${muted}`}>
                  — {content.writing.quote.author}
                </p>
              </div>
              <ExternalLink
                href={content.writing.notionUrl}
                className="text-sm shrink-0"
              >
                Writer&apos;s Block
              </ExternalLink>
            </div>

            <div className="mt-8">
              <ArticleList articles={content.writing.articles} />
            </div>
          </div>
        </Section>

        <Section id="watching" title="Watching">
          {content.watching.posters.length > 0 && (
            <>
              <div className="overflow-hidden">
                {content.watching.stats && (
                  <p
                    className="text-[8rem] sm:text-[12rem] font-black tracking-tighter text-zinc-200 dark:text-zinc-800 leading-none"
                    aria-hidden="true"
                  >
                    {content.watching.stats.watched}
                  </p>
                )}
                <div className="-mt-12 sm:-mt-16">
                  <PosterGrid
                    posters={content.watching.posters}
                    alt={(poster) => poster.subtitle}
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
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-foreground mb-3">
                  <span className="font-medium">2025 favorites：</span>{" "}
                  <a href="https://x.com/liuyaoyao_611/status/2010707878706102391?s=20" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2">Part 1</a>
                  {" / "}
                  <a href="https://x.com/liuyaoyao_611/status/2010710683462377953?s=20" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2">Part 2</a>
                </p>
              </div>
            </>
          )}
        </Section>

        <Section id="reading" title="Reading">
          {content.reading.posters.length > 0 && (
            <div className="overflow-hidden">
              {content.reading.stats && (
                <p
                  className="text-[8rem] sm:text-[12rem] font-black tracking-tighter text-zinc-200 dark:text-zinc-800 leading-none"
                  aria-hidden="true"
                >
                  {content.reading.stats.read}
                </p>
              )}
              <div className="-mt-12 sm:-mt-16">
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
              </div>
            </div>
          )}

          {content.reading.articles && content.reading.articles.length > 0 && (
            <div className="mt-6">
              <ArticleList articles={content.reading.articles} />
            </div>
          )}
        </Section>
      </main>
    </div>
  );
}
