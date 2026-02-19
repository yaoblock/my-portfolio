import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://yaoyao.io";

export const metadata: Metadata = {
  title: "YAO Writer's Block",
  description:
    "Gaming, crypto research, cinema studies. Working, writing, watching, reading.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "YAO Writer's Block",
    description:
      "Gaming, crypto research, cinema studies. Working, writing, watching, reading.",
    url: SITE_URL,
    siteName: "Writer's Block",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@liuyaoyao_611",
    creator: "@liuyaoyao_611",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "YAO",
      url: SITE_URL,
      sameAs: ["https://x.com/liuyaoyao_611"],
      jobTitle: "Crypto Researcher & Writer",
    },
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
