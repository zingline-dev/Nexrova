import Link from "next/link";
import { ShieldCheck, Calculator, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
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

      {/* Nexrova Shield Section */}
      <section className="py-24 bg-white relative overflow-hidden animate-slide-up">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs uppercase tracking-widest animate-fade-in delay-100">
                <ShieldCheck className="w-4 h-4" /> The Nexrova Shield
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight animate-slide-up delay-200">
                Safety isn't an option. <br /> It's our <span className="text-emerald-600">Standard.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed animate-fade-in delay-300">
                In a market filled with uncertainty, Nexrova stands as a beacon of trust. 
                Our 7-step verification process ensures that only the top 10% of professionals enter your home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up delay-400">
                {[
                  { title: "ID Verification", desc: "Government issued ID checks." },
                  { title: "Police Clearance", desc: "Background verification by authorities." },
                  { title: "Skill Assessment", desc: "Rigorous practical testing." },
                  { title: "90% Rejection Rate", desc: "We only hire the best." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover-lift">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{feature.title}</p>
                      <p className="text-sm text-slate-500 font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/verification" 
                className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition-all shadow-xl hover-lift active:scale-95"
              >
                Explore Our Vetting Process <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 gap-4 animate-slide-in-right delay-500">
              <div className="space-y-4 pt-12">
                <div className="aspect-square bg-slate-100 rounded-[40px] flex flex-col items-center justify-center p-8 text-center hover-lift">
                  <p className="text-4xl font-black text-slate-900">01</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">ID Check</p>
                </div>
                <div className="aspect-square bg-emerald-600 rounded-[40px] flex flex-col items-center justify-center p-8 text-center text-white shadow-2xl shadow-emerald-200 hover-lift">
                  <p className="text-4xl font-black">07</p>
                  <p className="text-xs font-black text-emerald-100 uppercase tracking-widest mt-2">Shadowing</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-square bg-slate-900 rounded-[40px] flex flex-col items-center justify-center p-8 text-center text-white hover-lift">
                  <p className="text-4xl font-black">04</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Police Vetting</p>
                </div>
                <div className="aspect-square bg-slate-100 rounded-[40px] flex flex-col items-center justify-center p-8 text-center hover-lift">
                  <p className="text-4xl font-black">05</p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-2">Psychometry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Summary Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden animate-slide-up">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs uppercase tracking-widest animate-fade-in">
                <Calculator className="w-4 h-4" /> Transparent Pricing
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight animate-slide-up delay-100">
                No More <span className="text-indigo-600">Hidden Charges</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed animate-fade-in delay-200">
                We believe in 100% transparency. Know exactly what you'll pay before you book. 
                Our estimator uses real-time Bhubaneswar market rates to give you a fair, upfront price.
              </p>
              
              <div className="space-y-4 animate-slide-up delay-300">
                {[
                  "Standardized rates for all services",
                  "Zero hidden convenience fees",
                  "Instant estimates on the web & app",
                  "Secure digital payments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-900 font-bold hover-lift">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-indigo-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link 
                href="/estimate" 
                className="inline-flex items-center gap-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl hover-lift active:scale-95"
              >
                Get Instant Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Visual Pricing Card Preview */}
            <div className="flex-1 w-full max-w-md animate-slide-in-right delay-400">
               <div className="bg-white rounded-[40px] p-10 shadow-2xl shadow-indigo-100 border border-slate-100 space-y-8 relative hover-lift">
                  <div className="flex justify-between items-center">
                    <p className="font-black text-slate-900 text-xl">Deep Cleaning</p>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">POPULAR</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 font-bold text-sm">ESTIMATED PRICE</p>
                    <p className="text-5xl font-black text-slate-900">₹2,499</p>
                  </div>
                  <div className="space-y-4 pt-6 border-t border-slate-50">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-500">Service Base</span>
                      <span className="text-slate-900">₹2,499</span>
                    </div>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-500">Convenience Fee</span>
                      <span className="text-emerald-600">FREE</span>
                    </div>
                  </div>
                  <div className="pt-4">
                     <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-indigo-600 transition-all duration-1000 ease-out" style={{ width: '75%' }} />
                     </div>
                     <p className="text-[10px] text-slate-400 font-bold mt-2 text-center uppercase tracking-widest">Pricing accuracy: 98%</p>
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
