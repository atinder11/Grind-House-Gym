import type { Metadata } from "next";

import { Rubik } from "next/font/google";

import { Roboto } from "next/font/google";
import { Geist } from 'next/font/google'
import "./globals.css";



const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Roboto", "Arial","Geist", "sans-serif"],
  
});
const roboto = Roboto({
  subsets: ["latin"],
  
});
const geist = Geist({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Grind House",
  description: "Best Gym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
