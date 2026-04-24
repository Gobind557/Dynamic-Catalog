import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic Catalog",
  description: "A production-grade multi-category catalog built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--color-surface)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
