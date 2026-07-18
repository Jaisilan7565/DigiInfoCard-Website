import React, { useRef, useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    image: "/images/features/feature-1.png",
    header: "Smart Digital Cards",
    description:
      "Create beautiful digital cards that instantly share your contact information, social links, portfolio, products, and services.",
  },
  {
    image: "/images/features/feature-2.png",
    header: "Professional Networking",
    description:
      "Exchange contacts effortlessly through QR codes, card sharing, and smart contact management tools.",
  },
  {
    image: "/images/features/feature-3.png",
    header: "CRM & Lead Capture",
    description: (
      <>
        Capture, qualify, and manage leads with a built-in CRM. Track follow-ups
        and
        <br /> pipeline progress effortlessly.
      </>
    ),
  },
  {
    image: "/images/features/feature-4.png",
    header: "Realtime Analytics",
    description:
      "Track profile views, card scans, saved contacts and engagement insights to grow your network effectively.",
  },
];

/* px each underlying card peeks above the next card */
const PEEK = 20;

const Section_3 = () => {
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
      id="features"
      /* overflow:clip clips border-radius WITHOUT breaking position:sticky
         (overflow:hidden would block sticky) */
      className="w-full md:w-[94%] min-h-[220vh] md:min-h-screen
      rounded-[44px] md:my-[64px] relative [overflow:clip] scroll-mt-20 md:scroll-mt-24"
    >
      {/* Mobile-only sticky — resets to static on desktop via md:static */}
      <style>{`
        @media (max-width: 767px) {
          .card-stack-item {
            position: sticky;
            transition: top 0.3s ease-in-out;
          }
          /* Entire Header stays sticky at the top so description stays on screen */
          .section3-header {
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
        <div className="section3-header w-full flex flex-col items-center">
          {/* Badge & Title (Headers) */}
          <div ref={titleRef} className="w-full flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-yellow)] font-semibold text-sm md:text-base tracking-wide mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-yellow)]"></span>
              Our Features
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-semibold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
              Everything You Need To{" "}
              <span className="text-[var(--color-yellow)]">
                Build, Share &amp; Grow
              </span>{" "}
              Your Professional Identity.
            </h1>
          </div>

          {/* Description (Body Copy) - cards will slide over this */}
          <p className="text-white text-sm md:text-xl font-[600] font-plus-jakarta max-w-2xl md:max-w-5xl leading-relaxed mb-10">
            From smart digital business cards to team collaboration &amp;
            advanced analytics, DigiInfo helps professionals and businesses
            connect, manage, and grow through a single powerful platform.
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
                <FeatureCard
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

export default Section_3;
