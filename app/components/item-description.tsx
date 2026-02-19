import type { ContentItem } from "@/lib/content";
import { externalLinkProps, splitLines, itemKey } from "@/lib/utils";

export default function ItemDescription({
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
