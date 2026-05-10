"use client";

import { useState } from "react";
import { 
  Sparkles, Zap, Droplets, Car,
  ChevronRight, ShieldCheck, Star, Clock, Loader2, Send, CheckCircle2
} from "lucide-react";
import { addToWaitlist } from "@/lib/insforge";

const allServices = [
  {
    category: "Home Cleaning",
    icon: Sparkles,
    color: "bg-blue-50 text-blue-600",
    description: "Professional deep cleaning for every corner of your home.",
    subServices: ["Deep Cleaning", "Bathroom Cleaning", "Kitchen Cleaning", "Sofa Cleaning"]
  },
  {
    category: "Car Wash Services",
    icon: Car,
    color: "bg-emerald-50 text-emerald-600",
    description: "Premium detailing and washing services at your doorstep.",
    subServices: ["Exterior Wash", "Interior Cleaning", "Waterless Wash", "Subscription Plans"]
  },
  {
    category: "Plumbing Services",
    icon: Droplets,
    color: "bg-indigo-50 text-indigo-600",
    description: "Reliable plumbing solutions for leakages, fittings, and blockages.",
    subServices: ["Tap Repair", "Leakage Fix", "Drain Cleaning"]
  },
  {
    category: "Electrician Services",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    description: "Expert electricians for all your installations and repairs.",
    subServices: ["Fan Installation", "Wiring Repair", "Switchboard Repair"]
  }
];

export default function ServicesPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeNotify, setActiveNotify] = useState<string | null>(null);

  const handleNotify = async (category: string) => {
    setActiveNotify(category);
    // In a real flow, we'd probably open a small email modal or use the user's existing email if logged in
    // For now, let's scroll to the suggestion box
    const element = document.getElementById("suggestion-box");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setError("");
    try {
      await addToWaitlist(email);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Explore Our <span className="text-indigo-600">Full Catalog</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We are curating the best professionals in Bhubaneswar for every home need. 
            From a leaking tap to a full home makeover, Nexrova has you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {allServices.map((service, idx) => (
            <div 
              key={idx}
              className="group p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 ${service.color} group-hover:scale-110 transition-transform shadow-sm`}>
                  <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">{service.category}</h3>
                    <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border border-slate-100">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-slate-400 font-bold text-[10px] md:text-sm">
                        <Clock className="w-4 h-4" /> 60m response
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 font-bold text-[10px] md:text-sm">
                        <Star className="w-4 h-4 text-amber-400" /> 4.8+ Rated
                      </div>
                    </div>
                    <button 
                      onClick={() => handleNotify(service.category)}
                      className="text-indigo-600 font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Notify Me <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggestion / Waitlist Section */}
        <div id="suggestion-box" className="mt-20 p-8 md:p-16 rounded-[40px] bg-slate-900 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-indigo-600/30 transition-all duration-1000" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {isSuccess ? (
              <div className="space-y-6 animate-scale-in py-8">
                <div className="w-20 h-20 bg-emerald-500 rounded-[32px] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white">You're Notified!</h3>
                <p className="text-slate-400 text-lg font-medium">We'll alert you as soon as our full catalog launches in your area.</p>
              </div>
            ) : (
              <>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                  Can't find what you're <span className="text-indigo-400">looking for?</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 font-medium mb-12">
                  We're expanding fast. Join the waitlist to be the first to know when 
                  new service categories launch in Bhubaneswar.
                </p>

                <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3 bg-white/5 p-2 rounded-[24px] md:rounded-[32px] border border-white/10 backdrop-blur-xl">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-500 font-bold px-6 py-4"
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="bg-indigo-600 text-white px-8 py-4 rounded-xl md:rounded-2xl font-black text-base hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 active:scale-95 shadow-xl shadow-indigo-600/20"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Notify Me</>}
                    </button>
                  </div>
                  {error && <p className="text-red-400 text-sm font-bold mt-4">{error}</p>}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
