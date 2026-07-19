import React from "react";

const Individual_Banner = () => {
  return (
    <section className="w-full max-w-[1440px] md:px-14 py-12 md:py-24 bg-white font-plus-jakarta">
      <div className="w-full bg-[var(--color-light-gray)] md:rounded-[48px] py-24 px-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 overflow-hidden">
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          {/* Badge */}
          <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs md:text-sm tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
            Why Individuals Choose Diginfo Card?
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl md:max-w-md md:leading-[1.15] font-bold text-[var(--color-body-copy-4)] tracking-tight mb-8">
            Built To Drive{" "}
            <span className="text-[var(--color-primary)] block md:inline">
              Individuals Growth.
            </span>
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col gap-6 text-[var(--color-body-copy-3)] text-sm md:text-base font-[600] leading-relaxed">
            <p>
              In today’s world Individual Professionals lose opportunities when
              contacts are misplaced, follow-ups are missed, networking
              interactions are forgotten & personal Identity remains
              inconsistent.
            </p>
            <p>
              DigInfo helps individuals create a powerful digital identity,
              capture every interaction, organize professional connections, and
              nurture relationships—ensuring that every conversation has the
              potential to become a future opportunity.
            </p>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full flex justify-center md:justify-end">
          <img
            src="/images/individual/individual-banner.png"
            alt="Why Choose Diginfo Card"
            className="w-full max-w-[450px] md:max-w-[500px] h-auto object-contain select-none pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
};

export default Individual_Banner;
