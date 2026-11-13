"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    level: "B.Tech",
    field: "Engineering",
    score: "67%",
    scoreNum: 67,
    icon: GraduationCap,
    description: "Bachelor of Technology — strong foundation in technical problem-solving and analytical thinking.",
  },
  {
    level: "Intermediate (IPE)",
    field: "Mathematics & Science",
    score: "94.6%",
    scoreNum: 94.6,
    icon: BookOpen,
    description: "Scored 94.6% in Intermediate Public Examinations — consistently top of class in mathematics and science.",
  },
  {
    level: "SSC",
    field: "Secondary School Certificate",
    score: "89%",
    scoreNum: 89,
    icon: Award,
    description: "Achieved 89% in Secondary School Certificate — strong academic foundation across all subjects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Academic Background
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            <em className="gradient-text not-italic font-semibold">Education</em>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {education.map(({ level, field, score, scoreNum, icon: Icon, description }) => (
            <div
              key={level}
              className="glass rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{ border: "1px solid rgba(201,169,110,0.14)" }}
            >
              {/* Circular progress */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="rgba(201,169,110,0.1)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="url(#goldGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34 * scoreNum / 100} ${2 * Math.PI * 34}`}
                    style={{ filter: "drop-shadow(0 0 5px rgba(201,169,110,0.5))" }}
                  />
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#A6844A" />
                      <stop offset="100%" stopColor="#E2C898" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-semibold text-sm gradient-text">{score}</span>
                </div>
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded mx-auto flex items-center justify-center mb-3"
                style={{ background: "rgba(201,169,110,0.1)" }}
              >
                <Icon size={17} style={{ color: "#C9A96E" }} />
              </div>

              <h3 className="font-display font-semibold text-[#F8F5EF] text-lg mb-1 tracking-wide">{level}</h3>
              <p className="text-[#C8C4BC] text-xs mb-3 tracking-widest uppercase">{field}</p>
              <p className="text-[#C8C4BC] text-xs leading-relaxed font-light">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
