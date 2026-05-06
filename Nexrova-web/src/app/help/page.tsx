"use client";

import { motion } from "framer-motion";
import { HelpCircle, Search, MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const categories = [
    { title: "Booking & Payments", icon: MessageCircle },
    { title: "Service Quality", icon: HelpCircle },
    { title: "Member Benefits", icon: Search },
    { title: "Professional Support", icon: Phone }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">How can we help?</h1>
          <div className="max-w-2xl mx-auto relative">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
             <input 
               type="text" 
               placeholder="Search for articles, bookings, or services..." 
               className="w-full pl-16 pr-8 py-6 bg-slate-50 border border-slate-100 rounded-3xl focus:ring-2 focus:ring-indigo-600 focus:outline-none font-medium text-lg"
             />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-[40px] text-center hover:bg-white hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900">{cat.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[48px] p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Still need assistance?</h2>
          <p className="text-slate-400 font-medium mb-10 max-w-xl mx-auto">
            Our support team in Bhubaneswar is available 24/7 for our Plus members 
            and 9AM - 9PM for all users.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all">
              Contact Support
            </Link>
            <Link href="/faq" className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
              View FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
