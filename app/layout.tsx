import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Muhammad Zamin | Flutter Developer Portfolio",
  description: "Professional Flutter Developer with 1 year + of experience building high-quality mobile applications.",
  openGraph: {
    title: "Muhammad Zamin | Flutter Developer Portfolio",
    description: "Professional Flutter Developer with 1 year + of experience building high-quality mobile applications.",
    type: "website",
    url: "https://muhammadzamin.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zamin | Flutter Developer Portfolio",
    description: "Professional Flutter Developer with 1 year + of experience building high-quality mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
