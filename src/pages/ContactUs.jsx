import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted! We will get back to you within 24 hours.");
  };

  return (
    <section className="w-full rounded-t-[44px] bg-white font-plus-jakarta flex flex-col items-center py-12 md:py-24">
      <div className="w-full max-w-[1440px] px-6 md:px-14 flex flex-col items-center">
        {/* Header Badge */}
        <div className="flex items-center gap-2 text-[var(--color-primary)] font-semibold text-xs md:text-sm tracking-wide mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
          Contact Us
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-[56px] md:leading-[1.15] font-bold text-[var(--color-body-copy-4)] text-center tracking-tight mb-6 max-w-4xl px-4 md:px-0">
          We'd <span className="text-[var(--color-primary)]">Love To Hear</span>{" "}
          <br />
          From You.
        </h1>

        {/* Description */}
        <p className="text-[var(--color-body-copy-3)] text-center text-sm md:text-lg font-[600] leading-relaxed max-w-3xl mb-8">
          Have a question, need a demo, or want a custom plan?{" "}
          <br className="hidden md:block" /> Reach out and we'll get back within
          24 hours.
        </p>

        {/* Form and Info Cards Wrapper */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 items-stretch mb-8">
          {/* Contact Form Card */}
          <div className="flex-1 bg-white border border-neutral-100 rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-10 flex flex-col">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 w-full"
            >
              {/* Name Field (Full Width) */}
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  required
                  className="w-full h-14 px-5 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-medium text-sm md:text-base"
                />
              </div>

              {/* Phone & Email (Mobile Stacked, Desktop Side-by-side) */}
              <div className="flex flex-col md:flex-row gap-5">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone No."
                  className="w-full md:flex-1 h-14 px-5 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-medium text-sm md:text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Mail Id"
                  required
                  className="w-full md:flex-1 h-14 px-5 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-medium text-sm md:text-base"
                />
              </div>

              {/* Subject Field (Full Width) */}
              <div className="w-full">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full h-14 px-5 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-medium text-sm md:text-base"
                />
              </div>

              {/* Message Textarea */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Your Message..."
                  required
                  rows={6}
                  className="w-full px-5 py-4 border border-neutral-200 rounded-xl text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all font-medium text-sm md:text-base resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-14 bg-[var(--color-primary)] hover:opacity-95 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 active:scale-[0.99] transition-all cursor-pointer text-sm md:text-base"
              >
                Submit Message
                <svg
                  className="w-4 h-3.5"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.2665 13.5201C0.9645 13.6408 0.677917 13.6151 0.40675 13.4431C0.135583 13.2711 0 13.0206 0 12.6916V8.47038L6.923 6.79738L0 5.12438V0.903126C0 0.574126 0.135583 0.323626 0.40675 0.151626C0.677917 -0.0203743 0.9645 -0.0460398 1.2665 0.0746268L15.223 5.95888C15.5948 6.12538 15.7807 6.40546 15.7807 6.79913C15.7807 7.19279 15.5948 7.47171 15.223 7.63588L1.2665 13.5201Z"
                    fill="white"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Info Cards Column */}
          <div className="w-full md:w-[140px] flex flex-row md:flex-col gap-4 md:gap-5 justify-between md:justify-center">
            {/* Call Us */}
            <a
              href="tel:+1234567890"
              className="flex-1 md:flex-initial aspect-square bg-white border border-neutral-100 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-5 flex flex-col items-center justify-center text-center hover:scale-[1.03] transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.2238 31.1667C25.7689 31.1667 22.2979 30.3634 18.8109 28.7567C15.3242 27.1501 12.1177 24.8838 9.19142 21.9578C6.27703 19.0315 4.01653 15.8278 2.40992 12.3466C0.803306 8.86569 0 5.39779 0 1.94288C0 1.39288 0.183333 0.931486 0.55 0.558708C0.916667 0.186236 1.375 0 1.925 0H7.90442C8.36733 0 8.77571 0.151098 9.12954 0.453292C9.48337 0.755181 9.70842 1.12826 9.80467 1.57254L10.8556 6.96667C10.9283 7.46717 10.9131 7.89724 10.8098 8.25688C10.7062 8.61651 10.5204 8.91855 10.2525 9.163L6.01837 13.2848C6.69976 14.5327 7.47832 15.7132 8.35404 16.8263C9.22946 17.9392 10.1773 19.002 11.1975 20.015C12.2034 21.0212 13.2729 21.9555 14.4059 22.8181C15.5389 23.6807 16.7623 24.4834 18.0762 25.2262L22.1902 21.0765C22.4771 20.7779 22.8245 20.5686 23.2325 20.4485C23.6401 20.3288 24.0637 20.2994 24.5034 20.3605L29.5941 21.3973C30.057 21.5195 30.4349 21.7557 30.7276 22.1059C31.0203 22.456 31.1667 22.8533 31.1667 23.2975V29.2417C31.1667 29.7917 30.9804 30.25 30.608 30.6167C30.2352 30.9833 29.7738 31.1667 29.2238 31.1667Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-bold text-neutral-800">
                Call Us
              </span>
            </a>

            {/* Mail Us */}
            <a
              href="mailto:info@ashaedgesoftwares.com"
              className="flex-1 md:flex-initial aspect-square bg-white border border-neutral-100 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-5 flex flex-col items-center justify-center text-center hover:scale-[1.03] transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 35 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.31421 27.5C2.38807 27.5 1.60417 27.1792 0.9625 26.5375C0.320833 25.8958 0 25.1119 0 24.1858V3.31421C0 2.38807 0.320833 1.60417 0.9625 0.9625C1.60417 0.320833 2.38807 0 3.31421 0H31.5191C32.4453 0 33.2292 0.320833 33.8708 0.9625C34.5125 1.60417 34.8333 2.38807 34.8333 3.31421V24.1858C34.8333 25.1119 34.5125 25.8958 33.8708 26.5375C33.2292 27.1792 32.4453 27.5 31.5191 27.5H3.31421ZM17.8713 14.4004C18.022 14.3545 18.1677 14.2917 18.3086 14.212L31.4206 5.81717C31.6296 5.68792 31.7776 5.52047 31.8647 5.31483C31.9518 5.1092 31.9776 4.8924 31.9422 4.66446C31.9186 4.24126 31.7118 3.92685 31.3216 3.72121C30.9317 3.51557 30.5381 3.53375 30.1409 3.77575L17.4167 11.9167L4.69242 3.77575C4.29519 3.53375 3.90454 3.51435 3.52046 3.71754C3.13607 3.92104 2.92631 4.23072 2.89117 4.64658C2.85572 4.89347 2.88154 5.12264 2.96863 5.33408C3.05571 5.54583 3.20375 5.70686 3.41275 5.81717L16.5247 14.212C16.6656 14.2917 16.8114 14.3545 16.962 14.4004C17.1123 14.4462 17.2639 14.4691 17.4167 14.4691C17.5694 14.4691 17.721 14.4462 17.8713 14.4004Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-bold text-neutral-800">
                Mail Us
              </span>
            </a>

            {/* Location */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial aspect-square bg-white border border-neutral-100 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-5 flex flex-col items-center justify-center text-center hover:scale-[1.03] transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 28 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7664 33.6224C12.4089 33.499 12.0856 33.308 11.7966 33.0495C10.1515 31.5333 8.61193 29.9719 7.17796 28.3653C5.74429 26.759 4.49808 25.1532 3.43933 23.5478C2.38028 21.9424 1.54229 20.3512 0.925375 18.7743C0.308458 17.197 0 15.6738 0 14.2047C0 9.97394 1.36843 6.54882 4.10529 3.92929C6.84246 1.30976 10.0867 0 13.838 0C17.5893 0 20.8335 1.30976 23.5707 3.92929C26.3076 6.54882 27.676 9.97394 27.676 14.2047C27.676 15.6738 27.3675 17.1939 26.7506 18.7651C26.1337 20.3366 25.2988 21.9279 24.2458 23.5391C23.1926 25.1503 21.9491 26.7561 20.5155 28.3566C19.0818 29.9574 17.5422 31.5158 15.8968 33.0316C15.6078 33.2901 15.2818 33.484 14.9188 33.6133C14.5554 33.7425 14.1952 33.8071 13.838 33.8071C13.4808 33.8071 13.1236 33.7456 12.7664 33.6224ZM16.1805 16.1984C16.8283 15.5509 17.1522 14.7701 17.1522 13.8559C17.1522 12.9417 16.8283 12.1607 16.1805 11.5129C15.5331 10.8654 14.7522 10.5417 13.838 10.5417C12.9238 10.5417 12.1429 10.8654 11.4955 11.5129C10.8477 12.1607 10.5238 12.9417 10.5238 13.8559C10.5238 14.7701 10.8477 15.5509 11.4955 16.1984C12.1429 16.8459 12.9238 17.1696 13.838 17.1696C14.7522 17.1696 15.5331 16.8459 16.1805 16.1984Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm md:text-lg font-bold text-neutral-800">
                Location
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
