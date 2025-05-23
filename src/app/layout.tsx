import "../styles/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/store/provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ITR Homestay",
  description: "A Next.js app with SSR and dark mode",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* 👆 suppressHydrationWarning membantu Next menghindari warning */}
      <body className={`${geistSans.variable} ${geistMono.variable} w-full`}>
        <Providers>
          <ThemeProvider>
            <Layout>
              {children}
            </Layout>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
