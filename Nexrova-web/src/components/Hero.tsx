"use client";

import { Search, ShieldCheck, Star, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-indigo-50 rounded-full blur-3xl opacity-60" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-60" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs md:text-sm shadow-sm hover:scale-105 transition-transform">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 h-4" />
              100% Verified Professionals
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs md:text-sm shadow-sm hover:scale-105 transition-transform">
              <MapPin className="w-3.5 h-3.5 md:w-4 h-4" />
              Exclusively in Bhubaneswar
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8"
          >
            Something Big is<br />
            <span className="text-indigo-600 bg-clip-text">Coming to Bhubaneswar</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium"
          >
            Nexrova is bringing premium, verified home services to your doorstep. 
            Join the waitlist for exclusive launch offers!
          </motion.p>

          {/* Waitlist Signup Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-xl mx-auto relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
            <div className="relative flex flex-col sm:flex-row bg-white rounded-2xl md:rounded-3xl shadow-2xl p-2 md:p-3 items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 w-full py-2">
                <Mail className="text-slate-400 w-5 h-5 md:w-6 md:h-6" />
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent border-none focus:ring-0 text-base md:text-lg font-medium placeholder:text-slate-400 py-2"
                  required
                />
              </div>
              <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95 whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
          </motion.div>

          {/* Popular Services Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6 text-slate-500 font-bold uppercase text-[9px] md:text-[10px] tracking-widest"
          >
            <span className="text-slate-400 w-full md:w-auto mb-2 md:mb-0">Popular Launch Categories:</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <span className="text-indigo-600 flex items-center gap-1.5"><Star className="w-3 h-3 fill-indigo-600" /> Deep Cleaning</span>
              <span className="text-indigo-600 flex items-center gap-1.5"><Star className="w-3 h-3 fill-indigo-600" /> AC Service</span>
              <span className="text-indigo-600 flex items-center gap-1.5"><Star className="w-3 h-3 fill-indigo-600" /> Pest Control</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
