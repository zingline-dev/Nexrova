import LayoutWrapper from "@/components/LayoutWrapper";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Nexrova | Premium Home Services in Bhubaneswar",
    template: "%s | Nexrova"
  },
  description: "Bhubaneswar's most trusted hyperlocal marketplace. Book verified professionals for cleaning, plumbing, electrician work, appliance repair, and more. Experience premium quality at your doorstep.",
  keywords: ["Home Services Bhubaneswar", "Plumber in Bhubaneswar", "Electrician in Bhubaneswar", "Cleaning Services Bhubaneswar", "Nexrova", "Appliance Repair Bhubaneswar", "Trusted Professionals Bhubaneswar"],
  authors: [{ name: "Nexrova Team" }],
  creator: "Nexrova",
  publisher: "Nexrova",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nexrova.com"), // Placeholder URL, update to actual production domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexrova | Premium Home Services in Bhubaneswar",
    description: "Experience premium, verified home services at your doorstep. Exclusively in Bhubaneswar.",
    url: "https://nexrova.com",
    siteName: "Nexrova",
    images: [
      {
        url: "/og-image.png", // Ensure this exists or I'll generate a placeholder suggestion
        width: 1200,
        height: 630,
        alt: "Nexrova - Premium Home Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexrova | Premium Home Services in Bhubaneswar",
    description: "Bhubaneswar's most trusted hyperlocal marketplace for home services.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nexrova",
              "image": "https://nexrova.com/og-image.png",
              "@id": "https://nexrova.com",
              "url": "https://nexrova.com",
              "telephone": "+91-XXXXXXXXXX",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Bhubaneswar HQ",
                "addressLocality": "Bhubaneswar",
                "postalCode": "751001",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 20.2961,
                "longitude": 85.8245
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.instagram.com/nexrova.info/"
              ]
            }),
          }}
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
