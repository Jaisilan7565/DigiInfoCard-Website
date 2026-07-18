import React from "react";

const Section_7 = () => {
  const plans = [
    {
      price: <span className="text-3xl">Free</span>,
      name: "Base",
      description:
        "Perfect to get started with your digital identity, no cost involved.",
      features: ["1 Dynamic Card", "Personal QR Code", "Basic Analytics"],
      ctaText: "Start Free Trial",
      ctaLink: "#free-trial",
      isPopular: false,
      theme: "light",
    },
    {
      price: (
        <div className="">
          <span className="text-3xl">₹299/</span>
          <span className="text-xl">month</span>
        </div>
      ),
      name: "Base",
      description:
        "Perfect to get started with your digital identity, no cost involved.",
      features: [
        "1 Dynamic Card",
        "Personal QR Code",
        "Advanced Analytics",
        "Custom Branding",
      ],
      ctaText: "Upgrade Plan",
      ctaLink: "#upgrade",
      isPopular: true,
      theme: "blue",
    },
    {
      price: (
        <div className="">
          <span className="text-3xl">₹799/</span>
          <span className="text-xl">month</span>
        </div>
      ),
      name: "Business",
      description:
        "Perfect to get started with your digital identity, no cost involved.",
      features: [
        "Upto 20 Dynamic Cards",
        "Personal QR Code",
        "Advanced Analytics",
        "Custom Branding",
        "Priority Support",
      ],
      ctaText: "Contact Sales",
      ctaLink: "#contact",
      isPopular: false,
      theme: "light",
    },
  ];

  return (
    <section id="pricing" className="w-full bg-[var(--color-light-gray)] py-20 md:px-4 flex flex-col items-center text-center font-plus-jakarta md:mt-16 mt-8 scroll-mt-20 md:scroll-mt-24">
      {/* Badge */}
      <div className="flex items-center gap-2.5 text-[var(--color-primary)] font-semibold text-sm md:text-base tracking-wide mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
        Pricing
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-5xl px-6 font-bold text-[var(--color-body-copy-4)] leading-[1.2] tracking-tight mb-4">
        Choose The Plan That Fits <br className="hidden md:block" />
        <span className="text-[var(--color-primary)]"> Your Growth.</span>
      </h2>

      {/* Description */}
      <p className="text-[var(--color-body-copy-3)] text-sm md:text-xl font-semibold max-w-xl leading-relaxed mb-16 px-4">
        Whether you're an individual professional or a growing organization,
        DigInfo offers flexible plans designed to help you connect, collaborate
        & grow.
      </p>

      {/* Cards Grid */}
      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-0 justify-center items-stretch max-w-6xl">
        {plans.map((plan, idx) => {
          const isBlue = plan.theme === "blue";

          return (
            <div
              key={idx}
              className={`flex-1 rounded-[32px] overflow-hidden mx-4 flex flex-col text-left transition-all duration-300 hover:scale-[1.02] min-h-[480px] ${
                isBlue
                  ? "bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-sections-light-blue)] text-white shadow-xl shadow-[var(--color-primary)]/20"
                  : "bg-white text-[var(--color-body-copy-4)] border border-neutral-100 shadow-sm"
              }`}
            >
              {/* Top portion */}
              <div className="p-8 pb-3 flex flex-col relative">
                {plan.isPopular && (
                  <span className="absolute top-5 right-8 px-5 py-1 bg-white text-[var(--color-primary)] font-extrabold text-xs tracking-wider rounded-md uppercase shadow-sm">
                    Popular
                  </span>
                )}

                {/* Price */}
                <div
                  className={`text-2xl md:text-4xl font-semibold mb-4 ${isBlue ? "text-white" : "text-[var(--color-body-copy-4)]"}`}
                >
                  {plan.price}
                </div>

                {/* Plan Name */}
                <h3
                  className={`text-3xl font-medium mb-2 ${isBlue ? "text-white" : "text-[var(--color-body-copy-4)]"}`}
                >
                  {plan.name}
                </h3>

                {/* Plan Description */}
                <p
                  className={`text-sm md:text-sm w-[95%] leading-relaxed ${isBlue ? "text-white/80" : "text-[var(--color-body-copy-3)] font-[500]"}`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`h-[1px] w-full ${isBlue ? "bg-white/70" : "bg-[var(--color-body-copy-3)]/30"}`}
              />

              {/* Bottom portion */}
              <div
                className={`p-8 pt-6 flex-1 flex flex-col justify-between ${isBlue ? "bg-white/5" : ""}`}
              >
                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      {isBlue ? (
                        <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[var(--color-primary)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-[var(--color-yellow)] flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-[var(--color-body-copy-4)]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="4.5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                      )}
                      <span
                        className={`text-sm font-[600] ${isBlue ? "text-white" : "text-[var(--color-body-copy-3)]"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  className={`w-full py-4 text-center font-bold text-sm md:text-base rounded-xl transition-all duration-300 active:scale-[0.98] ${
                    isBlue
                      ? "bg-white text-[var(--color-primary)] hover:bg-neutral-50 shadow-md shadow-black/5"
                      : "bg-[var(--color-yellow)] text-[var(--color-body-copy-4)] hover:bg-[var(--color-yellow)]/90 shadow-md shadow-[var(--color-yellow)]/10"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section_7;
