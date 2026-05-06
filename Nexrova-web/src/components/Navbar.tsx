"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-white border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl">⚡</span>
            <span className="text-2xl font-black text-slate-900 tracking-tighter ml-1">Nexrova</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-slate-600 hover:text-indigo-600 font-medium">Services</Link>
            <Link href="/membership" className="text-slate-600 hover:text-indigo-600 font-medium">Membership</Link>
            <Link href="/about" className="text-slate-600 hover:text-indigo-600 font-medium">About Us</Link>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <button className="flex items-center gap-2 text-slate-700 font-semibold">
              <User className="w-5 h-5" />
              Login
            </button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-indigo-200">
              Notify Me
            </button>
          </div>

          {/* MOBILE MENU USING NATIVE DETAILS/SUMMARY (ZERO JS REQUIRED) */}
          <details className="md:hidden group">
            <summary className="list-none cursor-pointer p-4 -mr-4 bg-slate-100 rounded-xl relative z-[110]">
              <div className="group-open:hidden">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </div>
              <div className="hidden group-open:block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </div>
            </summary>
            
            <div className="fixed inset-0 top-20 bg-white z-[105] p-6 animate-in fade-in slide-in-from-top-4 duration-200">
              <div className="flex flex-col gap-6">
                <Link href="/services" className="text-xl font-bold text-slate-900 py-2 border-b border-slate-50">Services</Link>
                <Link href="/membership" className="text-xl font-bold text-slate-900 py-2 border-b border-slate-50">Membership</Link>
                <Link href="/about" className="text-xl font-bold text-slate-900 py-2 border-b border-slate-50">About Us</Link>
                <div className="pt-6">
                  <button className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-200">
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
