import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCursor } from "../hooks/useCursor";
const WorkButton = ({ link, text }) => {
  const { setIsTouchingLink } = useCursor();
  const handleTouch = () => setIsTouchingLink(true);
  const removeTouch = () => setIsTouchingLink(false);

  const eventHandlers = {
    onMouseMove: handleTouch,
    onMouseLeave: removeTouch,
    className: "underline-animation",
  };

  return (
    <div className='font-gugi p-2 lg:mt-2 w-full flex items-center justify-start text-2xl capitalize font-thin space-x-2'>
      <Link to={link} {...eventHandlers}>
        {text}
      </Link>
      <FontAwesomeIcon icon={faArrowRight} size='lg' />
    </div>
  );
};

export default WorkButton;
// Duration 1 day ...
