import React, { useState } from "react";

const Section_9 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "What is DigInfo?",
      answer:
        "DigInfo is a digital identity and networking platform that allows you to create professional digital business cards, showcase your products or services, manage contacts, collaborate with teams, and track engagement through powerful analytics.",
    },
    {
      question: "How does a Digital Business Card work?",
      answer:
        "Your digital card contains all your professional information in one place, including contact details, social links, portfolio, products, and services. You can share it instantly through QR codes, links, or direct sharing.",
    },
    {
      question: "Can I customize my digital card?",
      answer:
        "Yes. You can personalize your card with different templates, colors, fonts, branding elements, images, products, services, and social media links to match your professional identity.",
    },
    {
      question: "Is DigiInfo only for businesses?",
      answer:
        "No! DigiInfo is designed for everyone—individual professionals, freelancers, content creators, job seekers, and organizations of all sizes. Anyone who wants to share their profile professionally can benefit.",
    },
    {
      question: "Can I manage my team using DigiInfo?",
      answer:
        "Yes, with our business plan you can manage your team cards from a centralized dashboard. You can create templates, bulk-assign designs, update contact details, and view team-wide analytics.",
    },
    {
      question: "Is DigInfo only for businesses?",
      answer:
        "No. DigInfo is designed for individual professionals, freelancers, consultants, doctors, entrepreneurs, sales teams, and organizations of all sizes.",
    },
    {
      question: "Can I manage my team using DigInfo?",
      answer:
        "Absolutely. DigInfo includes team management features such as departments, member permissions, task assignments, event scheduling, and organization hierarchy management.",
    },
    {
      question: "What analytics does DigInfo provide?",
      answer:
        "You can track profile views, card visits, QR scans, saved contacts, link clicks, and engagement insights to better understand and grow your professional network.",
    },
    {
      question: "Can I showcase products and services on my card?",
      answer:
        "Yes. You can add products, services, pricing, images, videos, portfolios, and business information to help potential clients learn more about your offerings.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes. DigInfo uses secure cloud-based infrastructure to protect your information and ensure safe access across your devices.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24 mb-20 px-6 flex flex-col items-center font-plus-jakarta z-10 relative">
      {/* Badge */}
      <div className="flex items-center gap-2.5 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
        FAQ
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-body-copy-4)] leading-[1.2] tracking-tight mb-4 text-center">
        You Ask, <span className="text-[var(--color-primary)]">We Answer.</span>
      </h2>

      {/* Description */}
      <p className="text-[var(--color-body-copy-3)] text-sm md:text-base font-semibold max-w-xl text-center leading-relaxed mb-16">
        Everything you need to know about DigiInfo and how it helps
        professionals, businesses, and teams connect, collaborate, and grow.
      </p>

      {/* Accordion List */}
      <div className="w-full max-w-5xl mx-auto flex flex-col border-t border-[#E5E5E5]">
        {faqData.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="border-b border-[#E5E5E5] w-full">
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
              >
                <span className="font-bold text-sm md:text-lg text-[var(--color-body-copy-4)] group-hover:text-[var(--color-primary)] transition-colors pr-6">
                  {item.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[var(--color-body-copy-4)] transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "400px" : "0",
                  opacity: isOpen ? 1 : 0,
                  marginBottom: isOpen ? "20px" : "0",
                }}
              >
                <p className="text-xs md:text-base leading-relaxed text-[var(--color-body-text-2)] font-semibold w-[95%]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Footer */}
      <div className="mt-20 md:mt-24 text-center max-w-md mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-body-copy-4)] tracking-tight mb-4">
          Still Have{" "}
          <span className="text-[var(--color-primary)]">Questions?</span>
        </h3>
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-base font-semibold leading-relaxed mb-8">
          Our team is always happy to help. Drop us a message anytime.
        </p>
        <a
          href="mailto:info@ashaedgesoftwares.com"
          className="inline-flex items-center justify-center px-16 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white font-bold text-sm md:text-base rounded-xl transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[var(--color-primary)]/20"
        >
          Mail Us
        </a>
      </div>
    </section>
  );
};

export default Section_9;
