import React from 'react';
import { 
  Building2, 
  Users, 
  Globe, 
  Shield, 
  Award, 
  Star, 
  Heart,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"
import Familyimg from "../assets/images/family.png"


const AboutUs = () => {
  // Team members data
  const teamMembers = [
    {
      name: "LAKSHMI",
      role: "DIRECTOR",
      bio: "With 15 years of experience in financial software development, LAKSHMI founded ChitXpert to modernize the chit fund industry. Previously led product development at a major banking software company.",
      image: ""
    },
    {
      name: "CHANDRASHEKAR",
      role: "SENIOR CORDINATOR",
      bio: "Expert in fintech solutions with a background in cybersecurity. Prior to ChitXpert, CHANDRASHEKAR was the lead architect for a major payment processing platform.",
      image: ""
    },
    {
      name: "Vikram Singh",
      role: "Head of Operations",
      bio: "20+ years in chit fund management. Vikram brings deep industry knowledge to ensure our software meets real-world operational needs.",
      image: "https://images.unsplash.com/photo-1560250077-8b31684c6680?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Ananya Patel",
      role: "Product Manager",
      bio: "Formerly with a leading financial technology company, Ananya focuses on user experience and feature development for our platform.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654959?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Values data
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Transparency",
      description: "We believe trust is the currency of finance. Our software ensures every transaction is traceable and clear."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "We constantly evolve our platform to meet changing regulatory landscapes and user needs."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Our users' success is our primary metric. We listen to feedback and build features that matter."
    },
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: "Integrity",
      description: "We operate with honesty in all our dealings and maintain the highest ethical standards."
    }
  ];

  // Impact data
  const impactStats = [
    { value: "500,000+", label: "Chit Fund Members", color: "bg-blue-100 text-blue-800" },
    { value: "50,000+", label: "Transactions Processed", color: "bg-green-100 text-green-800" },
    { value: "1,200+", label: "Chit Fund Companies", color: "bg-purple-100 text-purple-800" },
    { value: "99.9%", label: "Uptime", color: "bg-amber-100 text-amber-800" }
  ];

  // Trust signals data
  const trustSignals = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Trusted by Industry Leaders",
      description: "ChitXpert is the preferred software solution for over 1,200 chit fund companies across India."
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Bank-Grade Security",
      description: "Our platform meets the highest security standards with regular third-party audits."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "4.8/5 Rating",
      description: "Rated 'Excellent' by our customers on Google Play and Trustpilot."
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Dedicated Support",
      description: "24/7 customer support with a 98% resolution rate within 24 hours."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent successfully!");
  };

  return (
   
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
       <Navbar/>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20 overflow-hidden">
        {/* Simple SVG Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: {Familyimg}
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Empowering Financial Communities</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We are on a mission to modernize the traditional chit fund industry with cutting-edge technology and transparency.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            {/* Fixed aspect ratio using standard class */}
            <div className="aspect-video w-full">
              <img 
                src={Familyimg} 
                alt="Team working together" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl font-bold mb-2">Building a Better Financial Future</h3>
              <p className="text-blue-100">Our team in action, developing the next generation of chit fund software</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Founded in 2015, ChitXpert started with a simple observation: the chit fund industry, despite being a pillar of community finance, was lagging behind in technology adoption. Manual ledgers, lack of transparency, and operational inefficiencies were the norm.
              </p>
              <p className="text-lg leading-relaxed">
                We assembled a team of financial experts and software engineers to build a solution that bridges the gap between tradition and technology. Today, we serve over 1,200+ chit fund companies across India, processing millions in transactions daily.
              </p>
              <p className="text-lg leading-relaxed">
                Our journey has been marked by continuous innovation and a commitment to making financial management accessible to everyone. From our humble beginnings to becoming an industry leader, we've stayed true to our core mission: empowering financial communities through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our innovation and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower chit fund businesses with intuitive, secure, and reliable software solutions that simplify operations, enhance transparency, and drive growth.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">We achieve this by:</span> Creating user-friendly interfaces that require minimal training, implementing robust security protocols to protect financial data, and continuously innovating based on user feedback.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-blue-600 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the global standard for chit fund management software, enabling financial inclusion and community development through technology.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">We're working toward:</span> Expanding our platform to serve diverse financial communities worldwide, integrating advanced analytics for better decision-making, and fostering a more inclusive financial ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experienced professionals who drive our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="relative group">
                  {/* Fixed aspect ratio using standard class */}
                  <div className="aspect-square w-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-100">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            How we're making a difference in the chit fund industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 rounded-2xl shadow-md border border-gray-100 ${stat.color} bg-opacity-10`}
            >
              <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 mb-4">
                Through our software and community initiatives, we've helped:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Empower 500,000+ individuals with better financial management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Support 1,200+ chit fund companies in digital transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Process over 50,000,000 transactions with 99.9% accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Enable financial inclusion for underserved communities</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability Efforts</h3>
              <p className="text-gray-600 mb-4">
                We're committed to responsible business practices:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>100% carbon-neutral cloud infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Supporting financial literacy programs in rural communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Donating 1% of profits to financial inclusion initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✓</span>
                  <span>Green office practices and remote work policies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust ChitXpert</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry recognition and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  {signal.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{signal.title}</h3>
                <p className="text-gray-600">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Chit Fund Business?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of chit fund businesses that trust ChitXpert for seamless operations and growth.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <svg 
              className="ml-3 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <p className="text-blue-100 mt-6 text-sm">
            ✨ 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;