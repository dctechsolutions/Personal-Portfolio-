import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const FloatingWhatsApp: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(
    personal.whatsappPrefilledMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block px-3 py-1.5 rounded-lg bg-[#14171F] text-white text-xs font-medium border border-[#232730] shadow-lg animate-in fade-in slide-in-from-right-2 duration-200">
          Chat on WhatsApp
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-black/40 flex items-center justify-center transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
};
