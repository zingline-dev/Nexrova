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
      <AppCTA />
      

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
