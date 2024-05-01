import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = " Simplicity Treasure C. | Frontend Developer";
const description = "I am a highly skilled, creative developer";
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
        url: "https://treasure56.vercel.app/banner.png",
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
    <html lang="en">
      <body className={`bg-light text-dark ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
