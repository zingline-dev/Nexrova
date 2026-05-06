"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-[30px] flex items-center justify-center mx-auto mb-8"
          >
            <Shield className="w-10 h-10" />
          </motion.div>
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em]">Last Updated: May 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">1. Data Collection</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We collect information you provide directly to us when you create an account, 
              request a service, or contact support. This includes your name, phone number, 
              Bhubaneswar service address, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">2. Use of Information</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Your data is used solely to facilitate home services, improve our platform, 
              and communicate with you about bookings and safety updates. We do not sell 
              your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">3. Location Access</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              To provide accurate 60-minute response times in Bhubaneswar, we may request 
              access to your precise location when you are using the app for booking services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">4. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We use cookies to improve your experience on our website. These small files help 
              us remember your preferences, keep you logged in, and analyze our traffic 
              to provide better localized services in Odisha.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">5. Third-Party Sharing</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We only share your information with verified service professionals assigned to 
              your booking and essential service providers (like payment processors). 
              We never sell your data to marketing firms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              We implement industry-standard encryption and security measures to protect your 
              personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
