"use client";

import { useState } from "react";
import { Briefcase, Rocket, Target, ArrowRight, Star, ShieldCheck, ChevronDown, CheckCircle2, Zap, BarChart3, Award, Sparkles, Code } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function CareerPage() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);

  const perks = [
    { title: "Top Pay", icon: Rocket, color: "text-indigo-600 bg-indigo-50" },
    { title: "Flexibility", icon: Target, color: "text-emerald-600 bg-emerald-50" },
    { title: "Insurance", icon: ShieldCheck, color: "text-blue-600 bg-blue-50" },
    { title: "Growth", icon: Star, color: "text-amber-600 bg-amber-50" }
  ];

  const roles = [
    {
      role: "Operations & Vendor Manager",
      type: "Full-Time",
      location: "Mumbai / Hybrid",
      priority: "Active",
      icon: BarChart3,
      jd: {
        about: "Nexrova is a technology-driven home services startup focused on connecting customers with trusted professionals for services like cleaning, plumbing, electrician work, appliance repair, and more.",
        overview: "We are looking for an energetic and execution-focused Operations & Vendor Manager to help build and manage Nexrova’s service partner network and day-to-day operations.",
        sections: [
          {
            title: "Vendor Recruitment & Onboarding",
            items: ["Recruit service professionals", "Onboarding and documentation", "Verify KYC and background", "Maintain vendor database"],
            type: "check"
          },
          {
            title: "Operations Management",
            items: ["Coordinate daily bookings", "Ensure professional arrival", "Handle cancellations", "Monitor efficiency"],
            type: "zap"
          },
          {
            title: "Required Skills",
            items: ["Communication skills", "Problem-solving mindset", "Vendor management", "Handle pressure situations", "Excel/Google Sheets", "Coordination exp"],
            type: "tags"
          }
        ],
        salary: "Competitive + Incentives"
      }
    },
    {
      role: "React Native Developer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      priority: "Active",
      icon: Code,
      jd: {
        about: "Nexrova is building a next-generation home services platform focused on reliability, speed, and customer trust.",
        overview: "You will be responsible for developing and maintaining Nexrova’s mobile applications using React Native, working closely with the founder and backend team.",
        sections: [
          {
            title: "Key Responsibilities",
            items: ["Customer/Partner apps", "Reusable UI components", "Integrate REST APIs", "Auth/Booking flows", "Performance optimization"],
            type: "check"
          },
          {
            title: "Required Skills",
            items: ["React Native", "JS/TS proficiency", "Redux/Zustand", "REST API integration", "Firebase integration", "Git/GitHub", "Perf optimization"],
            type: "tags"
          }
        ],
        salary: "Competitive + Growth"
      }
    },
    {
      role: "Backend Developer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      priority: "Active",
      icon: Zap,
      jd: {
        about: "Nexrova is a fast-growing home services startup building a scalable technology platform connecting customers with trusted professionals.",
        overview: "You will design, develop, and maintain backend systems powering bookings, authentication, payments, notifications, and admin operations.",
        sections: [
          {
            title: "Key Responsibilities",
            items: ["Build REST APIs", "Database architecture", "Auth systems", "Payment gateways", "Booking systems", "Server optimization"],
            type: "check"
          },
          {
            title: "Required Skills",
            items: ["Node.js", "Express.js/NestJS", "PostgreSQL", "REST API dev", "JWT Auth", "AWS basics", "Git/GitHub"],
            type: "tags"
          }
        ],
        salary: "Competitive + Growth"
      }
    }
  ];

  return (
    <div className="bg-white min-h-screen lg:h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Sidebar - Visual Branding */}
      <section className="lg:w-1/3 bg-slate-900 relative overflow-hidden flex flex-col justify-center p-8 lg:p-16 border-r border-white/5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest mb-8 border border-white/10"
          >
            <Briefcase className="w-3 h-3" /> Careers at Nexrova
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            Build the future <br />
            <span className="text-emerald-400">of Services.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-medium mb-12 max-w-sm"
          >
            We're building Bhubaneswar's most trusted hyperlocal marketplace.
          </motion.p>

          <div className="grid grid-cols-2 gap-4">
            {perks.map((perk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", perk.color)}>
                  <perk.icon className="w-5 h-5" />
                </div>
                <span className="text-white font-bold text-sm">{perk.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-12 relative z-10 hidden lg:block">
          <Link href="/contact" className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
            Don't see your role? Send Resume <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      {/* Main Content - Hiring Board */}
      <section className="flex-1 bg-slate-50 p-6 lg:p-12 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Currently We are hiring</h2>
              <p className="text-slate-500 font-medium text-sm">Join our team of Nexrova Experts</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Immediate Openings
            </div>
          </div>

          <div className="space-y-4 flex-1">
            {roles.map((job, idx) => (
              <div
                key={idx}
                className={cn(
                  "bg-white border rounded-[32px] overflow-hidden transition-all duration-500 group",
                  expandedRole === idx ? "border-emerald-500 ring-4 ring-emerald-500/5 shadow-2xl" : "border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setExpandedRole(expandedRole === idx ? null : idx)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between gap-6 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500",
                      expandedRole === idx ? "bg-emerald-600 text-white rotate-12" : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                    )}>
                      <job.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h4 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">{job.role}</h4>
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border bg-emerald-50 border-emerald-100 text-emerald-600">
                          {job.priority}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{job.location} • {job.type}</p>
                    </div>
                  </div>
                  <div className={cn("w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all duration-500 shrink-0", expandedRole === idx && "rotate-180 bg-emerald-50 text-emerald-600")}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedRole === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 lg:px-8 pb-8 pt-2 border-t border-slate-100 space-y-8 bg-slate-50/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <h5 className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-2">Overview</h5>
                            <p className="text-slate-600 text-sm font-medium leading-relaxed">
                              {job.jd.overview}
                            </p>
                          </div>
                          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <h5 className="text-slate-400 font-black uppercase tracking-widest text-[9px] mb-2">Compensation</h5>
                            <p className="text-slate-900 font-black text-lg">{job.jd.salary}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {job.jd.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-4">
                              <h5 className="text-slate-900 font-black uppercase tracking-[0.15em] text-[10px] flex items-center gap-2">
                                <div className="w-1 h-3 bg-emerald-500 rounded-full" />
                                {section.title}
                              </h5>
                              
                              {section.type === "tags" ? (
                                <div className="flex flex-wrap gap-2">
                                  {section.items.map((item, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-[11px] uppercase tracking-wide shadow-sm">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              ) : (
                                <ul className="space-y-3">
                                  {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-500 font-medium text-sm leading-relaxed">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>

                        <div className="pt-6 flex justify-center">
                          <Link
                            href="/contact"
                            className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-base hover:bg-emerald-600 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
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

          <div className="mt-10 lg:hidden text-center pb-10">
            <Link href="/contact" className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-900 transition-colors">
              Don't see your role? Send Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
