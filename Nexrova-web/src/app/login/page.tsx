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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-[40px] p-12 text-center shadow-2xl shadow-indigo-100 border border-slate-100">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Account Created!</h2>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-8">
            <p className="text-amber-800 font-bold leading-relaxed">
              Nexrova is still under production in Bhubaneswar.
            </p>
            <p className="text-amber-700 text-sm mt-2 font-medium">
              Once we officially launch, your account will be automatically activated and you'll receive an exclusive welcome offer!
            </p>
          </div>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest hover:gap-3 transition-all"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex relative overflow-hidden">
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
      <div className="w-full lg:w-1/2 flex flex-col relative py-12 md:py-20 px-6 sm:px-12 lg:px-20 overflow-y-auto">
        <Link 
          href="/" 
          className="inline-flex self-start items-center gap-2 text-slate-500 font-bold hover:text-indigo-600 transition-all bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm hover-lift mb-12"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full animate-slide-up">
          {/* Toggle */}
          <div className="flex bg-slate-50 p-1.5 rounded-2xl mb-12 border border-slate-100">
            <button 
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-4 rounded-xl font-black text-sm transition-all",
                isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
              )}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-4 rounded-xl font-black text-sm transition-all",
                !isLogin ? "bg-white text-slate-900 shadow-xl" : "text-slate-400 hover:text-slate-600"
              )}
            >
              Create Account
            </button>
          </div>

          <div className="mb-10">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-3">
              {isLogin ? "Welcome Back" : "Join Nexrova"}
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              {isLogin ? "Login to your premium account" : "Start your journey with Bhubaneswar's best"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-lg"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Password</label>
                {isLogin && <button type="button" className="text-xs font-bold text-indigo-600">Forgot Password?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-5 pl-14 pr-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-lg"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-6 rounded-[32px] font-black text-xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-200 active:scale-[0.98] mt-8"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {!isLogin && (
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-start gap-4 text-slate-400">
              <ShieldCheck className="w-6 h-6 shrink-0 text-emerald-500" />
              <p className="text-[13px] font-bold leading-relaxed">
                By creating an account, you agree to our <Link href="/terms" className="text-slate-900 underline">Terms of Service</Link> and <Link href="/privacy" className="text-slate-900 underline">Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
