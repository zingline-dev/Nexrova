"use client";

import { Search, Calendar, User, ArrowRight, Sparkles, Zap, Droplets } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "How to prepare your AC for Bhubaneswar's 45°C summers",
    excerpt: "Summer is coming, and your AC needs to be ready. Learn the 5 essential maintenance steps...",
    category: "Electrical",
    icon: Zap,
    color: "text-yellow-600 bg-yellow-50",
    date: "May 10, 2026",
    author: "Nexrova Team"
  },
  {
    title: "5 Signs your Home Needs a Professional Deep Cleaning",
    excerpt: "Dust isn't the only enemy. From allergens to hidden mold, here's when to call the experts...",
    category: "Cleaning",
    icon: Sparkles,
    color: "text-blue-600 bg-blue-50",
    date: "May 8, 2026",
    author: "Maintenance Expert"
  },
  {
    title: "Preventing Monsoon Dampness: A Guide for Homeowners",
    excerpt: "Bhubaneswar monsoons can be harsh on your walls. Discover how to protect your home from moisture...",
    category: "Plumbing",
    icon: Droplets,
    color: "text-indigo-600 bg-indigo-50",
    date: "May 5, 2026",
    author: "Structural Auditor"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-white pt-24 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Blog & <span className="text-indigo-600">Guides</span></h1>
            <p className="text-xl text-slate-500 font-medium">Expert advice on keeping your Bhubaneswar home in perfect condition.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search guides..."
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative group overflow-hidden rounded-[48px] bg-slate-900 aspect-[21/9] flex items-center p-8 md:p-16">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
          <div className="relative z-20 max-w-2xl space-y-6">
            <span className="px-4 py-1.5 bg-indigo-600 text-white rounded-full text-xs font-black uppercase tracking-widest">Featured Guide</span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">Ultimate Guide to Home Safety in Bhubaneswar</h2>
            <p className="text-slate-300 text-lg font-medium">Learn how we vet our professionals and what you can do to keep your home 100% secure.</p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all">Read Full Guide</button>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative h-64 bg-slate-100 rounded-[32px] mb-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <post.icon className={`w-20 h-20 opacity-20 ${post.color.split(' ')[0]}`} />
                </div>
                <div className="absolute top-6 left-6">
                  <span className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm ${post.color}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-400 text-sm font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 text-indigo-600 font-black uppercase tracking-widest text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-indigo-50 rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Stay Updated</h2>
            <p className="text-lg text-slate-600 font-medium mb-10">Get the latest home care tips and exclusive Nexrova offers directly in your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-white border border-slate-200 rounded-2xl px-6 py-4 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600/20 transition-all"
              />
              <button className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
