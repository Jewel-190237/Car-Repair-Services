'use client';
import { useState } from 'react';
import Banner from '../HomePage/Banner1';  // Assuming Banner1 component exists
import Banner from '../HomePage/Banner2';  // Assuming Banner2 component exists

export default function TabComponent() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);

  // Content for each tab (components instead of strings)
  const tabContent = [
    <Banner />, // Content for Tab 1 (Banner1 component)
    <Banner />, // Content for Tab 2 (Banner2 component)
    "Content for Tab 3", // Placeholder text for Tab 3
    "Content for Tab 4", // Placeholder text for Tab 4
  ];

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex justify-center gap-6 space-x-4 border-b border-gray-300">
        {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 px-4 focus:outline-none ${
              activeTab === index
                ? 'border-2 border-blue-500 text-blue-500'
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="mt-6">
        {/* Render the component or content for the active tab */}
        <div>{tabContent[activeTab]}</div>
      </div>
    </div>
  );
}
