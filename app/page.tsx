import content from "@/content.json";
import LifeCounter from "./LifeCounter";

type Item = { title: string; url: string; description: string };

function Section({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: Item[];
}) {
  return (
    <section id={id} className="scroll-mt-8 mb-20">
      <h2 className="text-base font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
        {title}
      </h2>
      <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
        {items.map((item, i) => {
          const linkOnResearchTeam = item.title === "DODO DEX" && item.url;
          const linkProps = item.url?.startsWith("http")
            ? { target: "_blank" as const, rel: "noopener noreferrer" }
            : {};
          const wrapResearchTeam = (text: string) => {
            if (!linkOnResearchTeam || !item.url || !text.includes("Research team"))
              return text;
            const [before, after] = text.split("Research team");
            return (
              <>
                {before}
                <a
                  href={item.url}
                  className="hover:text-foreground underline underline-offset-2 text-zinc-500 dark:text-zinc-400"
                  {...linkProps}
                >
                  Research team↗
                </a>
                {after}
              </>
            );
          };
          return (
            <li key={i} className="block">
              <span className="text-foreground">
                {!linkOnResearchTeam && item.url ? (
                  <a
                    href={item.url}
                    className="hover:text-foreground underline underline-offset-2"
                    {...linkProps}
                  >
                    {item.title}↗
                  </a>
                ) : (
                  item.title
                )}
              </span>
              {item.description && (
                <div className="text-zinc-500 dark:text-zinc-400 mt-0.5 space-y-0.5">
                  {item.description.split("\n").map((line, j) =>
                    line.startsWith("*") ? (
                      <div key={j} className="flex gap-2">
                        <span className="shrink-0">•</span>
                        <span>{wrapResearchTeam(line.slice(1))}</span>
                      </div>
                    ) : (
                      <div key={j}>{wrapResearchTeam(line)}</div>
                    )
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
        <header className="mb-12 sm:mb-20">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {content.siteTitle}
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Hi I&apos;m YAO
          </p>
          <div className="mt-4 flex flex-row items-end gap-3 sm:gap-6">
            <div className="min-w-0 flex-1 space-y-2 sm:space-y-3">
              {"intro" in content && content.intro && (
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
                  {content.intro.split("\n")[0].split(" | ").map((line, i) => (
                    <span key={i} className="block">{line.trim()}</span>
                  ))}
                </p>
              )}
              {"contact" in content && content.contact && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <a
                    href={`mailto:${(content.contact as { email?: string }).email}`}
                    className="hover:text-foreground underline underline-offset-2"
                  >
                    Email
                  </a>
                  {" · "}
                  <a
                    href={(content.contact as { twitter?: string }).twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground underline underline-offset-2"
                  >
                    Twitter
                  </a>
                </p>
              )}
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <img
                src="/avatar.png"
                alt=""
                className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24"
              />
              <LifeCounter />
            </div>
          </div>
        </header>

        <Section id="working" title="Working" items={content.working} />
        <section id="writing" className="scroll-mt-8 mb-20">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
            Writing
          </h2>
          <ul className="space-y-4 text-zinc-700 dark:text-zinc-300">
            {content.writing.map((item: Item, i: number) => {
              const isCamus = item.description?.includes("Albert Camus");
              return (
                <li key={i} className="block">
                  {isCamus ? (
                    <div className="text-center">
                      {"intro" in content && content.intro && content.intro.split("\n")[1] && (
                        <p className="font-medium text-foreground">
                          {content.intro.split("\n")[1]}
                        </p>
                      )}
                      <span className="text-foreground mt-2 block">
                        {item.url ? (
                          <a
                            href={item.url}
                            className="hover:text-foreground underline underline-offset-2"
                            {...(item.url.startsWith("http") && {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            })}
                          >
                            {item.title}↗
                          </a>
                        ) : (
                          item.title
                        )}
                      </span>
                      <img
                        src="/quote-note.png"
                        alt="Le besoin d'avoir raison, marque d'esprit vulgaire. / 加缪笔记"
                        className="mt-3 max-w-sm rounded object-cover mx-auto block"
                      />
                      <div className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm">
                        <p>The need to be right is the mark of a vulgar mind.</p>
                        <p className="mt-1">— Albert Camus</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-foreground">
                        {item.url ? (
                          <a
                            href={item.url}
                            className="hover:text-foreground underline underline-offset-2"
                            {...(item.url.startsWith("http") && {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            })}
                          >
                            {item.title}↗
                          </a>
                        ) : (
                          item.title
                        )}
                      </span>
                      {item.description && (
                        <div className="text-zinc-500 dark:text-zinc-400 mt-0.5 space-y-0.5">
                          {item.description.split("\n").map((line: string, j: number) => (
                            <div key={j}>{line}</div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
        <section id="watching" className="scroll-mt-8 mb-20">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
            Watching
          </h2>
          {"watchingStats" in content && content.watchingStats && (
            <>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                Watched {(content.watchingStats as { watched: number }).watched}
                {" · "}Want to watch {(content.watchingStats as { wish: number }).wish}
              </p>
            </>
          )}
          {"watchingPosters" in content && Array.isArray(content.watchingPosters) && content.watchingPosters.length > 0 && (
            <>
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {content.watchingPosters.map((p: { title: string; subtitle: string; image: string }, i: number) => (
                  <figure key={i} className="group">
                    <div className="aspect-[2/3] overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800">
                      <img
                        src={p.image}
                        alt={p.subtitle}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                      {p.subtitle}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm text-foreground mb-3">
                  <span className="font-medium">2025 favorites：</span>{" "}
                  <a href="https://x.com/liuyaoyao_611/status/2010707878706102391?s=20" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2">Part 1</a>
                  {" / "}
                  <a href="https://x.com/liuyaoyao_611/status/2010710683462377953?s=20" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-foreground underline underline-offset-2">Part 2</a>
                </p>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
                  <li>
                    <a href="https://www.notion.so/Film-Journal-Mikey-and-Nicky-17acf26e6fb580198e13e04d5e674edf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">
                      Film Journal: Mikey and Nicky↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.notion.so/059c248d9d2f493dbcbeb53f9f7f88ef?v=e4f0ae46b0d149a29683079c35ceea99&p=303cf26e6fb580268c94cdd01484b5ca&pm=s" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">
                      History of the Reception of the film The Bitter Tea of General Yen↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.notion.so/059c248d9d2f493dbcbeb53f9f7f88ef?v=e4f0ae46b0d149a29683079c35ceea99&p=303cf26e6fb580d2bb0cfb07903c06a2&pm=s" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">
                      A Preliminary Study：Exploring the Roles of Yingyu in Early Chinese Film History↗
                    </a>
                  </li>
                  <li>
                    <a href="https://www.notion.so/059c248d9d2f493dbcbeb53f9f7f88ef?v=e4f0ae46b0d149a29683079c35ceea99&p=17acf26e6fb580b392d7f2b6bbbff2e9&pm=s" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">
                      《如梦之梦》的梦里梦外↗
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </section>
        <section id="reading" className="scroll-mt-8 mb-20">
          <h2 className="text-base font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
            Reading
          </h2>
          {"readingStats" in content && content.readingStats && (
            <>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                Read {(content.readingStats as { read: number }).read} books{" · "}Want to read {(content.readingStats as { wish: number }).wish}{" · "}Reading {(content.readingStats as { reading: number }).reading}
              </p>
            </>
          )}
          {"readingPosters" in content && Array.isArray(content.readingPosters) && content.readingPosters.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {content.readingPosters.map((p: { title: string; subtitle: string; image: string }, i: number) => (
                <figure key={i} className="group">
                  <div className="aspect-[2/3] overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                    <span className="font-medium text-foreground">{p.title}</span>
                    <br />
                    {p.subtitle}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          <p>
            <a href="https://www.notion.so/2022-Good-Reading-for-Hard-Times-17acf26e6fb580acbbe5d5fc09a6038b" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">2022书单｜Good Reading for Hard Times↗</a>
          </p>
          <p>
            <a href="https://www.notion.so/17acf26e6fb580819a94dfe30a7b9958" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">沿着阅读的方向↗</a>
          </p>
          <p>
            <a href="https://www.notion.so/17acf26e6fb5804e8fa4fbda24b3a17f" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">春来不是读书天↗</a>
          </p>
          <p>
            <a href="https://www.notion.so/17acf26e6fb580a180f4f475506a070f" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">放假了，读点好玩的书吧↗</a>
          </p>
          <p>
            <a href="https://www.notion.so/17acf26e6fb58032b85eee661e6ece17?v=17acf26e6fb581458469000c30560894&p=17acf26e6fb580dd9518ca83a36ccd41&pm=s" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">2020年，我的读书小记↗</a>
          </p>
          <p>
            <a href="https://www.notion.so/17acf26e6fb58032b85eee661e6ece17?v=17acf26e6fb581458469000c30560894&p=17acf26e6fb58036b661d2d407979c0b&pm=s" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-2">无法知晓的自然↗</a>
          </p>
        </div>
        </section>

        <footer className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <a href="#working" className="hover:text-foreground">
                Working
              </a>
            </li>
            <li>
              <a href="#writing" className="hover:text-foreground">
                Writing
              </a>
            </li>
            <li>
              <a href="#watching" className="hover:text-foreground">
                Watching
              </a>
            </li>
            <li>
              <a href="#reading" className="hover:text-foreground">
                Reading
              </a>
            </li>
          </ul>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-4">
            Data updated annually.
          </p>
        </footer>
      </main>
    </div>
  );
}
