import type { Metadata, Viewport } from "next";
import { Unbounded, Space_Mono } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://editorsstreet.com"),
  title: {
    default: "Editors Street | Social Media & Content Agency",
    template: "%s | Editors Street",
  },
  description:
    "Editors Street is a premier video editing and social media content agency. Specializing in AI real estate videos, long-form documentary editing, retention-driven content strategy, and viral post-production.",
  applicationName: "Editors Street",
  authors: [{ name: "Editors Street Team", url: "https://editorsstreet.com" }],
  generator: "Next.js",
  keywords: [
    "Editors Street",
    "Video Editing Agency",
    "AI Real Estate Videos",
    "Real Estate Video Editing",
    "Long Form Video Editing",
    "Documentary Video Editing",
    "Social Media Content Agency",
    "Short-Form Video Editing",
    "Podcast Production",
    "Post-Production Studio",
    "Content Strategy",
    "Retention Editing",
    "Color Grading",
    "Sound Design",
  ],
  creator: "Editors Street",
  publisher: "Editors Street",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Editors Street | Social Media & Content Agency",
    description:
      "We help creators, businesses, and brands produce and scale high-impact content, long-form documentaries, and AI real estate videos.",
    url: "https://editorsstreet.com",
    siteName: "Editors Street",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero/clip1.jpg",
        width: 1200,
        height: 630,
        alt: "Editors Street Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editors Street | Social Media & Content Agency",
    description:
      "We help creators, businesses, and brands produce and scale high-impact content, long-form documentaries, and AI real estate videos.",
    images: ["/assets/hero/clip1.jpg"],
    creator: "@editorsstreet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Editors Street",
  image: "https://editorsstreet.com/assets/hero/clip1.jpg",
  url: "https://editorsstreet.com",
  description:
    "High-impact video editing, AI real estate video production, long-form documentaries, and social media content management.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  priceRange: "$$$$",
  sameAs: [
    "https://instagram.com",
    "https://youtube.com",
    "https://linkedin.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Video Editing & Content Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Content Strategy",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Short-Form Video Editing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Podcast Production",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Thumbnail & Creative Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Commerce Video Ads",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Real Estate Videos",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-white font-body selection:bg-[#CCFF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
