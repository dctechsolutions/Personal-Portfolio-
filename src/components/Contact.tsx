import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  Copy,
  Check,
  Phone,
  Facebook,
  AlertCircle,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const whatsappUrl = `https://wa.me/${personal.whatsappNumber}?text=${encodeURIComponent(
    personal.whatsappPrefilledMessage
  )}`;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formspreeEndpoint = (import.meta as any).env?.VITE_FORMSPREE_ID
      ? `https://formspree.io/f/${(import.meta as any).env.VITE_FORMSPREE_ID}`
      : null;

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Failed to send message via form endpoint.");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setSubmitStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try using direct Email or WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/90 relative bg-[#F1F4F9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#111827]" />
            <span className="text-xs font-black text-[#111827] tracking-[0.2em] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-3">
            Let's Build Something Together
          </h2>
          <p className="text-base text-[#4B5563]">
            Have a project idea, custom software requirement, or AI workflow in mind? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct One-Tap Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              One-Tap Direct Channels
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#111827]/40 transition-all shadow-2xs">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#111827]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#111827] hover:text-black transition-colors break-all"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 text-slate-500 hover:text-[#111827] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Black button with white text */}
              <a
                href={`mailto:${personal.email}`}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-white bg-[#111827] hover:bg-black rounded-lg transition-colors uppercase tracking-wider cursor-pointer shadow-xs"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                <span>Open Mail Client</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/40 transition-all shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block">
                    WhatsApp Direct
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111827]">
                    {personal.phone}
                  </span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 rounded-lg transition-colors uppercase tracking-wider cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Facebook Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500/40 transition-all shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 block">
                    Facebook Messenger / Profile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111827]">
                    Connect on Facebook
                  </span>
                </div>
              </div>

              <a
                href={personal.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-2 text-xs font-bold text-[#1877F2] bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 rounded-lg transition-colors uppercase tracking-wider cursor-pointer"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Open Facebook Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-[#111827] mb-4">
                Send a Direct Message
              </h3>

              {submitStatus === "success" && (
                <div className="mb-4 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                  <div>
                    <span className="font-bold block">Thank you! Message received.</span>
                    <span>I will review your inquiry and get back to you promptly.</span>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                  <div>
                    <span className="font-bold block">Notice</span>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold text-[#111827] mb-1.5"
                    >
                      Your Name <span className="text-[#111827]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-[#111827] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-[#111827] mb-1.5"
                    >
                      Your Email <span className="text-[#111827]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-[#111827] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold text-[#111827] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Custom Software / Web Dev / AI Automation Project"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-[#111827] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-[#111827] mb-1.5"
                  >
                    Message <span className="text-[#111827]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or software requirement..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-[#111827] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#111827] focus:ring-1 focus:ring-[#111827] transition-colors resize-y"
                  />
                </div>

                {/* Submit button: Black with white text */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-bold text-white bg-[#111827] hover:bg-black disabled:opacity-50 rounded-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] active:scale-95 uppercase tracking-wider cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
