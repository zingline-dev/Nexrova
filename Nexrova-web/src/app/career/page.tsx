"use client";

import { useState } from "react";
import { Briefcase, Rocket, Target, ArrowRight, Star, ShieldCheck, ChevronDown, CheckCircle2, Zap, BarChart3, Award, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CareerPage() {
  const [expandedRole, setExpandedRole] = useState<number | null>(0); // Default open since it's the only one

  const perks = [
    { title: "Top Compensation", desc: "We offer industry-leading pay for our professionals and office teams.", icon: Rocket, color: "text-indigo-600 bg-indigo-50" },
    { title: "Flexibility", desc: "Work on your terms. Choose your slots and manage your own schedule.", icon: Target, color: "text-emerald-600 bg-emerald-50" },
    { title: "Insurance Cover", desc: "Every partner is covered by our comprehensive health and safety insurance.", icon: ShieldCheck, color: "text-blue-600 bg-blue-50" },
    { title: "Growth & Training", desc: "Regular workshops and certifications to help you level up your skills.", icon: Star, color: "text-amber-600 bg-amber-50" }
  ];

  const roles = [
    {
      role: "Operations & Vendor Manager",
      type: "Full-Time",
      location: "Mumbai / Hybrid",
      priority: "Active",
      icon: BarChart3,
      jd: {
        about: "Nexrova is a technology-driven home services startup focused on connecting customers with trusted professionals for services like cleaning, plumbing, electrician work, appliance repair, and more. We are building a reliable, scalable, and customer-first platform designed to simplify home services through technology and operational excellence.",
        overview: "We are looking for an energetic and execution-focused Operations & Vendor Manager to help build and manage Nexrova’s service partner network and day-to-day operations. This role is critical to ensuring smooth onboarding, high service quality, customer satisfaction, and reliable booking fulfillment.",
        sections: [
          {
            title: "Vendor Recruitment & Onboarding",
            items: ["Recruit service professionals across categories", "Conduct onboarding and documentation", "Verify KYC and background details", "Maintain vendor database"],
            type: "check"
          },
          {
            title: "Operations Management",
            items: ["Coordinate daily bookings and assignments", "Ensure professionals arrive on time", "Handle cancellations and rescheduling", "Monitor operational efficiency"],
            type: "zap"
          },
          {
            title: "Service Quality Management",
            items: ["Track customer feedback and ratings", "Resolve service-related complaints", "Maintain service SOP compliance", "Improve vendor performance standards"],
            type: "award"
          },
          {
            title: "Partner Relationship Management",
            items: ["Build strong relationships with professionals", "Conduct training and onboarding sessions", "Resolve vendor issues and disputes"],
            type: "check"
          },
          {
            title: "Reporting & Coordination",
            items: ["Share operational reports with leadership", "Coordinate with tech and customer support teams", "Identify operational bottlenecks"],
            type: "zap"
          },
          {
            title: "Required Skills",
            items: ["Strong communication skills", "Problem-solving mindset", "Vendor management experience preferred", "Ability to handle pressure situations", "Basic Excel/Google Sheets knowledge", "Operational coordination experience"],
            type: "tags"
          },
          {
            title: "Preferred Qualifications",
            items: ["Experience in operations, logistics, field management, or service businesses", "Startup experience is a plus", "Bachelor’s degree preferred"],
            type: "award"
          },
          {
            title: "What We’re Looking For",
            items: ["Highly responsible and proactive", "Strong execution ability", "Customer-focused mindset", "Ability to work in a fast-paced startup environment"],
            type: "sparkles"
          }
        ],
        salary: "Competitive salary + performance incentives"
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
          We're looking for the best talent to help us redefine trust
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
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Currently We are hiring</h2>
            <p className="text-emerald-100/70 font-medium text-lg">Join our team of Nexrova Experts.</p>
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
                  className="w-full p-8 flex items-center justify-between gap-6 text-left group/btn"
                >
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500",
                      expandedRole === idx ? "bg-white text-emerald-900 rotate-12" : "bg-white/5 text-emerald-400 group-hover/btn:bg-white/10"
                    )}>
                      <job.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h4 className="text-2xl md:text-3xl font-black text-white leading-tight">{job.role}</h4>
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-emerald-500/20 border-emerald-500/40 text-emerald-300">
                          {job.priority}
                        </span>
                      </div>
                      <p className="text-emerald-100/50 text-sm font-medium uppercase tracking-widest">{job.location} • {job.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-transform duration-500", expandedRole === idx && "rotate-180 bg-white/20 text-white")}>
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
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-white/5 space-y-10">
                        {/* About & Overview */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="bg-emerald-400/5 p-6 rounded-2xl border border-emerald-400/10">
                            <h5 className="text-emerald-400 font-black uppercase tracking-widest text-[10px] mb-3">About Nexrova</h5>
                            <p className="text-emerald-50/90 text-sm font-medium leading-relaxed">
                              {job.jd.about}
                            </p>
                          </div>
                          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <h5 className="text-white font-black uppercase tracking-widest text-[10px] mb-3">Role Overview</h5>
                            <p className="text-emerald-50/90 text-sm font-medium leading-relaxed">
                              {job.jd.overview}
                            </p>
                          </div>
                        </div>

                        {/* JD Sections Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                          {job.jd.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-4">
                              <h5 className={cn(
                                "font-black uppercase tracking-[0.2em] text-[10px]",
                                section.type === "alert" ? "text-rose-400" :
                                  section.type === "zap" ? "text-indigo-400" : 
                                  section.type === "award" ? "text-amber-400" :
                                  section.type === "sparkles" ? "text-fuchsia-400" : "text-emerald-400"
                              )}>
                                {section.title}
                              </h5>
                              
                              {section.type === "tags" ? (
                                <div className="flex flex-wrap gap-2">
                                  {section.items.map((item, i) => (
                                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-4">
                                  {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-emerald-50/80 font-medium text-sm leading-relaxed">
                                      {section.type === "check" ? (
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                      ) : section.type === "alert" ? (
                                        <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                                      ) : section.type === "award" ? (
                                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                      ) : section.type === "sparkles" ? (
                                        <Sparkles className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                                      ) : (
                                        <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                      )}
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Salary & Footer */}
                        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                          <div className="space-y-2">
                            <h5 className="text-emerald-100/40 text-[10px] font-black uppercase tracking-widest">Compensation</h5>
                            <p className="text-white font-black text-xl">{job.jd.salary}</p>
                          </div>
                          <Link
                            href="/contact"
                            className="w-full md:w-auto bg-white text-emerald-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 active:scale-95"
                          >
                            Apply for this Position <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-4">
            <p className="text-emerald-100/60 font-bold uppercase tracking-widest text-[10px]">Don't see your role?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 hover:border-emerald-400 transition-all">
              Send us your Resume <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
