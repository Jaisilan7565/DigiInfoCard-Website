import React from "react";

const Section_5 = () => {
  return (
    <section className="w-full md:w-[94%] bg-white px-7 pb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden font-plus-jakarta">
      {/* Left Column: Text Content */}
      <div className="flex-1 md:flex-[1.3] text-left flex flex-col items-center md:items-start max-w-2xl z-10">
        {/* Badge */}
        <div className="flex items-center gap-2.5 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          Who Is It For?
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl text-center md:text-start font-semibold text-[var(--color-body-copy-4)] leading-[1.2] tracking-tight mb-6">
          <span className="text-[var(--color-primary)]">
            Empowering Professionals
          </span>{" "}
          Across Every Industry.
        </h2>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-center md:text-start text-sm md:text-lg font-[600] leading-relaxed mb-4 md:mx-0 w-full md:max-w-[350px]">
          Built for professionals, businesses, and teams who want to connect
          smarter, showcase their expertise, and manage relationships more
          effectively in the digital age.
        </p>
      </div>

      {/* Right Column: Concentric Circles Image */}
      <div className="flex-1 flex justify-center items-center relative w-full max-w-2xl md:top-10">
        <img
          src="/images/section-5.png"
          alt="Designed for Founders, Engineers, Business Owners, Contract Workers, Designers, and Startups"
          className="w-full h-auto object-contain scale-115 md:scale-100"
        />
      </div>
    </section>
  );
};

export default Section_5;
