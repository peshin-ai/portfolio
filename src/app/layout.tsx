import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Manrope,
} from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layouts/footer";
import { Navbar } from "@/components/layouts/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",
);

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase,
  title:
    "Ung Ta Hoang Tuan | Frontend Developer | Web3 & Fintech",
  description:
    "Portfolio of Ung Ta Hoang Tuan, a Frontend Developer with 4+ years of experience building React, Next.js, Web3, Fintech and Enterprise applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web3 Developer",
    "Fintech Developer",
    "TypeScript Developer",
    "SUI Blockchain",
    "DeFi Developer",
  ],
  openGraph: {
    title:
      "Ung Ta Hoang Tuan | Frontend Developer | Web3 & Fintech",
    description:
      "Portfolio of Ung Ta Hoang Tuan, a Frontend Developer with 4+ years of experience building React, Next.js, Web3, Fintech and Enterprise applications.",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ung Ta Hoang Tuan | Frontend Developer | Web3 & Fintech",
    description:
      "Portfolio of Ung Ta Hoang Tuan, a Frontend Developer with 4+ years of experience building React, Next.js, Web3, Fintech and Enterprise applications.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${jetBrainsMono.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
