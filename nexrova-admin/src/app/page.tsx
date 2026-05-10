"use client";

import { useEffect, useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  Search, 
  ArrowUpRight, 
  Clock, 
  ShieldCheck, 
  MoreVertical,
  LayoutDashboard,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

type Tab = 'waitlist' | 'contacts' | 'jobs';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('waitlist');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(json => {
        if (json.success) setData(json.data);
        setLoading(false);
      });
  }, []);

  const stats = [
    { label: 'Waitlist', value: data?.waitlist?.length || 0, icon: Users, color: 'grad-indigo' },
    { label: 'Messages', value: data?.contacts?.length || 0, icon: MessageSquare, color: 'grad-emerald' },
    { label: 'Applications', value: data?.jobs?.length || 0, icon: Briefcase, color: 'grad-rose' },
  ];

  const currentData = data ? data[activeTab] : [];
  const filteredData = currentData?.filter((item: any) => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 p-8 flex flex-col gap-10">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight">NEXROVA</h1>
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Admin Control</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {[
            { id: 'waitlist', icon: Users, label: 'Waitlist' },
            { id: 'contacts', icon: MessageSquare, label: 'Contact Messages' },
            { id: 'jobs', icon: Briefcase, label: 'Job Applications' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as Tab)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                activeTab === item.id 
                ? 'bg-white/10 text-white' 
                : 'text-white/40 hover:text-white/60 hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-6 rounded-3xl bg-indigo-600/10 border border-indigo-600/20">
          <p className="text-xs font-bold text-indigo-400 mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-black uppercase tracking-wider">Live Database</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto h-screen">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-black mb-1">Executive Overview</h2>
            <p className="text-white/40 font-bold">Manage your business growth and operations.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search everything..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 w-80 focus:outline-none focus:border-indigo-500/50 transition-all font-medium"
              />
            </div>
            <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] glass hover:border-white/10 transition-all relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:opacity-20 ${stat.color.replace('grad-', 'bg-')}`} />
              
              <div className="flex items-start justify-between relative z-10">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white/40 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</p>
                    <h3 className="text-4xl font-black tabular-nums">{stat.value}</h3>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-all" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* Data Table Area */}
        <section className="rounded-[40px] glass p-10 min-h-[500px]">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black capitalize">{activeTab} Details</h3>
            <button className="text-indigo-400 font-black text-sm uppercase tracking-widest hover:text-indigo-300 transition-all">Export CSV</button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
                    <th className="pb-6 px-4">Info</th>
                    <th className="pb-6 px-4">Contact</th>
                    <th className="pb-6 px-4">Date</th>
                    <th className="pb-6 px-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <AnimatePresence mode='wait'>
                    {filteredData?.map((item: any, idx: number) => (
                      <motion.tr 
                        key={item.id || idx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="group hover:bg-white/[0.02] transition-all"
                      >
                        <td className="py-6 px-4">
                          <div className="flex flex-col">
                            <span className="font-bold text-base text-white/90 group-hover:text-white transition-colors">
                              {item.name || item.email.split('@')[0]}
                            </span>
                            <span className="text-xs text-white/40 font-medium">{item.role || item.source || 'Standard Signup'}</span>
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-white/70">{item.email}</span>
                            {item.phone && <span className="text-xs text-white/30 font-medium">{item.phone}</span>}
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <div className="flex items-center gap-2 text-white/40 text-sm font-bold">
                            <Clock className="w-4 h-4" />
                            {format(new Date(item.created_at), 'MMM dd, yyyy')}
                          </div>
                        </td>
                        <td className="py-6 px-4">
                          <button className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center text-white/20 hover:text-white/60 transition-all">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
              {filteredData?.length === 0 && (
                <div className="py-20 text-center text-white/20 font-black uppercase tracking-widest text-sm">
                  No records found
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
