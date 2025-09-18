import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR Engine - Professional QR Scanner & Generator for iOS",
  description:
    "Transform your iPhone into a powerful QR code tool. Privacy-first, lightning-fast, and beautifully designed for the modern iOS experience.",
  keywords:
    "QR scanner, QR generator, iOS app, privacy-first, professional QR codes",
  authors: [{ name: "Ibrahim Uzun" }],
  openGraph: {
    title: "QR Engine - Professional QR Scanner & Generator for iOS",
    description: "Privacy-first QR scanning and generation for iOS users.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
