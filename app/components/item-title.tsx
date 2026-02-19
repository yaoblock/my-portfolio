import type { ContentItem } from "@/lib/content";
import { externalLinkProps } from "@/lib/utils";

export default function ItemTitle({ item }: { item: ContentItem }) {
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
