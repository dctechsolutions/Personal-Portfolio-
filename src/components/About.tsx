import React from "react";
import { ArrowRight, Code, Database, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const About: React.FC = () => {
  const { about } = PORTFOLIO_DATA;

  const statIcons = [
    <Code key="code" className="w-5 h-5 text-[#111827]" />,
    <Database key="db" className="w-5 h-5 text-indigo-600" />,
    <Sparkles key="ai" className="w-5 h-5 text-purple-600" />,
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200/90 relative bg-[#F1F4F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#111827]" />
            <span className="text-xs font-black text-[#111827] tracking-[0.2em] uppercase">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
            Engineering Fast, Pragmatic Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 lines maximum copy + highlight chips */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-[#111827] font-medium leading-relaxed">
              {about.summaryLine1}
            </p>
            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {about.summaryLine2}
            </p>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
              {about.summaryLine3}
            </p>

            {/* Highlight Chips Row */}
            <div className="pt-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Core Domains & Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {about.highlightChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center px-3 py-1 text-xs font-semibold text-[#111827] bg-white border border-slate-200/90 rounded-md shadow-2xs hover:border-[#111827] transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#111827] hover:text-black transition-colors group cursor-pointer"
              >
                <span>Explore featured applications and projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Small Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {about.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-[#111827]/30 transition-all flex items-center justify-between lg:justify-start lg:gap-4 shadow-2xs"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                  {statIcons[idx]}
                </div>
                <div>
                  <div className="text-2xl font-black text-[#111827] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-[#111827]">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">
                    {stat.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
