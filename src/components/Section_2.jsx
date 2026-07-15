import React from "react";

const Section_2 = () => {
  const brandLogos = [
    "/images/brands/brand-1.png",
    "/images/brands/brand-2.png",
    "/images/brands/brand-3.png",
    "/images/brands/brand-4.png",
    "/images/brands/brand-5.png",
    "/images/brands/brand-6.png",
  ];

  return (
    <section className="w-full md:w-[94%] bg-white py-16 md:py-24 flex flex-col items-center relative overflow-hidden">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}</style>

      {/* Title / Description */}
      <h2 className="text-center sm:text-xs md:text-[23px] font-[500] text-[var(--color-body-copy-3)] font-plus-jakarta md:max-w-none max-w-sm leading-[1.4] tracking-tight px-6 mb-12 md:mb-16 md:whitespace-nowrap">
        2.5 million professionals across 90% of
        <br className="md:hidden" /> Fortune 500 trust Diginfo Card.
      </h2>

      {/* Marquee Wrapper Container */}
      <div className="w-full flex flex-col gap-4 md:gap-8 relative">
        {/* Soft edge masking gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Row 1: Leftward Marquee */}
        <div className="w-full overflow-hidden flex flex-row whitespace-nowrap">
          <div className="flex flex-row items-center animate-marquee-left flex-shrink-0">
            {brandLogos.map((src, idx) => (
              <div
                key={`r1-a-${idx}`}
                className="w-[120px] md:w-[220px] mr-6 md:mr-20 flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Brand logo ${idx + 1}`}
                  className="max-w-full max-h-[30px] md:max-h-[55px] object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center animate-marquee-left flex-shrink-0">
            {brandLogos.map((src, idx) => (
              <div
                key={`r1-b-${idx}`}
                className="w-[120px] md:w-[220px] mr-6 md:mr-20 flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Brand logo ${idx + 1}`}
                  className="max-w-full max-h-[30px] md:max-h-[55px] object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="w-full overflow-hidden flex flex-row whitespace-nowrap">
          <div className="flex flex-row items-center animate-marquee-right flex-shrink-0">
            {brandLogos.map((src, idx) => (
              <div
                key={`r2-a-${idx}`}
                className="w-[120px] md:w-[220px] mr-6 md:mr-20 flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Brand logo reversed ${idx + 1}`}
                  className="max-w-full max-h-[30px] md:max-h-[55px] object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center animate-marquee-right flex-shrink-0">
            {brandLogos.map((src, idx) => (
              <div
                key={`r2-b-${idx}`}
                className="w-[120px] md:w-[220px] mr-6 md:mr-20 flex-shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Brand logo reversed ${idx + 1}`}
                  className="max-w-full max-h-[30px] md:max-h-[55px] object-contain select-none pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
