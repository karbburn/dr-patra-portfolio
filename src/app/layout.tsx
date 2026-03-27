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
  title: "Dr. Soumya Prakash Patra | Professor of Law & IPR",
  description: "Assistant Professor of Law & IPR at IIM Bodh Gaya. Expert in Patents, Corporate Laws, and Business Regulations.",
  metadataBase: new URL('https://dr-patra-portfolio.vercel.app'),
  openGraph: {
    title: 'Dr. Soumya Prakash Patra | Professor of Law & IPR',
    description: 'Assistant Professor of Law & IPR at IIM Bodh Gaya. Expert in Patents, Corporate Laws, and Standard Essential Patents.',
    url: 'https://dr-patra-portfolio.vercel.app',
    siteName: 'Dr. Soumya Prakash Patra',
    locale: 'en_US',
    type: 'website',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Soumya Prakash Patra",
              "jobTitle": "Assistant Professor",
              "worksFor": {
                "@type": "Organization",
                "name": "IIM Bodh Gaya"
              },
              "url": "https://dr-patra-portfolio.vercel.app",
              "sameAs": [
                "https://www.linkedin.com/in/infinitesom/",
                "https://scholar.google.com/citations?user=Qd1YXr8AAAAJ&hl=en"
              ]
            })
          }}
        />
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-12rem)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
