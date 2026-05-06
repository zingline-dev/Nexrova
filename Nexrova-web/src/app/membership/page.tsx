"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Percent, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Crown,
  Heart,
  CheckCircle2
} from "lucide-react";

export default function MembershipPage() {
  const userBenefits = [
    {
      title: "Zero Convenience Fees",
      desc: "Forget about visiting charges or service fees. Pay only for the actual work done.",
      icon: Zap,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Flat 10% Discount",
      desc: "Get an instant 10% discount on every single booking, from cleaning to repairs.",
      icon: Percent,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Priority Scheduling",
      desc: "Skip the queue. Your bookings are prioritized even during peak hours and holidays.",
      icon: Clock,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Dedicated Support",
      desc: "Access a 24/7 VIP helpline for all your booking queries and home emergencies.",
      icon: Heart,
      color: "bg-red-50 text-red-600"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />
        <div className="absolute top-0 right-0 w-[40%] h-full bg-indigo-600/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest"
              >
                <Crown className="w-3 h-3" /> Nexrova Plus
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]"
              >
                Save Big on Every <span className="text-indigo-600">Home Service</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed font-medium"
              >
                Join 1,000+ families in Bhubaneswar who save an average of ₹2,500/month 
                with the Nexrova Plus membership.
              </motion.p>
              
              <div className="flex items-center gap-6">
                <button className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
                  Join for ₹99/mo
                </button>
                <p className="text-slate-400 font-bold text-sm">Cancel anytime.<br/>No commitment.</p>
              </div>
            </div>

            {/* Visual Pricing Card with Pulse Effect */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="relative bg-slate-900 rounded-[48px] p-12 text-white shadow-2xl border border-white/10 overflow-hidden"
            >
              {/* Animated Glow Effect */}
              <motion.div 
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 rounded-full blur-[100px]"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">⚡</span>
                  <span className="text-3xl font-black tracking-tighter">Nexrova Plus</span>
                </div>
                <div className="mb-8">
                  <span className="text-7xl font-black">₹99</span>
                  <span className="text-slate-400 font-bold ml-2">/ month</span>
                </div>
                
                <ul className="space-y-6 mb-12">
                  {[
                    "Zero convenience fees on all bookings",
                    "Flat 10% discount on all services",
                    "Priority scheduling & 60-min response",
                    "Exclusive 24/7 dedicated support line"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                      <CheckCircle2 className="w-6 h-6 text-indigo-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white text-slate-900 py-6 rounded-[24px] font-black text-xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                  Join Nexrova Plus
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why upgrade to Plus?</h2>
            <p className="text-slate-500 text-lg">Designed for households that value time and money.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userBenefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${benefit.color}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Membership vs. Regular</h2>
          
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl border border-slate-100">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Feature</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Regular</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest bg-indigo-600">Plus Member</th>
                </tr>
              </thead>
              <tbody className="font-bold text-slate-700">
                <tr className="border-b border-slate-50">
                   <td className="p-8">Service Discount</td>
                   <td className="p-8 text-slate-400">0%</td>
                   <td className="p-8 text-indigo-600 bg-indigo-50/50">10%</td>
                </tr>
                <tr className="border-b border-slate-50">
                   <td className="p-8">Convenience Fee</td>
                   <td className="p-8 text-slate-400">₹49 - ₹99</td>
                   <td className="p-8 text-indigo-600 bg-indigo-50/50">FREE</td>
                </tr>
                <tr className="border-b border-slate-50">
                   <td className="p-8">Booking Priority</td>
                   <td className="p-8 text-slate-400">Standard</td>
                   <td className="p-8 text-indigo-600 bg-indigo-50/50">Immediate</td>
                </tr>
                <tr>
                   <td className="p-8">Support Team</td>
                   <td className="p-8 text-slate-400">Regular</td>
                   <td className="p-8 text-indigo-600 bg-indigo-50/50">VIP Direct</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium mb-6">Start saving from your very first booking.</p>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-700 transition-all shadow-2xl active:scale-95">
              Get Nexrova Plus Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
