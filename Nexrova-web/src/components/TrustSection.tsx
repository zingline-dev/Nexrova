import { ShieldCheck, UserCheck, CreditCard, Headphones, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    desc: "Every expert undergoes rigorous background checks.",
    icon: UserCheck,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Transparent Pricing",
    desc: "Know exactly what you'll pay before you book. No hidden fees.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Affordable Rates",
    desc: "Premium home services at competitive, standardized market prices.",
    icon: CreditCard,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Quality Assured",
    desc: "100% satisfaction guarantee on every service we deliver.",
    icon: CheckCircle2,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Customer Support",
    desc: "Dedicated support team available 24/7 to assist you.",
    icon: Headphones,
    color: "bg-amber-50 text-amber-600"
  }
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">Why Neighbors Trust Nexrova</h2>
          <p className="text-base md:text-lg text-slate-600 font-medium">
            We've built a platform based on safety, transparency, and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4">
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-5 md:mb-6 ${feature.color}`}>
                <feature.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-lg md:text-base font-bold text-slate-900 mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 md:mt-20 bg-slate-900 rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full" />
          <div className="relative z-10 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to experience the Nexrova difference?</h3>
            <p className="text-slate-400 text-base md:text-lg">Join 10,000+ happy households using our platform.</p>
          </div>
          <button className="relative z-10 w-full lg:w-auto bg-indigo-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20 active:scale-95 whitespace-nowrap">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
