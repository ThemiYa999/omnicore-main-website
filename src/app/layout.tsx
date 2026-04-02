import type { Metadata } from "next";
import { Orbitron, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "OmniCore — AI Agency",
  description:
    "OmniCore builds intelligent AI systems that help businesses automate processes, unlock insights, and scale efficiently.",
  keywords: ["AI agency", "artificial intelligence", "automation", "machine learning", "AI solutions"],
  metadataBase: new URL("https://omnicore.lk"),
  openGraph: {
    title: "OmniCore — AI Agency",
    description: "We build intelligent systems that learn, adapt, and scale with your vision.",
    url: "https://omnicore.lk",
    siteName: "OmniCore",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "OmniCore — AI Agency" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniCore — AI Agency",
    description: "We build intelligent systems that learn, adapt, and scale with your vision.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://omnicore.lk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmniCore",
    url: "https://omnicore.lk",
    logo: "https://omnicore.lk/omnicore-logo.svg",
    description: "OmniCore builds intelligent AI systems that help businesses automate processes, unlock insights, and scale efficiently.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@omnicore.lk",
      contactType: "customer support",
    },
    sameAs: [
      "https://linkedin.com/company/omnicore-ai",
      "https://twitter.com/omnicore_ai",
      "https://github.com/omnicore-ai",
    ],
  };

  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${inter.variable} ${spaceMono.variable} antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-black text-white min-h-screen">{children}</body>
    </html>
  );
}
