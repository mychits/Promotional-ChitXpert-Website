import React from "react";
import {
  Smile,
  Smartphone,
  Star,
  Monitor,
  Users,
  Shield,
  Zap,
  Award,
} from "lucide-react";

export default function FeatureHighlights() {
  const features = [
    {
      icon: Smile,
      title: "1 Lakh+ Happy Customers",
      subtitle: "Trusted by thousands",
    },
    {
      icon: Smartphone,
      title: "Free Mobile App",
      subtitle: "iOS & Android",
    },
    {
      icon: Star,
      title: "Rated 4.9/5",
      subtitle: "Top Rated Platform",
    },
    {
      icon: Monitor,
      title: "Multi-Device Access",
      subtitle: "Desktop & Tablet",
    },
    {
      icon: Users,
      title: "Multi-User Management",
      subtitle: "Role-based access",
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      subtitle: "256-bit encryption",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      subtitle: "Instant sync",
    },
    {
      icon: Award,
      title: "Award Winning",
      subtitle: "Best Chit Software 2024",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Everything You Need for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
            ChitXpert
          </span>
        </h2>
        <p className="text-gray-600">
          Powerful features designed for modern chit fund management.
        </p>
      </div>

      {/* Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="scroll-track flex gap-12">
          {/* Duplicating features allows the 'ping-pong' effect to cover the full width without showing empty space */}
          {[...features, ...features].map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>

      {/* Updated Animation CSS */}
      <style>{`
        .scroll-track {
          width: max-content;
          /* 'alternate' makes it go Left -> Right -> Left automatically */
          animation: scrollPingPong 20s linear infinite alternate;
        }

        .scroll-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollPingPong {
          0% {
            transform: translateX(0); /* Starts at the beginning */
          }
          100% {
            /* Translates left by 50% (because we duplicated the array, 
               moving 50% shows the second half which is identical) */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

/* Feature Card Component */
function FeatureCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div className="min-w-[220px] bg-white rounded-xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="w-16 h-16 mx-auto bg-teal-50 rounded-xl flex items-center justify-center mb-4">
        <Icon size={28} className="text-teal-600" />
      </div>
      <h3 className="font-bold text-gray-800">{feature.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{feature.subtitle}</p>
    </div>
  );
}