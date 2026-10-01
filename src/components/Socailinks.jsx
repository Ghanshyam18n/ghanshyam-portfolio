import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "./../hooks/useCursor";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Socailinks = () => {
  const { setIsTouchingLink } = useCursor();
  const textRef = useRef([]);
  const handlers = {
    onMouseEnter: () => setIsTouchingLink(true),
    onMouseLeave: () => setIsTouchingLink(false),
    className: "underline-animation",
  };

  useEffect(() => {
    gsap.from(textRef.current, {
      y: 30,
      duration: 0.8,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: { trigger: textRef.current, start: "top 90%", toggleActions: "play none none none" },
    });
  }, []);

  return (
    <div className="mt-10 w-full">
      <h4
        className="text-white text-[clamp(2.8rem,5vw,4.5rem)] leading-none uppercase font-extrabold font-oswald"
        ref={(el) => (textRef.current[0] = el)}
      >
        Social <br />Media
      </h4>
      <div
        className="mt-6 flex flex-col gap-3 text-white font-spacemono text-lg sm:text-xl"
        ref={(el) => (textRef.current[1] = el)}
      >
        <a href="https://www.linkedin.com/in/ghanshyam-sharma-262205223/" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 hover:text-[#fac230] transition-colors">
          <span {...handlers}>LinkedIn</span><FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Ghanshyam18n" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 hover:text-[#fac230] transition-colors">
          <span {...handlers}>GitHub</span><FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.codechef.com/users/ghanshym18n" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 hover:text-[#fac230] transition-colors">
          <span {...handlers}>CodeChef</span><span className="text-[#fac230]">CC</span>
        </a>
      </div>
    </div>
  );
};

export default Socailinks;
