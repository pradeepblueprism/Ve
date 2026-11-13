"use client";

import { ShieldCheck, ExternalLink } from "lucide-react";

const certs = [
  { name: "Blue Prism Developer Accreditation", code: "AD01",                   issuer: "Blue Prism",        initials: "BP" },
  { name: "Blue Prism Professional Developer",  code: "APD01",                  issuer: "Blue Prism",        initials: "BP" },
  { name: "AA Advanced Professional",           code: "v10.0 / 11.0 / A2019",   issuer: "Automation Anywhere", initials: "AA" },
  { name: "AA Certified Master RPA Professional",code: "v10.0 / 11.0 / A2019",  issuer: "Automation Anywhere", initials: "AA" },
  { name: "UiPath Foundation & Advanced",       code: "Foundation + Advanced",   issuer: "UiPath Academy",   initials: "UI" },
  { name: "UiPath Role-Based Advanced",         code: "Role-Based Advanced",     issuer: "UiPath Academy",   initials: "UI" },
  { name: "UIARD Certified",                    code: "UIARD",                   issuer: "UiPath",           initials: "UI" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Professional Recognition
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            <em className="gradient-text not-italic font-semibold">Certifications</em>
          </h2>
          <p className="text-[#C8C4BC] mt-3 max-w-xl mx-auto text-sm font-light tracking-wide">
            9+ industry-recognised certifications across all major RPA platforms
          </p>
          <div className="gold-divider mt-4" />
        </div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="relative glass rounded-xl p-5 group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.14)" }}
            >
              {/* Subtle gold glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                style={{ background: "radial-gradient(circle at top right, rgba(201,169,110,0.06), transparent 70%)" }}
              />

              {/* Initials badge */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-12 h-12 rounded flex items-center justify-center font-display font-bold text-sm text-[#C9A96E]"
                  style={{
                    background: "rgba(201,169,110,0.1)",
                    border: "1px solid rgba(201,169,110,0.25)",
                  }}
                >
                  {cert.initials}
                </div>
                <ShieldCheck size={15} className="text-[#A6844A] group-hover:text-[#C9A96E] transition-colors" />
              </div>

              <h3 className="font-semibold text-[#F8F5EF] text-sm leading-snug mb-2 tracking-wide">{cert.name}</h3>
              <p className="text-xs text-[#C8C4BC] mb-4 font-light">{cert.issuer}</p>

              <span
                className="inline-block text-xs px-2.5 py-1 rounded tracking-wider"
                style={{
                  background: "rgba(201,169,110,0.08)",
                  color: "#C9A96E",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                {cert.code}
              </span>
            </div>
          ))}
        </div>

        {/* Summary strip */}
        <div
          className="mt-12 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 glass"
          style={{ border: "1px solid rgba(201,169,110,0.18)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded flex items-center justify-center"
              style={{ background: "rgba(201,169,110,0.1)" }}
            >
              <ShieldCheck size={18} style={{ color: "#C9A96E" }} />
            </div>
            <div>
              <p className="text-[#F8F5EF] font-semibold text-sm tracking-wide">Certified across 3 major RPA platforms</p>
              <p className="text-[#C8C4BC] text-xs font-light mt-0.5">Blue Prism · UiPath · Automation Anywhere</p>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 rounded text-xs tracking-[0.12em] uppercase flex items-center gap-2"
          >
            Verify on LinkedIn <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
