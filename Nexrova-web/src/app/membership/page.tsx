"use client";

import { useState } from "react";
import { 
  Zap, 
  Percent, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Star, 
  Crown,
  Heart,
  CheckCircle2,
  Loader2,
  Send,
  Mail
} from "lucide-react";
import { addToWaitlist } from "@/lib/insforge";
import { motion, AnimatePresence } from "framer-motion";

export default function MembershipPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showJoinForm, setShowJoinForm] = useState(false);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setError("");
    try {
      const result = await addToWaitlist(email, "membership_plus_waitlist");

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setShowJoinForm(false);
        setEmail("");
      }, 4000);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const userBenefits = [
    {
      title: "Zero Convenience Fees",
      desc: "Forget about visiting charges or service fees. Pay only for the actual work done.",
      icon: Zap,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Flat 10% Discount",
      desc: "Get an instant 10% discount on every single booking, from cleaning to repairs.",
      icon: Percent,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Priority Scheduling",
      desc: "Skip the queue. Your bookings are prioritized even during peak hours and holidays.",
      icon: Clock,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Dedicated Support",
      desc: "Access a 24/7 VIP helpline for all your booking queries and home emergencies.",
      icon: Heart,
      color: "text-red-600 bg-red-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white -z-10" />
        <div className="absolute top-0 right-0 w-[40%] h-full bg-indigo-600/5 -skew-x-12 translate-x-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest">
                <Crown className="w-3 h-3" /> Nexrova Plus
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Save Big on Every <span className="text-indigo-600">Home Service</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                Join 1,000+ families in Bhubaneswar who save an average of ₹2,500/month 
                with the Nexrova Plus membership.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <button 
                  onClick={() => setShowJoinForm(true)}
                  className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                >
                  Reserve My Spot
                </button>
                <p className="text-slate-400 font-bold text-sm">Launch offer: ₹99/mo<br/>Early bird special.</p>
              </div>
            </div>

            {/* Visual Pricing Card */}
            <div className="relative bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white shadow-2xl border border-white/10 w-full max-w-lg group hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 opacity-20 rounded-full blur-[100px] group-hover:opacity-30 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl md:text-4xl">⚡</span>
                  <span className="text-2xl md:text-3xl font-black tracking-tighter">Nexrova Plus</span>
                </div>
                <div className="mb-8">
                  <span className="text-5xl md:text-7xl font-black">₹99</span>
                  <span className="text-slate-400 font-bold ml-2">/ month</span>
                </div>
                
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12">
                  {[
                    "Zero convenience fees on all bookings",
                    "Flat 10% discount on all services",
                    "Priority scheduling & 60-min response",
                    "Exclusive 24/7 dedicated support line"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base md:text-lg font-medium">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 shrink-0 mt-1" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setShowJoinForm(true)}
                  className="w-full bg-white text-slate-900 py-5 md:py-6 rounded-2xl md:rounded-[24px] font-black text-lg md:text-xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95"
                >
                  Join the Plus Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Why upgrade to Plus?</h2>
            <p className="text-slate-500 text-lg">Designed for households that value time and money.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {userBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-6 md:p-8 rounded-[32px] md:rounded-[40px] bg-slate-50 border border-slate-100 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${benefit.color} group-hover:scale-110 transition-transform`}>
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Modal */}
      <AnimatePresence>
        {showJoinForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isLoading && setShowJoinForm(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-12 text-center"
            >
              {isSuccess ? (
                <div className="space-y-6 animate-scale-in py-8">
                  <div className="w-20 h-20 bg-emerald-500 rounded-[32px] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Spot Reserved!</h3>
                  <p className="text-slate-500 text-lg font-medium">We'll invite you to join Nexrova Plus at the launch price of ₹99/mo very soon.</p>
                </div>
              ) : (
                <>
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-2">Join the Plus List</h3>
                  <p className="text-slate-500 font-medium mb-8">Get exclusive early access to Bhubaneswar's first premium home service membership.</p>

                  <form onSubmit={handleJoin} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input 
                        type="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 pl-14 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 disabled:opacity-70 active:scale-95"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Reserve Now</>}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShowJoinForm(false)}
                      className="text-slate-400 font-bold text-sm uppercase tracking-widest pt-4 hover:text-slate-600 transition-colors"
                    >
                      Maybe Later
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
