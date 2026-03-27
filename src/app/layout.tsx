import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkipLink from "@/components/layout/SkipLink";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Soumya Prakash Patra | Academic Portfolio",
  description: "Assistant Professor of Law & IPR at IIM Bodh Gaya. Expert in Patents, Corporate Laws, and Business Regulations.",
  icons: {
    icon: "/favicon.png",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        <SkipLink />
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-12rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
