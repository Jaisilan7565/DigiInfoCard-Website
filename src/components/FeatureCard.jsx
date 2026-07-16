import React from "react";

/**
 * FeatureCard
 * @param {string} image   - path to feature image (shown at top of card)
 * @param {string} header  - bold card title
 * @param {string} description - supporting text
 */
const FeatureCard = ({ image, header, description }) => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Image */}
      <div className="w-full md:w-100 overflow-hidden relative">
        <img
          src={image}
          alt={header}
          className="w-full h-auto object-contain select-none pointer-events-none"
        />

        <div className="flex flex-col gap-1 absolute bottom-0 left-0 w-full">
          <div className="text-2xl text-center font-[600] text-[var(--color-body-copy-4)]">
            {header}
          </div>
          <p className="text-sm text-center px-4 pt-2 pb-5 font-[600] font-semibold text-[var(--color-body-copy-3)]">
            {description}
          </p>
        </div>

        {/* Text content */}
        {/* <div className="flex flex-col gap-3 px-6 py-6 md:px-8 md:py-8">
          <h3 className="text-white font-bold text-lg md:text-2xl leading-snug">
            {header}
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium">
            {description}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default FeatureCard;
