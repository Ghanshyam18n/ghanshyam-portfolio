import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const roles = ["QA Engineer", "Manual Testing", "Test Automation"];

const Name = () => {
  const nameRef = useRef([]);
  const subRef = useRef([]);
  const [activeRole, setActiveRole] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(nameRef.current,
        { y: "110%", opacity: 1 },
        {
        y: "0%",
        opacity: 1,
        duration: 0.55,
        ease: "power3.out",
        stagger: 0.035,
      }).fromTo(
        subRef.current,
        { y: 24, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
        },
        "-=0.2"
      );
    });
    return () => ctx.revert();
  }, []);

  const name = "Ghanshyam Sharma";

  return (
    <div className="hero-name flex min-h-[calc(100svh-82px)] w-full items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="z-10 flex w-full max-w-[1400px] flex-col items-center justify-center">
        <h1
          className="portfolio-name font-ariata font-bold leading-[0.92] tracking-[-0.045em] text-white"
          aria-label={name}
        >
          {name.split("").map((char, index) => (
            <span key={index} ref={(el) => (nameRef.current[index] = el)} className="hero-name-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <div className="mt-7 flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-2 px-2 text-center text-white sm:mt-8">
          {roles.map((role, index) => (
            <React.Fragment key={role}>
              {index > 0 && <span className="hero-role-separator" aria-hidden="true">·</span>}
              <button
                type="button"
                ref={(el) => (subRef.current[index] = el)}
                onMouseEnter={() => setActiveRole(role)}
                onMouseLeave={() => setActiveRole(null)}
                onFocus={() => setActiveRole(role)}
                onBlur={() => setActiveRole(null)}
                onTouchStart={() => setActiveRole(role)}
                onTouchEnd={() => setActiveRole(null)}
                className={`hero-skill-chip ${activeRole && activeRole !== role ? "is-dim" : ""} ${activeRole === role ? "is-active" : ""}`}
              >
                {role}
              </button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Name;
