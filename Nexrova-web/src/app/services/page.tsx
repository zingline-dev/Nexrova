"use client";

import Link from "next/link";

const allServices = [
  {
    category: "Home Cleaning",
    description: "Professional deep cleaning for every corner of your home.",
    subServices: ["Full Home Deep Cleaning", "Sofa & Carpet Cleaning", "Kitchen Cleaning", "Bathroom Cleaning"]
  },
  {
    category: "Electrical Works",
    description: "Expert electricians for repairs, installations, and maintenance.",
    subServices: ["AC Repair & Service", "Fan & Light Installation", "Switchboard Repair", "Complete Wiring"]
  },
  {
    category: "Plumbing",
    description: "Fast and reliable plumbing solutions for all leakages and fittings.",
    subServices: ["Tap & Leak Repair", "Toilet & Basin Installation", "Water Tank Cleaning", "Pipe Replacement"]
  },
  {
    category: "Pest Control",
    description: "Safe and effective treatment for a pest-free environment.",
    subServices: ["Cockroach Control", "Termite Treatment", "General Pest Control", "Bed Bug Removal"]
  },
  {
    category: "Painting & Decor",
    description: "Transform your walls with our premium painting services.",
    subServices: ["Interior Painting", "Exterior Painting", "Texture Painting", "Waterproofing"]
  },
  {
    category: "Handyman Services",
    description: "On-demand help for all small and large home repairs.",
    subServices: ["Furniture Assembly", "Carpentry Works", "Drilling & Hanging", "Door & Window Repair"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Our <span className="text-indigo-600">Services</span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Verified professionals in Bhubaneswar for all your home needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {allServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-3">{service.category}</h3>
              <p className="text-slate-500 mb-4">{service.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.subServices.map((sub, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">
                    {sub}
                  </span>
                ))}
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">
                Notify Me
              </button>
            </div>
          ))}
        </div>

        {/* Footer Notice */}
        <div className="mt-16 bg-slate-900 p-8 rounded-3xl text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Suggest a Service</h2>
          <p className="text-slate-400 mb-6">Need something else? Let us know.</p>
          <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
