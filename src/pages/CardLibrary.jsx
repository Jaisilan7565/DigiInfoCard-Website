import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Dynamically discover all images in the public card library folder
const images = import.meta.glob(
  "/public/images/library-cards/*.{png,jpg,jpeg,svg,webp}",
  { eager: true },
);
const allCardPaths = Object.keys(images)
  .map((path) => path.replace("/public", ""))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || "0", 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || "0", 10);
    return numA - numB;
  });

const CardLibrary = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const gridSectionRef = useRef(null);
  const isInitialMount = useRef(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsPerPage = isMobile ? 10 : 9;
  const totalCards = allCardPaths.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Clamp current page if resizing changes total pages
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [totalPages, currentPage]);

  // Scroll to top of the grid when page changes (after DOM update)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (gridSectionRef.current) {
        const rect = gridSectionRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: rect.top + scrollTop - 60,
          behavior: "smooth",
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // Slice cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCardPaths.slice(indexOfFirstCard, indexOfLastCard);

  // Scroll to top of the grid when page changes
  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const handleShare = (cardPath) => {
    const shareUrl = `${window.location.origin}${cardPath}`;
    if (navigator.share) {
      navigator
        .share({
          title: "DigiInfoCard Design Template",
          text: `Take a look at this digital business card design!`,
          url: shareUrl,
        })
        .catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setToastMessage("Card link copied to clipboard!");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      });
    }
  };

  return (
    <div className="w-full bg-white py-12 md:py-20 flex flex-col items-center font-plus-jakarta">
      {/* Top Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
        Our Designed Cards Library
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-body-copy-4)] leading-[1.18] tracking-tight mb-6 max-w-4xl text-center px-4">
        This Is What{" "}
        <span className="text-[var(--color-primary)]">Your Digital Card</span>{" "}
        Could Look Like.
      </h1>

      {/* Description */}
      <p className="text-[var(--color-body-copy-3)] text-sm sm:text-base md:text-[17px] font-semibold max-w-3xl leading-relaxed mb-12 text-center px-4">
        Design personalized digital business cards that reflect your
        professional identity. Share contact details, social profiles,
        portfolios, appointment links, products, and services with a single tap.
      </p>

      {/* Gray Grid Section */}
      <div
        ref={gridSectionRef}
        id="card-grid-section"
        className="w-full bg-[#F4F4F6] py-12 md:py-16 flex justify-center border-y border-neutral-100 min-h-[480px] sm:min-h-[580px] lg:min-h-[700px]"
      >
        <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-20">
            {currentCards.map((cardPath) => (
              <div
                key={cardPath}
                onClick={() => setSelectedImage(cardPath)}
                className="relative group overflow-hidden rounded-lg md:rounded-[32px] bg-white border border-[#E2E8F0]/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 aspect-[9/16] max-w-sm mx-auto w-full cursor-pointer"
              >
                <img
                  src={cardPath}
                  alt={`Digital Card Mockup ${cardPath.split("/").pop()}`}
                  className="w-full h-auto object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="w-full flex items-center justify-center gap-6 mt-12 md:mt-16">
        {/* Previous Button */}
        <button
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentPage === 1
              ? "bg-[#E5E7EB] text-neutral-400 cursor-not-allowed"
              : "bg-[#E5E7EB] text-neutral-700 hover:bg-neutral-200 active:scale-95"
          }`}
          aria-label="Previous Page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-5">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`text-base font-bold transition-all px-2.5 py-1 rounded-lg ${
                  currentPage === pageNum
                    ? "text-[var(--color-primary)] scale-110"
                    : "text-[#7A7A7A] hover:text-[var(--color-primary)]"
                }`}
              >
                {pageNum}
              </button>
            ),
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() =>
            currentPage < totalPages && handlePageChange(currentPage + 1)
          }
          disabled={currentPage === totalPages}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentPage === totalPages
              ? "bg-[#E5E7EB] text-neutral-400 cursor-not-allowed"
              : "bg-[var(--color-primary)] text-white hover:opacity-90 active:scale-95 shadow-md shadow-[var(--color-primary)]/20"
          }`}
          aria-label="Next Page"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Copy Clipboard Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[var(--color-body-copy-4)] text-white px-6 py-3.5 rounded-full shadow-2xl z-50 text-sm font-semibold tracking-wide flex items-center gap-2 border border-white/10 transition-all duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {toastMessage}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-no-drop"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Digital Card Full Preview"
            className="max-w-[90vw] max-h-[80vh] sm:max-h-[85vh] object-contain rounded-2xl md:rounded-[32px] shadow-2xl select-none"
          />
        </div>
      )}
    </div>
  );
};

export default CardLibrary;
