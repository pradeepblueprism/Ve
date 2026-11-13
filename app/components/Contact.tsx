"use client";

import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Orbs */}
      <div className="orb w-96 h-96 -bottom-48 -left-48" style={{ background: "#C9A96E" }} />
      <div className="orb w-80 h-80 -top-40 -right-40"  style={{ background: "#A6844A" }} />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            Let&apos;s <em className="gradient-text not-italic font-semibold">Connect</em>
          </h2>
          <p className="text-[#C8C4BC] max-w-lg mx-auto text-sm leading-relaxed font-light">
            Open to new opportunities, collaborations, and automation challenges.
          </p>
          <div className="gold-divider mt-4" />
        </div>

        {/* Contact card */}
        <div
          className="max-w-xl mx-auto glass rounded-2xl p-10 md:p-14 text-center"
          style={{
            border: "1px solid rgba(201,169,110,0.2)",
            boxShadow: "0 0 80px rgba(201,169,110,0.05)",
          }}
        >
          {/* Monogram */}
          <div
            className="w-20 h-20 rounded-xl mx-auto flex items-center justify-center font-display font-bold text-2xl text-[#0A0F1E] mb-6"
            style={{
              background: "linear-gradient(135deg, #C9A96E, #E2C898)",
              boxShadow: "0 0 30px rgba(201,169,110,0.3)",
            }}
          >
            PM
          </div>

          <h3 className="font-display font-semibold text-2xl text-[#F8F5EF] mb-1">Pradeep Minumula</h3>
          <p className="text-[#C8C4BC] text-sm font-light mb-1 tracking-wide">Senior RPA Developer · Infosys</p>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#C8C4BC] mb-10">
            <MapPin size={11} className="text-[#C9A96E]" />
            India · Open to Remote &amp; Relocation
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-7 py-3.5 rounded text-xs tracking-[0.12em] uppercase flex items-center justify-center gap-2"
            >
              <Linkedin size={15} />
              Connect on LinkedIn
              <ArrowUpRight size={13} />
            </a>
            <a
              href="mailto:pradeep.minumula@example.com"
              className="btn-outline px-7 py-3.5 rounded text-xs tracking-[0.12em] uppercase flex items-center justify-center gap-2"
            >
              <Mail size={15} />
              Send Email
            </a>
          </div>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest"
            style={{
              background: "rgba(201,169,110,0.08)",
              border: "1px solid rgba(201,169,110,0.2)",
              color: "#C9A96E",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse-gold" />
            Available for new opportunities
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8" style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}>
          <p className="text-[#C8C4BC] text-xs font-light tracking-widest uppercase">
            © {new Date().getFullYear()} Pradeep Minumula · Built with Next.js &amp; Tailwind CSS
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8C4BC] hover:text-[#C9A96E] transition-colors"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
