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
      <h2 className="text-base font-bold tracking-tighter text-foreground sm:text-lg mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
