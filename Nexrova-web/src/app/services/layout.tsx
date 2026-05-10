import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Catalog | Book Top-Rated Home Services",
  description: "Explore Nexrova's range of premium home services in Bhubaneswar. From professional home cleaning and car wash detailing to expert plumbing and electrical repairs.",
  keywords: [
    "Home Cleaning Bhubaneswar",
    "Car Wash detailing Bhubaneswar",
    "Plumbing repairs Bhubaneswar",
    "Electrician services Bhubaneswar",
    "Bathroom cleaning Bhubaneswar",
    "Kitchen deep cleaning Bhubaneswar",
    "Sofa cleaning services",
    "Exterior car wash Bhubaneswar"
  ],
  openGraph: {
    title: "Nexrova Service Catalog - Professional Home Services",
    description: "Book verified professionals for cleaning, car wash, plumbing, and more in Bhubaneswar.",
    url: "https://nexrova.com/services",
    type: "website",
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nexrova.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://nexrova.com/services"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Home Cleaning",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Nexrova"
              },
              "areaServed": {
                "@type": "City",
                "name": "Bhubaneswar"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Car Wash detailing",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Nexrova"
              },
              "areaServed": {
                "@type": "City",
                "name": "Bhubaneswar"
              }
            }
          ])
        }}
      />
      {children}
    </>
  );
}
