import type { Metadata } from "next";
import { Roboto, Lilita_One } from "next/font/google";
import "./globals.css";
import connectDB from "@/server/connection";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const lilita = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lilita",
});

const title = "Treasure Onyenze| Web & Mobile Engineer";
const description =
  "Frontend developer building sleek web and mobile apps with TypeScript, React, Next.js, Tailwind CSS, and React Native.";

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
      <body
        className={`bg-light text-dark scroll-smooth ${roboto.className} ${lilita.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
