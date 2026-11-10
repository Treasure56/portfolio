import type { Metadata } from "next";
import { Caveat, DM_Sans, Lilita_One, Roboto, Young_Serif } from "next/font/google";
import "./globals.css";

// Dashboard and login fonts.
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  preload: false,
});
const lilita = Lilita_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-lilita",
  preload: false,
});

// Public site fonts: headings, body text and handwritten notes.
const display = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const note = Caveat({ subsets: ["latin"], variable: "--font-note", preload: false });

const siteUrl = "https://treasure56.vercel.app";
const title = "Treasure Onyenze | Software Engineer & AI Creator";
const description =
  "I build web and mobile applications, integrate AI into digital products, and create AI-powered visual experiences that help businesses grow.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Treasure Onyenze",
    "Onyenze Treasure",
    "Treasure56",
    "Treasure Onyenze Portfolio",
    "software engineer",
    "web developer",
    "mobile app developer",
    "React Native developer",
    "AI creator",
    "AI integration",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Treasure Onyenze",
    images: [
      {
        url: `${siteUrl}/images/banner.png`,
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
        className={`bg-light text-dark antialiased ${roboto.className} ${roboto.variable} ${lilita.variable} ${display.variable} ${body.variable} ${note.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
