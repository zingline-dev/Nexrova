"use client";

import { Briefcase, Heart, Rocket, Target, Users, ArrowRight, Star, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const perks = [
    { title: "Top Compensation", desc: "We offer industry-leading pay for our professionals and office teams.", icon: Rocket, color: "text-indigo-600 bg-indigo-50" },
    { title: "Flexibility", desc: "Work on your terms. Choose your slots and manage your own schedule.", icon: Target, color: "text-emerald-600 bg-emerald-50" },
    { title: "Insurance Cover", desc: "Every partner is covered by our comprehensive health and safety insurance.", icon: ShieldCheck, color: "text-blue-600 bg-blue-50" },
    { title: "Growth & Training", desc: "Regular workshops and certifications to help you level up your skills.", icon: Star, color: "text-amber-600 bg-amber-50" }
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-widest mb-8">
          <Briefcase className="w-3 h-3" /> Join the Nexrova Mission
        </div>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter">
          Build the future of <span className="text-indigo-600">Home Services</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
          We're looking for the best talent in Bhubaneswar to help us redefine trust 
          and quality in the hyperlocal market.
        </p>
      </section>

      {/* Perks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => (
            <div key={idx} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${perk.color}`}>
                <perk.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{perk.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles Section */}
      <section className="bg-emerald-900 py-32 rounded-[60px] mx-4 sm:mx-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Open Roles</h2>
            <p className="text-emerald-100/80 font-medium text-xl">Join our founding team in Bhubaneswar.</p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { role: "Service Partner (AC/Electrical)", type: "Contract", location: "Bhubaneswar" },
              { role: "Operations Manager", type: "Full-time", location: "Bhubaneswar" },
              { role: "Customer Experience Lead", type: "Full-time", location: "Remote/Bhubaneswar" }
            ].map((job, idx) => (
              <div key={idx} className="group bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/10 transition-all cursor-pointer">
                <div className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-black text-white">{job.role}</h4>
                  <p className="text-emerald-100/60 text-lg font-medium">{job.location} • {job.type}</p>
                </div>
                <div className="flex items-center gap-3 text-emerald-400 font-black uppercase tracking-widest text-sm group-hover:gap-6 transition-all bg-white/5 px-8 py-4 rounded-2xl">
                  Apply Now <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-emerald-100/60 font-medium mb-6">Don't see your role?</p>
            <Link href="/contact" className="text-white font-black uppercase tracking-widest text-sm border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 transition-colors">
              Send us your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
