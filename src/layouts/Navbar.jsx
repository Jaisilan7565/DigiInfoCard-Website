import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Prevent body scrolling when the mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close mobile menu if user resizes back to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="w-full bg-[var(--color-primary)] font-plus-jakarta sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/images/digi-logo.png"
            alt="Digiinfo Card Logo"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to text-based logo if image fails to load
              e.target.style.display = "none";
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                }}
                className={`text-white text-base text-[20px] font-medium relative py-1 transition-all duration-300 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm
                  ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1.5px] after:bg-white after:rounded-full after:transition-all after:duration-300"
                      : "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white/50 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--color-body-copy-4)] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-white/95 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.98]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 top-[80px] z-40 bg-[var(--color-primary)] transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between px-6 py-10
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-6 text-center mt-6">
          {navItems.map((item, idx) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                  setIsOpen(false);
                }}
                style={{
                  transitionDelay: isOpen ? `${idx * 75}ms` : "0ms",
                }}
                className={`text-2xl font-semibold py-2 transition-all duration-300 focus:outline-none
                  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                  ${isActive ? "text-white scale-105" : "text-white/70 hover:text-white"}`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-500 delay-300 w-full px-4 mb-10
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-sm text-center py-4 bg-white text-[var(--color-body-copy-4)] font-bold text-lg rounded-[16px] shadow-lg transition-transform active:scale-[0.98] focus:outline-none"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
