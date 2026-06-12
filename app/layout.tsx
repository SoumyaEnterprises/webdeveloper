import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Soumya Enterprises — Premium Website Development",
    template: "%s | Soumya Enterprises",
  },
  description:
    "Soumya Enterprises designs and builds premium, high-performance websites for businesses, exporters, manufacturers and startups — luxury design, fast delivery, affordable pricing.",
  keywords: [
    "website development",
    "premium website design",
    "exporter website design",
    "ecommerce website development India",
    "business website design agency",
  ],
  metadataBase: new URL("https://soumyaenterprises.com"),
  openGraph: {
    title: "Soumya Enterprises — Premium Website Development",
    description:
      "We build websites that make businesses look unstoppable. Premium design, fast delivery, affordable pricing.",
    siteName: "Soumya Enterprises",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <div className="grain" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
