"use client";

import { useState } from "react";
import { Briefcase, Rocket, Target, ArrowRight, Star, ShieldCheck, ChevronDown, CheckCircle2, Zap, BarChart3, Award, Sparkles, Code, X, Loader2, Send, Paperclip } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { submitJobApplication, uploadFile } from "@/lib/insforge";

export default function CareerPage() {
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  const [applyingFor, setApplyingFor] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

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
      location: "Bhubaneswar / Hybrid",
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
            title: "Required Skills",
            items: ["Strong communication skills", "Problem-solving mindset", "Vendor management experience preferred", "Ability to handle pressure situations", "Basic Excel/Google Sheets knowledge"],
            type: "tags"
          }
        ],
        salary: "Competitive salary + performance incentives"
      }
    },
    {
      role: "React Native Developer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      priority: "Active",
      icon: Code,
      jd: {
        about: "Nexrova is building a next-generation home services platform focused on reliability, speed, and customer trust. We are looking for a React Native Developer to help build scalable mobile applications for customers and service professionals.",
        overview: "You will be responsible for developing and maintaining Nexrova’s mobile applications using React Native. You will work closely with the founder, backend developer, and designer to create high-performance and user-friendly mobile experiences.",
        sections: [
          {
            title: "Key Responsibilities",
            items: ["Develop customer and partner mobile applications", "Build reusable UI components", "Integrate REST APIs", "Implement authentication and booking flows", "Optimize app performance"],
            type: "check"
          },
          {
            title: "Required Skills",
            items: ["Strong knowledge of React Native", "JavaScript / TypeScript proficiency", "Redux or Zustand state management", "REST API integration", "Firebase integration"],
            type: "tags"
          }
        ],
        salary: "Competitive salary + future growth opportunities"
      }
    },
    {
      role: "Backend Developer",
      type: "Full-Time",
      location: "Remote / Hybrid",
      priority: "Active",
      icon: Zap,
      jd: {
        about: "Nexrova is a fast-growing home services startup building a scalable technology platform connecting customers with trusted professionals. We are looking for a Backend Developer to build robust APIs and scalable backend infrastructure for our platform.",
        overview: "You will design, develop, and maintain backend systems powering bookings, authentication, payments, notifications, and admin operations. You will work closely with frontend developers and the founder to create scalable and secure backend architecture.",
        sections: [
          {
            title: "Key Responsibilities",
            items: ["Build REST APIs and backend services", "Design scalable database architecture", "Implement authentication systems", "Integrate payment gateways", "Optimize server performance"],
            type: "check"
          },
          {
            title: "Required Skills",
            items: ["Node.js", "Express.js or NestJS", "PostgreSQL", "REST API development", "JWT authentication"],
            type: "tags"
          }
        ],
        salary: "Competitive salary + future growth opportunities"
      }
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingFor) return;
    
    setIsSubmitting(true);
    setError("");
    
    try {
      let resume_url = "";
      
      if (selectedFile) {
        setUploadProgress(30);
        const uploadResult = await uploadFile("resumes", selectedFile);
        resume_url = uploadResult.url;
        setUploadProgress(70);
      }

      await submitJobApplication({
        ...form,
        role: applyingFor,
        resume_url,
      });
      
      setUploadProgress(100);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setApplyingFor(null);
        setForm({ name: "", email: "", phone: "", message: "" });
        setSelectedFile(null);
        setUploadProgress(0);
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      setUploadProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Currently Hiring</h2>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                          {job.jd.sections.map((section, sIdx) => (
                            <div key={sIdx} className="space-y-4">
                              <h5 className={cn(
                                "font-black uppercase tracking-[0.2em] text-[10px]",
                                section.type === "zap" ? "text-indigo-400" : 
                                section.type === "award" ? "text-amber-400" : "text-emerald-400"
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
                                      ) : section.type === "award" ? (
                                        <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
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
                          <button
                            onClick={() => setApplyingFor(job.role)}
                            className="w-full md:w-auto bg-white text-emerald-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-3 active:scale-95"
                          >
                            Apply for this Position <ArrowRight className="w-5 h-5" />
                          </button>
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
            <button 
              onClick={() => setApplyingFor("General Application")}
              className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 hover:border-emerald-400 transition-all"
            >
              Send us your Resume <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {applyingFor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setApplyingFor(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
                <button 
                  onClick={() => !isSubmitting && setApplyingFor(null)}
                  className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {isSuccess ? (
                  <div className="py-12 text-center space-y-6 animate-scale-in">
                    <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-emerald-100/50 transform rotate-3">
                      <Send className="w-10 h-10 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-slate-900">Application Sent!</h3>
                      <p className="text-slate-500 font-medium">We've received your application for <span className="text-indigo-600 font-bold">{applyingFor}</span>. Our team will review it and get back to you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <h3 className="text-3xl font-black text-slate-900 mb-2">Apply Now</h3>
                      <p className="text-slate-500 font-medium">
                        Position: <span className="text-indigo-600 font-bold">{applyingFor}</span>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          placeholder="John Doe" 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" 
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            type="email" 
                            required 
                            value={form.email}
                            onChange={(e) => setForm({...form, email: e.target.value})}
                            placeholder="john@example.com" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Phone Number</label>
                          <input 
                            type="tel" 
                            required 
                            value={form.phone}
                            onChange={(e) => setForm({...form, phone: e.target.value})}
                            placeholder="+91 98765 43210" 
                            className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Why Nexrova?</label>
                        <textarea 
                          rows={4} 
                          required
                          value={form.message}
                          onChange={(e) => setForm({...form, message: e.target.value})}
                          placeholder="Tell us a bit about yourself and why you're excited to join our founding team." 
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                        />
                      </div>

                      {/* Resume Upload */}
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Resume / CV (PDF/DOC)</label>
                        <div className="relative group/upload">
                          <input 
                            type="file" 
                            accept=".pdf,.doc,.docx"
                            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            disabled={isSubmitting}
                          />
                          <div className={cn(
                            "w-full bg-slate-50 border-2 border-dashed rounded-2xl py-6 px-6 transition-all flex flex-col items-center justify-center gap-2",
                            selectedFile ? "border-emerald-200 bg-emerald-50/30" : "border-slate-100 group-hover/upload:border-indigo-200 group-hover/upload:bg-slate-100/50"
                          )}>
                            {selectedFile ? (
                              <>
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                                <div className="text-center">
                                  <p className="text-slate-900 font-bold text-sm truncate max-w-[200px]">{selectedFile.name}</p>
                                  <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest">File Selected</p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover/upload:text-indigo-500 transition-colors">
                                  <Paperclip className="w-5 h-5" />
                                </div>
                                <div className="text-center">
                                  <p className="text-slate-500 font-bold text-sm">Click to upload resume</p>
                                  <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">PDF, DOC (Max 5MB)</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
                      >
                        {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Submit Application</>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
