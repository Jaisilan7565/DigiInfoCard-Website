import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardSlideshow from "./CardSlideshow";

const Section_1 = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownloadClick = (e) => {
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) {
      e.preventDefault();
      setShowToast(true);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div
      className="w-full md:w-[94%] min-h-screen bg-gradient-to-b from-[#F0F0F0] via-[#E0E0E0] via-[#C5C5C5] to-[#BBBBBB]
    rounded-[44px] md:my-[64px] relative overflow-hidden"
    >
      <picture>
        <source media="(max-width: 767px)" srcSet="/svg/section1-m-bg.svg" />
        <img
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          src="/svg/section1-bg.svg"
          alt="bg-img"
        />
      </picture>
      <div className="relative z-10 flex flex-col items-center px-6 py-12 md:py-24 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          Next Gen Networking
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-semibold text-[var(--color-body-copy-4)] leading-[1.2] tracking-tight mb-6 max-w-3xl">
          <span className="text-[var(--color-primary)]">
            Your Digital Identity
          </span>{" "}
          For Smarter Connections.
        </h1>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-xl font-[600] font-plus-jakarta max-w-2xl leading-relaxed mb-10">
          Create powerful digital business cards, showcase your products and
          services, manage professional connections, and collaborate with your
          team—all from one platform.
        </p>

        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center w-full max-w-md mx-auto mb-12 md:mb-16">
          <Link
            to="/card-playground"
            className="flex-1 md:flex-initial md:min-w-[200px] px-2 sm:px-6 md:px-8 py-3.5 md:py-4 bg-white text-[var(--color-body-copy-4)] font-semibold text-xs sm:text-sm md:text-base rounded-xl text-center hover:bg-neutral-50 hover:scale-[1.02] hover:cursor-pointer transition-all duration-300 active:scale-[0.98] border border-[#e8e8e8]/30 leading-tight whitespace-nowrap cursor-pointer"
          >
            Card Playground
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.ashaedgesoftwares.digiinfocard"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="flex-1 md:flex-initial md:min-w-[200px] px-2 sm:px-6 md:px-8 py-3.5 md:py-4 bg-[var(--color-primary)] text-white font-semibold text-xs sm:text-sm md:text-base rounded-xl text-center hover:bg-[var(--color-primary)]/95 hover:scale-[1.02] hover:cursor-pointer transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[var(--color-primary)]/10 leading-tight whitespace-nowrap cursor-pointer"
          >
            Download For Free
          </a>
        </div>

        {/* Mobile Hand Image with animated card slideshow */}
        <CardSlideshow />
      </div>

      {/* Toast Notification for iOS */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[var(--color-body-copy-4)] text-white px-6 py-3 rounded-full shadow-2xl z-50 text-sm font-semibold tracking-wide flex items-center gap-2 border border-white/10 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-[var(--color-yellow)] animate-pulse"></span>
          Coming Soon for iOS!!!
        </div>
      )}
    </div>
  );
};

export default Section_1;
