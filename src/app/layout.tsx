import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import connectDB from "@/server/connection";

const inter = Inter({ subsets: ["latin"] });

const title = " Simplicity Treasure C. | Frontend Developer";
const description = `I'm a frontend developer skilled in TypeScript, React, Next.js,
and Tailwind CSS. I love creating user-friendly websites and apps.
TypeScript helps me write cleaner code, React builds interactive
interfaces, Next.js makes apps fast, and Tailwind CSS ensures sleek
designs. I face challenges but always strive to learn and grow.`;
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://example.com",
    title,
    description,
    siteName: "My Website",
    images: [
      {
        url: "https://treasure56.vercel.app/images/banner.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-light text-dark scroll-smooth ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
