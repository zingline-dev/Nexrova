"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you verify the professionals?",
      a: "Every Nexrova Pro goes through a 3-step verification: 1) Identity & Background Check, 2) Technical Skill Assessment, and 3) Practical Quality Trial. We only onboard the top 10% of applicants."
    },
    {
      q: "What is the 60-minute response guarantee?",
      a: "For all urgent bookings (electrical, plumbing, locksmith), our professionals aim to reach your doorstep within 60 minutes of booking confirmation in select Bhubaneswar areas."
    },
    {
      q: "Is the ₹99 membership refundable?",
      a: "The membership fee is non-refundable, but you can cancel at any time. Once canceled, your benefits will remain active until the end of the current billing cycle."
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Our pricing is transparent. Plus members pay zero convenience fees. Regular users see a clear breakdown of service cost + visiting fee before booking."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-500 font-medium">
            Everything you need to know about Nexrova and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-100 rounded-[32px] overflow-hidden transition-all"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-black text-slate-900">{faq.q}</span>
                {openIdx === idx ? <Minus className="w-6 h-6 text-indigo-600" /> : <Plus className="w-6 h-6 text-slate-400" />}
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: openIdx === idx ? "auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                className="overflow-hidden bg-slate-50/50"
              >
                <p className="p-8 pt-0 text-slate-600 leading-relaxed font-medium text-lg">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
