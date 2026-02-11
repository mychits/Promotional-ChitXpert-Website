import React from "react";
import { Smile, Smartphone, Star, Monitor, Users } from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    { icon: Smile, title: "1 Lakh+ Happy Customers" },
    { icon: Smartphone, title: "Free Mobile App" },
    { icon: Star, title: "Rated 4.6/5 on Google Play" },
    { icon: Monitor, title: "Multi-Device Access"  },
    { icon: Users, title: "Multi-User Management" },
  ];

  // Reusable feature item component
  const FeatureItem = ({ feature, isScrollable = false }) => (
    <div 
      className={`flex flex-col items-center text-center group cursor-default ${
        isScrollable 
          ? 'flex-shrink-0 w-48' // Fixed width for scrollable container
          : '' // Natural sizing for grid
      }`}
    >
      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-yellow-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 shadow-sm">
        <feature.icon size={32} strokeWidth={1.5} />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-bold text-slate-800 leading-tight">
          {feature.title}
        </h3>
        {feature.subtitle && (
          <p className="text-xs text-slate-500 mt-1 font-medium">
            {feature.subtitle}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Chit Fund Business
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Trusted by thousands of chit fund businesses across India. 
            Our comprehensive platform simplifies operations, enhances customer experience, 
            and drives growth with powerful features designed specifically for chit fund management.
          </p>
        </div>

        {/* MOBILE: Horizontal scroll container (visible < md) */}
        <div 
          className="block md:hidden overflow-x-auto py-2 scrollbar-hide"
          aria-label="Feature highlights carousel"
        >
          <div className="flex space-x-6 min-w-max px-2 pb-4">
            {features.map((feature, index) => (
              <FeatureItem 
                key={`mobile-${index}`} 
                feature={feature} 
                isScrollable 
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: Grid container (visible >= md) */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center py-8">
          {features.map((feature, index) => (
            <FeatureItem 
              key={`desktop-${index}`} 
              feature={feature} 
            />
          ))}
        </div>
      </div>

      {/* CSS for hiding scrollbar (add to global CSS or style tag) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );

}
