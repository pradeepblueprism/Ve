"use client";

import { Star, Trophy, Zap } from "lucide-react";

const awards = [
  {
    title: "Star of the Month",
    date: "September 2017",
    company: "Virtusa · Mashreq Bank",
    description:
      "Recognised for extraordinary efforts and exceptional delivery in the Police Letter Automation and Dubai Police Portal integration processes — key high-visibility workflows for Mashreq Bank.",
    impact: "Reduced manual processing time by 70% for regulatory compliance workflows",
  },
  {
    title: "Star of the Month",
    date: "September 2018",
    company: "Virtusa · Mashreq Bank",
    description:
      "Awarded for outstanding contributions to the Bill Acceptance Process automation — significantly improving operational efficiency and accuracy across the banking operations team.",
    impact: "Eliminated 100% manual rework in bill acceptance through intelligent automation",
  },
];

const highlights = [
  { icon: Trophy, label: "2× Award Winner",      desc: "Star of the Month" },
  { icon: Zap,    label: "7+ RPA Platforms",     desc: "Certified across all major tools" },
  { icon: Star,   label: "Fortune 500 Clients",  desc: "AIG · J&J · IBM · Lloyds · Carrier" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Recognition
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            Awards &amp; <em className="gradient-text not-italic font-semibold">Achievements</em>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Highlights strip */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {highlights.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="glass rounded-xl p-5 text-center hover:scale-105 transition-all duration-300"
              style={{ border: "1px solid rgba(201,169,110,0.12)" }}
            >
              <div
                className="w-10 h-10 rounded mx-auto flex items-center justify-center mb-3"
                style={{ background: "rgba(201,169,110,0.1)" }}
              >
                <Icon size={17} style={{ color: "#C9A96E" }} />
              </div>
              <p className="font-display font-semibold text-[#F8F5EF] text-sm tracking-wide">{label}</p>
              <p className="text-[#C8C4BC] text-xs mt-0.5 font-light">{desc}</p>
            </div>
          ))}
        </div>

        {/* Award cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="relative glass rounded-xl p-7 overflow-hidden group hover:scale-[1.02] transition-all duration-300"
              style={{ border: "1px solid rgba(201,169,110,0.2)" }}
            >
              {/* Gold glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: "#C9A96E" }}
              />

              {/* Award icon + title */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,169,110,0.12)",
                    border: "1px solid rgba(201,169,110,0.3)",
                    boxShadow: "0 0 20px rgba(201,169,110,0.15)",
                  }}
                >
                  <Star size={26} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl gradient-text">{award.title}</h3>
                  <p className="text-[#C8C4BC] text-sm font-light mt-0.5">{award.date} · {award.company}</p>
                </div>
              </div>

              <p className="text-[#C8C4BC] text-sm leading-relaxed mb-5 font-light">{award.description}</p>

              {/* Impact callout */}
              <div
                className="flex items-start gap-2 p-3 rounded"
                style={{
                  background: "rgba(201,169,110,0.07)",
                  border: "1px solid rgba(201,169,110,0.2)",
                }}
              >
                <Zap size={13} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[#C9A96E] font-medium tracking-wide">{award.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
