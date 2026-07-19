import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Synchronize active navigation item with the current route pathname and hash
  useEffect(() => {
    const hash = location.hash;
    const pathname = location.pathname;

    if (pathname === "/about-us") {
      setActiveItem("About Us");
    } else {
      if (hash === "#features") {
        setActiveItem("Features");
      } else if (hash === "#pricing") {
        setActiveItem("Pricing");
      } else if (pathname === "/") {
        setActiveItem("Home");
      } else {
        setActiveItem("");
      }
    }
  }, [location]);

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

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isAutoScrolling = useRef(false);
  const autoScrollTimeout = useRef(null);

  // Keep track of programmatic auto-scrolls triggered by navigation clicks/hash changes
  useEffect(() => {
    isAutoScrolling.current = true;
    setIsVisible(true);
    setLastScrollY(window.scrollY);

    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
    }

    autoScrollTimeout.current = setTimeout(() => {
      isAutoScrolling.current = false;
    }, 2000); // 2s covers standard smooth scroll animations

    return () => {
      if (autoScrollTimeout.current) {
        clearTimeout(autoScrollTimeout.current);
      }
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen || isAutoScrolling.current) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Don't hide the navbar at the very top of the page
      if (currentScrollY < 150) {
        setIsVisible(true);
      } else {
        // Scroll delta threshold of 10px to avoid jitter
        const diff = Math.abs(currentScrollY - lastScrollY);
        if (diff > 10) {
          if (currentScrollY > lastScrollY) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    const updateNavbarOffset = () => {
      const headerEl = document.querySelector("header");
      const height = headerEl ? headerEl.getBoundingClientRect().height : 65;
      if (isVisible) {
        document.documentElement.style.setProperty("--navbar-offset", `${height}px`);
      } else {
        document.documentElement.style.setProperty("--navbar-offset", "15px");
      }
    };

    updateNavbarOffset();
    window.addEventListener("resize", updateNavbarOffset);
    return () => window.removeEventListener("resize", updateNavbarOffset);
  }, [isVisible]);


  const isFeatureOrPricingPage = location.pathname === "/individual" || location.pathname === "/corporate";
  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Features", href: isFeatureOrPricingPage ? `${location.pathname}#features` : "/#features" },
    { name: "Pricing", href: isFeatureOrPricingPage ? `${location.pathname}#pricing` : "/#pricing" },
  ];

  return (
    <header
      className={`w-full bg-[var(--color-primary)] font-plus-jakarta sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-3 md:py-5 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/images/digi-logo.png"
            alt="Digiinfo Card Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback to text-based logo if image fails to load
              e.target.style.display = "none";
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white text-base text-[20px] font-medium relative py-1 transition-all duration-300 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm
                  ${
                    isActive
                      ? "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[1.5px] after:bg-white after:rounded-full after:transition-all after:duration-300"
                      : "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[1.5px] after:bg-white/50 after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                  }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Call to Action Button */}
        <div className="hidden md:block">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--color-body-copy-4)] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-white/95 hover:scale-[1.03] hover:shadow-[0_8px_20px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.98]"
          >
            Contact Us
          </Link>
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
        className={`absolute top-full left-0 right-0 z-40 bg-[var(--color-primary)] transition-all duration-500 ease-in-out md:hidden flex flex-col justify-between px-6 py-10 min-h-[calc(100vh-65px)]
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <nav className="flex flex-col gap-6 text-center mt-6">
          {navItems.map((item, idx) => {
            const isActive = activeItem === item.name;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${idx * 75}ms` : "0ms",
                }}
                className={`text-2xl font-semibold py-2 transition-all duration-300 focus:outline-none
                  ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
                  ${isActive ? "text-white scale-105" : "text-white/70 hover:text-white"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div
          className={`flex flex-col items-center gap-4 transition-all duration-500 delay-300 w-full px-4 mb-10
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-sm text-center py-4 bg-white text-[var(--color-body-copy-4)] font-bold text-lg rounded-[16px] shadow-lg transition-transform active:scale-[0.98] focus:outline-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
