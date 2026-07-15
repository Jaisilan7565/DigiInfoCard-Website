import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e8e8e8] font-plus-jakarta">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#0056ff] flex items-center justify-center text-white text-[10px] font-bold font-outfit">
              Di
            </span>
            <span className="font-bold text-sm text-[#252525] font-outfit">Digiinfo Card</span>
          </div>
          <p className="text-xs text-[#a4a4a4]">
            © {new Date().getFullYear()} Ashaedge Softwares Pvt Ltd. All rights reserved.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex items-center gap-6 text-xs text-[#6d6d6d] font-semibold">
          <a href="#privacy" className="hover:text-[#0056ff] transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#0056ff] transition-colors">Terms of Service</a>
          <a href="#support" className="hover:text-[#0056ff] transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
