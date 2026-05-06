"use client";

import { use } from "react";
import { MapPin, ShieldCheck, Star, Zap, Sparkles, Droplets, ChevronRight, Users } from "lucide-react";
import Link from "next/link";

const areaData: Record<string, any> = {
  "patia": {
    name: "Patia",
    description: "Providing premium home services to the tech hub and residential heart of Northern Bhubaneswar.",
    highlight: "150+ Verified Professionals active in Patia today.",
    stats: { bookings: "5,000+", rating: "4.9", pros: "150+" }
  },
  "saheed-nagar": {
    name: "Saheed Nagar",
    description: "Trusted by thousands of families and businesses in Bhubaneswar's premium commercial and residential center.",
    highlight: "Quickest response times in Central Bhubaneswar.",
    stats: { bookings: "8,200+", rating: "4.8", pros: "200+" }
  },
  "jayadev-vihar": {
    name: "Jayadev Vihar",
    description: "Excellence in home maintenance for the prestigious residences around Jayadev Vihar.",
    highlight: "Exclusive deep cleaning teams available 24/7.",
    stats: { bookings: "3,400+", rating: "4.9", pros: "120+" }
  }
};

export default function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = areaData[slug] || areaData["patia"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-50/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest">
                <MapPin className="w-3 h-3" /> Services in {data.name}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">
                Premium Home Services in <span className="text-indigo-600">{data.name}</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {data.description} From deep cleaning to expert repairs, Nexrova brings the city's 
                finest professionals to your doorstep.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/login" className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl active:scale-95">
                  Book in {data.name}
                </Link>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <ShieldCheck className="w-5 h-5" /> 100% Background Verified
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="w-full max-w-sm bg-white rounded-[40px] p-10 shadow-2xl shadow-indigo-100 border border-slate-100 relative">
               <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Active Bookings</p>
                      <p className="text-2xl font-black text-slate-900">{data.stats.bookings}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Average Rating</p>
                      <p className="text-2xl font-black text-slate-900">{data.stats.rating}/5.0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Verified Pros</p>
                      <p className="text-2xl font-black text-slate-900">{data.stats.pros}</p>
                    </div>
                  </div>
               </div>
               <div className="mt-10 pt-10 border-t border-slate-50 text-center">
                  <p className="text-slate-500 font-bold text-sm italic">"{data.highlight}"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Compact) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12 text-center">Popular in {data.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Deep Cleaning", icon: Sparkles, color: "bg-blue-50 text-blue-600" },
            { title: "AC Service", icon: Zap, color: "bg-yellow-50 text-yellow-600" },
            { title: "Plumbing", icon: Droplets, color: "bg-indigo-50 text-indigo-600" },
          ].map((s, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${s.color}`}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 font-medium text-sm mb-6">Expert {s.title.toLowerCase()} tailored for {data.name} homes.</p>
              <Link href="/login" className="flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all">
                Book Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Localized Trust */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl font-black mb-8 leading-tight">Join the {data.name} Waitlist for Exclusive Launch Offers</h2>
           <p className="text-xl text-slate-400 font-medium mb-10">
             We're launching soon in your neighborhood. Sign up today to be among the first to experience 
             Nexrova in {data.name}.
           </p>
           <Link href="/login" className="inline-block bg-white text-slate-900 px-12 py-5 rounded-2xl font-black text-xl hover:bg-indigo-50 transition-all shadow-2xl">
             Sign Up for {data.name}
           </Link>
        </div>
      </section>
    </div>
  );
}
