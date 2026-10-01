import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    label: "Manual Testing",
    icon: "checklist",
    lines: [
      "Functional Testing · System Testing · Smoke Testing",
      "Sanity Testing · Regression Testing · Retesting",
      "User Acceptance Testing (UAT) · Test Case Design",
      "SDLC · STLC · Defect Management",
    ],
  },
  {
    label: "Automation Testing",
    icon: "code",
    lines: ["Selenium WebDriver · Core Java · TestNG"],
  },
  {
    label: "API & Database Testing",
    icon: "database",
    lines: ["API Testing (Postman) · SQL"],
  },
  {
    label: "Tools & Methodologies",
    icon: "tools",
    lines: ["JIRA · Git · GitHub · Agile · Scrum"],
  },
];

const SkillIcon = ({ type }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className: "shrink-0 text-[#fac230]",
  };

  if (type === "checklist") {
    return <svg {...common}><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6M8.5 11l1.5 1.5 3-3M8.5 16h7" /></svg>;
  }
  if (type === "code") {
    return <svg {...common}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg>;
  }
  if (type === "database") {
    return <svg {...common}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>;
  }
  return <svg {...common}><rect x="3.5" y="4" width="7" height="7" rx="1" /><rect x="13.5" y="4" width="7" height="7" rx="1" /><rect x="8.5" y="14" width="7" height="7" rx="1" /><path d="M7 11v1.5h5M17 11v1.5h-5" /></svg>;
};

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".technical-skills-title", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
      gsap.from(".technical-skills-group", {
        y: 22,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills-section relative mt-24 w-full px-4 sm:mt-32 sm:px-6 lg:mt-44 lg:px-8"
      aria-labelledby="technical-skills-heading"
    >
      <div className="technical-skills-panel mx-auto w-full max-w-5xl rounded-2xl bg-[#111111] px-4 py-6 sm:px-8 sm:py-8">
        <h2
          id="technical-skills-heading"
          className="technical-skills-title border-b border-white/15 pb-5 font-oswald text-2xl font-bold uppercase text-[#fac230] sm:text-3xl"
        >
          Technical Skills
        </h2>

        <div className="divide-y divide-white/15">
          {groups.map((group) => (
            <div key={group.label} className="technical-skills-group py-5 sm:py-6">
              <div className="mb-2 flex items-center gap-2.5 text-white">
                <SkillIcon type={group.icon} />
                <h3 className="font-ariata text-base font-bold sm:text-lg">{group.label}</h3>
              </div>
              <div className="space-y-1.5 text-sm leading-relaxed text-white/90 sm:text-[15px]">
                {group.lines.map((line) => (
                  <p key={line} className="technical-skill-line">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
