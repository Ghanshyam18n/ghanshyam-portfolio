import React, { useEffect, useRef } from "react";
import MainWork from "./MainWokr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    link: "/projects/ecommerce-manual-testing.svg",
    anchor: "https://github.com/Ghanshyam18n/ECommerce-Website-Manual-Testing",
    topic: "E-Commerce Website Manual Testing",
    projectName: "E-Commerce Manual Testing",
  },
  {
    link: "/projects/api-testing.svg",
    anchor: "https://github.com/Ghanshyam18n/API-Testing",
    topic: "Manual API Testing using Postman",
    projectName: "API Testing",
  },
  {
    link: "/projects/parabank-manual-testing.svg",
    anchor: "https://github.com/Ghanshyam18n/Banking-Portal-Manual-Testing-ParaBank",
    topic: "ParaBank Banking Portal Manual Testing",
    projectName: "ParaBank",
  },
  {
    link: "/projects/java-selenium-automation-lab.svg",
    anchor: "https://github.com/Ghanshyam18n/java-sel-automation-lab",
    topic: "Java Selenium Automation Practice",
    projectName: "Selenium Automation Lab",
  },
];

const ParentWork = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    const animations = imageRefs.current.map((ref) => {
      if (!ref) return null;
      return gsap.fromTo(
        ref,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 75%",
            end: "bottom 30%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => animations.forEach((animation) => animation?.kill());
  }, []);

  return (
    <div className="work-project-gallery w-full pt-8 lg:pt-4">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-24">
        {data.map((items, index) => (
          <div key={items.projectName} ref={(el) => (imageRefs.current[index] = el)}>
            <MainWork
              link={items.link}
              anchor={items.anchor}
              topic={items.topic}
              projectName={items.projectName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentWork;
