import React, { useState } from "react";
import BlogHero from "../components/blog/BlogHero";
import BlogGrid from "../components/blog/BlogGrid";
import { allBlogs } from "../data/blogData";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Latest Blogs");

  const featuredPost = allBlogs[0];

  const getFilteredPosts = () => {
    if (activeCategory === "Oldest Blogs") {
      return [...allBlogs].reverse();
    }
    return allBlogs;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="w-full bg-[var(--color-light-gray)] min-h-screen py-12 md:py-20 font-plus-jakarta flex flex-col items-center">
      {/* Blog Hero Header */}
      <BlogHero
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Grid of Articles */}
      <BlogGrid posts={filteredPosts} />
    </div>
  );
};

export default Blog;
