export default function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group/link inline font-semibold text-foreground no-underline hover:text-foreground transition-colors ${className}`}
    >
      {children}
      <sup className="text-[0.6em] ml-0.5 inline-block transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
        ↗
      </sup>
    </a>
  );
}
