import React from "react";
import Hero from "../components/individual/Hero";
import Section_2 from "../components/Section_2";
import Individual_Features from "../components/individual/Individual_Features";
import Individual_For_Section from "../components/individual/Individual_For_Section";
import Individual_Banner from "../components/individual/Individual_Banner";
import Section_7 from "../components/Section_7";
import Section_8 from "../components/Section_8";
import Section_9 from "../components/Section_9";
import Section_10 from "../components/Section_10";

const Individual = () => {
  return (
    <>
      <Hero />
      <Section_2 />
      <Individual_Features />
      <Individual_Banner />
      <Individual_For_Section />
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

export default Individual;
