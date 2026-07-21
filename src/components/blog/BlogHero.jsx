import React from "react";

const categories = ["Latest Blogs", "Popular Blogs", "Oldest Blogs"];

const BlogHero = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="w-full flex flex-col items-center text-center font-plus-jakarta mb-12 md:mb-16">
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
        Our Blogs
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-6xl font-bold text-[var(--color-body-copy-4)] leading-[1.18] tracking-tight mb-6 max-w-4xl px-4">
        Discover The <br />
        <span className="text-[var(--color-primary)]">
          Future Of Networking
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--color-body-copy-3)] text-sm md:text-lg font-semibold max-w-2xl text-center leading-relaxed mb-10 px-6">
        Explore expert insights, networking strategies, industry trends, and
        practical tips to help you build stronger connections and grow your
        professional presence.
      </p>

      {/* Category Bar Centered & Single Line */}
      <div className="w-full max-w-4xl flex items-center justify-center gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 overflow-x-auto no-scrollbar flex-nowrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 sm:px-5 md:px-6 py-2 md:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap shrink-0 transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[var(--color-primary)] text-white border border-[var(--color-primary)] shadow-md shadow-[var(--color-primary)]/20"
                : "bg-white text-[var(--color-body-copy-4)] border border-[#7A7A7A] hover:bg-neutral-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogHero;
