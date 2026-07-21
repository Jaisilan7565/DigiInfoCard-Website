import React from "react";
import { Link } from "react-router-dom";

const BlogGrid = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto py-16 text-center text-[var(--color-body-copy-3)] font-semibold">
        No articles found matching your criteria.
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 font-plus-jakarta mb-16 md:mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {posts.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Image Container */}
            <div className="w-full overflow-hidden aspect-[16/10] relative bg-neutral-100">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 md:p-7 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[var(--color-body-copy-4)] group-hover:text-[var(--color-primary)] transition-colors leading-[1.35] mb-4">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm md:text-base text-[var(--color-body-copy-3)] font-semibold leading-relaxed mb-6 flex-grow">
                {blog.excerpt}
              </p>

              {/* Date */}
              <p className="text-xs md:text-sm text-[var(--color-body-copy-3)] font-medium mt-auto">
                {blog.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
