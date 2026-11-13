"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Building2, Award, Globe } from "lucide-react";

const statItems = [
  { icon: Bot,       value: 13, suffix: "+", label: "Years in Tech & Automation" },
  { icon: Building2, value: 6,  suffix: "",  label: "Global Enterprises Served" },
  { icon: Award,     value: 9,  suffix: "+", label: "Industry Certifications" },
  { icon: Globe,     value: 4,  suffix: "",  label: "Industry Domains" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, 1800 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display font-semibold text-4xl gradient-text">
      {count}{suffix}
    </span>
  );
}

const domains = [
  "Banking & Finance",
  "Healthcare",
  "Retail",
  "Insurance",
];

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--surface)" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A96E] font-medium mb-3 block">
            Who I Am
          </span>
          <h2 className="font-display font-light text-5xl md:text-6xl text-[#F8F5EF] mb-4">
            About <em className="gradient-text not-italic font-semibold">Me</em>
          </h2>
          <div className="gold-divider" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <p className="text-[#C8C4BC] text-lg leading-relaxed mb-6 font-light">
              A certified{" "}
              <span className="text-[#F8F5EF] font-medium">Senior RPA Developer</span> with{" "}
              <span className="text-[#C9A96E] font-medium">13+ years of experience</span> in technology
              and robotic process automation, designing and deploying end-to-end automation solutions
              for Fortune 500 enterprises worldwide.
            </p>
            <p className="text-[#C8C4BC] text-lg leading-relaxed mb-6 font-light">
              Specializing in{" "}
              <span className="text-[#F8F5EF] font-medium">UiPath, Blue Prism, and Power Automate</span>,
              I focus on stabilizing, optimizing, and scaling automation processes. My mission is to
              transform business operations by integrating{" "}
              <span className="text-[#C9A96E] font-medium">AI/ML into RPA workflows</span> to drive
              efficiency and cost control.
            </p>
            <p className="text-[#C8C4BC] text-lg leading-relaxed mb-10 font-light">
              Delivering comprehensive process documentation and innovative automation solutions across
              multiple high-impact domains.
            </p>

            {/* Domain tags */}
            <div className="flex flex-wrap gap-3">
              {domains.map((d) => (
                <span
                  key={d}
                  className="px-4 py-2 rounded text-xs tracking-widest uppercase font-medium"
                  style={{
                    background: "rgba(201,169,110,0.08)",
                    border: "1px solid rgba(201,169,110,0.25)",
                    color: "#C9A96E",
                  }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {statItems.map(({ icon: Icon, value, suffix, label }) => (
              <div
                key={label}
                className="glass rounded-xl p-6 group hover:scale-105 transition-all duration-300"
                style={{ border: "1px solid rgba(201,169,110,0.12)" }}
              >
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,169,110,0.1)" }}
                >
                  <Icon size={18} style={{ color: "#C9A96E" }} />
                </div>
                <CountUp target={value} suffix={suffix} />
                <p className="text-[#C8C4BC] text-xs mt-1 leading-snug tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
