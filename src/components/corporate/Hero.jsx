import React from "react";

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] px-2 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16 bg-white relative font-plus-jakarta">
      {/* Left Column: Text and CTA */}
      <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start z-10">
        {/* Badge */}
        <div className="flex items-center gap-2.5 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          Corporate Teams & Organizers
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl md:leading-[1.15] font-bold text-[var(--color-body-copy-4)] tracking-tight mb-6">
          <span className="text-[var(--color-primary)] block md:inline">
            Empower Your Teams
          </span>{" "}
          <span>with Smarter Collaboration</span>
        </h1>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-lg font-[600] leading-relaxed mb-10 max-w-xl px-8 md:px-0">
          Create powerful digital business cards, showcase your products and
          services, manage professional connections, and collaborate with your
          team—all from one platform.
        </p>

        {/* Action Button */}
        <a
          href="#book-demo"
          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--color-primary)] text-white font-semibold text-base rounded-xl hover:bg-[var(--color-primary)]/95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/10"
        >
          Book a Demo
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* Right Column: Image */}
      <div className="flex-1 w-full max-w-[650px] flex justify-center md:justify-end z-10">
        <img
          src="/images/section-6-2.png"
          alt="Corporate Teams & Organizers Illustration"
          className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
    </section>
  );
};

export default Hero;
