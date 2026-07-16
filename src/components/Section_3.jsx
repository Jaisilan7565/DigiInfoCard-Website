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
/* Navbar height in px */
const NAVBAR_HEIGHT = 65;

const Section_3 = () => {
  const headerRef = useRef(null);
  /*
   * baseTop = navbar height + header block height
   * Cards 4, 3, 2 stack just below the header.
   * Card 1 (last DOM position) uses NAVBAR_HEIGHT so it slides all the way
   * up over the header and hides it.
   */
  const [baseTop, setBaseTop] = useState(NAVBAR_HEIGHT);

  useEffect(() => {
    const measure = () => {
      if (window.innerWidth < 768 && headerRef.current) {
        const h = headerRef.current.getBoundingClientRect().height;
        setBaseTop(NAVBAR_HEIGHT + h);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /*
   * Reverse the render order so card 1 is LAST in the DOM.
   * DOM position determines WHEN each card sticks (lower DOM = earlier sticky).
   * Reversed order means card 4 sticks first, card 1 sticks last.
   *
   * top  values: cards 4, 3, 2 stack at baseTop area (below header).
   *              card 1 (DOM last) sticks at NAVBAR_HEIGHT → slides over header.
   *
   * z-index: increases with DOM index so later cards appear on top.
   *          card 1 (domIdx=3) gets z-index 5 — highest — covers everything.
   */
  const lastDomIdx = features.length - 1;

  return (
    <div
      /* overflow:clip clips border-radius WITHOUT breaking position:sticky
         (overflow:hidden would block sticky) */
      className="w-full md:w-[94%] min-h-[220vh] md:min-h-screen
      rounded-[44px] md:my-[64px] relative [overflow:clip]"
    >
      {/* Mobile-only sticky — resets to static on desktop via md:static */}
      <style>{`
        @media (max-width: 767px) {
          .card-stack-item { position: sticky; }
          /* Header stays put; cards (z-index 2-5) slide over it */
          .section3-header { position: sticky; top: ${NAVBAR_HEIGHT}px; z-index: 1; }
        }
      `}</style>

      {/* Background SVG and Gradient - sticky on mobile, absolute on desktop */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="sticky md:absolute top-0 w-full h-screen md:h-full bg-gradient-to-b from-[var(--color-primary)] md:via-0% via-[var(--color-primary)]/80 to-[var(--color-sections-light-blue)]">
          <picture className="block w-full">
            <source
              media="(max-width: 767px)"
              srcSet="/svg/section3-m-bg.svg"
            />
            <img
              className="w-full pointer-events-none"
              src="/svg/section3-bg.svg"
              alt=""
            />
          </picture>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-24 text-center max-w-6xl mx-auto font-plus-jakarta">
        {/* ── Header block ──
            Mobile: sticky at NAVBAR_HEIGHT (stays put), z-index:1 so cards
                    can slide over it.
            Desktop: normal flow (section3-header class has no effect ≥768px) */}
        <div
          ref={headerRef}
          className="section3-header w-full flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-yellow)] font-semibold text-sm md:text-base tracking-wide mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-yellow)]"></span>
            Our Features
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-semibold text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
            Everything You Need To <br className="md:hidden" />
            <span className="text-[var(--color-yellow)]">
              Build, Share &amp; Grow
            </span>{" "}
            Your <br className="md:hidden" /> Professional Identity.
          </h1>

          {/* Description */}
          <p className="text-white text-sm md:text-xl font-[600] font-plus-jakarta max-w-2xl md:max-w-5xl leading-relaxed mb-10">
            From smart digital business cards to team collaboration &amp;
            advanced analytics, Diglnfo helps professionals and businesses
            connect, manage, and grow through a single powerful platform.
          </p>
        </div>

        {/* ── Feature Cards ──
            Mobile: reversed DOM order → card4 sticks first, card1 sticks last.
                    card1 (domIdx=3, z-index=5) slides up to NAVBAR_HEIGHT,
                    passing over the header (z-index=1) and hiding it.
            Desktop: original visual order via flex-col-reverse, 2×2 grid */}
        <div className="w-full md:w-fit flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 text-left">
          {features.map((feature, domIdx) => {
            const isLast = domIdx === lastDomIdx; // card1 in reversed = last
            const stickyTop = isLast
              ? NAVBAR_HEIGHT // card1 slides over & hides the header
              : baseTop + domIdx * PEEK; // cards 4,3,2 stack just below header
            const zIndex = domIdx + 2; // 2, 3, 4, 5

            return (
              <div
                key={feature.header}
                className="card-stack-item md:static"
                style={{ top: `${stickyTop}px`, zIndex }}
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
