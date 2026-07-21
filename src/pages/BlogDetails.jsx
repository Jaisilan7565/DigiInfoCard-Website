import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { allBlogs } from "../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();

  // Find index of current blog
  const currentIndex = allBlogs.findIndex((b) => b.id === Number(id));
  const validIndex = currentIndex !== -1 ? currentIndex : 0;
  const blog = allBlogs[validIndex];

  // Calculate previous and next blog items
  const prevBlog =
    allBlogs[validIndex > 0 ? validIndex - 1 : allBlogs.length - 1];
  const nextBlog =
    allBlogs[validIndex < allBlogs.length - 1 ? validIndex + 1 : 0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full bg-white min-h-screen py-10 md:py-16 font-plus-jakarta flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6">
        {/* Top Navigation Bar */}
        <div className="w-full flex items-center justify-between mb-6 md:mb-8 flex-nowrap gap-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blogs
          </Link>

          {/* Quick Prev / Next controls at top */}
          <div className="flex items-center gap-3">
            <Link
              to={`/blog/${prevBlog.id}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#7A7A7A] hover:bg-neutral-50 text-xs font-semibold text-[var(--color-body-copy-4)] transition-all"
              title="Previous Blog"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Prev
            </Link>

            <Link
              to={`/blog/${nextBlog.id}`}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#7A7A7A] hover:bg-neutral-50 text-xs font-semibold text-[var(--color-body-copy-4)] transition-all"
              title="Next Blog"
            >
              Next
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Top Banner Image */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl mb-8 md:mb-10 shadow-sm">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto max-h-[520px] object-cover"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--color-body-copy-4)] leading-[1.22] tracking-tight mb-6 text-left">
          {blog.title}
        </h1>

        {/* Author & Publish Date Header */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={blog.authorImage || "/images/ramesh.png"}
            alt={blog.author}
            className="w-12 h-12 rounded-full object-cover shadow-sm border border-neutral-200"
          />
          <div className="flex flex-col text-left">
            <span className="font-bold text-base md:text-lg text-[var(--color-body-copy-4)]">
              By {blog.author}
            </span>
            <span className="text-xs md:text-sm text-[var(--color-body-copy-2)] font-medium">
              Published on {blog.date}
            </span>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full border-b border-neutral-200 mb-10 md:mb-12"></div>

        {/* Content Sections */}
        <div className="w-full text-left space-y-8 md:space-y-10">
          {/* Brief */}
          {blog.content?.brief && (
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-body-copy-4)] mb-4">
                Brief
              </h2>
              <p className="text-sm md:text-base font-normal leading-relaxed md:leading-[1.8] text-neutral-600">
                {blog.content.brief}
              </p>
            </section>
          )}

          {/* Why It Matters */}
          {blog.content?.whyItMatters && (
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-body-copy-4)] mb-4">
                Why It Matters?
              </h2>
              <p className="text-sm md:text-base font-normal leading-relaxed md:leading-[1.8] text-neutral-600">
                {blog.content.whyItMatters}
              </p>
            </section>
          )}

          {/* Best Options */}
          {blog.content?.bestOptions && (
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-body-copy-4)] mb-4">
                Best Options.
              </h2>
              <p className="text-sm md:text-base font-normal leading-relaxed md:leading-[1.8] text-neutral-600">
                {blog.content.bestOptions}
              </p>
            </section>
          )}

          {/* Choose Your Fit */}
          {blog.content?.chooseYourFit && (
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-body-copy-4)] mb-4">
                Choose Your Fit.
              </h2>
              <p className="text-sm md:text-base font-normal leading-relaxed md:leading-[1.8] text-neutral-600">
                {blog.content.chooseYourFit}
              </p>
            </section>
          )}
        </div>

        {/* Bottom Navigation Controls - Single Line on Mobile */}
        <div className="w-full border-t border-neutral-200 mt-12 md:mt-16 pt-8 flex items-center justify-between gap-2 sm:gap-4 flex-nowrap">
          {/* Previous Blog Button */}
          <Link
            to={`/blog/${prevBlog.id}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#7A7A7A] hover:bg-neutral-50 text-[var(--color-body-copy-4)] font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300"
          >
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden xs:inline sm:inline">Previous</span>
            <span className="inline xs:hidden">Prev</span>
          </Link>

          {/* All Blogs Button */}
          <Link
            to="/blog"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-[var(--color-primary)] text-white font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300 shadow-md shadow-[var(--color-primary)]/20 text-center"
          >
            All Blogs
          </Link>

          {/* Next Blog Button */}
          <Link
            to={`/blog/${nextBlog.id}`}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-[#7A7A7A] hover:bg-neutral-50 text-[var(--color-body-copy-4)] font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-300"
          >
            <span>Next</span>
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
