import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Oceara - No-Code eDNA Bioinformatics Platform",
  description:
    "Oceara transforms environmental DNA into biodiversity insights in minutes. No coding required. Built for conservation labs, coastal agencies, and environmental teams.",
  keywords: [
    "eDNA",
    "environmental DNA",
    "metabarcoding",
    "biodiversity monitoring",
    "species detection",
    "conservation genetics",
    "bioinformatics",
    "no-code",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Oceara - No-Code eDNA Bioinformatics",
    description: "Transform environmental DNA into biodiversity insights in minutes.",
    url: "https://app.oceara.io",
    siteName: "Oceara",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
