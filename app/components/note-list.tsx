import type { NoteLink } from "@/lib/content";

export default function NoteList({ links }: { links: NoteLink[] }) {
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
