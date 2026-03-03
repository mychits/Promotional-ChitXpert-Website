import React, { useState } from 'react';

const FeatureComparisonTable = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Features data with categories
  const features = [
    {
      id: 'core',
      category: 'Core Features',
      items: [
        { id: 'price', name: 'Pricing', vyapar: 'Free Forever', competitors: 'Paid Plans Only', highlight: true },
        { id: 'chit-management', name: 'Chit Group Management', vyapar: '✓ Unlimited Groups', competitors: '✗ Limited to 5 Groups' },
        { id: 'auction-handling', name: 'Auction & Bid Handling', vyapar: '✓ Automated', competitors: '✗ Manual Process' },
        { id: 'customer-management', name: 'Customer Management', vyapar: '✓ Advanced CRM', competitors: '✓ Basic' },
        { id: 'payment-tracking', name: 'Payment Tracking', vyapar: '✓ Real-time', competitors: '✗ Delayed' },
        { id: 'commission', name: 'Commission Management', vyapar: '✓ Automated', competitors: '✗ Manual' },
      ]
    },
    {
      id: 'mobile',
      category: 'Mobile Experience',
      items: [
        { id: 'mobile-app', name: 'Admin Mobile App', vyapar: '✓ iOS & Android', competitors: '✗ Android Only' },
        { id: 'mobile-customer', name: 'Customer Mobile App', vyapar: '✓ Full Features', competitors: '✗ View Only' },
        { id: 'offline-mode', name: 'Offline Mode', vyapar: '✓ Works Offline', competitors: '✗ Online Only' },
        { id: 'push-notifications', name: 'Push Notifications', vyapar: '✓ Real-time', competitors: '✓ Basic' },
        { id: 'biometric', name: 'Biometric Login', vyapar: '✓ Supported', competitors: '✗ Not Available' },
      ]
    },
    {
      id: 'reporting',
      category: 'Reporting & Analytics',
      items: [
        { id: 'reports', name: 'Real-Time Financial Reports', vyapar: '✓ 20+ Report Types', competitors: '✓ 5 Report Types' },
        { id: 'dashboard', name: 'Customizable Dashboard', vyapar: '✓ Drag & Drop', competitors: '✗ Fixed Layout' },
        { id: 'export', name: 'Export to Excel/PDF', vyapar: '✓ Unlimited', competitors: '✗ Limited Exports' },
        { id: 'analytics', name: 'Advanced Analytics', vyapar: '✓ AI-Powered', competitors: '✗ Basic' },
        { id: 'forecasting', name: 'Financial Forecasting', vyapar: '✓ Available', competitors: '✗ Not Available' },
      ]
    },
    {
      id: 'security',
      category: 'Security & Compliance',
      items: [
        { id: 'security', name: 'Role-Based Access Control', vyapar: '✓ Granular Permissions', competitors: '✗ Basic Roles' },
        { id: 'compliance', name: 'Regulatory Compliance', vyapar: '✓ RBI Guidelines', competitors: '✓ Basic Compliance' },
        { id: 'audit', name: 'Audit Trail', vyapar: '✓ Complete History', competitors: '✗ Limited Logs' },
        { id: 'encryption', name: 'End-to-End Encryption', vyapar: '✓ 256-bit', competitors: '✓ Basic' },
        { id: 'backup', name: 'Automated Backup', vyapar: '✓ Daily', competitors: '✗ Manual' },
      ]
    },
    {
      id: 'support',
      category: 'Support & Updates',
      items: [
        { id: 'support', name: 'Customer Support', vyapar: '✓ 24/7 Priority', competitors: '✗ Business Hours Only' },
        { id: 'updates', name: 'Software Updates', vyapar: '✓ Free Forever', competitors: '✗ Paid Upgrades' },
        { id: 'training', name: 'Onboarding & Training', vyapar: '✓ Free Sessions', competitors: '✗ Paid Training' },
        { id: 'documentation', name: 'Documentation', vyapar: '✓ Comprehensive', competitors: '✓ Basic' },
        { id: 'community', name: 'Community Access', vyapar: '✓ Active Forum', competitors: '✗ None' },
      ]
    }
  ];

  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Expand all categories
  const expandAll = () => {
    const allExpanded = {};
    features.forEach(cat => {
      allExpanded[cat.id] = true;
    });
    setExpandedCategories(allExpanded);
  };

  // Collapse all categories
  const collapseAll = () => {
    setExpandedCategories({});
  };

  // Check if all categories are expanded
  const allExpanded = features.every(cat => expandedCategories[cat.id]);

  // Filter features based on active tab
  const filteredFeatures = features.filter(category => {
    if (activeTab === 'all') return true;
    return category.id === activeTab;
  });

  const companyName = "ChitXpert";
  const ctaText = "Start Free Trial";
  const ctaLink = "/signup";

  // Check icon component
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
    </svg>
  );

  // Cross icon component
  const CrossIcon = () => (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  // Star icon component
  const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400 inline" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-200/50 mb-4">
          <StarIcon />
          <span className="text-sm font-semibold text-teal-700">Compare & Decide</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">ChitXpert</span> Stands Out
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how ChitXpert compares to other chit fund software solutions. 
          Experience the difference with our comprehensive feature set.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
            activeTab === 'all'
              ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30'
              : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
          }`}
        >
          All Features
        </button>
        {features.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
              activeTab === cat.id
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30'
                : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600 border border-gray-200'
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Expand/Collapse Controls */}
      <div className="flex justify-end mb-4 gap-3">
        <button
          onClick={expandAll}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="text-sm text-gray-500 hover:text-gray-700 font-medium flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-5l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
          Collapse All
        </button>
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                <span className="text-gray-600 font-bold text-2xl">?</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Other Software</h3>
              <p className="text-gray-500 mt-1">Limited features & hidden costs</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-teal-200 rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-cyan-200 rounded-full opacity-10"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-4 mx-auto">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-xl w-12 h-12 flex items-center justify-center">
                  <span className="text-xl font-bold">CX</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{companyName}</h3>
              <p className="text-gray-500 mt-1">All features included</p>
              <div className="mt-4 inline-flex items-center bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full">
                <StarIcon />
                <span className="ml-1">Best Value</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {filteredFeatures.map((category, categoryIndex) => {
            const isExpanded = expandedCategories[category.id];
            const displayItems = isExpanded ? category.items : category.items.slice(0, 2);
            const hasMore = category.items.length > 2;

            return (
              <div key={categoryIndex} className="border-t border-gray-100">
                {/* Category Header */}
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors"
                     onClick={() => toggleCategory(category.id)}>
                  <h4 className="text-lg font-bold text-gray-800 flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></span>
                    {category.category}
                    <span className="ml-3 text-sm font-normal text-gray-500">
                      ({category.items.length} features)
                    </span>
                  </h4>
                  <button className="text-teal-600 hover:text-teal-700">
                    <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Feature Rows */}
                {displayItems.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-teal-50/30 transition-colors duration-200`}
                  >
                    {/* Feature Name */}
                    <div className="p-5 md:p-6 flex items-start">
                      <div>
                        <div className="font-medium text-gray-900">{feature.name}</div>
                        {feature.highlight && (
                          <div className="mt-1 flex items-center">
                            <span className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Most Popular
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Competitor Column */}
                    <div className="p-5 md:p-6 flex items-center justify-center">
                      {feature.competitors.includes('✓') ? (
                        <div className="flex items-center gap-2">
                          <CheckIcon />
                          <span className="text-sm text-gray-600">{feature.competitors.replace('✓ ', '')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CrossIcon />
                          <span className="text-sm text-gray-500">{feature.competitors.replace('✗ ', '')}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Our Product Column */}
                    <div className="p-5 md:p-6 flex items-center justify-center bg-gradient-to-l from-teal-50/50 to-transparent">
                      {feature.vyapar.includes('✓') ? (
                        <div className="flex items-center gap-2">
                          <div className="bg-green-100 p-1 rounded-full">
                            <CheckIcon />
                          </div>
                          <span className="text-sm font-medium text-green-700">{feature.vyapar.replace('✓ ', '')}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CrossIcon />
                          <span className="text-sm text-gray-500">{feature.vyapar.replace('✗ ', '')}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Show More/Less Button */}
                {hasMore && (
                  <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1"
                    >
                      {isExpanded ? (
                        <>Show less <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg></>
                      ) : (
                        <>Show {category.items.length - 2} more features <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></>
                      )}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Chit Fund Business?
          </h3>
          <p className="text-white/90 mb-8 text-lg">
            Join 500+ chit fund businesses that trust ChitXpert for seamless operations and growth.
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-teal-600 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 transform group"
          >
            {ctaText}
            <svg 
              className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
          <p className="mt-6 text-white/80 font-medium">
            ✨ 14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
      
      {/* Comparison Notes */}
      <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
        <div className="flex">
          <div className="flex-shrink-0 mt-1">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-teal-700">
              <span className="font-medium">Note:</span> Our comparison is based on standard offerings of popular chit fund software solutions. 
              ChitXpert includes all features in our free plan with no hidden fees. If you find a feature missing, <a href="/contact" className="underline hover:text-teal-800 font-medium">let us know</a>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComparisonTable;