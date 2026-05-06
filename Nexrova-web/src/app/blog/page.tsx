"use client";

import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "Launching Bhubaneswar's Premier Home Service Platform",
      excerpt: "Learn why we chose Bhubaneswar as our first city and our vision for local home care.",
      date: "May 2026",
      category: "Company News"
    },
    {
      title: "5 Tips to Maintain Your AC During Odisha Summers",
      excerpt: "Expert advice from our verified pros on keeping your home cool and efficient.",
      date: "May 2026",
      category: "Expert Tips"
    },
    {
      title: "The Ultimate Guide to Deep Cleaning Before Festivals",
      excerpt: "Get your home ready for celebrations with our professional cleaning checklist.",
      date: "May 2026",
      category: "Home Care"
    },
    {
      title: "Why Verification Matters in Home Services",
      excerpt: "Exploring the security risks of unverified labor and how Nexrova keeps you safe.",
      date: "May 2026",
      category: "Safety First"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <Newspaper className="w-4 h-4" /> Nexrova Blog
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Stories & Expert Advice</h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Stay updated with the latest news from Nexrova and home maintenance tips from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] bg-slate-100 rounded-[40px] mb-8 overflow-hidden relative">
                 <div className="absolute inset-0 bg-indigo-600/5 group-hover:bg-indigo-600/0 transition-colors" />
                 <div className="absolute top-8 left-8 bg-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-indigo-600 shadow-sm">
                   {post.category}
                 </div>
              </div>
              <p className="text-slate-400 font-bold text-sm mb-4">{post.date}</p>
              <h2 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="text-slate-500 font-medium mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-indigo-600 font-black uppercase text-xs tracking-widest">
                Read Article <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
