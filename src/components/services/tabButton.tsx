"use client";
import React from "react";

interface TabButtonProps {
  label: string;
  tabKey: string;
  activeTab: string;
  onSelect: (tab: string) => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  tabKey,
  activeTab,
  onSelect,
}) => {
  const isActive = activeTab === tabKey;

  return (
    <button
      type="button"
      onClick={() => onSelect(tabKey)}
      className={`px-3 py-2 lg:px-6 lg:py-3 cursor-pointer rounded-full font-semibold text-sm lg:text-base transition-all duration-200
        ${
          isActive
            ? "bg-white text-[#0B0F2B] shadow"
            : "bg-transparent text-white"
        }`}
    >
      {label}
    </button>
  );
};
