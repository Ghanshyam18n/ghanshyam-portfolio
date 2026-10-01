import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useCursor } from "../hooks/useCursor";

gsap.registerPlugin(ScrollTrigger);

const PHONE = "916203565189";
const DISPLAY_PHONE = "+91 62035 65189";
const EMAIL = "ghanshyam18n@gmail.com";
const LOCATION = "Noida, India";

const GetInTouch = () => {
  const { setIsTouchingLink } = useCursor();
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1600);
    } catch {
      setEmailCopied(false);
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(DISPLAY_PHONE);
      setPhoneCopied(true);
      window.setTimeout(() => setPhoneCopied(false), 1600);
    } catch {
      setPhoneCopied(false);
    }
  };
  const eventHandlers = {
    onMouseEnter: () => setIsTouchingLink(true),
    onMouseLeave: () => setIsTouchingLink(false),
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px), (hover: none), (pointer: coarse)").matches;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main",
          scrub: isMobile ? 1 : 2,
          start: isMobile ? "top 75%" : "50% 50%",
          end: isMobile ? "bottom 25%" : "100% 50%",
          pin: !isMobile,
          pinSpacing: !isMobile,
          invalidateOnRefresh: true,
        },
      });
      tl.to("#top", { top: "-50%" }, "a")
        .to("#bottom", { bottom: "-50%" }, "a")
        .to("#t-h1", { bottom: "50%" }, "a")
        .to("#b-h1", { bottom: "-50%" }, "a")
        .to("#center", { top: "0%" }, "a");
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="main relative mx-auto mt-20 h-screen w-full max-w-7xl overflow-hidden rounded-3xl lg:mt-32">
      <div id="top" className="absolute top-0 h-[50vh] w-full overflow-hidden bg-[#fac230]">
        <h1 id="t-h1" className="absolute top-0 whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase text-black lg:font-oswald">
          get-in-touch
        </h1>
      </div>

      <div id="center" className="absolute top-full flex h-screen w-full items-end">
        <div className="content flex w-full flex-col">
          <h4 className="text-center font-oswald text-[clamp(4rem,12vw,9rem)] font-extrabold text-white whitespace-nowrap">
            HIRE ME
          </h4>
          <h5 className="mb-8 mt-8 text-center font-oswald text-lg uppercase text-white sm:text-xl">
            or Just say hi
          </h5>

          <div className="flex flex-col text-center font-extrabold text-white">
            <div className="flex w-full items-center justify-center gap-3 border-t py-5 text-base sm:text-2xl lg:text-4xl">
              <FontAwesomeIcon icon={faEnvelope} />
              <a
                href={`mailto:${EMAIL}`}
                {...eventHandlers}
                className="break-all underline-animation hover:text-[#fac230]"
              >
                {EMAIL}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="shrink-0 rounded-md border border-white/30 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:border-[#fac230] hover:text-[#fac230] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fac230] sm:text-sm"
                aria-label="Copy email address"
                title="Copy email address"
              >
                {emailCopied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="contact-location flex w-full items-center justify-center gap-3 border-t py-5 text-base text-white sm:text-2xl lg:text-4xl">
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              <span>{LOCATION}</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 border-t py-5 text-base sm:text-2xl lg:text-4xl">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <span className="select-text" aria-label="Phone number">{DISPLAY_PHONE}</span>
              <button
                type="button"
                onClick={copyPhone}
                className="rounded-md border border-white/30 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:border-[#fac230] hover:text-[#fac230] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fac230] sm:text-sm"
                aria-label="Copy phone number"
                title="Copy phone number"
              >
                {phoneCopied ? "Copied" : "Copy"}
              </button>
              <div className="contact-actions" aria-label="Contact actions">
                <a
                  href={`tel:+${PHONE}`}
                  {...eventHandlers}
                  aria-label="Call Ghanshyam"
                  title="Call Ghanshyam"
                  className="contact-icon contact-icon-call"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} />
                </a>
                <a
                  href={`https://wa.me/${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...eventHandlers}
                  aria-label="WhatsApp Ghanshyam"
                  title="WhatsApp Ghanshyam"
                  className="contact-icon contact-icon-whatsapp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom" className="absolute bottom-0 h-[50vh] w-full overflow-hidden bg-[#fac230]">
        <h1 id="b-h1" className="absolute top-0 whitespace-nowrap text-[clamp(4rem,13vw,12rem)] font-extrabold uppercase text-black lg:font-oswald">
          get-in-touch
        </h1>
      </div>
    </div>
  );
};

export default GetInTouch;
