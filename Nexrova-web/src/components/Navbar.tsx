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
              onClick={() => {
                console.log("Toggle clicked, current state:", isOpen);
                setIsOpen(!isOpen);
              }} 
              className="p-4 -mr-2 text-slate-900 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer relative z-[60]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden bg-white border-t border-slate-100 shadow-2xl absolute top-20 left-0 w-full z-40",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="p-6 space-y-6 bg-white">
          <Link href="/services" onClick={() => setIsOpen(false)} className="block text-xl text-slate-600 font-bold hover:text-indigo-600 py-2">Services</Link>
          <Link href="/membership" onClick={() => setIsOpen(false)} className="block text-xl text-slate-600 font-bold hover:text-indigo-600 py-2">Membership</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-xl text-slate-600 font-bold hover:text-indigo-600 py-2">About Us</Link>
          <div className="pt-6 border-t border-slate-100">
            <button className="w-full bg-indigo-600 text-white px-6 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all active:scale-95 shadow-xl shadow-indigo-200">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
