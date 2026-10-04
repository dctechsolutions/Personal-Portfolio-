import React from "react";
import {
  Award,
  Cpu,
  Workflow,
  Code2,
  Terminal,
  Cloud,
  GitBranch,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA, CertificationItem } from "../data/portfolioData";

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  const getCertIcon = (type: CertificationItem["iconType"]) => {
    switch (type) {
      case "ai":
        return <Cpu className="w-4 h-4 text-[#111827]" />;
      case "automation":
        return <Workflow className="w-4 h-4 text-purple-600" />;
      case "fullstack":
        return <Code2 className="w-4 h-4 text-blue-600" />;
      case "backend":
        return <Terminal className="w-4 h-4 text-amber-600" />;
      case "cloud":
        return <Cloud className="w-4 h-4 text-sky-600" />;
      case "git":
        return <GitBranch className="w-4 h-4 text-[#111827]" />;
      default:
        return <Award className="w-4 h-4 text-[#111827]" />;
    }
  };

  return (
    <section id="certifications" className="py-20 border-t border-slate-200/90 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#111827]" />
              <span className="text-xs font-black text-[#111827] tracking-[0.2em] uppercase">
                CREDENTIALS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              Certifications & Technical Specializations
            </h2>
          </div>
          <p className="text-sm text-[#4B5563] max-w-md font-medium">
            Verified industry credentials across Generative AI, workflow orchestration, full-stack systems, and cloud infrastructure.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#111827]/40 hover:shadow-lg transition-all flex flex-col justify-between group shadow-2xs"
            >
              <div>
                {/* Header: Icon, Category Badge & Credential ID */}
                <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                      {getCertIcon(cert.iconType)}
                    </div>
                    <span className="px-2.5 py-0.5 text-[11px] font-bold text-[#111827] bg-slate-100 border border-slate-300 rounded-full">
                      {cert.issuerBadge}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 font-semibold">
                    {cert.credentialId}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#111827] group-hover:text-black transition-colors mb-1">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-xs font-semibold text-slate-500 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#111827]" />
                  <span>{cert.issuer}</span>
                </p>

                {/* Description */}
                <p className="text-xs text-[#4B5563] leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Covered Skills Chips */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Credential Link */}
              <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Verified Credential
                </span>

                <a
                  href={cert.verificationUrl || PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#111827] hover:text-black transition-colors cursor-pointer"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-slate-200/80">
          <p className="text-xs text-[#4B5563] font-medium">
            Need verification or documentation for a specific technical certificate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-black transition-colors cursor-pointer"
          >
            <span>Request verification records</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
