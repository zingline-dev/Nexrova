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
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 pt-20">
      <div className="max-w-md w-full">
        {/* Toggle */}
        <div className="flex bg-white p-1.5 rounded-2xl mb-8 shadow-sm border border-slate-100">
          <button 
            onClick={() => setIsLogin(true)}
            className={cn(
              "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
              isLogin ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:text-slate-900"
            )}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={cn(
              "flex-1 py-3 rounded-xl font-bold text-sm transition-all",
              !isLogin ? "bg-slate-900 text-white shadow-lg" : "text-slate-500 hover:text-slate-900"
            )}
          >
            Create Account
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-indigo-100 border border-slate-100">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-6">
              <User className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
              {isLogin ? "Welcome Back" : "Join Nexrova"}
            </h1>
            <p className="text-slate-500 font-medium mt-2">
              {isLogin ? "Login to manage your bookings" : "Start your premium home service journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-black text-slate-700 uppercase tracking-wider">Password</label>
                {isLogin && <button type="button" className="text-xs font-bold text-indigo-600">Forgot?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] mt-4"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          {!isLogin && (
            <div className="mt-8 pt-8 border-t border-slate-50 flex items-center gap-3 text-slate-400">
              <ShieldCheck className="w-5 h-5" />
              <p className="text-xs font-bold leading-relaxed">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          )}
        </div>

        <p className="text-center mt-8 text-slate-500 font-medium">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-indigo-600 font-bold hover:underline"
          >
            {isLogin ? "Create one now" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
}
