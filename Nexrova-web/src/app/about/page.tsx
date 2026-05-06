"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Heart, Target, MapPin, Zap } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Hyperlocal Trust",
      desc: "We aren't just a platform; we're your neighbors. We understand Bhubaneswar's unique home needs better than anyone.",
      icon: MapPin,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Quality First",
      desc: "Every professional on Nexrova is hand-picked. We'd rather have fewer experts than compromise on the quality of your home.",
      icon: ShieldCheck,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Transparency",
      desc: "No hidden costs. No surprise charges. Just honest pricing and verified experts who show up on time.",
      icon: Zap,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-36 relative overflow-hidden bg-slate-50 min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-[60%] h-[150%] bg-indigo-600/5 -skew-x-12 translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 max-w-3xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest mb-6"
              >
                Our Mission
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8"
              >
                Building a Better <span className="text-indigo-600">Home Service</span> Ecosystem
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed font-medium"
              >
                Nexrova started with a simple question: Why is it so hard to find a trusted plumber or 
                electrician in Bhubaneswar? We're here to solve that by connecting the city's 
                best professionals with households that value quality.
              </motion.p>
            </div>

            {/* 2nd Reference Space: Floating Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex-1 w-full flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-600/10 blur-3xl rounded-full" />
                <div className="relative bg-white p-8 rounded-[40px] shadow-2xl border border-white max-w-[340px] rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">Verified Excellence</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-6">
                    Every professional goes through a 7-step verification process before joining.
                  </p>
                  <div className="flex -space-x-3 mb-6">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                        P{i}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                      +500
                    </div>
                  </div>
                  <div className="text-xs font-black text-indigo-600 uppercase tracking-widest">
                    Bhubaneswar Operations
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Planned Categories", val: "20+" },
              { label: "Verified Partners", val: "500+" },
              { label: "Response Time", val: "60m" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-12 rounded-[40px] bg-white border border-slate-100 shadow-xl shadow-slate-100/50">
                <p className="text-5xl font-black text-indigo-600 mb-2">{stat.val}</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white mb-6">Values that Drive Us</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We aren't just building an app; we're building a community of reliable professionals 
              and happy homeowners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-xl p-10 rounded-[40px] border border-slate-700/50"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Vision for Bhubaneswar</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                In the next two years, we aim to become the heartbeat of home maintenance in Odisha. 
                Our vision extends beyond just bookings—we are empowering local professionals with 
                technology, training, and financial stability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <Heart className="w-6 h-6 text-indigo-600" />
                  <span className="font-bold text-slate-700">Empowering Local Communities</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <Target className="w-6 h-6 text-indigo-600" />
                  <span className="font-bold text-slate-700">Operational Excellence & Tech-Driven Ease</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square bg-slate-100 rounded-[60px] flex items-center justify-center relative overflow-hidden">
               {/* Abstract placeholder for team/office image */}
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-slate-200" />
               <Users className="w-32 h-32 text-indigo-200 relative z-10" />
               <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white/50">
                  <p className="text-slate-900 font-black text-xl mb-1 italic">"Neighbors helping neighbors."</p>
                  <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">The Nexrova Philosophy</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
