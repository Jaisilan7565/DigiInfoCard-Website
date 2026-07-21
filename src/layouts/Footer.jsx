import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [showToast, setShowToast] = React.useState(false);

  const isWhiteBgPage = location.pathname === "/about-us" || location.pathname === "/contact-us";

  const handleAppStoreClick = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const isFeatureOrPricingPage = location.pathname === "/individual" || location.pathname === "/corporate";
  
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: isFeatureOrPricingPage ? `${location.pathname}#features` : "/#features" },
    { label: "Pricing", href: isFeatureOrPricingPage ? `${location.pathname}#pricing` : "/#pricing" },
    { label: "Testimonials", href: isFeatureOrPricingPage ? `${location.pathname}#testimonials` : "/#testimonials" },
    { label: "FAQ", href: isFeatureOrPricingPage ? `${location.pathname}#faq` : "/#faq" },
    { label: "Blogs", href: "/blog" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: isFeatureOrPricingPage ? `${location.pathname}#privacy` : "/#privacy" },
    { label: "Terms & Conditions", href: isFeatureOrPricingPage ? `${location.pathname}#terms` : "/#terms" },
  ];

  return (
    <div className={`w-full ${isWhiteBgPage ? "bg-white" : "bg-[var(--color-light-gray)]"}`}>
      <footer
        id="contact"
        className="w-full font-plus-jakarta bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-sections-light-blue)] rounded-t-[44px] scroll-mt-20 md:scroll-mt-24"
      >
        {/* Main Footer Body */}
        <div className="w-full mx-auto px-5 md:px-14 pt-6 md:pt-14">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-4 md:mb-8">
            <img
              src="/images/digi-logo.png"
              alt="DigiInfo Card Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">
            {/* ── Left Column ── */}
            <div className="flex flex-col gap-6">
              {/* Tagline */}
              <p className="text-white/80 text-xs md:text-xl font-[600] leading-relaxed">
                When someone scans your card, they're not just getting <br />a
                number — they're getting a piece of who you are.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 md:gap-5">
                <a
                  href="#"
                  className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <img
                    src="/images/instagram.png"
                    alt="Instagram"
                    className="w-full h-full object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>

              {/* Download Our App */}
              <div className="flex flex-col gap-4">
                <p className="text-white font-semibold text-sm md:text-xl">
                  Download Our App
                </p>
                <div className="flex flex-row gap-3 flex-wrap">
                  {/* Google Play Badge */}
                  <a
                    href="https://play.google.com/store/apps/details?id=com.ashaedgesoftwares.digiinfocard"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                    className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 hover:scale-105 transition-all duration-300"
                  >
                    <img
                      src="/svg/Playstore.svg"
                      alt="Playstore"
                      className="h-9 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-none">
                      <span className="text-black text-xs font-semibold uppercase tracking-wider">
                        GET IT ON
                      </span>
                      <span className="text-black text-sm font-bold">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* App Store Badge */}
                  <button
                    onClick={handleAppStoreClick}
                    aria-label="Download on the App Store"
                    className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src="/svg/Apple.svg"
                      alt="App Store"
                      className="h-9 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-none">
                      <span className="text-black text-xs">
                        Download on the
                      </span>
                      <span className="text-black text-lg font-bold w-full text-center">
                        App Store
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* ── Right Column: Links ── */}
            <div className="w-full md:w-auto flex flex-row gap-0 md:gap-40 md:mr-34">
              {/* Quick Links */}
              <div className="w-1/2 md:w-auto flex flex-col gap-3 md:gap-5">
                <h3 className="text-white font-semibold text-base md:text-xl mb-1 whitespace-nowrap">
                  Quick Links
                </h3>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[var(--color-body-copy-2)] text-sm md:text-base hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div className="w-1/2 md:w-auto flex flex-col gap-3 md:gap-5">
                <h3 className="text-white font-semibold text-base md:text-xl mb-1">
                  Company
                </h3>
                {companyLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-[var(--color-body-copy-2)] text-sm md:text-base hover:text-white transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-[#d2d2d2] mt-12 scale-110" />

          {/* ── Bottom Copyright Bar ── */}
          <div className="w-full text-center py-8">
            <p className="text-[var(--color-body-copy)] font-[600] text-xs md:text-sm">
              © {new Date().getFullYear()} DigiinfoCard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[var(--color-body-copy-4)] text-white px-6 py-3 rounded-full shadow-2xl z-50 text-sm font-semibold tracking-wide flex items-center gap-2 border border-white/10 transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-[var(--color-yellow)] animate-pulse"></span>
          Coming Soon!!!
        </div>
      )}
    </div>
  );
};

export default Footer;
