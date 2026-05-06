"use client";

import { useState, useEffect } from "react";
import { Search, ShieldCheck, Star, MapPin, Mail, Sparkles, Zap, Timer } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date for launch (e.g., 14 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setIsJoined(true);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl">
              <Sparkles className="w-4 h-4 text-amber-400" />
              The Revolution is Near
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest">
              <MapPin className="w-4 h-4" />
              Bhubaneswar Grand Launch
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8"
          >
            SOMETHING BIG <br />
            <span className="text-indigo-600">IS COMING.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            We're redefining home services forever. No more trust issues, no more delays. 
            The wait for premium excellence is almost over.
          </motion.p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16 animate-fade-in delay-500">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Mins", value: timeLeft.minutes },
              { label: "Secs", value: timeLeft.seconds }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-4xl font-black text-slate-900">{unit.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{unit.label}</span>
              </div>
            ))}
          </div>

          {/* Waitlist Signup */}
          <div className="max-w-xl mx-auto relative group min-h-[80px]">
            {isJoined ? (
              <div className="bg-emerald-900 border border-emerald-800 rounded-3xl p-8 flex items-center justify-center gap-6 animate-scale-in shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-900 shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-black text-white">You're on the list!</h3>
                  <p className="text-emerald-100/70 font-bold">Watch your inbox for the secret launch code.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                <div className="relative flex flex-col sm:flex-row bg-white rounded-3xl shadow-2xl p-2 md:p-3 items-center gap-2">
                  <div className="flex-1 flex items-center gap-3 px-6 w-full py-4">
                    <Mail className="text-slate-400 w-6 h-6" />
                    <input 
                      type="email" 
                      placeholder="Get early access" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 text-lg font-black placeholder:text-slate-400 py-2 uppercase tracking-tight"
                      required
                    />
                  </div>
                  <button type="submit" className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-600 transition-all shadow-xl active:scale-95 whitespace-nowrap flex items-center gap-2">
                    Claim Access <Zap className="w-5 h-5 fill-current" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16 text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] flex flex-wrap justify-center gap-8">
            <span className="flex items-center gap-2"><Timer className="w-4 h-4" /> Limited Founders Edition</span>
            <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Exclusive Early Offers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
