"use client";

import { 
  Sparkles, Zap, Droplets, Bug, Paintbrush, Hammer, 
  ChevronRight, ShieldCheck, Star, Clock 
} from "lucide-react";

const allServices = [
  {
    category: "Home Cleaning",
    icon: Sparkles,
    color: "bg-blue-50 text-blue-600",
    description: "Professional deep cleaning for every corner of your home.",
    subServices: ["Full Home Deep Cleaning", "Sofa & Carpet Cleaning", "Kitchen Cleaning", "Bathroom Cleaning"]
  },
  {
    category: "Electrical Works",
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
    description: "Expert electricians for repairs, installations, and maintenance.",
    subServices: ["AC Repair & Service", "Fan & Light Installation", "Switchboard Repair", "Complete Wiring"]
  },
  {
    category: "Plumbing",
    icon: Droplets,
    color: "bg-indigo-50 text-indigo-600",
    description: "Fast and reliable plumbing solutions for all leakages and fittings.",
    subServices: ["Tap & Leak Repair", "Toilet & Basin Installation", "Water Tank Cleaning", "Pipe Replacement"]
  },
  {
    category: "Pest Control",
    icon: Bug,
    color: "bg-red-50 text-red-600",
    description: "Safe and effective treatment for a pest-free environment.",
    subServices: ["Cockroach Control", "Termite Treatment", "General Pest Control", "Bed Bug Removal"]
  },
  {
    category: "Painting & Decor",
    icon: Paintbrush,
    color: "bg-purple-50 text-purple-600",
    description: "Transform your walls with our premium painting services.",
    subServices: ["Interior Painting", "Exterior Painting", "Texture Painting", "Waterproofing"]
  },
  {
    category: "Handyman Services",
    icon: Hammer,
    color: "bg-emerald-50 text-emerald-600",
    description: "On-demand help for all small and large home repairs.",
    subServices: ["Furniture Assembly", "Carpentry Works", "Drilling & Hanging", "Door & Window Repair"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Explore Our <span className="text-indigo-600">Full Catalog</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
            We are curating the best professionals in Bhubaneswar for every home need. 
            From a leaking tap to a full home makeover, Nexrova has you covered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {allServices.map((service, idx) => (
            <div 
              key={idx}
              className="group p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center shrink-0 ${service.color} group-hover:scale-110 transition-transform shadow-sm`}>
                  <service.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900">{service.category}</h3>
                    <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      Verified
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.subServices.map((sub, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 bg-slate-50 text-slate-500 rounded-lg md:rounded-xl text-xs md:text-sm font-bold border border-slate-100">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-slate-400 font-bold text-[10px] md:text-sm">
                        <Clock className="w-4 h-4" /> 60m response
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 font-bold text-[10px] md:text-sm">
                        <Star className="w-4 h-4 text-amber-400" /> 4.8+ Rated
                      </div>
                    </div>
                    <button className="text-indigo-600 font-black text-xs md:text-sm uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                      Notify Me <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-20 p-12 rounded-[40px] bg-slate-900 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium mb-8">
            From deep cleaning to urgent repairs, Nexrova brings verified 
            professionals to your doorstep in Bhubaneswar.
          </p>
          <button className="relative z-10 bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-50 transition-all shadow-xl active:scale-95">
            Suggest a Service
          </button>
        </div>
      </div>
    </div>
  );
}
