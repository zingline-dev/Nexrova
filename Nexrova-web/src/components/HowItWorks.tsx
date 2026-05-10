import { CalendarCheck, UserPlus, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Book Service",
    desc: "Choose your service and pick a convenient time slot that works for you.",
    icon: CalendarCheck,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Professional Assigned",
    desc: "A verified and top-rated professional is assigned to your booking.",
    icon: UserPlus,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Service Delivered",
    desc: "Sit back and relax while our expert delivers high-quality service at your home.",
    icon: Sparkles,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Pay Securely",
    desc: "Pay only after the service is completed via our secure digital payment methods.",
    icon: ShieldCheck,
    color: "bg-amber-50 text-amber-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[128px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Nexrova makes getting premium home services simple, safe, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-[2px] bg-slate-200 border-dashed border-t-2 border-slate-100 -z-10" />
              )}
              
              <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover-lift text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 ${step.color} group-hover:scale-110 transition-transform shadow-sm`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-sm border-4 border-slate-50">
                  {idx + 1}
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
