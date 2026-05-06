"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate account creation
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-white flex relative overflow-hidden">
        {/* Visual Side */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
          <img 
            src="/success-bg.png" 
            alt="Success" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
          
          <div className="relative z-10 mt-auto p-20 space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400" /> Exclusive Access
            </div>
            <h2 className="text-6xl font-black text-white leading-tight">
              You're on the <span className="text-indigo-400">List.</span>
            </h2>
            <p className="text-white/70 text-xl font-medium max-w-md leading-relaxed">
              Experience the new standard of home services in Bhubaneswar, coming soon to your doorstep.
            </p>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center relative p-6 md:p-12 overflow-hidden h-screen">
          <div className="max-w-md w-full text-center space-y-6 animate-slide-up my-auto">
            <div className="w-20 h-20 bg-emerald-50 rounded-[28px] flex items-center justify-center mx-auto shadow-xl shadow-emerald-100/50 transform rotate-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl font-black text-slate-900 tracking-tight">Account Created!</h1>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-black text-[9px] uppercase tracking-widest">
                Waitlist Status: Active
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[28px] p-6 space-y-4 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-indigo-500/10 transition-all" />
              
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Platform Update</span>
                </div>
                
                <p className="text-slate-600 font-bold leading-relaxed text-base">
                  Nexrova is currently in the final stages of production for our <span className="text-indigo-600">Bhubaneswar launch.</span>
                </p>
                
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  Once we officially go live, your account will be automatically activated, and you'll receive a notification along with an **exclusive welcome offer**.
                </p>
              </div>
            </div>

            <Link 
              href="/"
              className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-8 py-4 rounded-[20px] font-black text-base hover:bg-slate-800 transition-all shadow-xl active:scale-[0.98] group"
            >
              Back to Home 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex relative overflow-hidden">
      <Link 
        href="/" 
        className="fixed top-6 left-6 flex items-center justify-center w-12 h-12 text-slate-500 hover:text-indigo-600 transition-all bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl hover-lift z-[100]"
        title="Back to Home"
      >
        <ArrowRight className="w-5 h-5 rotate-180" />
      </Link>

      {/* Visual Side (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-16 overflow-hidden bg-slate-900 h-screen">
        <img 
          src="/login-bg.png" 
          alt="Premium Living" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="relative z-10 max-w-lg space-y-10 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-[10px]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Trusted by Bhubaneswar
          </div>
          
          <h2 className="text-5xl font-black text-white leading-tight">
            Premium Home Services, <span className="text-indigo-400">Simplified.</span>
          </h2>
          
          <div className="space-y-5">
            {[
              "100% Verified Professionals",
              "Transparent Upfront Pricing",
              "60-Minute Response Time",
              "Dedicated Support"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white/70 font-bold text-base animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col relative px-6 sm:px-12 lg:px-20 h-screen overflow-hidden">
        <div className="flex-1 flex flex-col pt-8 pb-12 max-w-md mx-auto w-full animate-slide-up h-full">
          <div className="my-auto space-y-6">
            {/* Toggle */}
            <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100 relative z-10">
              <button 
                onClick={() => setIsLogin(true)}
                className={cn(
                  "flex-1 py-3 rounded-xl font-black text-sm transition-all",
                  isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={cn(
                  "flex-1 py-3 rounded-xl font-black text-sm transition-all",
                  !isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Create Account
              </button>
            </div>

            <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
                {isLogin ? "Welcome Back" : "Join Nexrova"}
              </h1>
              <p className="text-slate-500 font-medium text-sm">
                {isLogin ? "Login to your premium account" : "Start your journey with Bhubaneswar's best"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-3.5 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-3.5 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[10px] font-black text-slate-700 uppercase tracking-wider">Password</label>
                  {isLogin && <button type="button" className="text-[10px] font-bold text-indigo-600">Forgot?</button>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-[20px] py-3.5 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-[24px] font-black text-base hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-[0.98] mt-4"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {!isLogin && (
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3 text-slate-400">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" />
                <p className="text-[10px] font-bold leading-relaxed">
                  By joining, you agree to our <Link href="/terms" className="text-slate-900 underline">Terms</Link> and <Link href="/privacy" className="text-slate-900 underline">Privacy Policy</Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
