import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: "Anne Okolo — UI/UX Designer & AI-augmented Product Design",
  description:
    "Anne Okolo crafts digital experiences where intuitive design meets machine intelligence — turning complexity into clarity.",
  keywords: ["UI/UX Designer", "AI-augmented Product Design", "Product Designer", "UX Design", "Lagos", "Nigeria"],
  authors: [{ name: "Anne Okolo" }],
  openGraph: {
    title: "Anne Okolo — UI/UX Designer & AI-augmented Product Design",
    description:
      "Designing the future, pixel by pixel. Anne Okolo bridges intuitive design and machine intelligence.",
    url: "https://anneokolo.com",
    siteName: "Anne Okolo Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anne Okolo Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anne Okolo — UI/UX Designer & AI-augmented Product Design",
    description: "Designing the future, pixel by pixel.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-base text-text-primary antialiased">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;600&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
          precedence="default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anne Okolo",
              jobTitle: "UI/UX Designer & AI-augmented Product Design",
              url: "https://anneokolo.com",
              sameAs: [
                "https://linkedin.com/in/anneokolo",
                "https://github.com/anneokolo",
                "https://dribbble.com/anneokolo",
              ],
            }),
          }}
        />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
