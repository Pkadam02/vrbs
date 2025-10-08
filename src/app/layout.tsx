import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Archivo } from "next/font/google";
import SmoothScroll from "@/smooth-scroll-gsap/SmoothScroll";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"], variable: '--font-poppins' });
const archivo = Archivo({ subsets: ["latin"], weight: ["400"], variable: '--font-archivo' });

export const metadata: Metadata = {
  title: "LeadGen - Generate Leads with True Intent",
  description: "Landing page built with Next.js, Tailwind & TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${archivo.className} ${poppins.variable}`}>
        {/* 👇 Wrap all content in SmoothScroll */}
        {children}
      </body>
    </html>
  );
}
