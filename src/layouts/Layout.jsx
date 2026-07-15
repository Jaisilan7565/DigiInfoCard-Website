import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-[var(--color-primary)] min-h-screen">
        <main className="w-full bg-white rounded-t-[44px] md:rounded-t-[50px] flex flex-col items-center">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
