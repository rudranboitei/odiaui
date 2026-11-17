import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "fumadocs-ui/style.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://odiaui.xyz"),
  title: {
    default: "odiaui",
    template: "%s | odiaui",
  },
  description: "A custom shadcn component registry.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "odiaui",
    images: [
      {
        url: "/odiaui-og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "odiaui — a custom shadcn component registry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/odiaui-og-image-1200x630.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
