import React from "react";

const features = [
  {
    image: "/videos/steps/Motion-1.webm",
    header: "Create Your Digital Identity.",
    description:
      "Create a professional digital profile with your personal and business details, then share your contact information and social links instantly. Showcase your products, services, and portfolio to make a lasting impression on every connection. Keep everything updated anytime, ensuring your digital identity always remains accurate, professional, and ready to open new opportunities.",
  },
  {
    image: "/videos/steps/Motion-2.webm",
    header: "Scan & Connect Instantly.",
    description:
      "Exchange contact details instantly by scanning QR codes or sharing your digital card with a tap. Save new connections without manual entry and grow your professional network at meetings, events, and conferences. Make every interaction faster, smarter, and more meaningful with seamless digital networking.",
  },
  {
    image: "/videos/steps/Motion-3.webm",
    header: "Save Contacts & Work Details.",
    description:
      "Save all your professional contacts in one secure place and keep them organized for easy access. Capture meeting notes, key discussion points, and important insights alongside every contact. Set follow-up reminders, manage tasks, and maintain a complete interaction history so every relationship stays organized and every opportunity stays within reach.",
  },
  {
    image: "/videos/steps/Motion-4.webm",
    header: "Unlock Opportunities.",
    description:
      "Turn every connection into a valuable opportunity by building stronger professional relationships. Stay organized with your network, identify potential clients and collaborators, and nurture meaningful connections through timely follow-ups. Expand your reach, generate new business opportunities, and grow your career with smarter networking.",
  },
];

const Individual_Features = () => {
  return (
    <section
      id="features"
      className="w-full max-w-[1440px] px-6 md:px-14 py-12 md:py-24 bg-white flex flex-col items-center gap-16 md:gap-24 font-plus-jakarta scroll-mt-20 md:scroll-mt-24"
    >
      {/* Header Block */}
      <div className="w-full flex flex-col items-center text-center max-w-4xl">
        {/* Badge */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span>
          Individual Plan Features
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl md:leading-[1.25] font-bold text-[var(--color-body-copy-4)] tracking-tight mb-6">
          Everything You Need To{" "}
          <span className="text-[var(--color-primary)]">
            Build, Share & Grow
          </span>{" "}
          Your Professional Identity.
        </h2>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-lg font-[600] leading-relaxed max-w-2xl">
          Create your digital identity with smart business cards. Connect
          faster, share instantly, and make every interaction count.
        </p>
      </div>

      {/* Feature Rows */}
      <div className="w-full flex flex-col items-center gap-12 md:gap-20 mb-20">
        {features.map((feature, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={feature.header}
              className="w-full bg-white md:bg-transparent border border-gray-100 md:border-none rounded-[22px] p-6 md:p-0 shadow-xs md:shadow-none flex flex-col md:grid md:grid-cols-5 items-center gap-6 md:gap-16"
            >
              {/* Video container */}
              <div
                className={`w-full rounded-2xl md:rounded-[32px] md:p-16 flex justify-center items-center overflow-hidden select-none relative md:col-span-2 ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <video
                  src={feature.image}
                  className="w-full object-contain pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Text content */}
              <div
                className={`w-full md:max-w-[680px] mx-auto md:mx-0 flex flex-col gap-3 md:gap-4 text-left md:col-span-3 ${
                  isEven
                    ? "md:order-1 md:text-right md:items-end md:ml-auto md:mr-0"
                    : "md:order-2 md:text-left md:items-start md:mr-auto md:ml-0"
                }`}
              >
                <h3 className="text-xl md:text-3xl font-semibold text-[var(--color-body-copy-4)] tracking-tight mb-2">
                  {feature.header}
                </h3>
                <p className="text-sm md:text-base text-[var(--color-body-copy-3)] font-[600] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Individual_Features;
