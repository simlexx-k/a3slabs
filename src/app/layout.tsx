import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A3S Labs - Transforming Ideas into Digital Reality",
  description: "A3S Labs is a leading tech firm specializing in software development, data science, and AI solutions. We transform businesses through cutting-edge technology and innovative solutions.",
  keywords: ["software development", "data science", "AI", "machine learning", "consulting", "technology", "innovation"],
  authors: [{ name: "A3S Labs" }],
  creator: "A3S Labs",
  publisher: "A3S Labs",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://a3slabs.com",
    title: "A3S Labs - Transforming Ideas into Digital Reality",
    description: "Leading tech firm specializing in software development, data science, and AI solutions.",
    siteName: "A3S Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "A3S Labs - Transforming Ideas into Digital Reality",
    description: "Leading tech firm specializing in software development, data science, and AI solutions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
