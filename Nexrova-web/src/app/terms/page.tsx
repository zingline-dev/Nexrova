"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-slate-100 text-slate-900 rounded-[30px] flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Terms of Service</h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">Effective Date: May 1, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              By accessing or using the Nexrova platform in Bhubaneswar or other operating regions, 
              you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. Service Fulfillment</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Nexrova acts as a marketplace to connect you with verified independent professionals. 
              While we guarantee professional background checks, the execution of specific tasks 
              is the responsibility of the assigned service partner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Membership Terms</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Nexrova Plus membership (₹99/month) provides benefits including zero convenience fees 
              and 10% discounts. Membership is subscription-based and renews automatically 
              unless canceled via the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. User Obligations</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Users are responsible for providing a safe working environment for our 
              professionals. Accurate details about the service requirement and location 
              must be provided during the booking process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Cancellation & Refunds</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Cancellations made within 30 minutes of booking are free. Later cancellations 
              may incur a nominal visiting fee to compensate the professional for their 
              travel. Refunds for unsatisfactory service are handled on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              While we take extreme care in verifying professionals, Nexrova is not liable 
              for incidental damages. However, all services booked through the platform 
              are covered under our basic service guarantee.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
