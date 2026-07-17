import React, { useRef, useEffect, useState } from "react";

const Section_8 = () => {
  const desktopScrollRef = useRef(null);
  const mobileRow1Ref = useRef(null);
  const mobileRow2Ref = useRef(null);
  const autoplayTimerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      avatar: "/images/ramesh.png",
      name: "Ramesh Joshi",
      role: "School Administrator",
      rating: 4.5,
      text: `"The platform has significantly reduced administrative work while improving communication between teachers and parents. Everything is now organized in one place."`,
    },
    {
      avatar: "/images/anita.png",
      name: "Anita Kapoor",
      role: "Elementary School Teacher",
      rating: 4.5,
      text: "The interactive tools have made lesson planning more engaging and saved me hours every week. My students are more motivated than ever.",
    },
    {
      avatar: "/images/david.png",
      name: "David Lee",
      role: "High School Counselor",
      rating: 4.5,
      text: "Managing student records and appointments has never been easier. The platform's intuitive design helps me focus more on counseling and less on paperwork.",
    },
    {
      avatar: "/images/sneha.png",
      name: "Sneha Rao",
      role: "Freelance Designer",
      rating: 4.5,
      text: `"Creating digital business cards for my clients is incredibly fast now. The branding tools let me showcase my portfolio links beautifully."`,
    },
    {
      avatar: "/images/karan.png",
      name: "Karan Verma",
      role: "Startup Founder",
      rating: 4.5,
      text: `"DigiInfo has completely changed how our sales team exchanges contact info at events. Highly recommended for any growing business!"`,
    },
    {
      avatar: "/images/vikram.png",
      name: "Vikram Malhotra",
      role: "Real Estate Consultant",
      rating: 4.5,
      text: `"My clients love the tap-to-share functionality. Being able to update my card details dynamically without reprinting has saved me thousands."`,
    },
  ];

  // Check mobile state dynamically
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Split testimonials for mobile rows
  const row1Original = testimonials.slice(0, 3);
  const row2Original = testimonials.slice(3, 6);

  const displayTestimonialsRow1 = [
    ...row1Original,
    ...row1Original,
    ...row1Original,
  ];
  const displayTestimonialsRow2 = [
    ...row2Original,
    ...row2Original,
    ...row2Original,
  ];

  // For desktop
  const displayTestimonialsDesktop = [
    ...testimonials.slice(3, 6),
    ...testimonials,
    ...testimonials.slice(0, 3),
  ];

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      if (isMobile) {
        // Mobile Counter-Scrolling: Row 1 moves right, Row 2 moves left
        if (mobileRow1Ref.current) {
          const container = mobileRow1Ref.current;
          const card = container.querySelector(".testimonial-card");
          if (card) {
            const gap = 12; // gap-3 is 12px
            const cardWidth = card.getBoundingClientRect().width + gap;
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
        if (mobileRow2Ref.current) {
          const container = mobileRow2Ref.current;
          const card = container.querySelector(".testimonial-card");
          if (card) {
            const gap = 12; // gap-3 is 12px
            const cardWidth = card.getBoundingClientRect().width + gap;
            container.scrollBy({ left: -cardWidth, behavior: "smooth" });
          }
        }
      } else {
        // Desktop standard autoplay rightwards
        if (desktopScrollRef.current) {
          const container = desktopScrollRef.current;
          const card = container.querySelector(".testimonial-card");
          if (card) {
            const gap = 32; // gap-8
            const cardWidth = card.getBoundingClientRect().width + gap;
            container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }
        }
      }
    }, 5000); // 5 seconds hold
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  // Manage Autoplay lifetime
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [isMobile]);

  // Set up scroll wrapping on Desktop
  useEffect(() => {
    const container = desktopScrollRef.current;
    if (!container || isMobile) return;

    const initScroll = () => {
      const card = container.querySelector(".testimonial-card");
      if (card) {
        const gap = 32;
        const cardWidth = card.getBoundingClientRect().width + gap;
        if (cardWidth > 32) {
          container.scrollLeft = 3 * cardWidth;
        } else {
          requestAnimationFrame(initScroll);
        }
      } else {
        requestAnimationFrame(initScroll);
      }
    };

    const initTimer = setTimeout(initScroll, 50);

    const onScroll = () => {
      const card = container.querySelector(".testimonial-card");
      if (!card) return;

      const gap = 32;
      const cardWidth = card.getBoundingClientRect().width + gap;
      if (cardWidth <= 32) return;

      const oneSetWidth = 6 * cardWidth;

      if (container.scrollLeft >= 9 * cardWidth - 15) {
        container.scrollLeft = container.scrollLeft - oneSetWidth;
      } else if (container.scrollLeft <= 0.5 * cardWidth) {
        container.scrollLeft = container.scrollLeft + oneSetWidth;
      }
    };

    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", initScroll);

    return () => {
      clearTimeout(initTimer);
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", initScroll);
    };
  }, [isMobile]);

  // Set up scroll wrapping on Mobile Row 1 & 2
  useEffect(() => {
    if (!isMobile) return;

    const setupRow = (container) => {
      if (!container) return;

      const initScroll = () => {
        const card = container.querySelector(".testimonial-card");
        if (card) {
          const gap = 12; // gap-3 is 12px
          const cardWidth = card.getBoundingClientRect().width + gap;
          if (cardWidth > 12) {
            container.scrollLeft = 3 * cardWidth;
          } else {
            requestAnimationFrame(initScroll);
          }
        } else {
          requestAnimationFrame(initScroll);
        }
      };

      const initTimer = setTimeout(initScroll, 50);

      const onScroll = () => {
        const card = container.querySelector(".testimonial-card");
        if (!card) return;

        const gap = 12; // gap-3 is 12px
        const cardWidth = card.getBoundingClientRect().width + gap;
        if (cardWidth <= 12) return;

        const setWidth = 3 * cardWidth;

        if (container.scrollLeft >= 6 * cardWidth - 10) {
          container.scrollLeft = container.scrollLeft - setWidth;
        } else if (container.scrollLeft <= 0.5 * cardWidth) {
          container.scrollLeft = container.scrollLeft + setWidth;
        }
      };

      container.addEventListener("scroll", onScroll);
      window.addEventListener("resize", initScroll);

      return () => {
        clearTimeout(initTimer);
        container.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", initScroll);
      };
    };

    const cleanup1 = setupRow(mobileRow1Ref.current);
    const cleanup2 = setupRow(mobileRow2Ref.current);

    return () => {
      if (cleanup1) cleanup1();
      if (cleanup2) cleanup2();
    };
  }, [isMobile]);

  const handleScroll = (direction) => {
    stopAutoplay();
    if (!isMobile && desktopScrollRef.current) {
      const container = desktopScrollRef.current;
      const card = container.querySelector(".testimonial-card");
      if (card) {
        const gap = 32;
        const cardWidth = card.getBoundingClientRect().width + gap;
        const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
    startAutoplay();
  };

  const handleInteractionStart = () => {
    stopAutoplay();
  };

  const handleInteractionEnd = () => {
    startAutoplay();
  };

  const renderCard = (item, idx, isDesktop = false) => (
    <div
      key={idx}
      className={`testimonial-card flex-shrink-0 flex flex-col bg-white text-[var(--color-body-copy-4)] rounded-xl shadow-lg border border-neutral-100/80 transition-transform duration-300 ${
        isDesktop
          ? "w-[calc((100%-4rem)/3)] min-w-[calc((100%-4rem)/3)] max-w-[calc((100%-4rem)/3)] p-8 hover:scale-[1.01]"
          : "w-[88%] min-w-[88%] max-w-[88%] snap-center p-6"
      }`}
    >
      <div>
        {/* Profile Head */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={item.avatar}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover border border-neutral-100"
          />
          <div className="text-left">
            <h4 className="font-bold text-base text-[var(--color-body-copy-4)] leading-tight">
              {item.name}
            </h4>
            <p className="text-xs text-[var(--color-body-text-2)] font-medium mt-0.5">
              {item.role}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-sm font-bold text-[var(--color-body-text-2)] mr-1">
            {item.rating}
          </span>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < 4
                  ? "text-[var(--color-yellow-1)] fill-[var(--color-yellow-1)]"
                  : "text-neutral-200 fill-neutral-200"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Testimonial Quote */}
      <p className="text-sm md:mr-10 text-[var(--color-body-text-2)] text-left font-medium">
        {item.text}
      </p>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-[var(--color-light-gray)] from-50% to-white to-50% py-8 md:py-32">
      <section className="w-full md:w-[94%] rounded-[44px] px-0 md:px-16 py-2 md:py-16 text-white relative overflow-hidden font-plus-jakarta mx-auto shadow-xl shadow-[var(--color-primary)]/10 z-10">
        {/* Background SVG and Gradient */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="sticky md:absolute top-0 w-full h-full bg-gradient-to-b from-[var(--color-primary)] md:via-30% via-[var(--color-primary)]/80 to-[var(--color-sections-light-blue)]">
            <picture className="block w-full">
              <source
                media="(max-width: 767px)"
                srcSet="/svg/section8-m-bg.svg"
              />
              <img
                className="w-full pointer-events-none"
                src="/svg/section8-bg.svg"
                alt=""
              />
            </picture>
          </div>
        </div>

        {/* Header Container */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-6">
          {/* Left Side Header */}
          <div className="w-full md:max-w-4xl text-center md:text-left px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-[var(--color-yellow)] font-semibold text-base tracking-wider mt-10 md:mt-0 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-yellow)]"></span>
              Testimonials
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-medium leading-[1.2] tracking-tight mb-4">
              Loved By{" "}
              <span className="text-[var(--color-yellow)]">
                Modern Professionals
              </span>{" "}
              <br className="hidden md:block" />
              From Different Industry.
            </h2>

            {/* Subheading */}
            <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed">
              Whether you're an individual professional or a growing
              organization, DigInfo offers flexible plans designed to help you
              connect, collaborate & grow.
            </p>
          </div>

          {/* Slider Controls (Desktop Only) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full bg-[var(--color-yellow)] hover:bg-[var(--color-yellow)]/90 text-[var(--color-body-copy-4)] flex items-center justify-center font-bold active:scale-95 transition-all shadow-md"
              aria-label="Previous testimonials"
            >
              <svg
                className="w-5 h-5 stroke-[3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full bg-[var(--color-yellow)] hover:bg-[var(--color-yellow)]/90 text-[var(--color-body-copy-4)] flex items-center justify-center font-bold active:scale-95 transition-all shadow-md"
              aria-label="Next testimonials"
            >
              <svg
                className="w-5 h-5 stroke-[3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards List Containers */}
        {isMobile ? (
          <div className="flex flex-col gap-6 w-full">
            {/* Mobile Row 1 */}
            <div
              ref={mobileRow1Ref}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              className="relative z-10 flex flex-row gap-3 justify-start items-stretch overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory px-[6%] w-full"
            >
              {displayTestimonialsRow1.map((item, idx) =>
                renderCard(item, idx, false),
              )}
            </div>

            {/* Mobile Row 2 */}
            <div
              ref={mobileRow2Ref}
              onMouseDown={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchStart={handleInteractionStart}
              onTouchEnd={handleInteractionEnd}
              className="relative z-10 flex flex-row gap-3 justify-start items-stretch overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory px-[6%] w-full"
            >
              {displayTestimonialsRow2.map((item, idx) =>
                renderCard(item, idx, false),
              )}
            </div>
          </div>
        ) : (
          /* Desktop Row */
          <div
            ref={desktopScrollRef}
            onMouseDown={handleInteractionStart}
            onMouseUp={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
            className="relative z-10 flex flex-row gap-8 justify-start items-stretch overflow-x-auto no-scrollbar pb-2 w-full"
          >
            {displayTestimonialsDesktop.map((item, idx) =>
              renderCard(item, idx, true),
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Section_8;
