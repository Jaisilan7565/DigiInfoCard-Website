import React from "react";
import CorporatesHero from "../components/CorporatesHero";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import Section_4 from "../components/Section_4";
import Section_5 from "../components/Section_5";
import Section_6 from "../components/Section_6";
import Section_7 from "../components/Section_7";
import Section_8 from "../components/Section_8";
import Section_9 from "../components/Section_9";
import Section_10 from "../components/Section_10";

const CorporateHome = () => {
  return (
    <>
      <CorporatesHero />
      <Section_2 />
      <Section_3 />
      <div className="w-full flex justify-center mt-24">
        <Section_1 />
      </div>
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Section_10 />
    </>
  );
};

export default CorporateHome;
