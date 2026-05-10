"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isPathChanging, setIsPathChanging] = useState(false);

  useEffect(() => {
    // When pathname changes, trigger a quick "loading" flash
    setIsPathChanging(true);
    const timer = setTimeout(() => setIsPathChanging(false), 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Luxurious Top Progress Bar */}
      <AnimatePresence>
        {isPathChanging && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 0.7, 1],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ 
              duration: 0.6,
              times: [0, 0.4, 1],
              ease: "easeInOut"
            }}
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 origin-left z-[9999]"
          />
        )}
      </AnimatePresence>

      {/* Main Content Transition (Simplified for stability) */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.4,
          ease: "easeOut"
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>

      {/* Subtle Page Overlay */}
      <AnimatePresence>
        {isPathChanging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.03, 0] }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 bg-indigo-900 pointer-events-none z-[9998]"
          />
        )}
      </AnimatePresence>
    </>
  );
}
