import type { ReactNode } from "react";

export default function Section({
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
