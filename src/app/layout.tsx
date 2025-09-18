import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PeekPack - Physics-Based Puzzle Game for iOS",
  description:
    "Experience the addictive physics of falling balls that merge into larger sizes. Simple mechanics, endless fun, beautifully crafted for iOS.",
  keywords:
    "puzzle game, physics game, ball merging, iOS game, addictive gameplay, PeekPack",
  authors: [{ name: "Ibrahim Uzun" }],
  openGraph: {
    title: "PeekPack - Physics-Based Puzzle Game for iOS",
    description:
      "Physics-based puzzle game with ball merging mechanics for iOS devices.",
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
