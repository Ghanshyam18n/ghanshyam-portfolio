import React from "react";

const LinkItem = ({ text, link }) => {
  return (
    <div className="work-link-row w-full border-b border-[#fac230] py-7 text-sm font-semibold capitalize sm:py-8 sm:text-xl lg:py-9 lg:text-2xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="work-link-inner flex min-h-12 w-full items-center justify-between gap-5 rounded-full px-2 transition-all duration-300 sm:px-4"
      >
        <h4 className="min-w-0 break-words font-gugi leading-tight">{text}</h4>
        <span className="work-view shrink-0 font-gugi text-sm sm:text-base">View <span aria-hidden="true">→</span></span>
      </a>
    </div>
  );
};

export default LinkItem;
