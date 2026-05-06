"use client";

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
                <button className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95">
                  Join for ₹99/mo
                </button>
                <p className="text-slate-400 font-bold text-sm">Cancel anytime.<br/>No commitment.</p>
              </div>
            </div>

            {/* Visual Pricing Card */}
            <div className="relative bg-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white shadow-2xl border border-white/10 w-full max-w-lg">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-600 opacity-20 rounded-full blur-[100px]" />

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

                <button className="w-full bg-white text-slate-900 py-5 md:py-6 rounded-2xl md:rounded-[24px] font-black text-lg md:text-xl hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
                  Join Nexrova Plus
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
                className="p-6 md:p-8 rounded-[32px] md:rounded-[40px] bg-slate-50 border border-slate-100 flex items-start gap-6 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 ${benefit.color}`}>
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

      {/* Comparison Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Membership vs. Regular</h2>
          
          <div className="bg-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl border border-slate-100">
            <table className="w-full text-left table-fixed">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 md:p-8 font-black uppercase text-[10px] md:text-xs tracking-widest w-[40%]">Feature</th>
                  <th className="p-4 md:p-8 font-black uppercase text-[10px] md:text-xs tracking-widest w-[30%]">Regular</th>
                  <th className="p-4 md:p-8 font-black uppercase text-[10px] md:text-xs tracking-widest bg-indigo-600 w-[30%]">Plus</th>
                </tr>
              </thead>
              <tbody className="font-bold text-slate-700">
                <tr className="border-b border-slate-50">
                   <td className="p-4 md:p-8 text-xs md:text-base leading-tight">Service Discount</td>
                   <td className="p-4 md:p-8 text-slate-400 text-xs md:text-base">0%</td>
                   <td className="p-4 md:p-8 text-indigo-600 bg-indigo-50/50 text-xs md:text-base">10%</td>
                </tr>
                <tr className="border-b border-slate-50">
                   <td className="p-4 md:p-8 text-xs md:text-base leading-tight">Convenience Fee</td>
                   <td className="p-4 md:p-8 text-slate-400 text-xs md:text-base">₹49 - ₹99</td>
                   <td className="p-4 md:p-8 text-indigo-600 bg-indigo-50/50 text-xs md:text-base">FREE</td>
                </tr>
                <tr className="border-b border-slate-50">
                   <td className="p-4 md:p-8 text-xs md:text-base leading-tight">Booking Priority</td>
                   <td className="p-4 md:p-8 text-slate-400 text-xs md:text-base">Standard</td>
                   <td className="p-4 md:p-8 text-indigo-600 bg-indigo-50/50 text-xs md:text-base">Immediate</td>
                </tr>
                <tr>
                   <td className="p-4 md:p-8 text-xs md:text-base leading-tight">Support Team</td>
                   <td className="p-4 md:p-8 text-slate-400 text-xs md:text-base">Regular</td>
                   <td className="p-4 md:p-8 text-indigo-600 bg-indigo-50/50 text-xs md:text-base">VIP</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium mb-6">Start saving from your very first booking.</p>
            <button className="bg-indigo-600 text-white px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-indigo-700 transition-all shadow-2xl active:scale-95">
              Get Nexrova Plus Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
