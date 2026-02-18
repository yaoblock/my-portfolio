import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YAO Writer's Block",
  description: "Working, writing, watching, reading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
