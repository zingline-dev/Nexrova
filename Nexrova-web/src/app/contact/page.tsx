"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              Have questions or need assistance? Reach out to our team in Bhubaneswar. 
              We're here to help you 24/7.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Call Us", value: "+91 8767091077", color: "text-indigo-600 bg-indigo-50" },
                { icon: Mail, label: "Email Us", value: "support@nexrova.in", color: "text-emerald-600 bg-emerald-50" },
                { icon: MapPin, label: "Visit Us", value: "Patia, Bhubaneswar, Odisha 751024", color: "text-amber-600 bg-amber-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-black text-slate-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-10 rounded-[48px] shadow-2xl text-white"
          >
            <h2 className="text-2xl font-black mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
                 <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600 focus:outline-none text-slate-400">
                    <option>General Inquiry</option>
                    <option>Booking Issue</option>
                    <option>Become a Partner</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                 <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-indigo-600 focus:outline-none" />
              </div>
              <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
