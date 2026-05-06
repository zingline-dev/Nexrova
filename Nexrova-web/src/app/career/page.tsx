"use client";

import { useState } from "react";
import { Briefcase, Heart, Rocket, Target, Users, ArrowRight, Star, ShieldCheck, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CareerPage() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const perks = [
    { title: "Top Compensation", desc: "We offer industry-leading pay for our professionals and office teams.", icon: Rocket, color: "text-indigo-600 bg-indigo-50" },
    { title: "Flexibility", desc: "Work on your terms. Choose your slots and manage your own schedule.", icon: Target, color: "text-emerald-600 bg-emerald-50" },
    { title: "Insurance Cover", desc: "Every partner is covered by our comprehensive health and safety insurance.", icon: ShieldCheck, color: "text-blue-600 bg-blue-50" },
    { title: "Growth & Training", desc: "Regular workshops and certifications to help you level up your skills.", icon: Star, color: "text-amber-600 bg-amber-50" }
  ];

  const roles = [
    {
      role: "Operations & Vendor Manager",
      type: "Full-time",
      location: "Bhubaneswar",
      priority: "Critical Priority",
      jd: {
        intro: "This is the most critical role for Nexrova. Urban-service startups fail operationally before technically. You are the backbone of our service quality.",
        responsibilities: ["Recruit professionals", "Verify KYC", "Handle onboarding", "Resolve cancellations", "Manage service quality", "Coordinate bookings"],
        whyImportant: ["Professionals won't show up without management", "Customer trust depends on operations", "Poor operations lead to poor reviews"]
      }
    },
    {
      role: "React Native Developer",
      type: "Full-time",
      location: "Remote/Hybrid",
      priority: "New",
      jd: {
        intro: "We need a unified mobile experience for both customers and partners. Your work ensures a faster launch and lower long-term costs.",
        responsibilities: ["Customer app development", "Partner app development", "API integration"],
        skills: ["React Native", "Redux/Zustand", "Firebase", "REST APIs"]
      }
    },
    {
      role: "Backend Developer",
      type: "Full-time",
      location: "Remote/Hybrid",
      priority: "Core Team",
      jd: {
        intro: "You will build the core engines that power Nexrova's marketplace operations.",
        responsibilities: ["Booking system architecture", "Authentication & Security", "Payment gateway integration", "Admin APIs"],
        skills: ["Node.js", "PostgreSQL", "Express/NestJS", "AWS basics"]
      }
    }
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 animate-slide-up delay-100">
        <h2 className="text-3xl font-black text-slate-900 mb-12 text-center">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, idx) => (
            <div key={idx} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 hover-lift hover:bg-white transition-all group animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
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
      <section className="bg-emerald-900 py-16 rounded-[48px] mx-4 sm:mx-12 lg:mx-20 relative overflow-hidden animate-slide-up delay-300">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[120px]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Open Roles</h2>
            <p className="text-emerald-100/70 font-medium text-lg">Join our founding team in Bhubaneswar.</p>
          </div>

          <div className="space-y-4">
            {roles.map((job, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "bg-white/5 border border-white/10 rounded-[32px] overflow-hidden transition-all duration-300",
                  expandedRole === idx ? "bg-white/10 border-white/20 shadow-2xl" : "hover:bg-white/10"
                )}
              >
                <button 
                  onClick={() => setExpandedRole(expandedRole === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between gap-6 text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">{job.role}</h4>
                      <span className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                        job.priority === "Critical Priority" ? "bg-rose-500/20 border-rose-500/40 text-rose-300" : "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                      )}>
                        {job.priority}
                      </span>
                    </div>
                    <p className="text-emerald-100/50 text-sm font-medium">{job.location} • {job.type}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-emerald-400 font-black uppercase tracking-widest text-[11px]">
                      {expandedRole === idx ? "Close Details" : "View Details"}
                    </span>
                    <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-transform duration-300", expandedRole === idx && "rotate-180 bg-white text-emerald-900")}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedRole === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-white/5 space-y-8">
                        <div className="bg-emerald-400/5 p-6 rounded-2xl border border-emerald-400/10">
                          <p className="text-emerald-50 font-medium leading-relaxed italic">
                            "{job.jd.intro}"
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h5 className="text-emerald-400 font-black uppercase tracking-widest text-xs">Core Responsibilities</h5>
                            <ul className="space-y-3">
                              {job.jd.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-3 text-emerald-50/80 font-medium text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            {job.jd.whyImportant ? (
                              <>
                                <h5 className="text-rose-400 font-black uppercase tracking-widest text-xs">Why This Role Matters</h5>
                                <ul className="space-y-3">
                                  {job.jd.whyImportant.map((why, i) => (
                                    <li key={i} className="flex items-start gap-3 text-emerald-50/80 font-medium text-sm">
                                      <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                      {why}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <>
                                <h5 className="text-indigo-400 font-black uppercase tracking-widest text-xs">Required Skills</h5>
                                <div className="flex flex-wrap gap-2">
                                  {job.jd.skills?.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase">
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                          <p className="text-emerald-100/40 text-[10px] font-black uppercase tracking-widest">
                            Founding Team Opportunity • Bhubaneswar HQ
                          </p>
                          <Link 
                            href="/contact" 
                            className="w-full sm:w-auto bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black text-base hover:bg-emerald-50 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
                          >
                            Apply Now <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-emerald-100/60 font-medium mb-2 text-xs">Don't see your role?</p>
            <Link href="/contact" className="text-white font-black uppercase tracking-widest text-[10px] border-b border-emerald-500 pb-0.5 hover:text-emerald-400 transition-colors">
              Send us your Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
