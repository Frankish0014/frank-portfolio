import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank ISHIMWE | Software Engineer",
  description:
    "Software Engineer building AI-powered, web, and data-driven solutions for real-world and impact-focused problems.",
  keywords: [
    "Software Engineer",
    "AI Systems",
    "Web Development",
    "Next.js",
    "TypeScript",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Frank ISHIMWE" }],
  creator: "Frank ISHIMWE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frankishimwe.dev",
    title: "Frank ISHIMWE | Software Engineer",
    description:
      "Software Engineer building AI-powered, web, and data-driven solutions for real-world and impact-focused problems.",
    siteName: "Frank ISHIMWE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank ISHIMWE | Software Engineer",
    description:
      "Software Engineer building AI-powered, web, and data-driven solutions for real-world and impact-focused problems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Navigation />
          <ScrollProgress />
          <main className="pt-16 min-h-screen flex flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
