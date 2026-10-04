import React from "react";
import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 border-t border-slate-200 bg-[#E8EDF5] text-slate-600 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name & Title */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-[#111827]">{personal.name}</span>
          <span className="text-[#111827] font-bold">·</span>
          <span className="font-medium text-slate-500">Web & Software Developer</span>
        </div>

        {/* Social Icons including Facebook */}
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href={personal.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#1877F2] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>

          {/* GitHub */}
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-8 h-8 rounded-full bg-white hover:bg-black text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          {/* LinkedIn */}
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#0A66C2] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Azhar Hassan"
            className="w-8 h-8 rounded-full bg-white hover:bg-[#111827] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="ml-2 w-8 h-8 rounded-full bg-white hover:bg-[#111827] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center shadow-2xs transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-slate-500 font-medium">
          © {currentYear} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
