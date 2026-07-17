import React from "react";

const Section_6 = () => {
  const cards = [
    {
      image: "/images/section-6-1.png",
      title: "Individuals & Professionals",
      description:
        "Build your digital identity & make every connection count. Create stunning digital business cards, share your profile instantly, exchange contacts effortlessly, & grow your professional network wherever you go.",
      link: "#individuals",
    },
    {
      image: "/images/section-6-2.png",
      title: "Corporate Teams & Organizers",
      description:
        "Empower your entire organization with branded digital identities, team collaboration tools, task management, and business showcases designed to streamline operations and accelerate growth.",
      link: "#teams",
    },
  ];

  return (
    <section className="w-full md:w-[94%] bg-white py-16 md:py-24 px-6 md:px-12 mx-auto font-plus-jakarta">
      <div className="flex flex-col md:flex-row gap-12 md:gap-34 justify-center items-center">
        {cards.map((card, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-start text-left">
            {/* Card Image */}
            <div className="w-full overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Card Content */}
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-body-copy-4)] mb-4 tracking-tight">
              {card.title}
            </h3>

            <p className="text-[var(--color-body-copy-3)] font-[500] text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-xl">
              {card.description}
            </p>

            {/* CTA Button */}
            <a
              href={card.link}
              className="inline-flex items-center gap-2.5 px-6 md:px-8 py-3.5 bg-[var(--color-primary)] text-white font-semibold text-sm md:text-base rounded-xl hover:bg-[var(--color-primary)]/90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[var(--color-primary)]/10 mt-auto"
            >
              Learn More
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_6;
