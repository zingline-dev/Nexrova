"use client";

import { useState, useMemo } from "react";
import { Calculator, Home, Info, Sparkles, Zap, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function EstimatePage() {
  const [serviceType, setServiceType] = useState("cleaning");
  const [houseSize, setHouseSize] = useState("2BHK");
  
  const pricingData = {
    cleaning: {
      "1BHK": 1499,
      "2BHK": 2499,
      "3BHK": 3499,
      "Villa/4BHK+": 5999,
      label: "Full Home Deep Cleaning"
    },
    electrical: {
      "1BHK": 499,
      "2BHK": 799,
      "3BHK": 1199,
      "Villa/4BHK+": 1999,
      label: "Inspection & General Repair"
    },
    plumbing: {
      "1BHK": 399,
      "2BHK": 599,
      "3BHK": 899,
      "Villa/4BHK+": 1499,
      label: "Leakage Check & Fittings"
    }
  };

  const estimatedPrice = useMemo(() => {
    return pricingData[serviceType as keyof typeof pricingData][houseSize as keyof (typeof pricingData)["cleaning"]];
  }, [serviceType, houseSize]);

  return (
    <div className="bg-white pt-24 pb-24">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl mb-6 text-indigo-600">
            <Calculator className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Price <span className="text-indigo-600">Estimator</span></h1>
          <p className="text-xl text-slate-500 font-medium">Get an instant estimate for your home needs in Bhubaneswar.</p>
        </div>

        <div className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Controls */}
            <div className="space-y-10">
              {/* Service Selection */}
              <div className="space-y-4">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">Select Service</label>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { id: "cleaning", label: "Deep Cleaning", icon: Sparkles },
                    { id: "electrical", label: "Electrical", icon: Zap },
                    { id: "plumbing", label: "Plumbing", icon: Droplets },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setServiceType(s.id)}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left",
                        serviceType === s.id 
                          ? "bg-white border-indigo-600 shadow-lg shadow-indigo-100" 
                          : "bg-white/50 border-transparent hover:border-slate-200"
                      )}
                    >
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        serviceType === s.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                      )}>
                        <s.icon className="w-6 h-6" />
                      </div>
                      <span className={cn("font-bold text-lg", serviceType === s.id ? "text-slate-900" : "text-slate-500")}>
                        {s.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* House Size Selection */}
              <div className="space-y-4">
                <label className="text-sm font-black text-slate-900 uppercase tracking-widest ml-1">House Size</label>
                <div className="grid grid-cols-2 gap-3">
                  {["1BHK", "2BHK", "3BHK", "Villa/4BHK+"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setHouseSize(size)}
                      className={cn(
                        "py-4 rounded-2xl border-2 font-bold transition-all",
                        houseSize === size 
                          ? "bg-white border-indigo-600 text-slate-900 shadow-lg shadow-indigo-100" 
                          : "bg-white/50 border-transparent text-slate-500 hover:border-slate-200"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="flex flex-col justify-center bg-white rounded-[32px] p-10 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="text-center space-y-6 relative z-10">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Estimated Starting Price</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-slate-900">₹</span>
                  <span className="text-7xl font-black text-indigo-600 tracking-tighter">{estimatedPrice.toLocaleString()}</span>
                </div>
                <div className="pt-6 border-t border-slate-50">
                  <h4 className="font-bold text-slate-900 mb-2">{pricingData[serviceType as keyof typeof pricingData].label}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Final price may vary based on actual work and material costs.
                  </p>
                </div>
                
                <Link 
                  href="/login"
                  className="block w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95 mt-8"
                >
                  Book with this Price
                </Link>
                
                <div className="flex items-center justify-center gap-2 text-emerald-600 bg-emerald-50 py-3 rounded-xl mt-4">
                  <Info className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Prices exclusive for Bhubaneswar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
