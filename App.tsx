import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { ResourceTabs } from "./components/ResourceTabs";
import { ResourceContent } from "./components/ResourceContent";
import { ResourceTab } from "./types";
import IPMATCountdownTimer from "./components/sections/Clock";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ResourceTab>(ResourceTab.PYQ);

  return (
    <div className="flex h-screen bg-[#05070a] text-slate-200 overflow-hidden font-sans">
      {/* Sidebar - Fixed Left */}
      {/* <Sidebar /> */}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>

        <TopNav />
        <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 lg:px-16 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-wider uppercase whitespace-nowrap">
                  {" "}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                  IPMAT Free Learning Resources
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400">
                  AIR 1 <span className="text-[#f9a01b]">Command Center.</span>
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                  Nikhilesh Sanka didn't just study hard. He built a system.
                </p>
              </div>
              <IPMATCountdownTimer />

              {/* <img
                src="https://register.ipmcareer.com/whitelogoipm.svg"
                alt="Logo"
                className="w-24 h-24 md:w-32 md:h-32 cursor-pointer"
                onClick={() => window.open("https://ipmcareer.com", "_blank")}
              /> */}
            </div>

            {/* Sticky Tabs Navigation */}
            <ResourceTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Dynamic Content Rendering */}
            <div className="mt-8">
              <ResourceContent activeTab={activeTab} />
            </div>
          </div>
          <footer
            className="py-8 text-center border-t"
            style={{
              // backgroundColor: '#1a1a2e',
              borderColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <p className="text-gray-600 text-sm font-medium">
              Powered by •{" "}
              <a
                href="https://www.getedunext.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-gold font-bold transition-all duration-300 hover:scale-110 inline-block"
              >
                Edu Next
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;
