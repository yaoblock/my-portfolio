import Image from "next/image";
import Link from "next/link";
import type { CVData } from "../cv-data";
import Avatar from "../../components/avatar";
import PrintButton from "./print-button";

const accent = "text-purple-600 dark:text-purple-400 hover:underline";
const muted = "text-zinc-500 dark:text-zinc-400";
const linkHover = "hover:text-foreground transition-colors";
const dateBadge = `text-sm font-mono tabular-nums ${muted}`;

export default function CVContent({ data }: { data: CVData }) {
  const otherLang = data.lang === "zh" ? "en" : "zh";
  const otherLabel = data.lang === "zh" ? "EN" : "中文";

  return (
    <div
      className={`min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 print:bg-white print:text-zinc-900 ${data.lang === "zh" ? "font-cv-zh" : "font-cv-en"}`}
    >
      <main className="mx-auto max-w-3xl px-8 py-12 print:px-0 print:py-0 print:max-w-none">
        {/* Top bar: language toggle + export */}
        <div className="flex items-center justify-end gap-4 mb-8 print:hidden">
          <Link href={`/cv/${otherLang}`} className={`text-sm ${accent}`}>
            {otherLabel}
          </Link>
          <PrintButton label={data.labels.exportPdf} />
        </div>

        {/* Header */}
        <header className="flex items-center gap-6">
          <Avatar />
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight">{data.name}</h1>
            <div className={`mt-2 flex items-center gap-4 text-sm ${muted}`}>
              <a
                href={`https://${data.website}`}
                className={linkHover}
                target="_blank"
                rel="noopener noreferrer"
              >
                [{data.website.toUpperCase()}]
              </a>
              <a href={`mailto:${data.contact.email}`} className={linkHover}>
                [Email]
              </a>
              <a href={`tel:${data.contact.phone}`} className={linkHover}>
                [Phone]
              </a>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-10">
          <h2 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-1 print:border-zinc-300">
            {data.labels.summary}
          </h2>
          <div className="mt-4 space-y-1.5">
            {data.summary.map((line, i) => (
              <p key={i} className="font-semibold text-sm">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-1 print:border-zinc-300">
            {data.labels.education}
          </h2>
          <div className="mt-4 space-y-3">
            {data.education.map((edu, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-4"
              >
                <p className="text-sm">
                  <span className="font-semibold">{edu.institution}</span>
                  {" - "}
                  {edu.degree}
                </p>
                <p className={`shrink-0 ${dateBadge}`}>{edu.dates}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <h2 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-1 print:border-zinc-300">
            {data.labels.experience}
          </h2>
        </section>
        {data.experience.map((exp, i) => (
          <section key={i} className={i === 0 ? "mt-4" : "mt-10"}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold">{exp.role}</h3>
                <p className={`mt-1 ${dateBadge}`}>{exp.dates}</p>
              </div>
              {exp.logo && (
                <Image
                  src={exp.logo}
                  alt=""
                  width={120}
                  height={40}
                  className="h-14 w-auto max-w-32 object-contain shrink-0 dark:invert print:invert-0"
                />
              )}
            </div>

            {exp.projects.map((proj, j) => (
              <div key={j} className="mt-5">
                <p className="text-sm font-semibold">{proj.title}</p>
                {proj.subtitle && (
                  <p className="mt-1 text-sm text-purple-600 dark:text-purple-400">
                    {proj.subtitle}
                  </p>
                )}
                <ul className="mt-2 space-y-2.5 list-none pl-0">
                  {proj.bullets.map((bullet, k) => (
                    <li key={k} className="text-sm leading-relaxed pl-4 -indent-4">
                      <span className={muted}>-{" "}</span>
                      <span className="font-semibold">
                        {bullet.label}
                        {data.lang === "zh" ? "：" : ": "}
                      </span>
                      {bullet.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}

        {/* More */}
        <section className="mt-24">
          <div className="relative overflow-visible">
            <Image
              src="/cv/role.png"
              alt=""
              width={240}
              height={240}
              className="absolute -top-16 right-0 w-52 h-auto object-contain pointer-events-none -m-4"
            />
            <h2 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-1 print:border-zinc-300">
              {data.labels.more}
            </h2>
            <ul className="mt-4 space-y-3 list-none pl-0">
              {data.more.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed pl-4 -indent-4">
                  <span className={muted}>-{" "}</span>
                  <span className="font-semibold">{item.label}：</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
