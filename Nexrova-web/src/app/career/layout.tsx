import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Team",
  description: "Join the Nexrova founding team in Bhubaneswar. Explore open roles in Operations, React Native, and Backend development. Build the future of hyperlocal services.",
  keywords: ["Nexrova Careers", "Jobs in Bhubaneswar", "React Native Jobs Bhubaneswar", "Operations Manager Jobs", "Startup Jobs Odisha"],
  openGraph: {
    title: "Careers at Nexrova | Join the Founding Team",
    description: "We're hiring! Build the future of home services in Bhubaneswar with us.",
    type: "website",
  }
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
