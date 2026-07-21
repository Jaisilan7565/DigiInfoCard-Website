import React, { useRef, useEffect, useState } from "react";

const Section_10 = () => {
  const mobileScrollRef = useRef(null);
  const autoplayTimerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const blogsData = [
    {
      image: "/images/blog-1.png",
      date: "July 15, 2026",
      title: "The 7 Best Digital Business Cards for Event Organizers in 2026",
      excerpt:
        "We compare top digital business cards for event organizers. Digi Info leads with team management, CRM sync & offline mode for seamless event networking.",
    },
    {
      image: "/images/blog-2.png",
      date: "July 12, 2026",
      title: "The 7 Best Digital Business Cards for Event Organizers in 2026",
      excerpt:
        "We compare top digital business cards for event organizers. Digi Info leads with team management, CRM sync & offline mode for seamless event networking.",
    },
    {
      image: "/images/blog-3.png",
      date: "July 08, 2026",
      title: "The 7 Best Digital Business Cards for Event Organizers in 2026",
      excerpt:
        "We compare top digital business cards for event organizers. Digi Info leads with team management, CRM sync & offline mode for seamless event networking.",
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

  // Cloned items for infinite scroll on mobile
  const displayBlogsMobile = [...blogsData, ...blogsData, ...blogsData];

  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimerRef.current = setInterval(() => {
      if (isMobile && mobileScrollRef.current) {
        const container = mobileScrollRef.current;
        const card = container.querySelector(".blog-card");
        if (card) {
          const gap = 12; // gap-3 is 12px
          const cardWidth = card.getBoundingClientRect().width + gap;
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
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
    if (isMobile) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isMobile]);

  // Set up scroll wrapping on Mobile
  useEffect(() => {
    if (!isMobile) return;

    const container = mobileScrollRef.current;
    if (!container) return;

    const initScroll = () => {
      const card = container.querySelector(".blog-card");
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
      const card = container.querySelector(".blog-card");
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
  }, [isMobile]);

  const handleInteractionStart = () => {
    stopAutoplay();
  };

  const handleInteractionEnd = () => {
    if (isMobile) {
      startAutoplay();
    }
  };

  const renderCard = (blog, idx, isDesktop = false) => (
    <article
      key={idx}
      className={`bg-white rounded-3xl overflow-hidden border border-neutral-100/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group blog-card ${
        isDesktop ? "w-full" : "w-[88%] min-w-[88%] max-w-[88%] snap-center"
      }`}
    >
      {/* Image Container */}
      <div className="w-full overflow-hidden aspect-[16/10] relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full rounded-t-3xl object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow text-left">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[var(--color-body-copy-4)] group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-2 mb-3">
          <a href="#">{blog.title}</a>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[var(--color-body-text-2)] font-semibold leading-relaxed line-clamp-4 mb-6 flex-grow">
          {blog.excerpt}
        </p>

        {/* Date */}
        <div className="flex items-center gap-4 text-xs font-semibold text-[var(--color-body-copy-2)] mb-3">
          <p className="text-[var(--color-body-copy-3)]">{blog.date}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="blogs"
      className="w-full bg-[var(--color-light-gray)] py-16 md:py-24 px-0 md:px-6 flex flex-col items-center font-plus-jakarta z-10 relative"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start">
        {/* Badge */}
        <div className="flex items-center justify-center md:justify-start gap-2.5 text-[var(--color-primary)] font-bold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          Our Blogs
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-body-copy-4)] leading-[1.2] tracking-tight mb-4 text-center md:text-start">
          Discover The <br />
          <span className="text-[var(--color-primary)]">
            Future Of Networking.
          </span>
        </h2>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-base font-semibold max-w-xl text-center md:text-start leading-relaxed mb-16">
          Explore expert insights, networking strategies, industry trends, and
          practical tips to help you build stronger connections and grow your
          professional presence.
        </p>
      </div>

      {/* Blog Cards Grid / Slider */}
      {isMobile ? (
        <div
          ref={mobileScrollRef}
          onMouseDown={handleInteractionStart}
          onMouseUp={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
          className="relative z-10 flex flex-row gap-3 justify-start items-stretch overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory w-full mb-2"
        >
          {displayBlogsMobile.map((blog, idx) => renderCard(blog, idx, false))}
        </div>
      ) : (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-8 mb-8">
          {blogsData.map((blog, idx) => renderCard(blog, idx, true))}
        </div>
      )}

      {/* View All Button */}
      <div className="text-center items-center justify-center">
        <a
          href="/blog"
          className="inline-flex items-center justify-center px-10 py-4 text-sm md:text-base font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default Section_10;
