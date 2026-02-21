import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://yaoblock.com";

const DESCRIPTION =
  "A PR manager who shipped games at Tencent and NetEase, then fell into the crypto rabbit hole. Studied drama at Nanjing University and cinema at New York University — no cut, still rolling, scene unknown.";

export const metadata: Metadata = {
  title: "Yao - Writer's Block",
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Writer's Block",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Writer's Block",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
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
      name: "Yao",
      url: SITE_URL,
      sameAs: ["https://x.com/liuyaoyao_611"],
      jobTitle: "PR Manager, NetEase, Tencent, DODO",
    },
  };

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
