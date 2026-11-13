"use client";

import { Briefcase, Calendar, Users } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Infosys",
    role: "Senior RPA Developer",
    client: "Carrier Global",
    period: "Apr 2023 – Present",
    duration: "3 yrs",
    tools: ["Blue Prism", "HyperScience", "Power Automate", "UiPath"],
    highlights: [
      "Designing and deploying end-to-end automation solutions for Carrier Global's global operations",
      "Integrating AI/ML capabilities via HyperScience for intelligent document processing",
      "Stabilizing and optimizing existing Blue Prism automations for 99%+ uptime",
      "Building scalable custom objects and robust reusable components",
    ],
  },
  {
    id: 2,
    company: "AIG",
    role: "RPA Developer & Support",
    client: "AIG (Insurance)",
    period: "Sep 2020 – Apr 2023",
    duration: "2.5 yrs",
    tools: ["Blue Prism", "Power Automate", "UiPath", "HyperScience"],
    highlights: [
      "Automated insurance claims processing workflows reducing manual effort by 60%",
      "Developed and maintained 15+ Blue Prism automation processes in production",
      "Implemented Power Automate flows for internal HR and finance operations",
      "Led process discovery and documentation for new automation candidates",
    ],
  },
  {
    id: 3,
    company: "Wipro",
    role: "RPA Developer & Support",
    client: "Johnson & Johnson",
    period: "Jun 2019 – Sep 2020",
    duration: "1.3 yrs",
    tools: ["Blue Prism", "Power Automate", "UiPath"],
    highlights: [
      "Automated supply chain and procurement processes for J&J global operations",
      "Created intelligent data extraction bots for regulatory compliance reporting",
      "Performed root cause analysis and resolution of production incidents",
      "Delivered process improvement documentation and automation ROI reports",
    ],
  },
  {
    id: 4,
    company: "Virtusa",
    role: "RPA Developer & Support",
    client: "Mashreq Bank",
    period: "May 2017 – Jun 2019",
    duration: "2 yrs",
    tools: ["Blue Prism", "UiPath", "Power Automate"],
    highlights: [
      "Automated banking operations for Mashreq Bank including trade finance workflows",
      "Built Dubai Police Portal integration bot — earned Star of the Month award",
      "Developed Police Letter automation and Bill Acceptance processes",
      "Reduced processing time by 70% through intelligent RPA implementations",
    ],
  },
  {
    id: 5,
    company: "IBM",
    role: "Mainframe Developer & RPA Developer",
    client: "Anthem & Pramerica",
    period: "Jun 2014 – May 2017",
    duration: "3 yrs",
    tools: ["Mainframe", "DB2", "Blue Prism", "HyperScience", "Power Automate"],
    highlights: [
      "Mainframe development and testing for Anthem healthcare platform",
      "DB2 database administration and performance tuning",
      "Transitioned into RPA development, pioneering automation of mainframe workflows",
      "Developed cross-platform automation bridging legacy mainframe with modern RPA tools",
    ],
  },
  {
    id: 6,
    company: "Wipro",
    role: "Mainframe Developer",
    client: "Lloyds Banking Group",
    period: "Apr 2011 – Apr 2012",
    duration: "1 yr",
    tools: ["Mainframe", "COBOL", "JCL"],
    highlights: [
      "Core banking mainframe development for Lloyds Banking Group UK",
      "Developed and maintained COBOL programs for transaction processing",
      "JCL job scheduling and batch processing optimization",
      "Production support and incident management",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Career Journey
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            Work <em className="gradient-text not-italic font-semibold">Experience</em>
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block timeline-line" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="flex-1 md:w-[calc(50%-2.5rem)]">
                  <div
                    className="glass rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group"
                    style={{ border: "1px solid rgba(201,169,110,0.14)" }}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1">
                          <div
                            className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                            style={{ background: "rgba(201,169,110,0.12)" }}
                          >
                            <Briefcase size={14} style={{ color: "#C9A96E" }} />
                          </div>
                          <h3 className="font-display font-semibold text-xl text-[#F8F5EF]">
                            {exp.company}
                          </h3>
                        </div>
                        <p className="text-sm font-medium ml-10 text-[#C9A96E] tracking-wide">
                          {exp.role}
                        </p>
                      </div>
                      <span
                        className="text-xs font-medium px-3 py-1 rounded flex-shrink-0 tracking-wider"
                        style={{
                          background: "rgba(201,169,110,0.1)",
                          color: "#C9A96E",
                          border: "1px solid rgba(201,169,110,0.25)",
                        }}
                      >
                        {exp.duration}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-xs text-[#C8C4BC] tracking-wide">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} className="text-[#C9A96E]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users size={11} className="text-[#C9A96E]" />
                        Client: {exp.client}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#C8C4BC] font-light leading-relaxed">
                          <span
                            className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "#C9A96E" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div
                      className="flex flex-wrap gap-2 pt-4"
                      style={{ borderTop: "1px solid rgba(201,169,110,0.1)" }}
                    >
                      {exp.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1 rounded tracking-wide"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            color: "#C8C4BC",
                            border: "1px solid rgba(201,169,110,0.1)",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex flex-shrink-0 w-10 items-start pt-6 justify-center">
                  <div
                    className="w-3.5 h-3.5 rounded-full border-2 z-10"
                    style={{
                      background: "#C9A96E",
                      borderColor: "#0A0F1E",
                      boxShadow: "0 0 14px rgba(201,169,110,0.6)",
                    }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
