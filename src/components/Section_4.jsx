import React, { useRef, useEffect, useState } from "react";
import StepCard from "./StepCard";

const features = [
  {
    image: "/videos/steps/Motion-1.webm",
    header: "Create Your Digital Identity.",
    description:
      "Design a personal digital business card with your contact details, social links, products, services, & professional information.",
  },
  {
    image: "/videos/steps/Motion-2.webm",
    header: "Scan & Connect Instantly.",
    description:
      "Simply scan a digital business card or QR to instantly exchange contact information & build  professional connections.",
  },
  {
    image: "/videos/steps/Motion-3.webm",
    header: "Save Contacts & Work Details.",
    description:
      "Store contacts securely while saving meeting notes, follow-up reminders, tasks, and conversation details for future reference.",
  },
  {
    image: "/videos/steps/Motion-4.webm",
    header: "Unlock Opportunities.",
    description:
      "Stay connected, collaborate on opportunities, assign tasks & strengthen connections through DigInfo's smart CRM tools.",
  },
];

/* px each underlying card peeks above the next card */
const PEEK = 20;

const Section_4 = () => {
  const titleRef = useRef(null);
  const [titleHeight, setTitleHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (isMobile && titleRef.current) {
        const h = titleRef.current.getBoundingClientRect().height;
        setTitleHeight(h);
      }
    };
    measure();
    const timer = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [isMobile]);

  return (
    <div
      /* overflow:clip clips border-radius WITHOUT breaking position:sticky
         (overflow:hidden would block sticky) */
      className="w-full md:w-[94%] min-h-[220vh] md:min-h-screen
      rounded-[44px] md:my-36 my-24 relative [overflow:clip]"
    >
      {/* Mobile-only sticky — resets to static on desktop via md:static */}
      <style>{`
        @media (max-width: 767px) {
          .card-stack-item {
            position: sticky;
            transition: top 0.3s ease-in-out;
          }
          /* Entire Header stays sticky at the top so description stays on screen */
          .section4-header {
            position: sticky;
            top: var(--navbar-offset, 65px);
            z-index: 1;
            transition: top 0.3s ease-in-out;
          }
        }
      `}</style>

      {/* Background SVG and Gradient - sticky on mobile, absolute on desktop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky md:absolute top-0 w-full h-screen md:h-full bg-gradient-to-b from-[var(--color-primary)] md:via-30% via-[var(--color-primary)]/80 to-[var(--color-sections-light-blue)]">
          <picture className="block w-full h-full">
            <source
              media="(max-width: 767px)"
              srcSet="/svg/section3-m-bg.svg"
            />
            <img
              className="w-full h-full object-cover object-bottom pointer-events-none"
              src="/svg/section3-bg.svg"
              alt=""
            />
          </picture>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-24 text-center max-w-6xl mx-auto font-plus-jakarta">
        {/* Header Block - sticky as a whole */}
        <div className="section4-header w-full flex flex-col items-center">
          {/* Badge & Title (Headers) */}
          <div ref={titleRef} className="w-full flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-yellow)] font-semibold text-sm md:text-base tracking-wide mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-yellow)]"></span>
              Our Features
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
              <span className="text-[var(--color-yellow)]">Four Steps</span> to
              Your Smart Business Card.
            </h1>
          </div>

          {/* Description (Body Copy) - cards will slide over this */}
          <p className="text-white text-sm md:text-xl font-[600] font-plus-jakarta max-w-2xl md:max-w-4xl leading-relaxed mb-10">
            You can create, customize & track your Card very efficiently. You
            can Also Manage tasks & Organize teams & work them through our CRM
            system.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="w-full md:w-fit flex flex-col md:grid md:grid-cols-2 gap-34 md:gap-8 text-left">
          {features.map((feature, domIdx) => {
            const stickyTop = isMobile
              ? `calc(var(--navbar-offset, 65px) + ${titleHeight}px + ${domIdx * PEEK}px)`
              : "auto";
            const zIndex = domIdx + 2; // 2, 3, 4, 5

            return (
              <div
                key={feature.header}
                className="card-stack-item md:static"
                style={{ top: stickyTop, zIndex }}
              >
                <StepCard
                  image={feature.image}
                  header={feature.header}
                  description={feature.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section_4;
