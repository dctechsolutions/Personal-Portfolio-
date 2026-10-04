import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileDown } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Certifications", href: "#certifications" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F1F4F9]/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-base sm:text-lg font-extrabold tracking-tight text-[#111827] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded"
        >
          <span className="w-8 h-8 rounded-lg bg-[#111827] flex items-center justify-center text-white font-black text-xs shadow-xs group-hover:bg-black transition-colors">
            AH
          </span>
          <span className="font-bold text-[#111827]">
            Azhar Hassan<span className="text-[#111827]">.</span>
          </span>
        </a>

        {/* Navigation links: Home, Services, Projects, About, Certifications */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] rounded ${
                  isActive
                    ? "text-[#111827] font-black"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#111827] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Muhammad_Azhar_Hassan_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#4B5563] hover:text-[#111827] bg-white border border-slate-300 rounded-md shadow-2xs hover:bg-slate-50 transition-all cursor-pointer"
            title="Download PDF Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-[#111827]" />
            <span>Resume</span>
          </a>

          {/* Contact Me Button: Black with white text */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#111827] hover:bg-black rounded-md shadow-xs shadow-black/20 hover:shadow-md transition-all whitespace-nowrap active:scale-95 uppercase tracking-wider cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          className="md:hidden p-2 text-[#4B5563] hover:text-[#111827] hover:bg-white rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-slate-100 text-[#111827] font-bold"
                    : "text-[#4B5563] hover:text-[#111827] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Muhammad_Azhar_Hassan_Resume.pdf"
              className="flex items-center justify-center gap-2 py-2 text-sm font-semibold text-[#111827] bg-slate-100 rounded-md"
            >
              <FileDown className="w-4 h-4 text-[#111827]" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white bg-[#111827] hover:bg-black rounded-md shadow-md uppercase tracking-wider"
            >
              <span>Contact Me</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
