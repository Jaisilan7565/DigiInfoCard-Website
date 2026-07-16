import React from "react";
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

const Section_3 = () => {
  return (
    <div
      className="w-full md:w-[94%] min-h-screen bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-sections-light-blue)]
    rounded-[44px] md:my-[64px] relative overflow-hidden"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/svg/section3-m-bg.svg" />
        <img
          className="absolute left-0 right-0 top-0 w-full"
          src="/svg/section3-bg.svg"
          alt="bg-img"
        />
      </picture>
      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-24 text-center max-w-6xl mx-auto font-plus-jakarta">
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
          From smart digital business cards to team collaboration &amp; advanced
          analytics, Diglnfo helps professionals and businesses connect, manage,
          and grow through a single powerful platform.
        </p>

        {/* Feature Cards — 1 col on mobile, 2x2 grid on desktop */}
        <div className="w-full md:w-fit grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
          {features.map((feature) => (
            <FeatureCard
              key={feature.header}
              image={feature.image}
              header={feature.header}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_3;
