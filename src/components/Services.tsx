import React from "react";
import {
  Globe,
  Cpu,
  Layers,
  Server,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA, ServiceItem } from "../data/portfolioData";

export const Services: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (type: ServiceItem["iconType"]) => {
    switch (type) {
      case "web":
        return <Globe className="w-5 h-5 text-[#111827]" />;
      case "ai":
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case "software":
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case "backend":
        return <Server className="w-5 h-5 text-sky-600" />;
      default:
        return <Globe className="w-5 h-5 text-[#111827]" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-200/90 relative bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#111827]" />
              <span className="text-xs font-black text-[#111827] tracking-[0.2em] uppercase">
                SERVICES
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              Technical Services & Custom Solutions
            </h2>
          </div>
          <p className="text-sm text-[#4B5563] max-w-md font-medium">
            Specialized engineering services for modern web applications, custom business tools, and automated pipelines.
          </p>
        </div>

        {/* Services Grid with smooth hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#111827]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-2xs cursor-pointer"
            >
              <div>
                {/* Service Header: Icon & Popular Tag */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-300 shadow-2xs">
                    {getServiceIcon(service.iconType)}
                  </div>

                  {service.popular && (
                    <span className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-[#111827] bg-slate-100 border border-slate-300 rounded-full">
                      <Sparkles className="w-3 h-3 text-[#111827]" />
                      <span>High Demand</span>
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold text-[#111827] group-hover:text-black transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Deliverables & Scope
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#2D3748]">
                        <Check className="w-3.5 h-3.5 text-[#111827] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-4">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-semibold text-[#475266] bg-slate-50 border border-slate-200/90 rounded-md group-hover:border-slate-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-black group-hover:translate-x-1 transition-all duration-200"
                >
                  <span>Request this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section bottom CTA */}
        <div className="mt-8 text-center sm:text-left flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-slate-200/80">
          <p className="text-xs text-[#4B5563] font-medium">
            Want to see these technologies in action?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111827] hover:text-black hover:translate-x-1 transition-all duration-200"
          >
            <span>Explore featured projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
