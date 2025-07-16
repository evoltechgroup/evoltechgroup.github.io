'use client';
import React, { useState } from 'react';

interface TabButtonProps {
  label: string;
  tabKey: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, tabKey, activeTab, setActiveTab }) => {
  const isActive = activeTab === tabKey;
  return (
    <button
      className={`px-5 py-2 rounded-full font-semibold transition text-sm shadow-sm border ${
        isActive
          ? "bg-[#eaf6ff] text-[#0B0F2B] border-[#0B0F2B]"
          : "bg-white text-gray-500 border-gray-200 hover:bg-blue-100 hover:text-blue-700"
      }`}
      onClick={() => setActiveTab(tabKey)}
    >
      {label}
    </button>
  );
};

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  if (activeTab === "consulting") {
    return (
      <div className="w-full flex flex-col md:flex-row items-center gap-8 animate-fadein">
        {/* Consulting Content */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src="/assets/icons/Group 605.png" alt="Consulting Icon" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-bold">Consulting</span>
          </div>
          <p className="mb-4 text-sm">
            Strategic consulting to drive business growth, digital transformation, and operational excellence.
          </p>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 w-full max-w-md">
  <div className="bg-[#E4EFF8] rounded-lg px-4 py-2 text-sm font-semibold">
    Business Strategy: <span className="font-normal">Tailored roadmaps for your success</span>
  </div>
  <div className="bg-[#EBE9F9] rounded-lg px-4 py-2 text-sm font-semibold">
    Process Optimization: <span className="font-normal">Streamlining operations for efficiency</span>
  </div>
  <div className="bg-[#E9F6E8] rounded-lg px-4 py-2 text-sm font-semibold">
    Change Management: <span className="font-normal">Guiding seamless transitions</span>
  </div>
  <div className="bg-[#FAF3EB] rounded-lg px-4 py-2 text-sm font-semibold">
    Market Analysis: <span className="font-normal">Data-driven insights for growth</span>
  </div>
</div>

          <button className="bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            Discover more
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/images/Group 617.png" alt="Consulting" className="rounded-[32px] w-[320px] h-[400px] object-cover" />
        </div>
      </div>
    );
  }

  if (activeTab === "technology") {
    return (
      <div className="w-full flex flex-col md:flex-row items-center gap-8 animate-fadein">
        {/* Technology Content */}
        <div className="flex-1 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src="/assets/icons/Group 605.png" alt="Technology Icon" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-bold">Technology</span>
          </div>
          <p className="mb-4 text-sm">
            We bring visionary ideas to life with cutting-edge tech. Our 50+ engineers, experts in full-stack, AI, and cloud computing, create innovative apps to fuel growth and efficiency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 w-full max-w-md">
            <div className="bg-[#E4EFF8] rounded-lg px-4 py-2 text-sm font-semibold">End-to-End Solutions</div>
            <div className="bg-[#EBE9F9] rounded-lg px-4 py-2 text-sm font-semibold">Product Development</div>
            <div className="bg-[#E9F6E8] rounded-lg px-4 py-2 text-sm font-semibold">UI/UX Design</div>
            <div className="bg-[#FAF3EB] rounded-lg px-4 py-2 text-sm font-semibold">Cloud Engineering</div>
            <div className="bg-[#F8ECF9] rounded-e-2xl px-4 py-2 text-sm font-semibold col-span-2">AI-Driven Expertise</div>
          </div>
          <button className="bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
            Discover more
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/images/Group 617.png" alt="Technology" className="rounded-[32px] w-[320px] h-[400px] object-cover" />
        </div>
      </div>
    );
  }

  // Back Office
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-8 animate-fadein">
      <div className="flex-1 flex flex-col items-start">
        <div className="flex items-center mb-4">
          <img src="/assets/icons/Group 605.png" alt="Back Office Icon" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold">Back-Office</span>
        </div>
        <p className="mb-4 text-sm">
          Efficient back office support to streamline your business, ensure compliance, and enable scalable growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6 w-full max-w-md">
  <div className="bg-[#E4EFF8] rounded-lg px-4 py-2 text-sm font-semibold">
    Process Automation: <span className="font-normal">Boosting productivity</span>
  </div>
  <div className="bg-[#EBE9F9] rounded-lg px-4 py-2 text-sm font-semibold">
    Compliance Management: <span className="font-normal">Ensuring regulatory adherence</span>
  </div>
  <div className="bg-[#E9F6E8] rounded-lg px-4 py-2 text-sm font-semibold">
    Data Entry & Processing: <span className="font-normal">Accurate and timely operations</span>
  </div>
  <div className="bg-[#FAF3EB] rounded-lg px-4 py-2 text-sm font-semibold">
    Customer Support: <span className="font-normal">24/7 assistance for your clients</span>
  </div>
</div>

        <button className="bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Discover more
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <img src="/assets/images/Group 617.png" alt="Back Office" className="rounded-[32px] w-[320px] h-[400px] object-cover" />
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("technology");

  return (
    <section className="relative w-full bg-gradient-to-b from-[#eaf6ff] to-white text-[#0B0F2B] py-20 px-2 flex flex-col items-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
        <div className="mb-2 text-xs font-medium text-center">
          <span className="inline-block bg-white/80 rounded-full px-3 py-1 text-gray-500 shadow">Services & Solutions</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 leading-tight">
          Unlock Growth with <br className="hidden md:block" />
          <span className="text-black">Cutting-Edge Solutions</span>
        </h2>
        <p className="text-center max-w-2xl mb-6 text-base md:text-lg">
          Expert consulting for growth, advanced tech solutions by full-stack, AI, and cloud computing, and efficient back office support to streamline your business.
        </p>
        {/* Decorative Arrow */}
        <div className="w-full flex justify-start mb-2">
          <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="-ml-8 md:ml-0">
            <path d="M2 48C10 36 30 10 68 2" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M60 2L68 2L68 10" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="flex gap-2 mb-10">
          <TabButton label="Consulting" tabKey="consulting" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="Technology" tabKey="technology" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabButton label="Back-Office" tabKey="backoffice" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <TabContent activeTab={activeTab} />
      </div>
    </section>
  );
};

export default ServicesSection;
