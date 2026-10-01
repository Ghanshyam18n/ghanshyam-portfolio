import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const greetings = [
  "Namaste",
  "Namaskara",
  "Namaskaram",
  "Vanakkam",
  "Nomoshkar",
  "Sat Sri Akal",
  "Khamma Ghani",
];

const Language = () => {
  const textRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: textRef.current, start: "top 90%", toggleActions: "play none none none" } }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(textRef.current, {
        y: -55,
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % greetings.length);
          gsap.fromTo(textRef.current, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
        },
      });
    }, 1900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full px-4 pt-28 pb-16 sm:px-8">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-7xl flex-col items-center justify-center text-center">
        <div className="flex min-h-[45vh] w-full items-center justify-center overflow-hidden">
          <h4
            ref={textRef}
            className="max-w-full px-3 text-white text-[clamp(3.5rem,12vw,10rem)] font-extrabold leading-none tracking-tight text-center"
          >
            {greetings[currentIndex]}
          </h4>
        </div>
        <div className="max-w-5xl text-[clamp(1.25rem,3.2vw,3rem)] leading-snug text-white px-4">
          <h4 className="font-paytone">
            Hi, I&apos;m Ghanshyam. I&apos;m building my career in QA through manual testing, automation, API validation, SQL, and real application support experience.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Language;
