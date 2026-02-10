import React, { useState } from 'react';

const FeatureComparisonTable = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Features data with categories
  const features = [
    {
      category: 'Core Features',
      items: [
        { id: 'price', name: 'Pricing', vyapar: 'Free Forever', competitors: 'Paid Plans Only', highlight: true },
        { id: 'chit-management', name: 'Chit Group Management', vyapar: '✓ Unlimited Groups', competitors: '✗ Limited to 5 Groups' },
        { id: 'auction-handling', name: 'Auction & Bid Handling', vyapar: '✓ Automated', competitors: '✗ Manual Process' },
        { id: 'customer-management', name: 'Customer Management', vyapar: '✓ Advanced CRM', competitors: '✓ Basic' },
      ]
    },
    {
      category: 'Mobile Experience',
      items: [
        { id: 'mobile-app', name: 'Admin Mobile App', vyapar: '✓ iOS & Android', competitors: '✗ Android Only' },
        { id: 'mobile-customer', name: 'Customer Mobile App', vyapar: '✓ Full Features', competitors: '✗ View Only' },
        { id: 'offline-mode', name: 'Offline Mode', vyapar: '✓ Works Offline', competitors: '✗ Online Only' },
      ]
    },
    {
      category: 'Reporting & Analytics',
      items: [
        { id: 'reports', name: 'Real-Time Financial Reports', vyapar: '✓ 20+ Report Types', competitors: '✓ 5 Report Types' },
        { id: 'dashboard', name: 'Customizable Dashboard', vyapar: '✓ Drag & Drop', competitors: '✗ Fixed Layout' },
        { id: 'export', name: 'Export to Excel/PDF', vyapar: '✓ Unlimited', competitors: '✗ Limited Exports' },
      ]
    },
    {
      category: 'Security & Compliance',
      items: [
        { id: 'security', name: 'Role-Based Access Control', vyapar: '✓ Granular Permissions', competitors: '✗ Basic Roles' },
        { id: 'compliance', name: 'Regulatory Compliance', vyapar: '✓ RBI Guidelines', competitors: '✓ Basic Compliance' },
        { id: 'audit', name: 'Audit Trail', vyapar: '✓ Complete History', competitors: '✗ Limited Logs' },
      ]
    },
    {
      category: 'Support & Updates',
      items: [
        { id: 'support', name: 'Customer Support', vyapar: '✓ 24/7 Priority', competitors: '✗ Business Hours Only' },
        { id: 'updates', name: 'Software Updates', vyapar: '✓ Free Forever', competitors: '✗ Paid Upgrades' },
        { id: 'training', name: 'Onboarding & Training', vyapar: '✓ Free Sessions', competitors: '✗ Paid Training' },
      ]
    }
  ];

  // Filter features based on active tab
  const filteredFeatures = features.filter(category => {
    if (activeTab === 'all') return true;
    return category.category.toLowerCase().includes(activeTab);
  });

  const companyName = "ChitXpert";
  const ctaText = "Start Free Trial";
  const ctaLink = "/signup";

  // Check icon component
  const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  // Cross icon component
  const CrossIcon = () => (
    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  // Star icon component
  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Why <span className="text-blue-600">ChitXpert</span> Stands Out
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how ChitXpert compares to other chit fund software solutions. 
          Experience the difference with our comprehensive feature set.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'core', 'mobile', 'reporting', 'security', 'support'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Features
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* Table Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 border-b border-gray-100 md:border-b-0">
            <h3 className="text-2xl font-bold text-gray-900">Features</h3>
            <p className="text-gray-500 mt-1">Comprehensive comparison</p>
          </div>
          
          <div className="bg-white p-6 md:p-8 border-b border-gray-100 md:border-b-0">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-4">
                <span className="text-red-600 font-bold text-2xl">?</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Other Software</h3>
              <p className="text-gray-500 mt-1">Limited features & hidden costs</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-indigo-200 rounded-full opacity-10"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4 mx-auto">
                <div className="bg-blue-600 text-white rounded-xl w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold">CX</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{companyName}</h3>
              <p className="text-gray-500 mt-1">All features included</p>
              <div className="mt-4 inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                <StarIcon />
                <span className="ml-1">Best Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {filteredFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-t border-gray-100">
              {/* Category Header */}
              <div className="bg-gray-50 px-6 py-4">
                <h4 className="text-lg font-bold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {category.category}
                </h4>
              </div>
              
              {/* Feature Rows */}
              {category.items.map((feature, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-blue-50/50 transition-colors duration-200`}
                >
                  {/* Feature Name */}
                  <div className="p-5 md:p-6 flex items-start">
                    <div>
                      <div className="font-medium text-gray-900 text-lg">{feature.name}</div>
                      {feature.highlight && (
                        <div className="mt-1 flex items-center">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Competitor Column */}
                  <div className="p-5 md:p-6 flex items-center justify-center">
                    {feature.competitors.includes('✓') ? (
                      <div className="flex flex-col items-center">
                        <CheckIcon />
                        <span className="text-sm text-gray-500 mt-1">{feature.competitors.replace('✓ ', '')}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <CrossIcon />
                        <span className="text-sm text-gray-500 mt-1">{feature.competitors.replace('✗ ', '')}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Our Product Column */}
                  <div className="p-5 md:p-6 flex items-center justify-center bg-gradient-to-l from-blue-50/70 to-transparent">
                    {feature.vyapar.includes('✓') ? (
                      <div className="flex flex-col items-center">
                        <div className="bg-green-100 p-2 rounded-full mb-2">
                          <CheckIcon />
                        </div>
                        <span className="text-sm font-medium text-green-700">{feature.vyapar.replace('✓ ', '')}</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <CrossIcon />
                        <span className="text-sm text-gray-500 mt-1">{feature.vyapar.replace('✗ ', '')}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Chit Fund Business?
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          Join thousands of chit fund businesses that trust ChitXpert for seamless operations and growth.
        </p>
        <a
          href={ctaLink}
          className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 
                     text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 
                     transition-all duration-300 transform group"
        >
          {ctaText}
          <svg 
            className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>
        <p className="mt-6 text-blue-700 font-medium">
          ✨ 14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
      
      {/* Comparison Notes */}
      <div className="mt-12 max-w-4xl mx-auto bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-blue-700">
              <span className="font-medium">Note:</span> Our comparison is based on standard offerings of popular chit fund software solutions. 
              ChitXpert includes all features in our free plan with no hidden fees. We continuously update our platform with new features 
              based on customer feedback. If you find a feature missing in our comparison, <a href="/contact" className="underline hover:text-blue-800">let us know</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparisonTable;