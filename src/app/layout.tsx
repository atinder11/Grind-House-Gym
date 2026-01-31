import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import AOSWrapper from "@/components/AOSWrapper";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Roboto", "Arial", "Geist", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Grind House ",
    template: "%s | Grind House",
  },
  description: `Grind House is a premium gym offering strength training, CrossFit, bodybuilding, yoga, and expert personal coaching to help you achieve peak fitness. Where strength meets discipline and results speak louder than words. Founded in the heart of the USA, Grind House isn’t just a gym — it’s a community built for those who push their limits, embrace the grind, and never settle for average.`,
  keywords: [
    "gym",
    "fitness center",
    "personal training",
    "crossfit",
    "bodybuilding",
    "strength training",
    "yoga",
    "Grind House gym",
  ],
  authors: [{ name: "Grind House" }],
  creator: "Grind House",
  publisher: "Grind House",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Grind House | Premium Fitness & Training Center",
      description: `Grind House is a premium gym offering strength training, CrossFit, bodybuilding, yoga, and expert personal coaching to help you achieve peak fitness. Where strength meets discipline and results speak louder than words. Founded in the heart of the USA, Grind House isn’t just a gym — it’s a community built for those who push their limits, embrace the grind, and never settle for average.`,

    url: "https://grind-house-gym.vercel.app",
    siteName: "Grind House",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grind House Gym",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grind House | Premium Fitness & Training Center",
      description: `Grind House is a premium gym offering strength training, CrossFit, bodybuilding, yoga, and expert personal coaching to help you achieve peak fitness. Where strength meets discipline and results speak louder than words. Founded in the heart of the USA, Grind House isn’t just a gym — it’s a community built for those who push their limits, embrace the grind, and never settle for average.`,

    images: ["/assets/og-image.jpg"],
  },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  metadataBase: new URL("https://grind-house-gym.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        <AOSWrapper>{children}</AOSWrapper>
      </body>
    </html>
  );
}
