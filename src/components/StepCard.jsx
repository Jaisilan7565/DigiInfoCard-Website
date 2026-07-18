import React from "react";

/**
 * FeatureCard
 * @param {string} image   - path to feature image (shown at top of card)
 * @param {string} header  - bold card title
 * @param {string} description - supporting text
 */
const StepCard = ({ image, header, description }) => {
  return (
    <div className="md:w-100 flex flex-col overflow-hidden bg-white rounded-2xl p-1">
      {/* Image */}
      <div className="md:w-100 overflow-hidden relative">
        <video
          src={image}
          className="w-full h-[280px] md:h-auto p-4 object-contain select-none pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex flex-col gap-1 bottom-0 left-0">
        <div className="text-xl md:text-2xl text-start px-4 font-[600] text-[var(--color-body-copy-4)]">
          {header}
        </div>
        <p className="text-xs md:text-base text-start px-3 pt-2 pb-5 font-[600] font-semibold text-[var(--color-body-copy-3)]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepCard;
