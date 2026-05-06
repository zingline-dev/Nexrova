import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">⚡</span>
              <span className="text-xl font-black text-white tracking-tighter ml-1">Nexrova</span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              India's fastest growing hyperlocal home services marketplace. 
              Delivering trust, one booking at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-indigo-400 transition-colors">All Services</Link></li>
              <li><Link href="/membership" className="hover:text-indigo-400 transition-colors">Membership</Link></li>
              <li><Link href="/estimate" className="hover:text-indigo-400 transition-colors">Pricing Estimator</Link></li>
              <li><Link href="/verification" className="hover:text-indigo-400 transition-colors">Verification Shield</Link></li>
              <li><Link href="/blog" className="hover:text-indigo-400 transition-colors">Blog & News</Link></li>
              <li><Link href="/career" className="hover:text-indigo-400 transition-colors">Career</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 font-medium">
              <li><Link href="/help" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-500 mt-1" />
                <span>Patia, Bhubaneswar,<br />Odisha, India 751024</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-500" />
                <span>+91 8767091077</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-500" />
                <span>support@nexrova.in</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-10 text-center">
          <p className="text-slate-500 text-sm font-semibold">
            © {new Date().getFullYear()} Nexrova Services Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
