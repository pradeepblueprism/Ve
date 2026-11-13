"use client";

import { Bot, Database, Globe, Cpu, Zap, BarChart3 } from "lucide-react";

const skillGroups = [
  {
    category: "RPA Platforms",
    icon: Bot,
    skills: [
      { name: "Blue Prism",           level: 98 },
      { name: "UiPath",               level: 95 },
      { name: "Power Automate",       level: 90 },
      { name: "Automation Anywhere",  level: 88 },
    ],
  },
  {
    category: "Intelligent Automation",
    icon: Cpu,
    skills: [
      { name: "HyperScience",         level: 85 },
      { name: "AI/ML Integration",    level: 80 },
      { name: "Document Intelligence",level: 82 },
      { name: "Process Mining",       level: 75 },
    ],
  },
  {
    category: "Legacy & Data Systems",
    icon: Database,
    skills: [
      { name: "Mainframe (IBM)",       level: 90 },
      { name: "DB2",                   level: 85 },
      { name: "COBOL / JCL",           level: 80 },
      { name: "SQL",                   level: 78 },
    ],
  },
  {
    category: "Industry Domains",
    icon: Globe,
    skills: [
      { name: "Banking & Finance",     level: 95 },
      { name: "Insurance",             level: 90 },
      { name: "Healthcare",            level: 85 },
      { name: "Retail",                level: 80 },
    ],
  },
  {
    category: "Automation Practices",
    icon: Zap,
    skills: [
      { name: "Process Documentation", level: 95 },
      { name: "Solution Architecture", level: 88 },
      { name: "Production Support",    level: 92 },
      { name: "Bot Monitoring",        level: 90 },
    ],
  },
  {
    category: "Performance & Quality",
    icon: BarChart3,
    skills: [
      { name: "ROI Analysis",          level: 85 },
      { name: "Process Optimization",  level: 92 },
      { name: "End-to-End Testing",    level: 88 },
      { name: "Incident Management",   level: 90 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[#C8C4BC] font-light group-hover:text-[#F8F5EF] transition-colors tracking-wide">
          {name}
        </span>
        <span className="text-xs font-medium text-[#C9A96E]">{level}%</span>
      </div>
      <div className="h-px rounded-full overflow-hidden" style={{ background: "rgba(201,169,110,0.15)" }}>
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #A6844A, #C9A96E, #E2C898)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Technical Expertise
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            Skills &amp; <em className="gradient-text not-italic font-semibold">Technologies</em>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Skill grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, icon: Icon, skills }) => (
            <div
              key={category}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
              style={{ border: "1px solid rgba(201,169,110,0.12)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,169,110,0.1)" }}
                >
                  <Icon size={16} style={{ color: "#C9A96E" }} />
                </div>
                <h3 className="font-display font-semibold text-[#F8F5EF] text-base tracking-wide">{category}</h3>
              </div>

              <div className="space-y-4">
                {skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Also proficient in */}
        <div className="mt-12 text-center">
          <p className="text-[#C8C4BC] text-xs uppercase tracking-[0.2em] mb-6">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Blue Prism AD01", "Blue Prism APD01", "UiPath Studio",
              "UiPath Orchestrator", "Power Automate Desktop", "HyperScience Platform",
              "IBM Mainframe", "Microsoft Office 365", "ServiceNow", "JIRA",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs rounded tracking-wide text-[#C8C4BC] hover:text-[#C9A96E] transition-colors cursor-default"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,169,110,0.1)",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
