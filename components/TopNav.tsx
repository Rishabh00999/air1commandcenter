import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const TopNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="h-20 border-b border-slate-800/50 bg-[#05070a]/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center ml-8 md:ml-8">
          <img
            src="https://register.ipmcareer.com/whitelogoipm.svg"
            alt="Logo"
            className="w-48 h-48 cursor-pointer"
            onClick={() => window.open("https://ipmcareer.com", "_blank")}
          />
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
            <a
              href="https://ipmcareer.com"
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="https://www.ipmcareer.com/about-us/"
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="https://www.ipmcareer.com/courses/"
              className="hover:text-white transition-colors"
            >
              Courses
            </a>
            <a
              href="https://www.ipmcareer.com/ipmat-2025-selection/"
              className="hover:text-white transition-colors"
            >
              Results
            </a>
            <a
              href="https://preptribe.getedunext.com"
              className="hover:text-white transition-colors"
            >
              CUET
            </a>
            <a
              href="https://register.ipmcareer.com/dsbchallenge"
              className="hover:text-white transition-colors"
            >
              DSB Challenge
            </a>
          </div>

          <div className="hidden md:block h-6 w-px bg-slate-800"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-20 border-b border-slate-800/50 bg-[#05070a]/95 backdrop-blur-md">
          <div className="flex flex-col space-y-1 px-4 py-3">
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#"
              className="px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
          </div>
        </div>
      )}
    </>
  );
};
