import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardSlideshow = () => {
  // Generate the card paths for card-1.png to card-10.png (only the base 10 cards, no duplication)
  const cards = Array.from(
    { length: 10 },
    (_, i) => `/images/cards/card-${i + 1}.png`,
  );

  const bgCardsRefs = useRef([]);
  const fgCardsRefs = useRef([]);
  const slideIndexRef = useRef(0);
  const offsetRef = useRef(0);

  // Layout values derived from Figma dimensions
  const cardWidth = 19.8; // card width as a percentage of parent width
  const marginWidth = 3.5; // margin width as a percentage of parent width
  const step = cardWidth + marginWidth; // 23.3%

  const updatePositions = (offset) => {
    // Update background cards
    bgCardsRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;
      const rawX = i * step + offset;
      // Wraps elements seamlessly within the visible window (from -3 slots to 7 slots)
      const wrappedX = gsap.utils.wrap(-3 * step, 7 * step, rawX);
      const xPercent = ((wrappedX - i * step) / cardWidth) * 100;
      gsap.set(cardEl, { xPercent });
    });

    // Update foreground cards if they exist in DOM
    fgCardsRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;
      const stepFg = (step / cardWidth) * 100;
      const rawX = i * stepFg + (offset / cardWidth) * 100;
      const wrappedX = gsap.utils.wrap(-3 * stepFg, 7 * stepFg, rawX);
      const xPercent = wrappedX - i * stepFg;
      gsap.set(cardEl, { xPercent });
    });
  };

  useEffect(() => {
    // Initialize positions
    updatePositions(0);

    let delayCall;

    const slideNext = () => {
      // Increment slide index using a stable integer ref (no float drift)
      slideIndexRef.current += 1;
      const targetOffset = -slideIndexRef.current * step;

      const animObj = { val: offsetRef.current };
      gsap.to(animObj, {
        val: targetOffset,
        duration: 0.8,
        ease: "power2.out",
        onUpdate: () => {
          offsetRef.current = animObj.val;
          updatePositions(animObj.val);
        },
        onComplete: () => {
          // If we transitioned past the 10th card, wrap index and offset back to 0 seamlessly
          if (slideIndexRef.current >= 10) {
            slideIndexRef.current = 0;
            offsetRef.current = 0;
            updatePositions(0);
          }
          // Schedule the next transition with a 1-second pause (1.8s total interval including 0.8s transition)
          delayCall = gsap.delayedCall(1.0, slideNext);
        },
      });
    };

    // Schedule the first slide transition
    delayCall = gsap.delayedCall(1.0, slideNext);

    return () => {
      if (delayCall) delayCall.kill();
      gsap.killTweensOf(offsetRef);
    };
  }, []);

  return (
    <div className="w-full max-w-[640px] px-4 md:px-8 mx-auto scale-175 mt-8 md:mt-16 overflow-visible pointer-events-none">
      {/* Background Cards Layer (z-10) */}
      <div
        className="absolute z-10 flex flex-row"
        style={{
          left: "38.13%",
          top: "19.70%",
          height: "60.00%",
          width: "100%",
        }}
      >
        {cards.map((src, idx) => (
          <div
            key={`bg-${idx}`}
            ref={(el) => (bgCardsRefs.current[idx] = el)}
            className="rounded-[6px] md:rounded-[10px] overflow-hidden"
            style={{
              width: `${cardWidth}%`,
              height: "100%",
              marginRight: `${marginWidth}%`,
              flexShrink: 0,
            }}
          >
            <img
              src={src}
              alt={`Card BG ${idx}`}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        ))}
      </div>

      {/* Mobile Hand Frame (z-20) */}
      <img
        src="/images/section1-hand.png"
        alt="Mobile Hand"
        className="w-full h-auto pointer-events-none select-none relative z-20 scale-108"
      />
    </div>
  );
};

export default CardSlideshow;
