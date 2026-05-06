import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Nexrova | Premium Home Services in Bhubaneswar",
  description: "Experience premium, verified home services at your doorstep with Nexrova. Exclusively in Bhubaneswar.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={outfit.className}>
        <Navbar />
        <main className="min-height-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
