import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renée Paternesi | Senior Frontend Engineer",
  description: "Portfolio of Renée Paternesi, a Senior Frontend Engineer specializing in React, Next.js, and AI-Augmented Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-50 antialiased selection:bg-emerald-400/30 selection:text-emerald-200`}>
        {children}
      </body>
    </html>
  );
}
