"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { cn } from "@/lib/utils";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <main className={!isLoginPage ? "min-h-[calc(100vh-80px)]" : ""}>
        {children}
      </main>
      {!isLoginPage && <Footer />}
    </>
  );
}
