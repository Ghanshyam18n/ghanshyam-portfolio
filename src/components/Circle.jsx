import React from "react";
import { useCursor } from "./../hooks/useCursor.jsx";

const Circle = () => {
  const { position, isTouchingLink } = useCursor();
  return (
    <div
      aria-hidden="true"
      className={`custom-cursor-circle pointer-events-none fixed left-0 top-0 z-[60] rounded-full border-2 border-white transition-[width,height,margin,background-color] duration-200 ${isTouchingLink ? "bg-white" : "bg-transparent"}`}
      style={{
        width: isTouchingLink ? "5rem" : "2.5rem",
        height: isTouchingLink ? "5rem" : "2.5rem",
        marginLeft: isTouchingLink ? "-2.5rem" : "-1.25rem",
        marginTop: isTouchingLink ? "-2.5rem" : "-1.25rem",
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default Circle;
