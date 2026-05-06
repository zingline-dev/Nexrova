import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nexrova for premium home services in Bhubaneswar. Support for cleaning, plumbing, repairs, and more.",
  keywords: ["Nexrova Support", "Contact Nexrova", "Home Service Help Bhubaneswar"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
