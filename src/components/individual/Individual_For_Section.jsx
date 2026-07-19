import React from "react";

const Individual_For_Section = () => {
  return (
    <section className="w-full max-w-[1440px] px-6 md:px-14 py-12 md:py-24 bg-white flex flex-col items-center gap-6 md:gap-16 font-plus-jakarta mx-auto">
      {/* Header Block */}
      <div className="w-full flex flex-col items-center text-center max-w-3xl relative z-10">
        {/* Badge */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
          Who is it For?
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl md:leading-[1.25] font-bold text-[var(--color-body-copy-4)] tracking-tight mb-6">
          Built For{" "}
          <span className="text-[var(--color-primary)]">
            Individual Professionals
          </span>{" "}
          Across Every Career Path.
        </h2>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-lg font-[600] leading-relaxed max-w-3xl">
          Designed for individuals who value meaningful connections, DigInfo
          empowers Individual Professionals to build their personal brand, share
          their digital identity instantly, and turn everyday interactions into
          lasting opportunities.
        </p>
      </div>

      {/* Image Block */}
      <div className="w-full flex justify-center items-center relative md:-top-20">
        {/* Desktop Image */}
        <img
          src="/images/individual/individual-for-image.png"
          alt="Built for Individual Professionals"
          className="hidden md:block w-full h-auto object-contain select-none pointer-events-none"
        />
        {/* Mobile Image */}
        <img
          src="/images/section-5.png"
          alt="Built for Individual Professionals"
          className="block md:hidden w-full max-w-[400px] h-auto object-contain select-none pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Individual_For_Section;
