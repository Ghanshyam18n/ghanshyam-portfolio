import React from "react";

const ScrollMore = () => {
  const handleScroll = () => {
    window.scrollBy({ top: Math.min(window.innerHeight * 0.85, 720), behavior: "smooth" });
  };

  return (
    <div className="relative flex h-28 w-full items-center justify-center py-4 sm:h-32">
      <button
        type="button"
        onClick={handleScroll}
        aria-label="Scroll down"
        className="group flex h-20 w-20 items-center justify-center rounded-full bg-[#fac230] text-black shadow-[0_0_0_1px_rgba(250,194,48,.15)] transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black sm:h-24 sm:w-24"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 transition-transform duration-300 group-hover:translate-y-1 sm:h-9 sm:w-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v15" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollMore;
