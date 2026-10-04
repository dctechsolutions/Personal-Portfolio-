import React from "react";
import {
  FileDown,
  Mail,
  Github,
  Linkedin,
  Facebook,
  MessageSquare,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Code2,
  Server,
  Terminal,
  Database,
  Workflow,
  Cloud,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Hero: React.FC = () => {
  const { personal, heroTechStack } = PORTFOLIO_DATA;

  const whatsappUrl = `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(
    personal.whatsappPrefilledMessage
  )}`;

  const renderTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "react":
        return <Code2 className="w-3.5 h-3.5 text-[#111827]" />;
      case "node.js":
        return <Server className="w-3.5 h-3.5 text-emerald-600" />;
      case "python":
        return <Terminal className="w-3.5 h-3.5 text-amber-600" />;
      case "mongodb":
        return <Database className="w-3.5 h-3.5 text-green-600" />;
      case "n8n":
        return <Workflow className="w-3.5 h-3.5 text-slate-700" />;
      case "azure":
        return <Cloud className="w-3.5 h-3.5 text-sky-600" />;
      default:
        return <Code2 className="w-3.5 h-3.5 text-[#111827]" />;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92svh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#F1F4F9] bg-subtle-lines"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full text-left">
        
        {/* Top Status & Lead-in */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-[2px] bg-[#111827]" />
            <span className="text-xs font-black tracking-[0.3em] text-[#111827] uppercase">
              HELLO
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Full-Time Roles & Custom Projects</span>
          </span>
        </div>

        {/* Main Headline: Pure Black styling (Red replaced with Black) */}
        <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-[#111827] tracking-tight leading-[1.08] mb-4">
          I'm{" "}
          <span className="text-[#111827] underline decoration-slate-400 decoration-wavy decoration-2 underline-offset-8">
            {personal.firstName}
          </span>{" "}
          <span>{personal.lastName}</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl font-bold text-slate-700 mb-6 max-w-3xl">
          Web Developer & AI Automation Enthusiast | Custom Software Engineer
        </p>

        {/* Bio Description */}
        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-3xl mb-8 font-normal">
          {personal.oneLineIntro} {personal.detailedIntro}
        </p>

        {/* Targeted Call To Action Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs mb-8 max-w-3xl hover:border-slate-300 transition-colors">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#111827] mb-1">
            <Sparkles className="w-4 h-4 text-[#111827] shrink-0" />
            <span>Looking for Custom Software Developers, Web Development, or AI Automations?</span>
          </div>
          <p className="text-xs sm:text-sm text-[#556175] leading-relaxed">
            Whether you need modern full-stack web applications, bespoke business software tools, or automated workflow pipelines to eliminate manual work — let's build something exceptional together.
          </p>
        </div>

        {/* Primary Action Buttons (Black Background with White Text) */}
        <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10">
          {/* DOWNLOAD CV Button */}
          <a
            href={personal.resumeUrl}
            download="Muhammad_Azhar_Hassan_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-[#111827] hover:bg-black rounded-lg shadow-sm shadow-slate-900/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 tracking-wider uppercase active:scale-95 cursor-pointer border border-[#111827]"
          >
            <FileDown className="w-4 h-4 text-white" />
            <span>DOWNLOAD CV</span>
          </a>

          {/* HIRE ME Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#1F2937] hover:bg-black border border-slate-700 hover:border-black rounded-lg shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <span>HIRE ME</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>

          {/* WHATSAPP Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-white bg-emerald-50 hover:bg-emerald-600 border border-emerald-300 hover:border-emerald-600 rounded-lg shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Quick Highlights / Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mb-10 pt-6 border-t border-slate-200/90">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
            <span className="block text-2xl font-black text-[#111827]">4+</span>
            <span className="text-xs font-semibold text-slate-500">Software Projects</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
            <span className="block text-2xl font-black text-[#111827]">MERN</span>
            <span className="text-xs font-semibold text-slate-500">Full-Stack Core</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
            <span className="block text-2xl font-black text-[#111827]">n8n + AI</span>
            <span className="text-xs font-semibold text-slate-500">Smart Workflows</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-left">
            <span className="block text-2xl font-black text-[#111827]">6+</span>
            <span className="text-xs font-semibold text-slate-500">Certifications</span>
          </div>
        </div>

        {/* Bottom Social Links & Tech Stack Strip */}
        <div className="pt-6 border-t border-slate-200/90 flex flex-wrap items-center justify-between gap-4 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-slate-500 mr-1 uppercase tracking-wider">
              Follow:
            </span>
            
            {/* Facebook */}
            <a
              href={personal.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#1877F2] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-1 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#111827] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-1 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#0A66C2] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-1 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email Azhar Hassan"
              className="w-9 h-9 rounded-lg bg-white hover:bg-[#111827] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs hover:shadow-md hover:-translate-y-1 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Core stack chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {heroTechStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-md shadow-2xs hover:border-[#111827] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                {renderTechIcon(tech.name)}
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Vertical rotated "SCROLL DOWN —>" indicator on right edge */}
        <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-2 rotate-90 origin-right text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase select-none">
          <span>SCROLL DOWN</span>
          <span className="inline-block -rotate-90">
            <ArrowDown className="w-3.5 h-3.5 text-[#111827]" />
          </span>
        </div>

      </div>
    </section>
  );
};
