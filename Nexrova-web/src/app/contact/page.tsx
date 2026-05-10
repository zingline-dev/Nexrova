"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight, Loader2 } from "lucide-react";
import { submitContactMessage } from "@/lib/insforge";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      await submitContactMessage({
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone || undefined,
        message: form.message,
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Let's <span className="text-indigo-600">Connect</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Have a question or need assistance? Our team in Bhubaneswar is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-500 font-medium text-sm">nexrova@outlook.com</p>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-500 font-medium text-sm">+91 8767091077</p>
                <p className="text-slate-500 font-medium text-sm">Mon-Sun, 8am - 9pm</p>
              </div>
            </div>

            <div className="p-8 rounded-[40px] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 rounded-full blur-3xl" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-indigo-400" />
                  <div>
                    <h3 className="text-2xl font-black">Our Office</h3>
                    <p className="text-slate-400 font-medium">Patia, Bhubaneswar, Odisha 751024</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h3 className="text-2xl font-black">Response Time</h3>
                    <p className="text-slate-400 font-medium">Under 60 minutes during work hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-indigo-100 border border-slate-100 relative min-h-[500px] flex items-center">
            {isSubmitted ? (
              <div className="w-full text-center space-y-6 animate-scale-in">
                <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center mx-auto shadow-xl shadow-emerald-100/50 transform rotate-3">
                  <Send className="w-10 h-10 text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 font-medium">Our Bhubaneswar team will get back to you within 60 minutes.</p>
                </div>
                <button
                  onClick={() => { setIsSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" }); }}
                  className="text-indigo-600 font-black uppercase tracking-widest text-xs hover:gap-3 flex items-center justify-center gap-2 mx-auto transition-all"
                >
                  Send another message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form className="w-full space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">First Name</label>
                    <input name="firstName" type="text" placeholder="John" required value={form.firstName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Last Name</label>
                    <input name="lastName" type="text" placeholder="Doe" required value={form.lastName} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                  <input name="email" type="email" placeholder="john@example.com" required value={form.email} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Phone <span className="text-slate-400 normal-case font-medium">(optional)</span></label>
                  <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest ml-1">Message</label>
                  <textarea name="message" rows={4} placeholder="How can we help you?" required value={form.message} onChange={handleChange} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none" />
                </div>
                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                <button type="submit" disabled={isLoading} className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70">
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
