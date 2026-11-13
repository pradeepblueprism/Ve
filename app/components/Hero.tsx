"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ExternalLink, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const roles = [
  "Senior RPA Developer",
  "Automation Architect",
  "AI/ML Integration Expert",
  "Blue Prism Specialist",
  "UiPath Advanced Developer",
];

const stats = [
  { value: "13+", label: "Years Experience" },
  { value: "6",   label: "Companies" },
  { value: "9+",  label: "Certifications" },
  { value: "4",   label: "Industry Domains" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length + 1)), 65);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(currentRole.slice(0, displayed.length - 1)), 38);
    } else {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center animated-gradient mesh-bg overflow-hidden">

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] -top-40 -left-40" style={{ background: "#C9A96E" }} />
      <div className="orb w-96 h-96 bottom-0 right-0 translate-x-1/3 translate-y-1/3" style={{ background: "#A6844A" }} />

      <div className="relative max-w-7xl mx-auto px-8 pt-28 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">

          {/* ── Left ── */}
          <div className="flex-1 text-center lg:text-left">

            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase mb-8"
              style={{
                background: "rgba(201,169,110,0.08)",
                border: "1px solid rgba(201,169,110,0.3)",
                color: "#C9A96E",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse-gold" />
              Available for new opportunities
            </div>

            {/* Name */}
            <h1 className="font-display leading-tight mb-5">
              <span className="block text-lg tracking-[0.2em] uppercase text-[#C8C4BC] font-light mb-2">
                Hello, I&apos;m
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-[#F8F5EF]">
                Pradeep
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl font-semibold gradient-text">
                Minumula
              </span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg md:text-xl text-[#C8C4BC] font-light tracking-wide">
                {displayed}
                <span className="cursor-blink text-[#C9A96E] ml-0.5">|</span>
              </span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-10 text-sm text-[#C8C4BC]">
              <span className="flex items-center gap-1.5">
                <Briefcase size={13} className="text-[#C9A96E]" />
                Infosys · Carrier Global
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#C9A96E]" />
                India
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button onClick={scrollToAbout} className="btn-gold px-7 py-3.5 rounded text-sm tracking-[0.12em] uppercase flex items-center gap-2">
                View My Work
                <ArrowDown size={15} />
              </button>
              <a
                href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-7 py-3.5 rounded text-sm tracking-[0.12em] uppercase flex items-center gap-2"
              >
                LinkedIn
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* ── Right ── */}
          <div className="flex-shrink-0 flex flex-col items-center gap-6">

            {/* Profile photo */}
            <div className="relative animate-float">
              <div
                className="absolute -inset-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #C9A96E, #E2C898, #A6844A)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden"
                style={{ border: "3px solid #C9A96E40" }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Pradeep Minumula"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Stats card */}
            <div
              className="glass rounded-xl p-5 grid grid-cols-2 gap-5 w-full max-w-xs"
              style={{ boxShadow: "0 0 40px rgba(201,169,110,0.08)" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display font-semibold text-2xl gradient-text">{stat.value}</div>
                  <div className="text-xs tracking-wide text-[#C8C4BC] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C8C4BC] hover:text-[#C9A96E] transition-colors"
        >
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
