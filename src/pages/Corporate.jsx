import React from "react";
import Hero from "../components/corporate/Hero";
import Section_2 from "../components/Section_2";
import Corporate_Features from "../components/corporate/Corporate_Features";
import Corporate_Banner from "../components/corporate/Corporate_Banner";
import Corporate_For_Section from "../components/corporate/Corporate_For_Section";
import Section_7 from "../components/Section_7";
import Section_8 from "../components/Section_8";
import Section_9 from "../components/Section_9";
import Section_10 from "../components/Section_10";

const Corporate = () => {
  return (
    <>
      <Hero />
      <Section_2 />
      <Corporate_Features />
      <Corporate_Banner />
      <Corporate_For_Section />
      <Section_7 />
      <div className="w-full block md:hidden">
        <Section_8 />
      </div>
      <div className="w-full md:mt-24">
        <Section_9 />
      </div>
      <Section_10 />
    </>
  );
};

export default Corporate;
