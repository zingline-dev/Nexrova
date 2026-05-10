"use client";

import { useState } from "react";
import { ShieldCheck, Star, MapPin, Mail, Loader2 } from "lucide-react";
import { addToWaitlist } from "@/lib/insforge";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setError("");
    try {
      await addToWaitlist(email);
      setIsJoined(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-indigo-50 rounded-full blur-3xl opacity-60 animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-50 rounded-full blur-3xl opacity-60 animate-float-slower" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs md:text-sm shadow-sm hover-scale">
              <ShieldCheck className="w-3.5 h-3.5 md:w-4 h-4" />
              100% Verified Professionals
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs md:text-sm shadow-sm hover-scale">
              <MapPin className="w-3.5 h-3.5 md:w-4 h-4" />
              Exclusively in Bhubaneswar
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8">
            Trusted Home Services<br />
            <span className="text-indigo-600 bg-clip-text">at Your Doorstep</span>
          </h1>

          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium">
            Nexrova is bringing premium, verified home cleaning and repairs to Bhubaneswar.
            Join the founding list for early access and exclusive launch offers!
          </p>

          {/* Waitlist Signup */}
          <div className="max-w-xl mx-auto relative group min-h-[80px]">
            {isJoined ? (
              <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-6 flex items-center justify-center gap-4 animate-scale-in shadow-xl shadow-emerald-50">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-black text-slate-900">You're in!</h3>
                  <p className="text-emerald-700 font-bold text-sm">Welcome to the Nexrova Founding List.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
                <div className="relative flex flex-col sm:flex-row bg-white rounded-2xl md:rounded-3xl shadow-2xl p-2 md:p-3 items-center gap-2 hover-lift">
                  <div className="flex-1 flex items-center gap-3 px-4 w-full py-2">
                    <Mail className="text-slate-400 w-5 h-5 md:w-6 md:h-6" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-none focus:ring-0 text-base md:text-lg font-medium placeholder:text-slate-400 py-2"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-indigo-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Join Waitlist"}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm font-medium mt-3">{error}</p>}
              </form>
            )}
          </div>

          {/* Popular Services Tags */}
          <div className="mt-10 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6 text-slate-500 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">
            <span className="text-slate-400 w-full md:w-auto mb-2 md:mb-0">Popular Launch Categories:</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <span className="text-indigo-600 flex items-center gap-1.5 hover-scale cursor-default"><Star className="w-3 h-3 fill-indigo-600" /> Home Cleaning</span>
              <span className="text-indigo-600 flex items-center gap-1.5 hover-scale cursor-default"><Star className="w-3 h-3 fill-indigo-600" /> Electrician</span>
              <span className="text-indigo-600 flex items-center gap-1.5 hover-scale cursor-default"><Star className="w-3 h-3 fill-indigo-600" /> Plumbing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
