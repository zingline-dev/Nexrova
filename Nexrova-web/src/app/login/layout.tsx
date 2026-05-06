import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login / Sign Up",
  description: "Access your Nexrova account to manage bookings and home services in Bhubaneswar.",
  robots: {
    index: false, // Usually login pages don't need to be indexed to avoid cluttering search results
    follow: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
