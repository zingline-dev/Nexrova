"use client";

import Link from "next/link";
import { Search, Menu, X, User, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300">⚡</span>
            <span className="text-2xl font-black text-slate-900 tracking-tighter ml-1">Nexrova</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Services</Link>
            <Link href="/membership" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Membership</Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">About Us</Link>
            
            <div className="h-6 w-px bg-slate-200 mx-2" />
            
            <button className="flex items-center gap-2 text-slate-700 font-semibold hover:text-indigo-600 transition-colors">
              <User className="w-5 h-5" />
              Login
            </button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95">
              Notify Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out shadow-xl",
        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="p-6 space-y-4">
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/membership" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold hover:text-indigo-600 transition-colors">Membership</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-slate-600 font-bold hover:text-indigo-600 transition-colors">About Us</Link>
          <div className="pt-4 border-t border-slate-100">
            <button className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
