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
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 md:p-20 relative">
          <div className="max-w-md w-full text-center space-y-10 animate-slide-up">
            <div className="w-28 h-28 bg-emerald-50 rounded-[32px] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-100/50 transform rotate-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-500" />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-black text-slate-900 tracking-tight">Account Created!</h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                Waitlist Status: Active
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 space-y-6 text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-indigo-500/10 transition-all" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="font-black text-slate-900 uppercase tracking-widest text-xs">Platform Update</span>
                </div>
                
                <p className="text-slate-600 font-bold leading-relaxed text-lg">
                  Nexrova is currently in the final stages of production for our <span className="text-indigo-600">Bhubaneswar launch.</span>
                </p>
                
                <p className="text-slate-500 font-medium leading-relaxed">
                  Once we officially go live, your account will be automatically activated, and you'll receive a notification along with an **exclusive welcome offer** reserved only for our early members.
                </p>
              </div>
            </div>

            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[24px] font-black text-lg hover:bg-slate-800 transition-all shadow-2xl active:scale-[0.98] group"
            >
              Back to Home 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex relative overflow-hidden">
      <Link 
        href="/" 
        className="fixed top-8 left-8 flex items-center justify-center w-14 h-14 text-slate-500 hover:text-indigo-600 transition-all bg-white/90 backdrop-blur-md rounded-2xl border border-slate-100 shadow-2xl hover-lift z-[100]"
        title="Back to Home"
      >
        <ArrowRight className="w-6 h-6 rotate-180" />
      </Link>

      {/* Visual Side (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/20 to-transparent" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-lg space-y-12 animate-slide-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest text-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-400" /> Trusted by Bhubaneswar
          </div>
          
          <h2 className="text-6xl font-black text-white leading-tight">
            Premium Home Services, <span className="text-indigo-400">Simplified.</span>
          </h2>
          
          <div className="space-y-6">
            {[
              "100% Verified Professionals",
              "Transparent Upfront Pricing",
              "60-Minute Response Time",
              "Dedicated Support"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white/70 font-bold text-lg animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex flex-col relative px-6 sm:px-12 lg:px-20 overflow-y-auto">

        <div className="flex-1 flex flex-col pt-10 pb-20 max-w-md mx-auto w-full animate-slide-up">
          <div className="flex flex-col">
            {/* Toggle */}
            <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-8 border border-slate-100 relative z-10">
              <button 
                onClick={() => setIsLogin(true)}
                className={cn(
                  "flex-1 py-3.5 rounded-xl font-black text-sm transition-all",
                  isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={cn(
                  "flex-1 py-3.5 rounded-xl font-black text-sm transition-all",
                  !isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
                )}
              >
                Create Account
              </button>
            </div>

            <div className="mb-8">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                {isLogin ? "Welcome Back" : "Join Nexrova"}
              </h1>
              <p className="text-slate-500 font-medium text-base">
                {isLogin ? "Login to your premium account" : "Start your journey with Bhubaneswar's best"}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-[24px] py-4 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-base"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[24px] py-4 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-[11px] font-black text-slate-700 uppercase tracking-wider">Password</label>
                  {isLogin && <button type="button" className="text-[10px] font-bold text-indigo-600">Forgot Password?</button>}
                </div>
                <div className="relative">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-[24px] py-4 pl-12 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-base"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-5 rounded-[28px] font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] mt-6"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {!isLogin && (
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-4 text-slate-400">
                <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-500" />
                <p className="text-[11px] font-bold leading-relaxed">
                  By creating an account, you agree to our <Link href="/terms" className="text-slate-900 underline">Terms</Link> and <Link href="/privacy" className="text-slate-900 underline">Privacy Policy</Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
