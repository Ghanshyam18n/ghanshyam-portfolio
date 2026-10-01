import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Use the browser's native scroll wheel/touch handling.
    // This avoids Lenis fighting with GSAP ScrollTrigger, especially around
    // the pinned Get In Touch section. All GSAP reveal animations remain active.
    const onLoad = () => window.scrollTo(0, 0);
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return <div data-scroll-container>{children}</div>;
};

export default SmoothScroll;
