"use client";

import { ShieldCheck, UserCheck, Search, Award, CheckCircle2, Scale, FileSearch, UserPlus } from "lucide-react";
import Link from "next/link";

export default function VerificationPage() {
  const steps = [
    {
      title: "1. Identity Verification",
      desc: "Comprehensive Aadhar and PAN verification to confirm the professional's legal identity.",
      icon: UserPlus,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "2. Criminal Background Check",
      desc: "Third-party police verification to ensure a clean record and absolute safety for your family.",
      icon: ShieldCheck,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "3. Skill & Experience Audit",
      desc: "Mandatory practical tests conducted by industry experts to verify technical expertise.",
      icon: Award,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "4. Tools & Equipment Inspection",
      desc: "We ensure every partner uses professional-grade equipment and premium materials.",
      icon: Search,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "5. Soft Skills Training",
      desc: "Professional behavior, grooming, and communication training for a premium experience.",
      icon: UserCheck,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "6. Insurance & Bond Verification",
      desc: "Verifying appropriate insurance coverage for peace of mind during service delivery.",
      icon: Scale,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "7. Quality Shadowing",
      desc: "New partners are shadowed by senior auditors for their first 5 services to ensure 100% quality.",
      icon: FileSearch,
      color: "bg-slate-50 text-slate-600"
    }
  ];

  return (
    <div className="bg-white pt-24 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" /> 100% Verified Partners
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
          The <span className="text-emerald-600">Nexrova Shield</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
          Your safety is our priority. Discover the rigorous 7-step verification process 
          every professional must pass before they can step into your home.
        </p>
      </section>

      {/* Steps Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 rounded-[40px] border border-slate-100 bg-white hover:border-emerald-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${step.color}`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
            </div>
          ))}
          
          {/* Final Summary Card */}
          <div className="p-8 rounded-[40px] bg-slate-900 text-white flex flex-col justify-center lg:col-span-2">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4">Only 1 in 10 pass.</h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  Our selection process is the toughest in Bhubaneswar. We reject 90% of applicants 
                  to ensure only the best, safest, and most skilled professionals serve you.
                </p>
              </div>
              <Link href="/login" className="bg-emerald-600 text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mt-24 bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">Safety First, Always.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h4 className="text-red-600 font-black mb-4 uppercase tracking-wider text-sm">Local Help</h4>
              <ul className="space-y-4">
                {["Unknown Background", "Unreliable Availability", "No Skill Guarantee", "Unfixed Pricing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-bold">
                    <span className="text-red-500 text-xl">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-emerald-500">
              <h4 className="text-emerald-600 font-black mb-4 uppercase tracking-wider text-sm">Nexrova Partner</h4>
              <ul className="space-y-4">
                {["Police Verified", "Background Checked", "Skill Certified", "Transparent Pricing"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-900 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
