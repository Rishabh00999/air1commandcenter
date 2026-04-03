import React from "react";
import { RESOURCE_TABS } from "../constants";
import { ResourceTab } from "../types";

interface Props {
  activeTab: ResourceTab;
  setActiveTab: (tab: ResourceTab) => void;
}

export const ResourceTabs: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-2 px-2 sticky -top-8 z-20 bg-[#05070a]/80 backdrop-blur-md pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {" "}
      {RESOURCE_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => {
            if (tab.link) {
              window.open(tab.link, "_blank");
              return;
            }
            setActiveTab(tab.id as ResourceTab);
          }}
          className={`relative group flex items-center gap-1 px-3 py-1.5 rounded-2xl whitespace-nowrap transition-all duration-300 border ${
            activeTab === tab.id
              ? "bg-slate-900 border-[#823588] text-white"
              : "bg-slate-900/40 border-slate-800/50 text-slate-400 hover:border-[#823588] hover:text-slate-200"
          }`}
        >
          <span
            className={`${
              activeTab === tab.id
                ? "text-[#823588]"
                : "text-slate-500 group-hover:text-[#823588]"
            } transition-colors`}
          >
            {tab.icon}
          </span>
          <span className="text-sm font-semibold">{tab.label}</span>

          {tab.isNew && (
            <div className="absolute -top-2 -right-2 flex items-center">
              <div className="bg-[#f9a01b] text-[10px] font-black text-slate-900 px-1.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(249,160,27,0.5)] flex items-center gap-0.5">
                <span className="leading-none">NEW</span>
                <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
          )}

          {activeTab === tab.id && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-[#f9a01b] rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
};