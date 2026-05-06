"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    { title: "Operations Manager", location: "Bhubaneswar", type: "Full-time" },
    { title: "Customer Success Lead", location: "Bhubaneswar", type: "Full-time" },
    { title: "Professional Support Expert", location: "Remote/Hybrid", type: "Full-time" }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Briefcase className="w-4 h-4" /> We're Hiring
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Build the Future of <br/>Home Services</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Join our mission to organize the hyperlocal service industry in India, starting from the Temple City.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-50 border border-slate-100 rounded-[32px] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white hover:shadow-xl transition-all group cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{job.title}</h3>
                <div className="flex gap-4 text-slate-500 font-bold text-sm">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="px-2 py-0.5 bg-white border border-slate-200 rounded-md text-[10px] uppercase">{job.type}</span>
                </div>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-2 group-hover:bg-indigo-700 transition-all">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
