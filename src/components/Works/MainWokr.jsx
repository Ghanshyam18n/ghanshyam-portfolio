import React from "react";
import { useCursor } from "../../hooks/useCursor";

const MainWork = ({ link, anchor, topic, projectName }) => {
  const { setIsTouchingLink } = useCursor();

  const handlers = {
    onMouseEnter: () => setIsTouchingLink(true),
    onMouseLeave: () => setIsTouchingLink(false),
    onFocus: () => setIsTouchingLink(true),
    onBlur: () => setIsTouchingLink(false),
  };

  return (
    <article className="project-card w-full min-w-0 text-white">
      <a
        href={anchor}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
        aria-label={`${projectName}: ${topic}`}
        {...handlers}
      >
        <div className="project-media relative w-full overflow-hidden rounded-2xl">
          <img
            src={link}
            className="project-art block aspect-[640/420] h-auto w-full object-contain opacity-95"
            alt={`${projectName} project illustration`}
            loading="lazy"
          />
        </div>
      </a>

      <div className="mt-5 flex items-center justify-between gap-4 px-1">
        <div className="min-w-0">
          <h2 className="text-lg font-bold leading-tight sm:text-xl">{projectName}</h2>
          <p className="mt-1 text-sm text-white/55 sm:text-base">{topic}</p>
        </div>
        <a
          href={anchor}
          target="_blank"
          rel="noopener noreferrer"
          className="project-arrow shrink-0 text-2xl text-white"
          aria-label={`Open ${projectName} on GitHub`}
          {...handlers}
        >
          →
        </a>
      </div>
    </article>
  );
};

export default MainWork;
