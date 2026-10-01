import React, { useEffect, useRef } from "react";
import WorkButton from "./WorkButton.jsx";
import gsap from "gsap";
import LinkItem from "./Link.jsx";
import { ScrollTrigger } from "gsap/all";

const MyWork = () => {
  const data = [
    { text: "E-Commerce Website", link: "https://github.com/Ghanshyam18n/ECommerce-Website-Manual-Testing" },
    { text: "API Testing", link: "https://github.com/Ghanshyam18n/API-Testing" },
    { text: "ParaBank", link: "https://github.com/Ghanshyam18n/Banking-Portal-Manual-Testing-ParaBank" },
    { text: "Java Selenium Automation Lab", link: "https://github.com/Ghanshyam18n/java-sel-automation-lab" },
  ];  const textRef = useRef([]);
  const workRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        },
      })
      .from(textRef.current, {
        y: 100,
        opacity: 0,
        delay: 0.1,
        marker: true,
        duration: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: workRef.current,
          start: "top 95%",
          end: "bottom 30%",
          toggleActions: "play none none none", //
        },
      })
      .from(workRef.current, {
        y: 120,
        opacity: 0,
        delay: 0.1,
        marker: true,
        duration: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.4,
        },
      });
  }, []);

  return (
    <div
      className=' w-full text-white h-screen   grid lg:grid-row-1 sm:mt-28 items-center transition-all
      p-5'
    >
      <div className='text-white text-4xl uppercase lg:text-8xl h-full  font-extrabold whitespace-wrap w-full grid items-end overflow-hidden '>
        <h4 ref={workRef}>WORK</h4>
      </div>
      <div className='w-full h-full  lg:mt-10 '>
        {data.map((item, index) => (
          <div key={index} ref={(el) => (textRef.current[index] = el)}>
            <LinkItem text={item.text} link={item.link} />
          </div>
        ))}
        <div className='mt-10 md:px-6'>
          <WorkButton link='/work' text='Work' />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
