import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "./../index.css";
import { useCursor } from "./../hooks/useCursor";


const Navbar = () => {
  const { setIsTouchingLink } = useCursor();
  const navbar = useRef(null);
  const textRef = useRef([]);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(textRef.current, { y: "100%", opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.15 });
    return () => tl.kill();
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const difference = currentY - lastScrollY.current;

      if (currentY < 80) {
        setIsVisible(true);
      } else if (Math.abs(difference) > 4) {
        setIsVisible(difference < 0);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const hover = {
    onMouseEnter: () => setIsTouchingLink(true),
    onMouseLeave: () => setIsTouchingLink(false),
    onFocus: () => setIsTouchingLink(true),
    onBlur: () => setIsTouchingLink(false),
  };

  return (
    <nav
      ref={navbar}
      className={`fixed top-0 z-[9999] w-full bg-black/95 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-6 lg:px-8 transition-[transform,opacity] duration-300 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="portfolio-nav mx-auto flex max-w-7xl items-start justify-between gap-4 border-b border-white/40 py-3">
        <div ref={(el) => (textRef.current[0] = el)} className="nav-links flex flex-wrap gap-4 text-white uppercase font-gugi text-xs sm:gap-7 sm:text-sm md:text-base lg:text-lg">
          <Link to="/" {...hover} className="nav-link underline-animation">Home</Link>
          <Link to="/about" {...hover} className="nav-link underline-animation">About</Link>
          <Link to="/work" {...hover} className="nav-link underline-animation">Work</Link>
        </div>
        <div ref={(el) => (textRef.current[1] = el)} className="nav-resume shrink-0 text-right" {...hover}>
          <a href="/Ghanshyam-Sharma-QA-Resume.pdf" download="Ghanshyam_Sharma_QA_Resume.pdf" className="resume-link inline-flex items-center justify-end gap-2 font-mono text-sm font-bold text-[#fac230] underline-animation sm:text-base md:text-xl" aria-label="Download Ghanshyam Sharma's resume">
            <span>/resume</span>
          </a>
          <h2 className="mt-1 text-[9px] leading-tight text-white sm:text-[10px] md:text-xs">Last updated: October 2026</h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
