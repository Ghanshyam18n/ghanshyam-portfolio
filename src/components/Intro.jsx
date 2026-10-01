import React, { useEffect, useRef } from "react";
import WorkButton from "./WorkButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Socailinks from "./Socailinks";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const headingRef = useRef([]);
  const bioRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 70,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: headingRef.current[0],
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.fromTo(
        bioRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full px-4 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-12">
        <div className="min-w-0">
          <div className="overflow-hidden text-white font-bold font-oswald text-[clamp(4rem,8vw,7rem)] leading-[0.85] uppercase">
            <h4 ref={(el) => (headingRef.current[0] = el)}>ABOUT ME</h4>
          </div>

          <p
            ref={bioRef}
            className="mt-10 max-w-xl px-1 text-white font-spacemono text-base leading-7 sm:text-lg md:mt-12"
          >
            Hi, I&apos;m Ghanshyam, a QA-focused software tester who enjoys finding problems before users do. I work with manual testing, Selenium, API testing, SQL, and application validation.
          </p>

          <div className="mt-6 mb-8 text-white" ref={(el) => (headingRef.current[1] = el)}>
            <WorkButton link="/about" text="More" />
          </div>

          <Socailinks />
        </div>

      </div>
    </section>
  );
};

export default Intro;
