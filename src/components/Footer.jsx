import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "./../hooks/useCursor";

const Footer = () => {
  const { setIsTouchingLink } = useCursor();
  const eventHandlers = { onMouseEnter: () => setIsTouchingLink(true), onMouseLeave: () => setIsTouchingLink(false), className: "underline-animation" };
  return (
    <div className='w-full h-[8vh] border-t-2 lg:flex text-center lg:justify-end lg:px-0'>
      <div className='text-white flex justify-center items-center text-lg'>
        <div className='flex items-start font-oswald gap-4'>
          <a href='https://www.linkedin.com/in/ghanshyam-sharma-262205223/' target='_blank' rel='noopener noreferrer' className='flex items-center text-white md:text-xl lg:text-2xl gap-2'><span {...eventHandlers}>LinkedIn</span><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href='https://github.com/Ghanshyam18n' target='_blank' rel='noopener noreferrer' className='flex items-center text-white md:text-xl lg:text-2xl gap-2'><span {...eventHandlers}>GitHub</span><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.codechef.com/users/ghanshym18n' target='_blank' rel='noopener noreferrer' className='flex items-center text-white md:text-xl lg:text-2xl gap-2'><span {...eventHandlers}>CodeChef</span><span className='text-[#fac230]'>CC</span></a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
