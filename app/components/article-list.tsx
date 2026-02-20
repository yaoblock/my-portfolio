type Article = {
  title: string;
  date?: string;
  href: string;
};

const muted = "text-zinc-400 dark:text-zinc-600";

export default function ArticleList({ articles }: { articles: Article[] }) {
  return (
    <ul className="space-y-3">
      {articles.map((article) => (
        <li key={article.href}>
          <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/entry flex items-baseline gap-2"
          >
            <span className="min-w-0 truncate text-zinc-600 dark:text-zinc-400 transition-colors duration-300 group-hover/entry:text-foreground">
              {article.title}
            </span>
            <span className="min-w-8 flex-1 border-b border-dashed border-zinc-200 dark:border-zinc-800 translate-y-[-0.3em] transition-colors duration-300 group-hover/entry:border-zinc-400 dark:group-hover/entry:border-zinc-600" />
            {article.date && (
              <span className={`shrink-0 text-sm ${muted} transition-colors duration-300 group-hover/entry:text-foreground`}>
                {article.date}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
