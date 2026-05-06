import { Smartphone, CheckCircle2, Zap } from "lucide-react";
import Image from "next/image";

export default function AppCTA() {
  return (
    <section className="py-12 bg-indigo-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[40px] shadow-2xl shadow-indigo-100 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-xs">
              <Smartphone className="w-3.5 h-3.5" />
              Download the Nexrova App
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Manage Your Home Services<br /> 
              <span className="text-indigo-600">From Your Pocket</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Get real-time updates, track your professional, and book services with 
              a single tap. Available for iOS and Android.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Instant booking & slots",
                "Live tracking of pro",
                "Secure digital payments",
                "Rate & review with one tap"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all active:scale-95">
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold opacity-70">Download on</p>
                  <p className="text-base font-bold leading-none">App Store</p>
                </div>
              </button>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all active:scale-95">
                <div className="text-left">
                  <p className="text-[9px] uppercase font-bold opacity-70">Get it on</p>
                  <p className="text-base font-bold leading-none">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[280px] mx-auto aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
               <div className="w-full h-full bg-indigo-600 flex items-center justify-center p-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <p className="text-white font-black text-2xl tracking-tighter">Nexrova</p>
                    <p className="text-indigo-100 font-bold text-sm mt-1">Connecting homes...</p>
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-600/5 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
