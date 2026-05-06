import Link from "next/link";
import { ShieldCheck, Calculator, BookOpen, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import TrustSection from "@/components/TrustSection";
import AppCTA from "@/components/AppCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <TrustSection />

      {/* 7-Step Verification Summary Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Safety First
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                The <span className="text-emerald-600">Nexrova Shield</span> Vetting Process
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Before any professional enters your home, they pass through our rigorous **7-Step Verification Process**. 
                We check everything from criminal records to technical expertise so you don't have to.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Identity Verification",
                  "Police Background Check",
                  "Skill & Experience Audit",
                  "Quality Shadowing"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-900 font-bold">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-emerald-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link 
                href="/verification" 
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all shadow-xl active:scale-95"
              >
                Explore Our Vetting Process <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual representation of 7 Steps */}
            <div className="flex-1 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-40 bg-slate-50 rounded-3xl p-6 flex flex-col justify-end border border-slate-100">
                       <p className="text-3xl font-black text-emerald-600">01</p>
                       <p className="font-bold text-slate-900">ID Check</p>
                    </div>
                    <div className="h-56 bg-emerald-600 rounded-3xl p-8 flex flex-col justify-between text-white">
                       <ShieldCheck className="w-10 h-10" />
                       <div>
                         <p className="text-3xl font-black">7 Steps</p>
                         <p className="font-medium opacity-80">Of rigorous vetting</p>
                       </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-56 bg-slate-900 rounded-3xl p-8 flex flex-col justify-between text-white">
                       <div className="flex -space-x-2">
                         {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900" />)}
                       </div>
                       <div>
                         <p className="text-3xl font-black">90%</p>
                         <p className="font-medium opacity-80">Rejection Rate</p>
                       </div>
                    </div>
                    <div className="h-40 bg-slate-50 rounded-3xl p-6 flex flex-col justify-end border border-slate-100">
                       <p className="text-3xl font-black text-indigo-600">07</p>
                       <p className="font-bold text-slate-900">Quality Shadowing</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <AppCTA />

      {/* Feature Access Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">The Nexrova Experience</h2>
            <p className="text-slate-500 font-medium text-lg">Everything you need for a better home service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/verification" className="group p-10 rounded-[40px] bg-white border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Verification</h3>
              <p className="text-slate-500 font-medium mb-6">See how we vet our professionals with our 7-step Nexrova Shield.</p>
              <span className="text-indigo-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/estimate" className="group p-10 rounded-[40px] bg-white border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Pricing</h3>
              <p className="text-slate-500 font-medium mb-6">Get an instant estimate for your cleaning or repair needs in Bhubaneswar.</p>
              <span className="text-indigo-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Check Prices <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/blog" className="group p-10 rounded-[40px] bg-white border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Home Blog</h3>
              <p className="text-slate-500 font-medium mb-6">Expert guides on home maintenance and living in Bhubaneswar.</p>
              <span className="text-indigo-600 font-black uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Blog <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tight">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How do you verify professionals?", a: "Every professional goes through a multi-stage KYC process including background checks and skill assessments." },
              { q: "What if something gets damaged?", a: "Every booking is covered by our insurance policy up to ₹10,000 for any accidental damages." },
              { q: "Can I reschedule my booking?", a: "Yes, you can reschedule for free up to 2 hours before the scheduled time via the app." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
