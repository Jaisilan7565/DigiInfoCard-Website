import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-white rounded-[44px] font-plus-jakarta flex flex-col items-center py-12 md:py-24">
      {/* Hero Header Area */}
      <div className="w-full max-w-[1440px] px-6 md:px-14 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs md:text-sm tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          About Us
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-[56px] md:leading-[1.15] font-bold text-[var(--color-body-copy-4)] tracking-tight mb-6 max-w-5xl px-4 md:px-3">
          Redefining{" "}
          <span className="text-[var(--color-primary)]">
            Professional Connections
          </span>{" "}
          In The Digital Age
        </h1>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-sm md:text-lg font-[600] leading-relaxed max-w-3xl md:mb-12 mb-6 px-6 md:px-0">
          DigInfo is transforming the way professionals and businesses build
          relationships, share their expertise, and create lasting
          opportunities.
        </p>

        {/* Illustration Image */}
        <div className="w-full max-w-[850px] flex justify-center mb-8 md:mb-0">
          <img
            src="/images/about-us.png"
            alt="About Us Digiinfo Illustration"
            className="w-full h-auto object-contain select-none pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Stats Grid */}
        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-0 py-10 md:py-16 mb-8 md:mb-28">
          {/* Stat 1 */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left md:px-6 px-4 py-6 md:py-2 border-r-2 border-b-2 md:border-b-0 border-[var(--color-body-copy-3)]/60">
            <span className="text-2xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              10,000+
            </span>
            <span className="text-base md:text-2xl font-semibold text-[var(--color-body-text-3)]">
              Cards Created
            </span>
          </div>
          {/* Stat 2 */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left md:px-6 px-4 py-6 md:py-2 md:border-r-2 border-b-2 md:border-b-0 border-[var(--color-body-copy-3)]/60">
            <span className="text-2xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              500+
            </span>
            <span className="text-base md:text-2xl font-semibold text-[var(--color-body-text-3)]">
              Happy Users
            </span>
          </div>
          {/* Stat 3 */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left md:px-6 px-4 py-6 md:py-2 md:border-r-2 border-r-2 md:border-b-0 border-[var(--color-body-copy-3)]/60">
            <span className="text-2xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              50,000+
            </span>
            <span className="text-base md:text-2xl font-semibold text-[var(--color-body-text-3)]">
              Scans Monthly
            </span>
          </div>
          {/* Stat 4 */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left md:px-6 px-4 py-6 md:py-2 md:border-b-0 border-[var(--color-body-copy-3)]/60">
            <span className="text-2xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
              4.9/5
            </span>
            <span className="text-base md:text-2xl font-semibold text-[var(--color-body-text-3)]">
              Rating
            </span>
          </div>
        </div>

        {/* Content sections (Story, Mission, Vision) */}
        <div className="w-full max-w-5xl flex flex-col gap-16 md:gap-24 text-left mb-12">
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-body-copy-4)]">
                Our Story
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-6 text-sm md:text-lg font-[600] leading-relaxed text-[var(--color-body-text-3)]">
              <p>
                At DigInfo, we believe networking should be simple, meaningful,
                and accessible anywhere. Traditional business cards often get
                lost, outdated, or forgotten. That's why we created a digital
                identity platform that helps professionals showcase who they
                are, what they do, and how people can connect with them—all in a
                single tap.
              </p>
              <p>
                More than just a digital business card, DigInfo combines
                networking, contact management, team collaboration, analytics,
                and business showcasing tools to help individuals and
                organizations build stronger relationships and unlock new
                opportunities.
              </p>
              <p>
                Whether you're an entrepreneur, consultant, healthcare
                professional, sales executive, creator, or enterprise team,
                DigInfo empowers you to make every connection count.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-body-copy-4)]">
                Our Mission
              </h2>
            </div>
            <div className="md:col-span-8 text-sm md:text-lg font-[600] leading-relaxed text-[var(--color-body-text-3)]">
              <p>
                To simplify professional networking by providing innovative
                digital tools that help people connect, collaborate, and grow
                without limitations.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-4xl font-bold text-[var(--color-body-copy-4)]">
                Our Vision
              </h2>
            </div>
            <div className="md:col-span-8 text-sm md:text-lg font-[600] leading-relaxed text-[var(--color-body-text-3)]">
              <p>
                To become the leading digital identity platform that transforms
                how professionals and organizations build relationships, share
                information, and create opportunities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
