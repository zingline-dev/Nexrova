import { 
  Sparkles, 
  Zap, 
  Droplets, 
  Car,
  ArrowRight,
  ShieldCheck,
  Clock
} from "lucide-react";
import Link from "next/link";

const categories = [
  { id: 1, name: "Home Cleaning", icon: Sparkles, color: "bg-blue-50 text-blue-600", items: "Deep, Bathroom, Kitchen, Sofa Cleaning" },
  { id: 2, name: "Car Wash Services", icon: Car, color: "bg-emerald-50 text-emerald-600", items: "Exterior, Interior, Waterless, Subscriptions" },
  { id: 3, name: "Plumbing", icon: Droplets, color: "bg-indigo-50 text-indigo-600", items: "Tap Repair, Leakage Fix, Drain Cleaning" },
  { id: 4, name: "Electrician", icon: Zap, color: "bg-yellow-50 text-yellow-600", items: "Fan, Wiring, Switchboard Repairs" },
];

export default function ServiceGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Service Categories</h2>
            <p className="text-base md:text-lg text-slate-600">
              Expert solutions for all your home needs. Every professional is background-checked 
              and highly rated by neighbors.
            </p>
          </div>
          <Link href="/services" className="flex items-center gap-2 text-indigo-600 font-bold group text-sm md:text-base">
            View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={cat.id}
              className={`bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-200 hover-lift transition-all cursor-pointer group`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
              <p className="text-slate-500 mb-6 font-medium">{cat.items}</p>
              
              <div className="flex items-center gap-4 text-sm font-semibold text-slate-400">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Verified</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-500" /> 60m response</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
